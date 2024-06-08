const { Model } = require('objection')
const database = require('./database-config')

const Score = require('./Score')

Model.knex(database)

module.exports = class User extends Model {
    static get tableName() {
      return 'users'
    }

    static relationMappings = {
        scores: {
            relation: Model.HasManyRelation,
            modelClass: Score,
            join: {
                from: 'users.id',
                to: 'scores.user_id'
            }
        }
    }
}
  