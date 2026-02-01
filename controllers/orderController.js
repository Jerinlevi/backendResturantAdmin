const menuItem = require('../models/menuItem')
const Order = require('../models/orderItem')


const getOrders = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query

    const filter = {}
    if (status) filter.status = status

    const orders = await Order.find(filter)
      .populate('items.menuItem','name category price') 
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))

    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.menuItem','name category price')

    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



const createOrder = async (req, res) => {
  try {
    const { items, customerName, tableNumber } = req.body

    let totalAmount = 0
    const validatedItems = []

    for (const item of items) {
      const menu = await menuItem.findById(item.menuItem)
      if (!menu) {
        return res.status(400).json({ message: 'Invalid menu item' })
      }

      validatedItems.push({
        menuItem: menu._id,
        // quantity: item.quantity,
        // price: menu.price
      })

      totalAmount += menu.price * item.quantity
    }

    const order = await Order.create({
      orderNumber: `ORD-${Date.now()}`,
      items: validatedItems,
      totalAmount,
      customerName,
      tableNumber
    })

    res.status(201).json(order)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}


const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    order.status = status
    await order.save()

    res.json({message:"Order Status Updated"})
  } catch (error) {
    res.status(400).json({ message:"Invalid status" })
  }
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus
}