function counter(a){
    var variable=3;
    return {
        add: function(){
            return a+variable
        },
        subtract: function(){
            return a-variable
        }
    }
}

var mycounter=counter(10);
var add=mycounter.add();
var sub=mycounter.subtract();
console.log(add);
console.log(sub);