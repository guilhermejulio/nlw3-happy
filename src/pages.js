orphanages = require('./database/fakedata.js')

module.exports = {

    index: function(req,res) {
        return res.render('index')
    },

    orphanage: function(req,res){
        return res.render('orphanage')

    },

    orphanages: function(req,res){
        return res.render('orphanages', {orphanages})
        
    },

    createOrphanage: function(req,res){

        return res.render('create-orphanage')
    }

}