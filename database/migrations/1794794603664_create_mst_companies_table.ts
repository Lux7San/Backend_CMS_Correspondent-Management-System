import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mst_companies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('company_id')
      table.string('company_name', 255).notNullable()
      table.string('company_code', 255).notNullable().unique()
      table.string('company_address', 255).nullable()
      table.string('npwp', 255).nullable().unique()
      table.string('nib', 255).nullable().unique()
      table.string('email', 255).nullable()
      table.string('no_hp', 20).nullable()
      table.string('flag_active', 255).notNullable().defaultTo('Y')
      table.timestamp('created_at', { useTz: false, precision: 0 }).nullable()
      table.timestamp('updated_at', { useTz: false, precision: 0 }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}