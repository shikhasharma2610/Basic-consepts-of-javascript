function numberGenerator(){
    var num=1;
    function checknumber(){
        console.log(num);
    }
    num++;
    return checknumber;
}
var number=numberGenerator();
number();