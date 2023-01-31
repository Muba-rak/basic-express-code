require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const employeeRouter = require("./routes/employeeRouter");
//configuring view engine
app.set("view engine", "ejs"); //profile.ejs- myViews
//app.set('views', ''myViews)

//middleware
app.use(express.json()); //parse
app.use(express.urlencoded({ extended: true }));

//app.use((req, res, next)=>{

// next()
//})

//routes
app.use(employeeRouter);

app.get("/create", (req, res) => {
  res.status(200).render("create");
});
//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}..`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


//Nosql - sql - Schema
