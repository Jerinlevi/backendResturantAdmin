const menuItems=require('../models/menuItem')
const getMenu=async(req,res)=>{
try{
    const {category,isAvailable,minPrice,maxPrice}=req.query
    const filtered={}
    if (category) filtered.category=category
    if(isAvailable!==undefined) filtered.isAvailable=isAvailable===true
    if (minPrice || maxPrice){
        filtered.price={}
        if(minPrice) filtered.price.$gte=Number(minPrice)
        if(maxPrice) filtered.price.$lte=Number(maxPrice)
    }
    const items=await menuItems.find(filtered).sort({createdAt:-1})
    res.json(items)
}catch(error){
    res.status(500).json({message:error.message})
}
}
const menuById=async(req,res)=>{
    try{
        // const MenuItem=require('../models/menuItem')
        const item=await menuItems.findById(req.params.id)
        res.json(item)

    }catch(error){
        res.status(404).json({message:'Menu Item not found'})
    }
}
const searchMenu=async(req,res)=>{
    try{
        const q=req.query.q
        if (!q){
            return res.json([])
        }
        const items=await menuItems.find({
            $text:{$search:q}
        })
        res.status(200).json(items)
    }catch (error) {
        res.status(500).json({ message: error.message })
      }
}
const createMenuItem=async(req,res)=>{
    try{
        const menuItem=await menuItems.create(req.body)
        res.status(200).json(menuItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
      }
}
const updateMenuItem=async(req,res)=>{
    try{
        const itm=await menuItems.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(itm)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
const deleteMenuItem=async(req,res)=>{
    try{
        await menuItems.findByIdAndDelete(req.params.id)
        res.json({message:"Menu Item Deleted Successfully"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
const toggleAvailability=async(req,res)=>{
    try{
        const item=await menuItems.findById(req.params.id)
        if (!item){
            return res.status(404).json({ message: 'Menu item not found' })
        }
        item.isAvailable= !item.isAvailable
        await item.save()
        res.json(item)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


module.exports={
    getMenu,
    menuById,
    searchMenu,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    toggleAvailability

}