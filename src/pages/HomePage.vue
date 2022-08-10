<template>
  <q-page>
    <div class="welcome-bg h-screen h-screen flex column flex-center">
      <h1 class="cursive-font q-ma-none">
        {{ $t('welcome.message') }}
      </h1>
      <p class="secondary-font">
        {{ $t('welcome.headline') }}
      </p>
      <hr />
      <p>{{ $t('welcome.joinCommunity') }}</p>
      <div class="q-pa-md q-gutter-sm">
        <q-btn>{{ $t('login') }}</q-btn>
        <q-btn>{{ $t('register') }}</q-btn>
        <q-btn>{{ $t('welcome.knowMore') }}</q-btn>
      </div>
    </div>
    <div class="bg-green h-screen h-screen">Section 2</div>
    <div class="bg-blue h-screen h-screen">Section 3</div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.welcome-bg {
  background-image: url('../assets/images/witch-halloween.jpg');
  background-position: center;
  background-size: cover;
  color: #fff;
}
.h-screen {
  height: 100vh;
}
.w-screen {
  width: 100vw;
}
</style>
