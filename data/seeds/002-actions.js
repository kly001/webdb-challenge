exports.seed = function(knex) {
  return knex("actions").insert([
    {
      project_id: 1,
      description: "Learn 10 new words that start with a Z.",
    },
    {
      project_id: 2,
      description: "Get all the ingredients for the cake",
    },
    {
      project_id: 1,
      description: "Learn 10 new words that start with Q.",
    },
  ]);
};

