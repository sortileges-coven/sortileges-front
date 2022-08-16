<template>
  <q-page class="page flex flex-center column">
    <h2 class="cursive-font primary q-ma-none" color="secondary">Sortilèges</h2>
    <div class="bg-white q-pa-lg q-ma-lg" style="width: 90%; max-width: 500px">
      <h1 class="text-h3 text-center q-mt-none capitalize-first">
        {{ $t('register') }}
      </h1>
      <q-form
        v-if="status !== StoreStatus.SUCCESS"
        class="q-gutter-sm"
        @submit="onSubmit"
      >
        <q-input
          :label="$t('Pseudo')"
          for="pseudo-input"
          name="pseudo"
          v-model="pseudo"
          :rules="[
            (val) => !!val || $t('form.errors.requiredField'),
            (val) =>
              val.length >= PSEUDO_MIN_LENGTH ||
              $t('form.errors.pseudoLength', { length: PSEUDO_MIN_LENGTH }),
          ]"
        />
        <q-input
          ref="emailInputRef"
          :label="$t('Email')"
          for="email-input"
          name="email"
          v-model="email"
          :rules="[
            (val) => !!val || $t('form.errors.requiredField'),
            (val) => validateEmail(val, error, submittedEmail, $t),
            (val) => !!val.match(EMAIL_REGEX) || $t('form.errors.email'),
          ]"
        />
        <q-input
          :label="$t('Password')"
          for="password-input"
          name="password"
          type="password"
          v-model="password"
          :rules="[
            (val) => !!val || $t('form.errors.requiredField'),
            (val) =>
              val.length >= PASSWORD_MIN_LENGTH ||
              $t('form.errors.passwordLength', { length: PASSWORD_MIN_LENGTH }),
          ]"
        />
        <q-input
          :label="$t('Password confirmation')"
          for="password-confirmation-input"
          name="passwordConfirmation"
          type="password"
          v-model="passwordConfirmation"
          :rules="[
            (val) => !!val || $t('form.errors.requiredField'),
            (val) => val === password || $t('form.errors.passwordMustMatch'),
          ]"
        />
        <div class="flex justify-between">
          <q-btn to="/login" color="secondary" :label="$t('login')" />
          <q-btn
            :outline="false"
            :label="$t('register')"
            type="submit"
            color="primary"
          />
        </div>
      </q-form>

      <register-status :status="status" :error="error" />
    </div>

    <q-btn :label="$t('backHome')" color="white" flat to="/" />
  </q-page>
</template>

<script setup lang="ts">
import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  PSEUDO_MIN_LENGTH,
} from 'src/config/const';
import { onBeforeUnmount, ref, watch } from 'vue';
import { useRegisterStore } from '@/stores/account/register.store';
import { StoreStatus } from '@/stores/types';
import { storeToRefs } from 'pinia';
import RegisterStatus from './RegisterStatus.vue';

// Custom method to validate against email conflict changes
const validateEmail = (
  value: string,
  error: string | null,
  submittedEmail: string | null,
  $t: (arg0: string) => string
) => {
  if (error === $t('errors.emailConflict')) {
    if (submittedEmail !== value) {
      return true;
    } else {
      return error;
    }
  }
  return true;
};

const registerStore = useRegisterStore();
const { register } = registerStore;
const { error, status } = storeToRefs(registerStore);

const emailInputRef = ref();
const submittedEmail = ref(null);
const email = ref(null);
const password = ref(null);
const passwordConfirmation = ref(null);
const pseudo = ref(null);

const onSubmit = () => {
  if (email.value && password.value && pseudo.value) {
    submittedEmail.value = email.value;
    register(email.value, password.value, pseudo.value);
  }
};

watch(status, () => {
  if (status.value === StoreStatus.ERROR) {
    emailInputRef.value.validate();
  }
});

onBeforeUnmount(() => {
  registerStore.reset();
});
</script>

<style scoped lang="scss">
.page {
  background-color: $secondary;
}
</style>
