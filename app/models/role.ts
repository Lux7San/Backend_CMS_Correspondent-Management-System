import { MstRoleSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Role extends MstRoleSchema {
    static table = 'mst_roles'

    @hasMany(() => User, { foreignKey: 'roleId' })
    declare users: HasMany<typeof User>
}