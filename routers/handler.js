const routerHandler = (app) => {
    app.use('/', require('./home.js'));
    app.use('/game', require('./game.js'));
    app.use('/summary', require('./summary.js'));
}

module.exports = routerHandler;