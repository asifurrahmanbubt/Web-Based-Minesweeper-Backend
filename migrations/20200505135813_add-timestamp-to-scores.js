
exports.up = function(knex) {
    return knex.schema.table("scores", scores => {
        scores.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
  
};
