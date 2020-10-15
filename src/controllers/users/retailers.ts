/* GET home page. */

import { NextFunction, Request, Response } from "express";
import { RetailerValidation } from "../../commons/utils";
import { IRetailer, Retailer } from "../../models/retailer";

export const addRetailer = async (req: Request, res: Response,next:NextFunction) => {
    try {
        await RetailerValidation.validateAsync(req.body);
        const { checkIn, checkOut, date, } = req.body;;
        const isAlreadyAllocated = await Retailer.countDocuments({checkIn, checkOut, date});
        if (!isAlreadyAllocated) {
            const userDetails: IRetailer | any = await Retailer.create(req.body);
            if (userDetails) {
                res.json(userDetails)
            } else {
                throw new Error('Something Went Wrong!!!!');
            }
        } else {
            throw new Error('Already assigned a user for this time slot');
        }
    } catch (e) {
        next({status:409,message:e.message||"Error!"})

    }
}

