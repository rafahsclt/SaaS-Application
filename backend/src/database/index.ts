import { createConnection } from 'typeorm'

import DatabaseSeed from './seeds/DatabaseSeeder'

const connect = async () => {
    await createConnection()
    await DatabaseSeed()
}

connect()