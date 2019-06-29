
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Read an Entire Dictionary',
      description:
        ' Showing off new knowledge',
    },
    {
      name: 'Make a Pound Cake',
      description:
        ' Demonstrate new skills',
    },
  ]);
};
