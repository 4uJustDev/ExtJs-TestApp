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
    // Variable for check log in
    let loggedIn;

    //DEV
    //localStorage.removeItem('TutorialLoggedIn');

    // Getting the status of login
    loggedIn = localStorage.getItem("TutorialLoggedIn");

    // Show main window or login page
    Ext.widget(loggedIn ? 'app-main' : 'login');
  }
});