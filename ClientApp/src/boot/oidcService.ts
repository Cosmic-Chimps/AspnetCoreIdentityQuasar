import { createOidcAuth, SignInType, LogLevel, OidcAuth } from 'vue-oidc-client'
import { boot } from 'quasar/wrappers';
import oidConfig from 'src/config/oidConfig'

const loco = window.location
const appRootUrl = `${loco.protocol}//${loco.host}/`

const internalMainOidc = createOidcAuth(
  'main',
  SignInType.Window,
  appRootUrl,
  {
    authority: appRootUrl,
    client_id: oidConfig.applicationName, // 'implicit.shortlived',
    response_type: 'code',
    scope: oidConfig.applicationScope,
    redirect_uri: `${appRootUrl}${oidConfig.applicationPaths.loginCallback}`,
    silent_redirect_uri: `${appRootUrl}${oidConfig.applicationPaths.loginCallback}`,
    post_logout_redirect_uri: `${appRootUrl}${oidConfig.applicationPaths.logOutCallback}`,
  },
  console,
  LogLevel.Debug
  // (process.env.NODE_ENV !== 'production' ? LogLevel.Debug : LogLevel.Error)
)

declare module 'vue/types/vue' {
  interface Vue {
    $oidc: OidcAuth;
  }
}

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$oidc = internalMainOidc
});

export const mainOidc = internalMainOidc
