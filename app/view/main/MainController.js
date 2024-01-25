Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    counter: 3,
    
    testFunc: function(){
        Ext.Msg.alert("Test MSG', 'Work!");
    },

    onItemSelected: function (sender, record) {
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

    onClickButtonDestroy: function () {
        localStorage.removeItem('TutorialLoggedIn');

        this.getView().destroy();

        Ext.widget('login');
    },

    onAddTabClick: function() {
        let tabPanel = this.lookupReference('tabpanel');

        counter = ++this.counter;

        tab = tabPanel.add({
            title: 'Tab ' + counter,
            xtype: 'mainlist'
        });

        tabPanel.setActiveTab(tab);
    },
});
