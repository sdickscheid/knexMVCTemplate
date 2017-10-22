
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {company_id: '1', first_name: "Brian", last_name: "Jones", email: "bj@myndshft.com", position: "CEO"},
        {company_id: '1', first_name: "Lucy", last_name: "Luck", email: "ll@myndshft.com", position: "Marketing Manager"},
        {company_id: '1', first_name: "Kevin", last_name: "Ryan", email: "kr@myndshft.com", position: "Graphic Designer"},
        {company_id: '1', first_name: "Rahul", last_name: "Rocket", email: "rr@myndshft.com", position: "Software Developer"},
        {company_id: '2', first_name: "Adam", last_name: "Davis", email: "adamd@inmedia.com", position: "CEO"},
        {company_id: '2', first_name: "Sally", last_name: "Sweets", email: "sallys@inmedia.com", position: "Marketing Manager"},
        {company_id: '2', first_name: "Laura", last_name: "Lembo", email: "laural@inmedia.com", position: "Graphic Designer"},
        {company_id: '2', first_name: "Matthew", last_name: "Barone", email: "matthewb@inmedia.com", position: "Software Developer"},
        {company_id: '2', first_name: "Adrian", last_name: "Calamusa", email: "adrian.calamusa@kiterunner.com", position: "CEO"},
        {company_id: '2', first_name: "Carol", last_name: "Riddick", email: "carol.riddick@kiterunner.com", position: "Marketing Manager"},
        {company_id: '3', first_name: "Sandro", last_name: "Ianella", email: "sandro.ianella@kiterunner.com", position: "Graphic Designer"},
        {company_id: '3', first_name: "Nick", last_name: "Rasputan", email: "nick.rasputan@kiterunner.com", position: "Software Developer"},
      ]);
    });
};
