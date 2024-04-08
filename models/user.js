const users = require('../config/users.json');

class User{
    constructor(){
        this.users = users.users;
    }

    getAllUsers(){
        return this.users;
    }

    getUserById(id){
        return this.users.find((user)=> user.id==id);
    }
}

module.exports=User;