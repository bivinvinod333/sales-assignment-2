import mongoose, {Schema, Document} from "mongoose";
import {DB_COLLECTION_NAMES, DB_MODEL_NAMES} from "../commons/utils";

mongoose.Promise = global.Promise;

export interface IRetailer extends Document {
    name: string;
    checkIn: string;
    checkOut: string;
    date: string;
    status: string;
}


const RetailerSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
      },
    
      checkIn: {
        type: String,
        required: true,
      },
    
      checkOut: {
        type: String,
        required: true,
      },
    
      date: {
        type: Date,
        required: true,
      },
    
      status: {
        type: Boolean,
        default: true,
      },
}, {collection: DB_COLLECTION_NAMES.RETAILER_COLLECTION, timestamps: true});

// Export the model and return your IUser interface
export const Retailer = mongoose.model<IRetailer>(DB_MODEL_NAMES.RETAILER_MODEL, RetailerSchema);
