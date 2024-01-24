Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    counter: 3,
    
    testFunc: function(){
        Ext.Msg.alert('Test MSG', 'Work!');
    },
    onItemSelected: function (sender, record) {
        console.log(record.get('name'));
        let itemCard = Ext.create({
            xtype: 'itemcard'
        }); 
        let card = itemCard.down('#itemForm');
        card.down('[name=id]').setValue(record.get('id'));
        card.down('[name=name]').setValue(record.get('name'));
        card.down('[name=price]').setValue(record.get('price'));
        card.down('[name=amount]').setValue(record.get('amount'));
        
        itemCard.show();
    },

    onClickButtonDestroy: function () {

        localStorage.removeItem('TutorialLoggedIn');

        this.getView().destroy();

        Ext.widget('login');

        //Ext.Msg.alert('Wrong data', 'Please check your LOGIN or PASSWORD!');
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
