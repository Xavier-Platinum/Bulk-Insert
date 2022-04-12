import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dataModel = new Schema({
    name: String,
    email: String,
    phone: Number,
    gender: String,
    address: String
}, {
    timestamps: true
})

export const Data = mongoose.model("Data", dataModel);