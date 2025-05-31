const express = require("express");
const path = require("path"); 
const app = express();


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];  

app.locals.messages = messages;


const router = require('./routes/router');

app.use(express.urlencoded({ extended: false }));
app.use('/messages', router); 

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
