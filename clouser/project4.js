function secretpassword(){
    var password='xh38k';
    return function guessPassword(guess){
            if(guess===password){
                return true;
            }
            else{
                return false;
            }

        }
    
}
var passwordgame=secretpassword();
var result=passwordgame("xh38k")
console.log(result)