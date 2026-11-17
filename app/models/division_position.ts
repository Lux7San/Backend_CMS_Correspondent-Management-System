import { MstDivisionPositionSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import UserProfile from '#models/user_profile'

export default class DivisionPosition extends MstDivisionPositionSchema {
    static table = 'mst_division_positions'

    @hasMany(() => UserProfile, { foreignKey: 'divisionPositionId' })
    declare userProfiles: HasMany<typeof UserProfile>
}