Ext.define('Evoca.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Currency',
            dataIndex: 'Currency',
            editable: false,
            width: 100,
            
        },
        {text: 'Saless',
        dataIndex: 'Sale',
        editable: false,
         width: 230},
        {
            text: 'Purchase',
            dataIndex: 'Purchase',
            editable: false,
            width: 150
        },
        {
            text: 'RateFor',
            dataIndex: 'RateFor',
            editable: false,
            width: 100,
            
        },
    ],
    listeners: {
   

    }
});
