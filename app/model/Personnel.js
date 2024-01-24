Ext.define('MyApp.model.Personnel', {
    extend: 'MyApp.model.Base',

    fields: [
        {id:'id', type: 'int'}, 
	    {name: 'name', type: 'string'},
	    {description:'description', type: 'string'},
	    {price: 'price', type: 'int'},
	    {amount: 'amount', type: 'int'}
    ]
});
