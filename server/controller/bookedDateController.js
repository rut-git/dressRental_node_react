const BookedDate = require('../models/BookedDate');

// יצירת תאריך השכרה חדש
const createBookedDate = async (req, res) => {
  try {
    const newBookedDate = new BookedDate(req.body);
    await newBookedDate.save();
    res.status(201).json(newBookedDate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// קבלת כל תאריכי ההשכרות
const getBookedDates = async (req, res) => {
  try {
    const dates = await BookedDate.find().populate('dress').populate('user');
    res.status(200).json(dates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// קבלת תאריך השכרה לפי ID
const getBookedDateById = async (req, res) => {
  try {
    const date = await BookedDate.findById(req.params.id).populate('dress').populate('user');
    if (!date) return res.status(404).json({ error: 'Booked date not found' });
    res.status(200).json(date);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// עדכון תאריך השכרה
const updateBookedDate = async (req, res) => {
  try {
    const updatedDate = await BookedDate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDate) return res.status(404).json({ error: 'Booked date not found' });
    res.status(200).json(updatedDate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// מחיקת תאריך השכרה
const deleteBookedDate = async (req, res) => {
  try {
    const deletedDate = await BookedDate.findByIdAndDelete(req.params.id);
    if (!deletedDate) return res.status(404).json({ error: 'Booked date not found' });
    res.status(200).json({ message: 'Booked date deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createBookedDate,getBookedDates,getBookedDateById,updateBookedDate,deleteBookedDate}