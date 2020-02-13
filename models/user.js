// Keep track of users here (no database)
const users = [];

function userIndex () {
    // return page of user info to client
    return users;
}

function createUser(newUser) {
    users.push(newUser);
    
}

module.exports = {
    index: userIndex,
    new: userNew,
    create: createUser
};