import { User } from './schemas/User'
import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'

const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost/keystone-local'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 365,
    secret: process.env.SECRET,
}

const keystone = config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: dbUrl,
    },
    lists: createSchema({
        User,
    }),
    ui: {
        isAccessAllowed: () => true,
    },
})

export default keystone
