const TaskService = require('../../common/services/task.service');
const crypto = require('crypto');


exports.list = (req, res) => {
    TaskService.list()
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {

    TaskService.findById(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};
