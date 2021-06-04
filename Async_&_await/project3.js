class doubler{
    constructor(num){
        this.num=num;
    }
    then(resolve,reject){
        setTimeout(()=>resolve(this.num*2),2000);
    }
}
async function show(){
    let result=await new doubler(1);
    console.log(result);
}
show();