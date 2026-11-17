import { MstUserCompanySchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Company from '#models/company'

export default class UserCompany extends MstUserCompanySchema {
    static table = 'mst_user_companies'

    @belongsTo(() => User, { foreignKey: 'userId' })
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Company, { foreignKey: 'companyId' })
    declare company: BelongsTo<typeof Company>
}