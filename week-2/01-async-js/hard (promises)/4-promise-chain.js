/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("First Promise");
        }, t * 1000);
      });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Second Promise");
        }, t * 1000);
      });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Third Promise");
        }, t * 1000);
      });
}

function calculateTime(t1, t2, t3) {
    const starttime= new Date().getTime();
    return wait1(t1)
    .then(()=>{
        console.log("first promise done")
        return wait2(t2);
    })
    .then(()=>{
        console.log("second promise done")
        return wait3(t2);
    })
    .then(() => {
        console.log("third promise done")
        const endtime = new Date().getTime();
        console.log(endtime-starttime)
        return endtime-starttime;
    });
}

calculateTime(1,2,3)
module.exports = calculateTime;
