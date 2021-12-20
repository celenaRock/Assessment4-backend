
const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.




app.use(express.static("public"));

const PORT = process.env.PORT || 4000
const { home, artist, project, getComments, createComment } = require('./controller.js')



app.get("/", home);

app.get("/artist", artist);
app.get("/project", project);
app.get("/comments", getComments);
app.post("/comments", createComment);


app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stylesheets"));
});

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "public/js"));
});

app.get("/api/comments/", (req, res) => {
  const comments = ""
}


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
          
  ];

 

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];



  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = [ "Because you demand more from yourself, others respect you deeply.",
  "Change is happening in your life, so go with the flow!",
  "All your hard work will soon pay off.",
  "An inch of time is an inch of gold.",
  "All will go well with your new project."
 ];

  // choose random fortune
  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex2];

  res.status(200).send(randomFortune);
  
});




app.listen(4000, () => console.log("Server running on 4000"));
