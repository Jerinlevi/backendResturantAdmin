const express=require('express')
const router=express.Router()

const {
    getMenu,
    menuById,
    searchMenu,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    toggleAvailability
  }=require('../controllers/menuController')

router.get('/',getMenu)
router.get('/search',searchMenu)
router.get('/:id',menuById)
router.post('/',createMenuItem)
router.put('/:id',updateMenuItem)
router.delete('/:id',deleteMenuItem)
router.patch('/:id/availability',toggleAvailability)
module.exports=router