Ext.define('MyApp.store.Product', {
  extend: 'Ext.data.Store',

  alias: 'store.Product',
  xtype: 'dataProduct',

  model: 'MyApp.model.Product',
  id: 'StoreProducts',

  data: { items: [
    { id: 1, name: 'Processor', description: 'Процессор Intel Core i5-12400F OEM', price: 14799, amount: 91 },
    { id: 2, name: 'VideoCard', description: 'Видеокарта MSI GeForce RTX 4070 VENTUS 3X E OC [GeForce RTX 4070 VENTUS 3X E 12G OC]', price: 71499, amount: 123 },
    { id: 3, name: 'Motherboard', description: 'Материнская плата MSI PRO H610M-E DDR4', price: 7499, amount: 0 },
  ]},

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});
