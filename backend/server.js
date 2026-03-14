const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contactForm")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema + Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

// API Route
app.post("/contact", async (req, res) => {
  try {
    const newMsg = new Contact(req.body);
    await newMsg.save();

    res.json({ message: "Message Saved Successfully!" });
  } catch (err) {
    res.json({ message: "Error saving message" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
