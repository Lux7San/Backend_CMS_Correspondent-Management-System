import { MstDivisionSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import UserProfile from '#models/user_profile'

export default class Division extends MstDivisionSchema {
    static table = 'mst_divisions'

    @hasMany(() => UserProfile, { foreignKey: 'divisionId' })
    declare userProfiles: HasMany<typeof UserProfile>
}