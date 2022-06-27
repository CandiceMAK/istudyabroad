const express = require("express");
const app = express();
const mongoose = require("mongoose");
var objectId = require("mongoose").Types.ObjectId();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
const dotenv = require("dotenv");
dotenv.config();
// const authRoute = require("./routes/auth-route");
// const profileRoute = require("./routes/profile-route");
// const exShopRoute = require("./routes/exShop-route");
const search = require("./routes/search-route");
// const orderRoute = require("./routes/order-route");
// const portfolioRoute = require("./routes/portfolio-route");
// const txnRoute = require("./routes/txn-route");

// require("./config/passport");
// const passport = require("passport");
// const session = require("express-session");
// const flash = require("connect-flash");

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to mongodb atlas.");
  })
  .catch((err) => {
    console.log(err);
  });

  // middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( express.static( "public" ) );


// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(flash());
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });


// //Route
// app.use("/auth", authRoute);
// app.use("/profile", profileRoute);
// app.use("/exShop", exShopRoute);
app.use("/course", search);
// app.use("/order", orderRoute);
// app.use("/portfolio", portfolioRoute);
// app.use("/txn", txnRoute);

// app.get("/", (req, res) => {
//   res.render("index", { user: req.user });
// });

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});