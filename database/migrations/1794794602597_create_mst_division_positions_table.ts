import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mst_division_positions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('division_position_id')
      table.string('position_name', 255).notNullable()
      table.timestamp('created_at', { useTz: false, precision: 0 }).nullable()
      table.timestamp('updated_at', { useTz: false, precision: 0 }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}