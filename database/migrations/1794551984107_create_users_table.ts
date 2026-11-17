import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('user_id')
      table.string('username', 255).notNullable()
      table.string('email', 255).nullable().unique()
      table.timestamp('email_verified_at', { useTz: false, precision: 0 }).nullable()
      table.string('password', 255).notNullable()
      table
        .bigInteger('role_id')
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('mst_roles')
        .onDelete('CASCADE')
      table.string('flag_active', 255).notNullable().defaultTo('Y')
      table.string('remember_token', 100).nullable()
      table.timestamp('created_at', { useTz: false, precision: 0 }).nullable()
      table.timestamp('updated_at', { useTz: false, precision: 0 }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}