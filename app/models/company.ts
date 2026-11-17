import { MstCompanySchema } from '#database/schema'
import { hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import UserCompany from '#models/user_company'

export default class Company extends MstCompanySchema {
    static table = 'mst_companies'

    @hasMany(() => UserCompany, { foreignKey: 'companyId' })
    declare userCompanies: HasMany<typeof UserCompany>

    @manyToMany(() => User, {
        pivotTable: 'mst_user_companies',
        pivotForeignKey: 'company_id',
        pivotRelatedForeignKey: 'user_id',
    })
    declare users: ManyToMany<typeof User>
}