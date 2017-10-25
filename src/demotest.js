var constantize = (obj) =>{
    Object.freeze(obj);
    Object.keys(obj).forEach((key,i) => {
        if(typeof obj[key] === 'object'){
            constantize(obj[key]);
        }
    })
}
console.log(constantize);
var getGlobal = function () {
    if (typeof self !== 'undefined'){return self;}
    if (typeof window !== 'undefined'){return window;}
    if (typeof global !== 'undefined'){return global;}
    throw new Error('unable to locate');
};
//console.log(getGlobal());
var promise = new Promise(function (resolve,reject) {
    console.log('promise');
    resolve();
});
promise.then(function () {
    console.log('resolved');
})
console.log('hi');

function timeout(ms) {
    return new Promise((resolve,reject) =>{
        if (true){
            setTimeout(resolve,ms,'done');
        }
        else{
            setTimeout(resolve,ms,'fail');
        }
    });
}
timeout(1000).then((value) => {
    console.log(value)},(value) => {console.log(value)
});