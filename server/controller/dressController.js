const Dress = require('../models/Dress');

// יצירת שמלה חדשה
const createDress = async (req, res) => {
  try {
    const newDress = new Dress(req.body);
    await newDress.save();
    res.status(201).json(newDress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// קבלת כל השמלות
const getDresses = async (req, res) => {
  try {
    const dresses = await Dress.find();
    res.status(200).json(dresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// קבלת שמלה לפי ID
const getDressById = async (req, res) => {
  try {
    const dress = await Dress.findById(req.params.id);
    if (!dress) return res.status(404).json({ error: 'Dress not found' });
    res.status(200).json(dress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// עדכון שמלה
const updateDress = async (req, res) => {
  try {
    const updatedDress = await Dress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDress) return res.status(404).json({ error: 'Dress not found' });
    res.status(200).json(updatedDress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// מחיקת שמלה
const deleteDress = async (req, res) => {
  try {
    const deletedDress = await Dress.findByIdAndDelete(req.params.id);
    if (!deletedDress) return res.status(404).json({ error: 'Dress not found' });
    res.status(200).json({ message: 'Dress deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {createDress,getDresses,getDressById,updateDress,deleteDress}