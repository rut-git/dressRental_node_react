const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const dressSchema = new Schema({
  name: { 
          type: String, 
          required: true 
  },
  description: { 
          type: String, 
          required: true 
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
          required: true 
  }, 
  quantity: { 
          type: Number, 
          required: true 
  },  // כמות השמלות הזמינות
  rented: { 
          type: Number, 
          default: 0 
  }         // כמות השמלות המושכרות
});

module.exports = mongoose.model('Dress', dressSchema);


