const JobsController = require('./controllers/task.controller');




exports.routesConfig = function (app) {
    app.get('/tasks', [
        JobsController.list
    ]);
    app.get('/tasks/:id', [
        JobsController.getById
    ]);
};
