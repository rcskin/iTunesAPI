const express = require("express");
const app = express();

//set port to listen on
const PORT = 3001;

const cors = require("cors");
app.use(cors());

//install Helmet security-related middleware
const helmet = require('helmet');
app.use(helmet());


app.get("/api/search", async (req, res) => {
    const media = req.query.media;
    const term = req.query.term;
  
    const result = await fetch(
      `https://itunes.apple.com/search?term=${term}&media=${media}&limit=25`
    );
    const data = await result.json(); //parse the result as JSON
    res.send(data);
  });
  

//start listening
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
