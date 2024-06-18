const ContactMessage = require('../models/ContactMessage');

// יצירת הודעת יצירת קשר חדשה
const createContactMessage = async (req, res) => {
  try {
    const newContactMessage = new ContactMessage(req.body);
    await newContactMessage.save();
    res.status(201).json(newContactMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// קבלת כל הודעות יצירת קשר
const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// קבלת הודעת יצירת קשר לפי ID
const getContactMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// עדכון הודעת יצירת קשר
const updateContactMessage = async (req, res) => {
  try {
    const updatedMessage = await ContactMessage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMessage) return res.status(404).json({ error: 'Message not found' });
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// מחיקת הודעת יצירת קשר
const deleteContactMessage = async (req, res) => {
  try {
    const deletedMessage = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!deletedMessage) return res.status(404).json({ error: 'Message not found' });
    res.status(200).json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createContactMessage,getContactMessages,getContactMessageById,updateContactMessage,deleteContactMessage}
