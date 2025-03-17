const express = require('express')
const sequelize = require('./src/config/db.config')
const movieRouter = require('./src/router/movies.route')
const userRouter = require('./src/router/users.route')
const healthRouter = require('./src/router/health.route')
const Movie = require('./src/models/movies.model')
const User = require('./src/models/users.model')
const Review = require('./src/models/reviews.model')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

//Register routes
app.use("/api/movies", movieRouter)
app.use("/api/users", userRouter)
app.use("/api/dbhealth", healthRouter )
app.get("/api/health", async (req, res) => {
  res.send("Http Request Received")
})

// associations
Review.belongsTo(User,{foreignKey: "userId", as: "user"})
Review.belongsTo(Movie,{ foreignKey: "movieId", as: "movie"})
User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
Movie.hasMany(Review, { foreignKey: "movieId", as: "reviews" });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database connected & synchronized.");
    app.listen(port, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((error) => console.error("Database connection error:", error));

