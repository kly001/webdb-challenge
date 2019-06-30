
exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Read an Entire Dictionary",
      description:
        " Gain knowledge",
    },
    {
      name: "Make a Pound Cake",
      description:
        " Demonstrate skills",
    },
  ]);
};
