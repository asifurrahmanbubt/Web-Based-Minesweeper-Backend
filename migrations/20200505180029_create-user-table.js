
exports.up = function(knex) {
    return knex.schema.createTable("users", users => {
        users.increments()
        users.string('username')
        users.string('display_name')
        users.string('password')
        users.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
  
};
