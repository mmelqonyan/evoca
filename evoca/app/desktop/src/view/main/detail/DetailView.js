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
      { "title": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
      { "title": "Home1", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
{ "title": "Personnel", "iconCls": "x-fa fa-table", "xtype": "personnelview","leaf": true },
     ]
    },
  ]




  /*items: [
    
      { "text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
                { "text": "Home1", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
      { "text": "Personnel", "iconCls": "x-fa fa-table", "xtype": "personnelview","leaf": true },
      //add new items on the next line (from sencha-node generate viewpackage)

    ]*/
  
  
})