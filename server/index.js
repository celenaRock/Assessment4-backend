const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "Because you demand more from yourself, others respect you deeply.",
           "Change is happening in your life, so go with the flow!",
           "All your hard work will soon pay off.",
           "An inch of time is an inch of gold.",
           "All will go well with your new project."


           
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];



  res.status(200).send(randomCompliment);
  
});
let users = [user1, user2, users]

app.delete('/api/users/:username', (req, res) => {
  let existingUsername  = req.params.username
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === existingUsername) {
      users.splice(i, 1)
      res.status(200).send("User deleted.")
      return
    }
  }
  res.status(400).send("User not found.")
})

const userController = require('./controllers/userController')
app.get('/api/users', userController.getAllUsers)
app.post('/api/users', userController.createUser)
app.put('/api/users/:username', userController.updateUser)
app.delete('/api/users/:username', userController.deleteUser)

app.listen(4000, () => console.log("Server running on 4000"));
