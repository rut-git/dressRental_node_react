const Dress = require('../models/Dress');
const createDress=async(req,res)=>{
  const {name,description,sizes,price,quantity,rented} = req.body
  if (!name || !sizes ||!price || !quantity) {
      return res.status(400).json({message:'required field is missing'})
      }
  
  const imageUrl = req.file.path;
  const dress = await Dress.create({name,description,sizes,price,images:imageUrl,quantity,rented})
  if(dress){
     return res.status(201).json({success:true,
          message:`dress ${dress.name} created successfuly`,
          })
  }
  else
      return res.status(400).json({message:"failed"})
    
}


const getDresses=async(req,res)=>{
  const dresses=await Dress.find().lean()
  if(!dresses)
  {
    res.status(500).json({ error: error.message });
  }

  return res.status(200).json(dresses);

}

const getDressById=async(req,res)=>{
  const {_id}=req.params
  const dress=await Dress.findById(_id).lean()
  
  if(!dress)
  {
    return  res.status(401).json({message:"not found"})
  }
  return res.json(dress)
  }

const updateDress=async(req,res)=>{
  const {_id}=req.params
    const {name,description,sizes,price,images,quantity,rented}=req.body
    const dress=await Dress.findById(_id).exec()
    if(!dress){
    return res.status(401).json({message:"not found"})
    }

        if(description){
            dress.description=description
        }
        if(name){
            dress.name=name;
        }
        if(sizes){
          dress.sizes=sizes;
        }
        if(price)
        {
            dress.price=price;
        }
        if(images)
          {
              dress.images=images;
          }
        if(quantity)
          {
              dress.quantity=quantity;
          }
        if(rented)
          {
                dress.rented=rented;
          }
          
    
        const MyUpdateDress=await dress.save()
        return res.status(201).json({success:true,
            message:`dress ${dress.name} updated successfuly`,
            })
 

}

const deleteDress=async(req,res)=>{
  const {_id}=req.params
  const dress=await Dress.findById(_id).exec()

if(!dress){
  return res.status(401).json({message:"not found"})

  }
      await dress.deleteOne()
      return res.status(201).json({success:true,
          message:`one dress deleted successfuly`
          })
     
     }

const rentedDress=async(_id)=>{
  const dress=await Dress.findById(_id).exec()
  if(!dress){
    return false
      }
     
      dress.rented=dress.rented+1;
     
      const MyUpdateDress=await dress.save()
      return true;

}
const unRentedDress=async(_id)=>{
  const dress=await Dress.findById(_id).exec()
  if(!dress){
    return false
      }
     
      dress.rented=dress.rented-1;
     
      const MyUpdateDress=await dress.save()
      return true

}
module.exports = {createDress,getDresses,getDressById,updateDress,deleteDress,rentedDress,unRentedDress}