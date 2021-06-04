var e=10;
function sum(a){
    return function sum2(b){
        return function sum3(c){
            return function sum4(d){
                return a+b+c+d+e;
            }
        }
    }
}
var s1=sum(1);
var s2=s1(2);
var s3=s2(3);
var s4=s3(4);
console.log(s4);

