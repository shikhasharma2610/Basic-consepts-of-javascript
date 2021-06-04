let countvalue=new Promise((resolve,reject)=>{
    reject("promise rejected");
})
countvalue.then((value)=>console.log(value)).catch((err)=>console.log(err));