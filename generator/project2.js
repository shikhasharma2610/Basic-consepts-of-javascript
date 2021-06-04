function* anotherGenerator(name){
    yield `From Another Generator, ${name}`
}
function *myGenerator(name){
    yield `Hi ${name}`;
    yield* anotherGenerator(name);
    yield 'Bye!'
}
let gen=myGenerator('shiv');
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
