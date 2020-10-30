<template>
  <q-page class="row items-center justify-evenly">
    <q-linear-progress indeterminate />
  </q-page>
</template>

<script lang="ts">
import { mainOidc } from '../boot/oidcService';
import { defineComponent, ref } from '@vue/composition-api';
import oidConfig from '../config/oidConfig';

async function register() {
  // const apiAuthorizationPath = `${oidConfig.
  const redirectUrl = `${window.location.origin}${
    oidConfig.applicationPaths.identityRegisterPath
  }?${oidConfig.queryParameterNames.returnUrl}=${encodeURI(
    oidConfig.applicationPaths.loginCallback
  )}`;
  window.location.replace(redirectUrl);
}

export default defineComponent({
  name: 'RegisterPage',
  setup() {
    return { register };
  },
  mounted() {
    register();
  },
});
</script>
