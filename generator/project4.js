function* myGenerator(){
    yield 1;
    yield 2;
}
let iterable=myGenerator();
let result;
while(!iterable.next().done){
    result=iterable.next();
    console.log(result);
}