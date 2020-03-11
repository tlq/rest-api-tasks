const fs = require("fs");

exports.getJobs = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./common/data/tasks.json", (err, data) => {
            if (err) {
                reject(err);
            }
            if (data) {
               let jobs = JSON.parse(data);
                resolve(jobs.body);
            }
        });
    });
};
