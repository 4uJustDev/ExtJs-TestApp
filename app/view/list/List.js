Ext.define('MyApp.view.main.List', {
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
        specialkey: function (field, e) 
        {
          if (e.getKey() === e.ENTER) {
            let value = field.getValue();

            // Reference on Table
            let gridPanel = field.up('mainlist').down('gridpanel');

            if (value) {
              gridPanel.getStore().clearFilter();
              gridPanel.getStore().addFilter({
                id: 'filterId',
                filterFn: function (record) {
                  return record.get('id') === parseInt(value);
                }
              })
            } else {
              // Nothing filter if empty field
              gridPanel.getStore().clearFilter();
            }
          }
        }
      }
    },{
      xtype: 'textfield', 
      fieldLabel: 'Описание:',
      listeners: {
        change: function (field) {
          applyFilter(field, 'description');
        }
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
      renderer: function(value, meta){
        if(parseInt(value) === 0) meta.style = "background-color:red;";
        return value;
      }
    }
    ],
    listeners: {
      select: 'onItemSelected'
    },
  },
  ]
});

function applyFilter(field, dataIndex) {
  let value = field.getValue();
  let gridPanel = field.up('mainlist').down('gridpanel');

  if (value) {
    gridPanel.getStore().clearFilter();
    gridPanel.getStore().addFilter({
      id: 'filter' + dataIndex.charAt(0).toUpperCase() + dataIndex.slice(1),
      filterFn: function (record) {
        return record.get(dataIndex).toLowerCase().includes(value.toLowerCase());
      }
    });
  } else {
    gridPanel.getStore().clearFilter();
  }
}