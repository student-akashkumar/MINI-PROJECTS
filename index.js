const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JS")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Accept post request
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// about
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
//Home
app.get("/home", (req, res)=>{
    res.render("home.ejs");
})
// Contact
app.get("/contacts", (req, res)=>{
    res.render("contact.ejs");
})

app.get("/", (req, res)=>{
    res.render("home.ejs");
});
app.post("/register", (req, res) => {
    let {user} = req.body;
    // res.send(`Welcome ${user}`);
    res.render("user.ejs", {user});
});
app.use((req, res)=>{
    res.status(404).send("page not found")
});

app.listen(port, ()=>{
    console.log(`The app is listening on port ${port}`);
})