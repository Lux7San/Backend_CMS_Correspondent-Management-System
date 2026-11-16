import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const now = new Date()
    const rows = (names: string[], column: string) =>
      names.map((name) => ({ [column]: name, created_at: now, updated_at: now }))

    const seedIfEmpty = async (table: string, data: object[]) => {
      const [{ total }] = await db.from(table).count('* as total')
      if (Number(total) === 0) {
        await db.table(table).multiInsert(data)
      }
    }

    await seedIfEmpty('mst_roles', rows(['Super Admin', 'Admin', 'Employee'], 'role_name'))

    await seedIfEmpty(
      'mst_divisions',
      rows(
        ['Automation', 'Laboratory', 'R&D', 'All Division', 'IT', 'Finance'],
        'division_name'
      )
    )

    await seedIfEmpty(
      'mst_division_positions',
      rows(
        ['Director', 'Manager', 'Assistant Manager', 'Supervisor', 'Specialist', 'Sales', 'All'],
        'position_name'
      )
    )
  }
}