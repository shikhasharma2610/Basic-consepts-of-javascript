async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve("resolved");
    });
    try{
        let result=await myPromise;
        console.log(result);
    }
    catch(error){
        console.log("error");
    }

}
myDisplay();