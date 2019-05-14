const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Got you connected on port" + PORT);
})


  app.use(express.static(__dirname + '/client/build/'));

  app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
