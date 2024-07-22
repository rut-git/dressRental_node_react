const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');


const dressSchema = new Schema({
  name: { 
          type: String, 
          required: true 
  },
  barcode: {
        type: String,
        default: uuidv4,  // ברירת מחדל יוצרת מזהה ייחודי
        unique: true  // וודא שהברקוד יהיה ייחודי
  },
  description: { 
          type: String, 
  },
  sizes: { 
          type: [String], 
          required: true 
  },  
  price: { 
          type: Number, 
          required: true 
  },
  images: { 
          type: [String], 
  }, 
  quantity: { 
          type: Number, 
          required: true 
  },  // כמות השמלות הזמינות
  rented: { 
          type: Number, 
          default: 0 
  }         // כמות השמלות המושכרות
},
    
{
    timestamps:true
    });

module.exports = mongoose.model('Dress', dressSchema);


