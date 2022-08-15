<template>
  <q-page class="page flex flex-center column">
    <h2 class="cursive-font primary q-ma-none" color="secondary">Sortilèges</h2>
    <div class="bg-white q-pa-lg q-ma-lg" style="width: 90%; max-width: 400px">
      <h1 class="text-h3 text-center q-mt-none capitalize-first">
        {{ $t('login') }}
      </h1>
      <q-form class="q-gutter-sm" @submit="onSubmit">
        <q-input
          :label="$t('Email')"
          name="email"
          v-model="email"
          :rules="[(val) => !!val || $t('form.errors.requiredField')]"
        />
        <q-input
          :label="$t('Password')"
          name="password"
          type="password"
          v-model="password"
          :rules="[(val) => !!val || $t('form.errors.requiredField')]"
        />
        <div class="flex justify-between">
          <router-link class="link-no-style" to="/register">
            <q-btn color="secondary">{{ $t('register') }}</q-btn>
          </router-link>
          <q-btn :label="$t('login')" type="submit" color="primary" />
        </div>
        <div class="text-center">
          <q-btn flat>{{ $t('forgotPassword') }}</q-btn>
        </div>
      </q-form>
    </div>
    <router-link class="white-link" to="/">
      <p>{{ $t('backHome') }}</p>
    </router-link>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref(null);
const password = ref(null);

const onSubmit = () => {
  alert('submitting form');
};
</script>

<style scoped lang="scss">
.page {
  background-color: $secondary;
}
</style>
