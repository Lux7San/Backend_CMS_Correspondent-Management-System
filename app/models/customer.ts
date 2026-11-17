import { MstCustomerSchema } from '#database/schema'

export default class Customer extends MstCustomerSchema {
    static table = 'mst_customers'
}