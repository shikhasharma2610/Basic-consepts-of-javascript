function factorial(n){
    if((n===0)||(n===1)){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
var a,b,c,d,e;
a=factorial(1);
b=factorial(2);
c=factorial(3);
d=factorial(4);
e=factorial(5);
console.log("a",a,"b",b,"c",c,"d",d,"e",e)