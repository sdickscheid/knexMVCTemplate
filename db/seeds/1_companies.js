exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'myndshft', description: 'Myndshft helps companies become Future-Ready.', suite: '1'},
        {name: 'inMedia', description: 'InMedia is a multi-media content development and delivery company dedicated to building an authentic audience experience through print, digital and filmed media.', suite: '2'},
        {name: 'Kite Rocket', description: 'Kiterocket is a PR and marketing agency that makes brands more valuable by embracing what makes them different, helping them find their voices and be heard.', suite: '3'}
      ]);
    });
};
