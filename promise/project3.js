const promiseA=new Promise((resolve,reject)=>{
    resolve(77);
})
promiseA.then((val)=>{
    console.log(val)
})