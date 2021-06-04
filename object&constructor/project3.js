function Person(person_name,person_age){
    this.name=person_name;
    this.age=person_age;
    this.greet=function(){
        console.log("Hii "+this.name);
    }
}

const person1=new Person("Dan",26);
const person2=new Person("Naomi",24);
person1.greet();
person2.greet();