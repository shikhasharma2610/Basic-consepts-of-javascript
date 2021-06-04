function mydisplayer(some){
    console.log(some);
}
function mycalculator(num1,num2,callback){
    var sum=num1+num2;
    callback(sum);
}
mycalculator(2,3,mydisplayer);