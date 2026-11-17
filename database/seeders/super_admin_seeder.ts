import { BaseSeeder } from '@adonisjs/lucid/seeders'
import env from '#start/env'
import User from '#models/user'
import Role from '#models/role'
import Division from '#models/division'
import DivisionPosition from '#models/division_position'
import UserProfile from '#models/user_profile'

export default class extends BaseSeeder {
  async run() {
    const role = await Role.findByOrFail('roleName', 'Super Admin')
    const division = await Division.findByOrFail('divisionName', 'All Division')
    const position = await DivisionPosition.findByOrFail('positionName', 'All')

    const user = await User.firstOrCreate(
      { username: env.get('SUPER_ADMIN_USERNAME') },
      {
        password: env.get('SUPER_ADMIN_PASSWORD'),
        roleId: role.roleId,
        flagActive: 'Y',
      }
    )

    await UserProfile.firstOrCreate(
      { userId: user.userId },
      {
        divisionId: division.divisionId,
        divisionPositionId: position.divisionPositionId,
        fullName: 'Super Admin',
      }
    )
  }
}