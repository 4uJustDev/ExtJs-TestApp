Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function() {
    // Get the form from the view using down method
    let form = this.getView().down('form');
    
    // Check if the form is found
    if (form) {
      // Check if the form is valid
      if (form.isValid()) {
        // Get the form values
        let formValues = form.getValues();
    
        // Get the username and password from the form
        let username = formValues.username;
        let password = formValues.password;
    
        // Check if the username and password are "admin"
        if (username === 'admin' && password === 'padmin') {
          // Set the localStorage value to true
          localStorage.setItem("TutorialLoggedIn", true);
    
          // Remove Login Window
          this.getView().destroy();
    
          // Add the main view to the viewport
          Ext.widget('app-main');
        } else {
          // Display an error message for incorrect credentials
          Ext.Msg.alert('Invalid Credentials', 'Incorrect username or password. Please try again.');
        }
      } else {
        // Handle invalid form data here
        Ext.Msg.alert('Invalid Input', 'Please fill in all the required fields.');
      }
    } else {
      // Handle case where form is not found
      console.error('Form not found in the view.');
    }
  }
});