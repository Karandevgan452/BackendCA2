const express = require("express");
const mongoose = require("mongoose");

const app = express();

const UserSchema = new mongoose.Schema({
  Username: { type: String },
  Email: { type: String },
  Password: { type: String },
  DateOfBirth: { type: String },
});

const user = mongoose.model("User", UserSchema);

const PORT = 3010;

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { Username, Email, Password, DateOfBirth } = req.body;

  if (!Username) return res.send("Username cannot be empty");

  if (!Email) return res.send("Email cannot be empty");
  if (Password.length > 16 || Password.length < 8)
    return res.send(
      "Password length should be greater than 8 or less than or equal to 16"
    );

    res.status(200).json({
      Username,
      Email,
      Password,
      DateOfBirth,
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
