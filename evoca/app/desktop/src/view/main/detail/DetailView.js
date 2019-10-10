Ext.define('Evoca.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  
items: [
    {
      xtype: 'list',
     fullscreen: true,
     itemTpl: '{title}',
     data: [
      { "title": "Բանկ",  "xtype": "tabpanel", "leaf": true },
      { "title": "Հետադարձ կապ", "xtype": "tabpanel", "leaf": true },
      { "title": "Քարտեզ", "xtype": "homeviewmap", "leaf": true },
      { "title": "Փոխարժեք", "xtype": "personnelview","leaf": true },
     ]
    },
  ]
  
})