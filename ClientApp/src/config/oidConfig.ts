const ApplicationName = 'QuasarAspNetCoreIdentitySample';
const ApplicationScope = 'QuasarAspNetCoreIdentitySampleAPI openid profile';

const QueryParameterNames = {
  returnUrl: 'returnUrl',
  message: 'message'
};

const LogoutActions = {
  logoutCallback: 'logout-callback',
  logout: 'logout',
  loggedOut: 'logged-out'
};

const LoginActions = {
  loginCallback: 'login-callback',
  profile: 'profile',
  register: 'register'
};

const prefix = 'authentication';

const ApplicationPaths = {
  defaultLoginRedirectPath: '/',
  apiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
  apiAuthorizationPrefix: prefix,
  loginCallback: `${prefix}/${LoginActions.loginCallback}`,
  register: `${prefix}/${LoginActions.register}`,
  profile: `${prefix}/${LoginActions.profile}`,
  logOut: `${prefix}/${LogoutActions.logout}`,
  loggedOut: `${prefix}/${LogoutActions.loggedOut}`,
  logOutCallback: `${prefix}/${LogoutActions.logoutCallback}`,
  identityRegisterPath: '/Identity/Account/Register',
  kdentityManagePath: '/Identity/Account/Manage'
};

export default {
  applicationName: ApplicationName,
  applicationScope: ApplicationScope,
  queryParameterNames: QueryParameterNames,
  logoutActions: LogoutActions,
  loginActions: LoginActions,
  applicationPaths: ApplicationPaths
};
