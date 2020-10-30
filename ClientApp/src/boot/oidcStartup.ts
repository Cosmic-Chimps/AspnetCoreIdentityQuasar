import { cwd } from 'process';
import { boot } from 'quasar/wrappers'
import { OidcAuth } from 'vue-oidc-client'
import { mainOidc } from './oidcService';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(async () => {
  await mainOidc.startup();
})
