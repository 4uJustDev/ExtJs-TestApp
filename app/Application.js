Ext.define('MyApp.Application', {

    extend: 'Ext.app.Application',

    name: 'MyApp',

    views: [
        'MyApp.view.login.Login',
        'MyApp.view.main.Main'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    
    launch: function () {
        // Переменная для проверки логина
        var loggedIn;

        //DEV
        //localStorage.removeItem('TutorialLoggedIn');

        loggedIn = localStorage.getItem("TutorialLoggedIn");

        Ext.widget(loggedIn ? 'app-main' : 'login');
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});