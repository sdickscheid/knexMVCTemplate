//Update the name of the controller below and rename the file.
const company = require("../controllers/company.js")
const members = require("../controllers/members.js")
module.exports = function(app){


  // Get all companies and display on home page
  app.get('/', company.index);

  // Get one company
  app.get('/company/:id', company.getOne);

  // Create new company from home page
  app.post('/company', company.create);

  // Create New member for company
  app.post('/member/:co_id', members.create)

  // Return 404 page if none of the above pathes are reachable
  app.use(function(req, res){
    res.status(404);
    res.render('404');
  })
}
