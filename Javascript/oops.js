//Prototype is a object which has build in function for 
// any object,array,..etc;
// if o1 is obejct that has functions f1,f2,f3,...etc;
// then we can inherit it to any other object using prototype method
// and we can access any function in that o1 object 
const employee={
    clactax(o)
    {
        return o/10;
    }
};
const mahesh={
    salary:100000,
};
mahesh.__proto__=employee;
console.log(mahesh.clactax(mahesh.salary));
// If object and prototype have same method,objects method will be used

// classes
class cars{
    constructor(brand,mileage)
    {
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start");
    }
    stop()
    {
        console.log("End");
    }
};
let bmw=new cars("S",1000);
console.log(bmw.brand,bmw.mileage);

//inheritance
//Acessing parent class methode using super keyword
class suzuki extends cars{
    constructor(and,m)
    {
        super(and,m);   //to invoke parent constructor
        console.log("Child Constructor");
        this.and=and;
        this.m=m;
    }
    middle()
    {
        super.start();
        console.log("middle");
        super.stop();
    }
}
let shbusa=new suzuki("lol",100);
console.log(shbusa.brand);
console.log(shbusa.m);
shbusa.middle();

//Error handling 
/* If we have doubt in code so we can write it
in try-->catch block.And try will try it if their 
is error in it then we can see through catch 
function and all other line will run smoothly*/
let a=5,b=5;
console.log(a);
console.log(b);
try{
console.log(a+c);
}catch(err)
{
    console.log(err);
}

console.log(a-b);
console.log(a%b);