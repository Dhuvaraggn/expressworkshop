const Movie = require("../models/movies.model");

const GetMovies = async(req, res)=>
{
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.send("error in getting movies")
    }
}
module.exports = { GetMovies }
