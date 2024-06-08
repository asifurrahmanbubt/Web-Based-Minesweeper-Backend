
exports.up = function(knex) {
  return knex.schema.createTable("scores", scores => {
      scores.increments()
      scores.string('display_name')
      scores.integer('time')
      scores.string('difficulty')
  })
};

exports.down = function(knex) {
  
};
