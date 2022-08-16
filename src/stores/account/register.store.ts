import { defineStore } from 'pinia';
import { StoreStatus } from '../types';
import axios, { AxiosError } from 'axios';
import { apiRequest } from './../../services/api';
import { i18n } from '@/i18n';

interface IRegisterState {
  error: string | null;
  status: StoreStatus;
}

const defaultState: IRegisterState = {
  error: null,
  status: StoreStatus.IDLE,
};

export const useRegisterStore = defineStore('register', {
  state: (): IRegisterState => ({ ...defaultState }),
  getters: {},
  actions: {
    async register(email: string, password: string, pseudo: string) {
      this.status = StoreStatus.LOADING;
      this.error = null;
      try {
        await apiRequest('POST', 'register', {
          email,
          password,
          pseudo,
        });
        this.status = StoreStatus.SUCCESS;
      } catch (err) {
        this.status = StoreStatus.ERROR;
        const error = err as Error | AxiosError;
        if (axios.isAxiosError(error) && error.response) {
          const { status } = error.response;
          if (status >= 500) {
            this.error = i18n.t('errors.server');
          } else if (error.response.status === 409) {
            this.error = i18n.t('errors.emailConflict');
          } else {
            this.error = error.response.data.message;
          }
        } else {
          this.error = i18n.t('errors.unexpected');
        }
      }
    },
    reset() {
      Object.assign(this, defaultState);
    },
  },
});
