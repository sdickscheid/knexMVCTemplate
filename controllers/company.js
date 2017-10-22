const knex = require("../db/knex.js");

module.exports = {

    index: function(req, res) {
      knex('companies').then((companyList)=>{

        res.render('index', {companies: companyList})
      })
    },

    create: function(req, res) {
      knex('companies')
        .insert({
          name: req.body.company,
          description: req.body.description,
          suite: req.body.suite
        }, "*")
        .then((companyList)=>{
          res.redirect('/')
        })
        .catch((err)=>{
          console.log(err)
    })
  },

// Get one company and its members
    getOne: function(req, res){
      knex('companies')
      .where('id', req.params.id)
      .then((company)=>{

        knex('members')
        .where('company_id', req.params.id)
        .then((memberList)=>{

          res.render('profile', {com: company[0], members: memberList});
        })

      });
    }
// END module.exports
}
