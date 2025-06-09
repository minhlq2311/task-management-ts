// Kết nối với CSDL MongoDB sử dụng MongoDBCompass
import mongoose from "mongoose";

const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect Error");
    }
}

export { connect };

