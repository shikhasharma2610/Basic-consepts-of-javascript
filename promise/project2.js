let promise=new Promise((resolve,reject)=>{
    let x=0;
    if(x==0){
        resolve("Ok");
    }
    else{
        reject("error");
    }
});
promise.then(value => {console.log(value)}).catch((err)=>console.log(err))