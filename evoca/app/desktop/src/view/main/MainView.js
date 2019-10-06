Ext.define('Evoca.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    requires: [
    'Ext.layout.Fit'
    ],
    layout: 'fit',
    items: [
        { xtype: 'navview',    reference: 'navview',    docked: 'right',   bind: {width:  '{detailview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
        { xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
        { xtype: 'centerview', reference: 'centerview' },
 //{ xtype: 'navview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}, listeners: { select: "onMenuViewSelectionChange"}},
    ]
});
