
exports.up = function(knex) {
    return knex.schema.table("scores", scores => {
        scores.integer('user_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
  
};
