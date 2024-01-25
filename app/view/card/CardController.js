Ext.define('MyApp.view.card.CardController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.card-panel',
  requires: [
    'MyApp.store.Product'
  ],

  clickOnCancelCard: function () { 
    this.getView().destroy();
  },

  clickOnConfirmCard: function(button) {
    let form = button.up('form');
    let idField = form.down('[name=id]');
    let priceField = form.down('[name=price]');
    let amountField = form.down('[name=amount]');

    // Validate form fields
    if (!idField.isValid() || !priceField.isValid() || !amountField.isValid()) {
      Ext.Msg.alert('Validation Error', 'Please fill in all the required fields.');
      return;
    }

    let id = idField.getValue();
    let price = priceField.getValue();
    let amount = amountField.getValue();

    // Use component query to find the mainlist within the viewport
    let mainlist = Ext.ComponentQuery.query('app-main mainlist')[0];

    // Use lookup method to find the grid panel within mainlist
    let gridPanel = mainlist.down('gridpanel');
    const store = gridPanel.getStore();

    // Get the record by ID
    let record = store.getById(id);

    // Check if the record exists
    if (!record) {
      Ext.Msg.alert('Error', 'Record with ID ' + id + ' not found.');
      return;
    }

    // Update the record fields
    record.set('price', price);
    record.set('amount', amount);

    // Commit the changes to the store
    record.commit();

    // Refresh the grid view
    gridPanel.getView().refresh();

    // Destroy the card panel
    this.getView().destroy();
  }
});