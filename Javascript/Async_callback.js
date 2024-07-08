// Async wait>>promise chains>>callback hell

// setTimeout

console.log("one");
console.log("two");
setTimeout(() => {
    console.log("goo");
}, 4000) //4s=4000ms-->this will wait four seconds to run this code
console.log("three");
console.log("four");
console.log("five");

// callback Hell
/* Nested callbacks stacked below one another forming 
a pyramid structre(Pyramid Doom)
*This style of programming becomes difficult to understand
and manage*/

function getdata(data, nextdata) {
    setTimeout(() => {
        console.log(data);
        if (nextdata) {
            nextdata();
        }
    }, 3000); //3000ms-->3s
}
// callback Hell
getdata(1, () => {
    console.log("Getting data2....");
    getdata(2, () => {
        console.log("Getting data3....");
        getdata(3, () => {
            console.log("Getting data4....");
            getdata(4);
        });
    });
});

// Promises-->Solution for callback Hell
// 3 conditons or states
// 1.Pending
// 2.resolved
// 3.rejected
let promise=new Promise((resolve,reject)=>{
    console.log("I am a Promise");
    resolve("Success");
    // reject("Some error occurred");
    /*resolve and reject are callbacks provided by js */
});

// if promise is success then we use variable.then(()=>{
//  perform some operation });
// if promise is reject then we use variable.catch(()=>{
//  preform some operation});

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("Success");
        reject("network error");
    });
};
let promise=getpromise();
promise.then((res)=>{
    console.log("Promise has recived",res);
});
promise.catch((err)=>{
    console.log("Promise has rejected",err);
});
// Promise Chain
let async1 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("Success");
        }, 4000);
    });
};
// console.log("data1......");
async(1).then((res) => {
    // console.log("res",res);
    console.log("data2.....");
    async(2).then((res) => {
        console.log("data3.....");
        async(3).then((res) => {
            console.log(res);
        });
    });
});
// alternate for Promise Chain
console.log("data1....");
async(1).then((res)=>{
    console.log("data2.....");
    return async(2);
}).then((res)=>{
    console.log("data3.....");
    return async(3);
}).then((res)=>{
    console.log(res);
})
// Async-Await;
// Async Function always returns a promise
// async function myFun(){....}(syntax);
// Await pauses the exceution of its surronding async function until the promise is settled

async function getAlldata(){
    console.log("data1....");
    await async1(1);
    console.log("data2....");
    await async1(2);
    console.log("data3....");
    await async1(3);
    console.log("data4....");
    await async1(4);
}
getAlldata();
// iife are immediatly call function then are their in the definatin only
(async function(){
    console.log("data1....");
    await async1(1);
    console.log("data2....");
    await async1(2);
    console.log("data3....");
    await async1(3);
    console.log("data4....");
    await async1(4);
})();
// draw back:we can't reuse in future we have to copy paste the code for the function


