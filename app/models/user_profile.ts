import { MstUserProfileSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Division from '#models/division'
import DivisionPosition from '#models/division_position'

export default class UserProfile extends MstUserProfileSchema {
    static table = 'mst_user_profiles'

    @belongsTo(() => User, { foreignKey: 'userId' })
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Division, { foreignKey: 'divisionId' })
    declare division: BelongsTo<typeof Division>

    @belongsTo(() => DivisionPosition, { foreignKey: 'divisionPositionId' })
    declare divisionPosition: BelongsTo<typeof DivisionPosition>
}