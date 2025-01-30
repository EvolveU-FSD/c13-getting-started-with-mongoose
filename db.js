import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI || 'mongodb://localhost:27017/c13-mongoose-testing'

let connectionPromise = null

export async function connect() {
    if (!connectionPromise) {
        console.log('Connecting mongoose')
        console.trace()
        connectionPromise = mongoose.connect(mongo_uri);
    }
    return await connectionPromise
}

export async function disconnectDb() {
    if (connectionPromise) {
        const mongoose = await connectionPromise
        await mongoose.connection.close()
        connectionPromise = null
    }
}
