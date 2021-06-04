function map(cuberoot,number)
{
    let result=[];
    for(let i=0;i<number.length;i++){
        result[i]=cuberoot(number[i])
    }
    return result;

}
function cuberoot(num){
    return num*num*num
}
let number=[0,1,2,5,10];
let cube=map(cuberoot,number);
console.log(cube);