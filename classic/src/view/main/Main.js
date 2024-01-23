Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.List',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    plugins: 'viewport',


    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Учет товаров'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     },
    //     wide: {
    //         headerPosition: 'left'
    //     }
    // },
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },
    
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Exit',
        iconCls: 'fa-lock',
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButtonDestroy'
        }]
    }]
});