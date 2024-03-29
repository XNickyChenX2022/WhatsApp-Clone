import mongoose from 'mongoose'
import Pusher from 'pusher'

async function connectDB() { 
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI);
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
}
export default connectDB