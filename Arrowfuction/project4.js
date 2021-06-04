function Car(){
    this.speed=0;
    this.speedup=function(speed){
        this.speed=speed;
        setTimeout(()=> {
            console.log(this.speed);
        },1000);
    };
}
let car=new Car();
car.speedup(20);