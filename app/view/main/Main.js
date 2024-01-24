Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.MainController',
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    plugins: 'viewport',

    layout: 'fit',
    viewModel: true,

    tbar: [{
        xtype: 'label',
        text: 'Учет товаров:',
        padding: '0 0 0 5',
    }, {
        xtype: 'button',
        text:'Добавить',
        glyph: 43,
        tooltip: 'Добавить карточку',
        listeners: {
            click: 'onAddTabClick'
        }
    }, {
        xtype: 'button',
        text: 'Выйти',
        tooltip: 'Выйти из аккаунта!',
        listeners: {
            click: 'onClickButtonDestroy'
        },
    }],

    items: [{
        xtype: 'tabpanel',
        reference: 'tabpanel',
        border: false,
        defaults: {
            bodyPadding: 0,
            scrollable: true,
            closable: true,
            border: false
        },
        margin: '10',
        tabPosition: 'top',
        tabRotation: 'default',
        items: [{
            title: 'Tab 1',
            xtype: 'mainlist'
        }, {
            title: 'Tab 2',
            xtype: 'mainlist'
        }, {
            title: 'Tab 3',
            xtype: 'mainlist'
        }]
    }]
});