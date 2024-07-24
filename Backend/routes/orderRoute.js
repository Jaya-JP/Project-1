import express from 'express'
import authMiddleware from '../middleware/authentication.js'
import { listOrders, placeOrder, updateStatus, userOrder, verifyOrder } from '../controllers/ordelController.js'

const orderRouter = express.Router()

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware, userOrder);
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)


export default orderRouter;