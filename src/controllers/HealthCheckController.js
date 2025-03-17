const sequelize = require('../config/db.config')

const GetDBHealthCheck = async(req, res)=>
{
    await sequelize.authenticate()
    .then( () => 
    {
        res.send("Database Connected")
    })
    .catch((error) => 
    {
        res.send("Database Not Connected")
    })
}

module.exports = { GetDBHealthCheck }