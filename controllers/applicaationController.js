function appIndex(req, res) {
    res.send('Hello from the application index page')
}

module.exports = {
    index: appIndex,
};