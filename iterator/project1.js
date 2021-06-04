function myiterator(array){
    let counter=0;
    return {
        next: function(){
            if(counter<array.length){
                counter++;
                return{
                    done:false,
                    value:counter
                };
            }else{
                return{
                    done:true,
                    value:undefined
                }
            }
        }
    }
}
var arr=[1,2,3,4,5]
var value=myiterator(arr);
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value);
