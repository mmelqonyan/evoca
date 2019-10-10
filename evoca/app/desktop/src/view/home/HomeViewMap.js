Ext.define('Evoca.view.home.HomeViewMap',{
	xtype: 'homeviewmap',
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
	html: `<iframe
  width="100%"
  height="100%"
  frameborder="0"  style="border:0; position:absolute"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBjiPrc7tedEOtClOr9_sWKypG1yY5sCcI&q=15/3+Paronyan+str" allowfullscreen>
</iframe>`
});