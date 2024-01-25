Ext.define('MyApp.view.card.Card', {
  extend: 'Ext.Window',
  xtype: 'itemcard',

  controller: 'card-panel',

  requires: [
    'MyApp.view.login.LoginController',
    'Ext.form.Panel'
  ],

  id: 'itemCard',
  title: 'Карточка товара',
  bodyPadding: 20,

  items: [{
    xtype: 'form',
    id: 'itemForm',
    items: [{
      xtype: 'field',
      fieldLabel: 'ID',
      name: 'id',
      inputType: 'string',
      allowBlank: false,
    }, {
      xtype: 'field',
      fieldLabel: 'Наименование',
      width: 300,
      name: 'name',
      inputType: 'string'
    }, {
      xtype: 'numberfield',
      fieldLabel: 'Цена',
      minValue: 0,
      allowDecimals: true,
      incrementValue: 0.5,
      name: 'price'
    }, {
      xtype: 'numberfield',
      fieldLabel: 'Количество',
      name: 'amount',
      minValue: 0,
      stepValue: 1,
      maxValue: 100,
    }],
    buttons: [{
      text: 'Сохранить',
      listeners: {
        click: 'clickOnConfirmCard'
      }
    }, {
      text: 'Отмена',
      listeners: {
        click: 'clickOnCancelCard'
      }
    }]
  }]
});