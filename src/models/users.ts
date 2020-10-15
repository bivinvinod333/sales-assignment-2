import mongoose, { Schema, Document } from "mongoose";
import { DB_COLLECTION_NAMES, DB_MODEL_NAMES } from "../commons/utils";

mongoose.Promise = global.Promise;

export interface IUserDb extends Document {
    name: string;
    userName: string;
    password: string;
    role: string;
    status: Boolean;
}


const UsersSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: 'sales-head',
    },
    status: {
        type: Boolean,
        default: true,
    },
}, { collection: DB_COLLECTION_NAMES.USER_COLLECTION, timestamps: true });

export const UserModel = mongoose.model<IUserDb>(DB_MODEL_NAMES.USER_MODEL, UsersSchema);
