import bodyParser from "body-parser";
import { Router } from "express";
import { findUser } from "../Controller/Login.js";

const loginRoutes = Router()


loginRoutes.post('/',findUser)

export default loginRoutes