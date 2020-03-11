
const JsonService = require('../../common/services/json.service');


exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        let tasks;
        JsonService.getTasks().then((data) => {
            tasks =  data.tasks;
            if (tasks && tasks.length) {
                let task = tasks.find(o => o.id === id);
                if (job)
                    resolve(tasks)
                else
                    reject(tasks)
            }
        });
    });
}

exports.list = () => {

        return new Promise((resolve, reject) => {
            let tasks;
            JsonService.getTasks().then((data)=>{
                tasks = data.tasks;
                console.log(tasks)
            if(tasks && tasks.length){
                resolve(tasks);
            }else{
                reject(tasks)
            }
        });
   });


};
