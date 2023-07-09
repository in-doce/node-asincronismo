// const promise = new Promise((resolve, reject) => {
//     resolve('success');
//     reject('error');
// });

const cows = 5;

const countCow = new Promise((resolve, reject) => {
    if (cows >= 10) {
        resolve(`We have more than 10 cows, ${cows} cows`);
    } else {
        reject('We have less than 10 cows');
    }
});
countCow.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Task is done');
});