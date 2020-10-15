import {Router} from "express";
import {login} from "../controllers/users/users";
import {addRetailer} from "../controllers/users/retailers";
import middleware from "../hooks";
const router = Router();
/* USER CRUD . */
router.post('/users/retailer',middleware(['sales-head']), addRetailer);
router.post('/users/login', login);
export default router
