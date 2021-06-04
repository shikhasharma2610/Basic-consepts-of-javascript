// passing an argument into Generator
function *myGenerator(){
    console.log('Hey',yield)
    console.log('Are you',yield)
}
let gen=myGenerator()
gen.next();
gen.next('tharun');
gen.next("shiv");