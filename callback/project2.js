function greeting(name){
    console.log('Hello!'+" "+ name);
}
function processUserInput(callback){
    var name="Shikha";
    callback(name);
}
processUserInput(greeting);