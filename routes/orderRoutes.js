const express = require('express')
const router = express.Router()

const {
  getOrders,
  updateOrderStatus,
  getOrderById,
  createOrder,
  
} = require('../controllers/orderController')

router.get('/', getOrders)
router.patch('/:id/status', updateOrderStatus)
router.get('/:id',getOrderById)
router.post('/',createOrder)

module.exports = router