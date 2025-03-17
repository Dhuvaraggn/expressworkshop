const User = require('../models/users.model')
const GetUsers = async ( req, res) => 
{
    try
    {
        const users = await User.FindAll();
        res.json(users)
    }
    catch( err) 
    {
        res.send(err.message)
    }
}

module.exports = {GetUsers}
