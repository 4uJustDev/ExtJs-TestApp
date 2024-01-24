Ext.define('MyApp.view.card.CardController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.card-panel',
	requires: [
		'MyApp.store.Product'
	],

	clickOnCancelCard: function () { 
		this.getView().destroy();
	},
	clickOnConfirmCard: function() {
        Ext.Msg.alert('Confirm BTN', 'Confrim.');
	}
});