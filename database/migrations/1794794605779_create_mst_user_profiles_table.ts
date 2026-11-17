import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mst_user_profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('user_profile_id')
      table
        .bigInteger('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .bigInteger('division_id')
        .unsigned()
        .notNullable()
        .references('division_id')
        .inTable('mst_divisions')
        .onDelete('CASCADE')
      table
        .bigInteger('division_position_id')
        .unsigned()
        .notNullable()
        .references('division_position_id')
        .inTable('mst_division_positions')
        .onDelete('CASCADE')
      table.string('full_name', 255).nullable()
      table.string('no_hp', 255).nullable()
      table.string('telegram', 255).nullable()
      table.string('gender', 255).nullable()
      table.string('photo_profile', 255).nullable()
      table.string('signature', 255).nullable()
      table.timestamp('created_at', { useTz: false, precision: 0 }).nullable()
      table.timestamp('updated_at', { useTz: false, precision: 0 }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}