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
    
  launch () {
    // Getting the status of login
    const loggedIn = localStorage.getItem("TutorialLoggedIn");

    // Show main window or login page
    Ext.widget(loggedIn ? 'app-main' : 'login');
  }
});