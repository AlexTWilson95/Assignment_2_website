var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home', activePage: "" });
});

/* GET about page */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me', activePage: "about" });
});

/* GET projects page */
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects', activePage: "projects" });
});

/* GET contact page */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me', activePage: "contact" });
});

router.post("/contact", function (req, res) {
  const { name, email, message } = req.body;

  const entry = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  // Load current messages
  let messages = [];
  if (fs.existsSync("messages.json")) {
    messages = JSON.parse(fs.readFileSync("messages.json"));
  }

  // Add the new one
  messages.push(entry);

  // Save back to file
  fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));

  res.render("contact_success", { name, title: "Message Sent", activePage: "" });
});

router.get("/admin/messages", function (req, res) {
  let messages = [];

  if (fs.existsSync("messages.json")) {
    messages = JSON.parse(fs.readFileSync("messages.json"));
  }

  res.render("messages", { messages, title: "Saved Messages", activePage: "" });
});


module.exports = router;

