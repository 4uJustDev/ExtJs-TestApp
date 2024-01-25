Ext.define('MyApp.view.card.CardController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.card-panel',
  requires: [
    'MyApp.store.Product'
  ],

  clickOnCancelCard () { 
    this.getView().destroy();
  },

  clickOnConfirmCard (button) {
    const form = button.up('form');
    const idField = form.down('[name=id]');
    const priceField = form.down('[name=price]');
    const amountField = form.down('[name=amount]');

    // Validate form fields
    if (!idField.isValid() || !priceField.isValid() || !amountField.isValid()) {
      Ext.Msg.alert('Validation Error', 'Please fill in all the required fields.');
      return;
    }

    const id = idField.getValue();
    const price = priceField.getValue();
    const amount = amountField.getValue();

    // Use component query to find the mainlist within the viewport
    const mainlist = Ext.ComponentQuery.query('app-main mainlist')[0];

    // Use lookup method to find the grid panel within mainlist
    const gridPanel = mainlist.down('gridpanel');
    const store = gridPanel.getStore();

    // Get the record by ID
    const record = store.getById(id);

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