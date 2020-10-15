/* GET home page. */

import {NextFunction, Request, Response} from "express";
import { generateToken } from "../../commons/utils";
import {UserModel} from "../../models/users";

export const login = async (req: Request, res: Response,next:NextFunction) => {
    console.log("here");
    
    try {
        const {userName, password} = req.body
        const userDetails:any = await UserModel.findOne({userName, password}).lean()
        console.log(userDetails);
        
        if (userDetails) {
            userDetails.token = await generateToken(userDetails);
            res.json(userDetails);
          } else {
            throw  Error('Invalid Username Or password!!');
          }
    } catch (e) {
        console.log(e);
        next({status:400,message:e.message})
    }
}



(async function () {
    if (!await UserModel.countDocuments()) {
      await UserModel.create({ name: 'Bivin Vinod', userName: 'bivin', password: 'bivin' });
    }
  })();
