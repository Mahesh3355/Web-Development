let marks=[97,98,99,90,96];
for(let mark of marks)
{
    console.log(mark);
}
//push-->push the element
//pop-->pop the element
// to.string --> converts it string and will not change in existing array
// concat --> concat array to array
// unshift--> adds the element to front
// shift-->removes the elment fromt front
// slice-->returns piece of the array (doesn't change original array)
// splice change original array (idx,number of elemnts to remove,add elements.....);
marks.splice(1,0,99,99);
console.log(marks);

//finction
function f(a,b)
{
    return a+b;
}
console.log(f(1,2));
// Arrow function are part fo modern day javascript
// syntax:
// const or let function_name=(parameters.....)=>{//do some work}
const x=(a,b)=>{
    return a+b;
}
console.log(x(69,1));
// Callback function is a function passed as an agrument to another function
//doing work on each element and will not return anything
marks.forEach((a)=>{console.log(a*a)});
console.log(marks);
//Higher order func are those func that returns any func or takes func as parameter

// map methode returns a new array
let newarray=marks.map((a)=>{return a*a});
console.log(newarray);
// filter methode fliters the elements based on written condition
newarray=marks.filter((a)=>{return a&1;})
console.log(newarray);
//reduce function for maximum element in array
const max=marks.reduce((re,cu)=>{ return re>cu ? re : cu ;});
console.log(max);
