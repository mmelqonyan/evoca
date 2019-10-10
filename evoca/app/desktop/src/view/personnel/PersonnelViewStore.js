Ext.define('Evoca.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'Currency', 'Purchase', 'Sale', 'RateFor'
    ],
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
