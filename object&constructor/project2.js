function Person(){
    this.name='John';
    this.age=24;
    this.greet=function(){
        console.log("Hello "+ this.name);
    }
}

const person1=new Person();
person1.greet();