import mongoose from "mongoose";

export const connectDb = async ()=> {
    await mongoose.connect('mongodb+srv://638160jp:tHvKyTUljVDQiqGW@cluster0.a0nb23k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/tasty-food').then(()=>console.log("Db connected"));

}
