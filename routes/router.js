const express = require("express");
const router = express.Router();

// Already existing GET route
router.get("/new", (req, res) => {
  res.render("form");
});

// 🆕 NEW POST route to handle form data
router.post("/new", (req, res) => {
  const author = req.body.author;
  const message = req.body.message;

  // Do something with author and message (e.g., add to array, save to DB)

  req.app.locals.messages.push({
    text: message,
    user: author,
    added: new Date()
  });

  // After handling the data, maybe redirect to the homepage
  res.redirect("/");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const messages = req.app.locals.messages;

  if (id >= 0 && id < messages.length) {
    const message = messages[id];
    res.render("messageDetail", { message });
  } else {
    res.status(404).send("Message not found");
  }
});


module.exports = router;