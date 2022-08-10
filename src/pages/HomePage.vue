<template>
  <q-page>
    <div class="bg-red h-screen h-screen">
      <div>
        <h1 class="cursive-font">
          {{ $t('welcome.message') }}
        </h1>
        <p class="my-0 secondary-font">
          {{ $t('welcome.headline') }}
        </p>
        <hr />
        <p>{{ $t('welcome.joinCommunity') }}</p>
        <div>
          <q-btn>{{ $t('login') }}</q-btn>
          <q-btn>{{ $t('register') }}</q-btn>
          <q-btn>{{ $t('welcome.knowMore') }}</q-btn>
        </div>
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
}
.h-screen {
  height: 100vh;
}
.w-screen {
  width: 100vw;
}
</style>
