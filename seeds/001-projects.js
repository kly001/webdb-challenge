
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'webdb Sprint Challenge',
      description:
        ' Showing off new knowledge',
    },
  ]);
};
