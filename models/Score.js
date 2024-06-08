const { Model } = require('objection')
const database = require('./database-config')

const User = require('./User')

Model.knex(database)

module.exports = class Score extends Model {
    static get tableName() {
      return 'scores'
    }

    static relationMappings = {
        user: {
            relation: Model.HasOneRelation,
            modelClass: User,
            join: {
                from: 'scores.user_id',
                to: 'users.id'
            }
        }
    }
}
  