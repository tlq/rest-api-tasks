

const JsonService = require('../../common/services/json.service');


exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        let jobs;
        JsonService.getJobs().then((data) => {
            jobs = data;
            if (jobs && jobs.length) {
                let job = jobs.find(o => o.id === id);
                if (job)
                    resolve(job)
                else
                    reject(job)
            }
        });
    });
}

exports.list = () => {

        return new Promise((resolve, reject) => {
            let jobs;
            JsonService.getJobs().then((data)=>{
                jobs = data;
            if(jobs && jobs.length){
                resolve(jobs);
            }else{
                reject(jobs)
            }
        });
   });


};
