/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    counter: 3,

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        let test = record.data;
        console.log(test);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickButtonDestroy: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');

        Ext.Msg.alert('Wrong data', 'Please check your LOGIN or PASSWORD!');
    },

    onAddTabClick: function() {
        var tabPanel = this.lookupReference('tabpanel'),
            counter = ++this.counter,
            tab = tabPanel.add({
                title: 'Tab ' + counter,
                xtype: 'mainlist'
            });

        tabPanel.setActiveTab(tab);
    },
});
