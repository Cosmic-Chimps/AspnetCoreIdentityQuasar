<template>
  <q-page class="row items-center justify-evenly">
    <q-linear-progress indeterminate />
  </q-page>
</template>

<script lang="ts">
import { mainOidc } from '../boot/oidcService';
import { defineComponent, ref } from '@vue/composition-api';

async function signIn() {
  await mainOidc.signIn();
}

export default defineComponent({
  name: 'LoginPage',
  setup() {
    return { signIn };
  },
  mounted() {
    signIn();
  },
});
</script>
