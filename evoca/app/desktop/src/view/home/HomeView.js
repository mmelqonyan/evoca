Ext.define('Evoca.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">Welcome to the Ext JS 7.0 Modern Desktop Template Application!

- more adventurous? go to <span style="color:red;">'app/shared/sass/var.scss'</span> and uncomment all the lines
</div>`
});