Ext.define('MyApp.view.main.List', {
    extend: 'Ext.container.Container',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    items: [{
			title: 'Список товаров',
			padding: '20 10 0 10',
        },{
			xtype: 'gridpanel',
			padding: '10, 10 0 10',
			flex: 1,
			store: {
				type: 'Personnel'
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
				}
			],
			listeners: {
				select: 'onItemSelected'
			},
		},
    ]
});