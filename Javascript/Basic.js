console.log("Hello,World!!");
//varibale in javascript
let age =24;
let nam="Mahesh";
console.log(age);
console.log(nam);
//let,const,var
//var-->A Gobal Scope Variable 
//let-->A Block Scope Variable,but can be updated
//const-->A Block Scope Variable,but cannot be updated
//objects in javascript
const student={
    fullName:"Mahesh Birajdar",
    age:20,
    cgpa:8.3,
    ispass:true,
};
console.log(student.fullName,student.ispass);
console.log(student["cgpa"]);
console.log(typeof(student.age));
// == -->Checks the value present in container only it doesn't check the type of container
// === -->Checks the value present in container and checks the type of container also
console.log((5=="5")&&(5===5));//true
//alter is used to give message pops on the screen
//prompt is used to give message as well as take the input from user
let x=student.fullName.length;
console.log(x);
let output=`The Cgpa of ${student.fullName} is ${student.cgpa}`;
console.log(output);
// In javascript Strings are immutable
//string method
//1.str.slice(start,end?)-->returns part of string
//?-->not complusory
//2.str.concat(str2)-->joins str2 with str
//3.str.replace(searchval,newval)
//4.str.charAt(idx)
