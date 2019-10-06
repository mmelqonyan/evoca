Ext.define('Evoca.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'Currency', 'Purchase', 'Sale', 'RateFor'
    ],
   // groupField: 'Currency',
  /*  data: { items:  
        Ext.Ajax.request({
            url: 'https://online.evocabank.am/internetbank/api/exchangerates' ,
            method: 'GET' ,
           
            headers:
            {
                'Content-Type' : 'application/json'
            },
            success: function (response) {
           console.log(response.responseText)
           return response.responseText;
            },
            failure: function (response) {
                Ext.Msg.alert( 'Status' , 'Request Failed.' );

            }
        }) 
    },*/
    proxy: {
        type: 'ajax',
        url: 'https://online.evocabank.am/internetbank/api/exchangerates' ,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true
});
