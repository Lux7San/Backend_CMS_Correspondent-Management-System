import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mst_customers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('customer_id')
      table.string('customer_name', 255).notNullable()
      table.string('address', 255).nullable()
      table.string('email', 255).nullable()
      table.string('phone_number', 255).nullable()
      table.string('npwp', 255).nullable()
      table.string('flag_active', 255).notNullable().defaultTo('Y')
      table.timestamp('created_at', { useTz: false, precision: 0 }).nullable()
      table.timestamp('updated_at', { useTz: false, precision: 0 }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}