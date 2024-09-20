const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");

app.use(express.json());
app.use(express.static('public')); 


mongoose.connect("mongodb+srv://jhaadarsh234:hmHFTtLXQRXEmvXE@learning.jt8hd.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.post("/signup", async function (req, res) {
    try {
        const { email, password, name } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

       
        await UserModel.create({
            email,
            password: hashedPassword,
            name
        });

        res.json({
            message: "You are signed up!!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error during sign up",
            error: error.message
        });
    }
});


app.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(403).json({ message: "Incorrect credentials!" });
        }

     
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({ message: "Incorrect credentials!" });
        }

        
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

        res.json({ token });
    } catch (error) {
        res.status(500).json({
            message: "Error during sign in",
            error: error.message
        });
    }
});

// Todos creation route
app.post("/todos", auth, async function (req, res) {
      const userId = req.userId;
      const task = req.body.task;
      const done= req.body.done;

      await TodoModel.create({
          userId,
          task,
          done
      });

      res.json({
          message: "Todo created successfully!"
      });
});


app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({ userId });
    res.json({todos});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
