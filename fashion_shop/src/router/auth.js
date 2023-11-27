const auth = [{
    path: '/auth',
    children: [{
            path: 'login',
            name: 'UserLogin',
            components: {
                auth: () =>
                    import ('../views/auth/UserLogin.vue'),
            },
        },
        {
            path: 'ForgotPassword',
            name: 'forgotPassword',
            components: {
                auth: () =>
                    import ('../views/auth/ForgotPassword.vue'),
            },
        },
        {
            path: 'register',
            name: 'Register',
            components: {
                auth: () =>
                    import ('../views/auth/Register.vue'),
            },
        },
    ]
}];

export default {
    auth,
};