exports.up = function(knex,Promise) {
    return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();
    tbl.string('description', 128).notNullable();
    tbl
        .integer('project_id')
        .unsigned()
        .references("id")
        .inTable("projects")
    tbl.boolean('completed').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('actions');
  };
  