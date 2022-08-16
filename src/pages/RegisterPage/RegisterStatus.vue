<template>
  <div class="text-center q-mt-lg">
    <q-spinner v-if="status === StoreStatus.LOADING" size="3em" />

    <q-banner
      v-if="status === StoreStatus.ERROR"
      class="text-white bg-red rounded-borders"
    >
      {{ error }}
    </q-banner>

    <q-banner
      v-if="status === StoreStatus.SUCCESS"
      class="text-white bg-green rounded-borders"
    >
      <p>
        {{ $t('successfulRegistration') }}
      </p>
      <q-btn to="/login" :label="$t('login')" />
    </q-banner>
  </div>
</template>

<script setup lang="ts">
import { StoreStatus } from '@/stores/types';

defineProps<{
  error: string | null;
  status: StoreStatus;
}>();
</script>
