import mongoose from "mongoose";


export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    surname: string;
    password: string;
    createdAT: Date;
    updatedAT: Date;
}
