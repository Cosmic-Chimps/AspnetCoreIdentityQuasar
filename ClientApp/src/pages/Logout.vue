<template>
  <q-page class="row items-center justify-evenly">
    <q-linear-progress indeterminate />
  </q-page>
</template>

<script lang="ts">
import { mainOidc } from '../boot/oidcService';
import { defineComponent, ref } from '@vue/composition-api';
import Vue from 'vue';

async function signOut() {
  await mainOidc.signOut();
}

export default defineComponent({
  name: 'LogoutPage',
  setup() {
    return { signOut };
  },
  mounted() {
    signOut();
  },
});
</script>
