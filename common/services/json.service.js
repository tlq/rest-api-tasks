const fs = require("fs");

exports.getTasks = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./common/data/tasks.json", (err, data) => {
            if (err) {
                reject(err);
            }
            if (data) {
               let tasks = JSON.parse(data);
                resolve(tasks);
            }
        });
    });
};
