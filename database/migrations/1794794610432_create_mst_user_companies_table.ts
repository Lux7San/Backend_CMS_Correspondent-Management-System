import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mst_user_companies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('user_company_id')
      table
        .bigInteger('id_user')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .bigInteger('id_company')
        .unsigned()
        .notNullable()
        .references('company_id')
        .inTable('mst_companies')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: false, precision: 0 }).nullable()
      table.timestamp('updated_at', { useTz: false, precision: 0 }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}