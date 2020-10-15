import jwt from "jsonwebtoken";
const Joi = require('joi');

export enum DB_COLLECTION_NAMES {
    USER_COLLECTION = "userCollection",
    RETAILER_COLLECTION = "retailerCollection",

}

export enum DB_MODEL_NAMES {
    USER_MODEL = "userModel",
    RETAILER_MODEL = "retailerModel",

}


export const generateToken = async (payloadData: any) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payloadData, 'ENCRYPTION_KEY', { expiresIn: "1d" }, (err: any, token: any) => {
            console.log(token);
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    });
};

export const decodeToken = async (token: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const decoded: any = jwt.verify(token, 'ENCRYPTION_KEY');
            console.log(decoded);
            resolve(decoded);
        } catch (err) {
            reject(err);
        }
    });
};

// export const validateObject = async (object: any) => {
//     return new Promise(async (resolve, reject) => {
//         try {

//             resolve(decoded);
//         } catch (err) {
//             reject(err);
//         }
//     });
// };

export const RetailerValidation = Joi.object({
    name: Joi.string()
        .required(),

    checkIn: Joi.string()
        .pattern(new RegExp('([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*([AaPp][Mm])'))
        .required(),

    checkOut: Joi.string()
        .pattern(new RegExp('([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*([AaPp][Mm])'))
        .required(),

    date: Joi.string()
        .isoDate()
        .required(),
})