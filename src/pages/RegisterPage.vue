<template>
  <q-page class="page flex flex-center column">
    <h2 class="cursive-font primary q-ma-none" color="secondary">Sortilèges</h2>
    <div class="bg-white q-pa-lg q-ma-lg" style="width: 90%; max-width: 400px">
      <h1 class="text-h3 text-center q-mt-none capitalize-first">
        {{ $t('register') }}
      </h1>
      <q-form class="q-gutter-sm" @submit="onSubmit">
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
          :label="$t('Email')"
          for="email-input"
          name="email"
          v-model="email"
          :rules="[
            (val) => !!val || $t('form.errors.requiredField'),
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
import { ref } from 'vue';

const email = ref(null);
const password = ref(null);
const passwordConfirmation = ref(null);
const pseudo = ref(null);

const onSubmit = () => {
  alert('submitting form');
};
</script>

<style scoped lang="scss">
.page {
  background-color: $secondary;
}
</style>
