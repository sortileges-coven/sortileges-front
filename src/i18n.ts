import { createI18n } from 'vue-i18n';

import messages from '@/locales/index';

export const i18nInstance = createI18n({
  locale: 'fr-FR',
  globalInjection: true,
  messages,
});

export const i18n = i18nInstance.global;
