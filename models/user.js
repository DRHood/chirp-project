// Keep track of users here (no database)
const users = [];

function userIndex () {
    // return page of user info to client
    return users;
}

function showUser(index) {
    return users[index];
}

function createUser(newUser) {
    users.push(newUser);   
}

function deleteUser(index) {
    user.splice(index, 1);
}

module.exports = {
    index: userIndex,
    user: showUser,
    create: createUser,
    delete: deleteUser
};