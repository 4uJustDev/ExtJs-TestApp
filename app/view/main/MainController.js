Ext.define('MyApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',
    
  counter: 3,

  onItemSelected (sender, record) {
    // Use component query to find the mainlist within the viewport
    let mainlist = Ext.ComponentQuery.query('app-main mainlist')[0];

    // Use lookup method to find the grid panel within mainlist
    let gridPanel = mainlist.down('gridpanel'); 
    let clickedColumn = gridPanel.columns[1].config.text;

    if(clickedColumn === 'Имя'){
      let itemCard = Ext.create({
        xtype: 'itemcard'
      }); 
            
      let card = itemCard.down('#itemForm');
            
      card.down('[name=id]').setValue(record.get('id'));
      card.down('[name=name]').setValue(record.get('name'));
      card.down('[name=price]').setValue(record.get('price'));
      card.down('[name=amount]').setValue(record.get('amount'));
            
      itemCard.show();
    }
  },

  onClickButtonDestroy () {
    localStorage.removeItem('TutorialLoggedIn');

    this.getView().destroy();

    Ext.widget('login');
  },

  onAddTabClick () {
    let tabPanel = this.lookupReference('tabpanel');

    counter = ++this.counter;

    tab = tabPanel.add({
      title: 'Tab ' + counter,
      xtype: 'mainlist'
    });

    tabPanel.setActiveTab(tab);
  },

  forRender (value, meta){
    if(parseInt(value) === 0) meta.style = "background-color:red;";
    return value;
      
  },

  forIdCheck (field, e) 
  {
    if (e.getKey() === e.ENTER) {
      const value = field.getValue();

      // Reference on Table
      const gridPanel = field.up('mainlist').down('gridpanel');

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
  },

  forDescriptionCheck (field) {
    const dataIndex = 'description';
    const value = field.getValue();
    const gridPanel = field.up('mainlist').down('gridpanel');
  
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
});
