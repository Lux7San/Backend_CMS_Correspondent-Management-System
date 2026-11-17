import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { type AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { belongsTo, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Role from '#models/role'
import UserProfile from '#models/user_profile'
import UserCompany from '#models/user_company'
import Company from '#models/company'

const AuthFinder = withAuthFinder(hash, {
  uids: ['username'],
  passwordColumnName: 'password',
})

export default class User extends compose(UserSchema, AuthFinder) {
  static accessTokens = DbAccessTokensProvider.forModel(User)
  declare currentAccessToken?: AccessToken

  @belongsTo(() => Role, { foreignKey: 'role_id' })
  declare role: BelongsTo<typeof Role>

  @hasOne(() => UserProfile, { foreignKey: 'user_id' })
  declare profile: HasOne<typeof UserProfile>

  @hasMany(() => UserCompany, { foreignKey: 'user_id' })
  declare userCompanies: HasMany<typeof UserCompany>

  @manyToMany(() => Company, {
    pivotTable: 'mst_user_companies',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'company_id',
  })
  declare companies: ManyToMany<typeof Company>
}