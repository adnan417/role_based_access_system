const roles = require('../config/roles.json');

class Role{
    constructor(){
        this.roles = roles.roles;
    }

    getRoleByName(name){
        return this.roles.find((role)=> role.name == name);
    }

    getPermissionsByName(name){
        const role = this.getRoleByName(name);
        if(role!==undefined)
        return role.permissions;
        
        return [];
    }

    getAllRoles(){
        return this.roles;    
    }
}

module.exports=Role;