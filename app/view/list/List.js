Ext.define('MyApp.view.list.List', {
  extend: 'Ext.container.Container',
  xtype: 'mainlist',

  requires: [
    'MyApp.store.Product'
  ],

  items: [{
    title: 'Список товаров',
    padding: '20 10 0 10',
  },{
    padding: '20 10 0 10',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'ID:',
      listeners: {
        specialkey: 'forIdCheck'
      }
    },{
      xtype: 'textfield', 
      fieldLabel: 'Описание:',
      listeners: {
        change:	'forDescriptionCheck'
      }
    }]
  },{
    xtype: 'gridpanel',
    reference: 'gridpanel',
    padding: '10, 10 0 10',
    flex: 1,
    store: {
      type: 'Product'
    },
    columns: [{	
      text: 'ID',
      dataIndex: 'id',
      groupable: true,
      filter: {},
      filterType: 'string',
    },
    {
      text: 'Имя',
      dataIndex: 'name',
      flex: 1,
    },
    {
      text: 'Описание',
      dataIndex: 'description',
      flex: 1,
      filter: {},
      filterType: 'string'
    },
    {
      text: 'Цена',
      dataIndex: 'price',
      flex: 1
    },
    {
      text: 'Кол-во',
      dataIndex: 'amount',
      flex: 1,
      renderer: 'forRender'
    }
    ],
    listeners: {
      select: 'onItemSelected'
    },
  },
  ]
});