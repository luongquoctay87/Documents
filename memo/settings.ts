export const settings = {
    spiral: {
      api: {
        server: 'http://10.22.20.32:8000',
        keyAuthKey: 'bff_keyauths_key',
      },
      ui: {
        server: 'http://localhost:5000',
        scheme: 'http',
        baseDomain: 'localhost:5000',
        cors: 'localhost:5000',
      },
      auth: {
        clientIdPrefix: 'hogehoge_',
        clientSecretPrefix: 'fugafuga_',
      },
    },
    trustProxy: false,
    session: {
      storeType: 'redis', // 'redis' or 'memory'
      secretToken: 'this-is-a-test-token',
      ttl: 1 * 60 * 60,
      cookieMaxAge: 24 * 60 * 60 * 1000,
      secureCookie: false,
    },
    reauth: {
      ttl: 15 * 60,
    },
    redis: {
      host: '10.22.20.32',
      port: 6379,
      useSentinel: false,
      sentinels: '10.22.20.32:26379,10.22.20.32:26380',
      masterName: 'ctr-bff',
    },
    smtp: {
      host: '10.22.20.32',
      port: 2525,
    },
    bodyParser: {
      limit: '10mb',
    },
    lock: {
      'login-lock': {
        counter: {
          duration: 60 * 10,
          max: 5,
        },
        lockoutDuration: 60 * 60, // 1 hour span when locked, set in seconds
      },
      'mfa-login-lock': {
        counter: {
          duration: 60 * 5,
          max: 20,
        },
        lockoutDuration: 60 * 60,
      },
      'change-email-lock': {
        counter: {
          duration: 60 * 10,
          max: 5,
        },
        lockoutDuration: 60 * 60,
      },
      'change-sub-email-lock': {
        counter: {
          duration: 60 * 10,
          max: 5,
        },
        lockoutDuration: 60 * 60,
      },
      'recovery-codes-reset-lock': {
        counter: {
          duration: 60 * 10,
          max: 5,
        },
        lockoutDuration: 60 * 60,
      },
      'sender-domain-reauthentication-lock': {
        counter: {
          duration: 60 * 3,
          max: 1,
        },
        lockoutDuration: 60 * 3,
      },
    },
    token: {
      changeEmailUrl: {
        ttl: 60 * 15,
      },
      resetPasswordUrl: {
        ttl: 60 * 15,
      },
      resetRecovreyCodesUrl: {
        ttl: 60 * 15,
      },
      unregisteredUserInvitationUrl: {
        ttl: 60 * 60 * 24 * 30,
      },
      invitedUserRegistrationUrl: {
        ttl: 60 * 15,
      },
      emailFromDomainVerifyUrl: {
        ttl: 60 * 60 * 24,
      },
    },
    emailChangeVerifyCounter: {
      duration: 60 * 15,
      max: 5,
    },
    resetRecoveryCodesVerifyCounter: {
      duration: 60 * 15,
      max: 5,
    },
    templatePath: 'view',
    invitationPath: {
      existedUserJoin: '/accounts/invited',
      newUserRegistration: '/register/request',
      newUserJoin: '/register',
    },
    proxy: {
      fileUploadTimeout: 10 * 60 * 1000,
      timeout: 2 * 60 * 1000,
    },
    server: {
      timeout: 10 * 60 * 1000,
    },
  };
  