Ext.define('Evoca.view.main.TabPanelController',{

    extend: 'Ext.app.ViewController',
    alias: 'controller.tabpanel',
    init: function(){
        this.control({
            '#callcontroller':{click:'callOnClick'}
        })
    },

callOnClick:function(){
    alert("bnbnb")
}


})



