// DOM:Document Object Model
 // window
 //  |
 //  |
  // Document
  //  |
  //  |
//   html
//  |   |
//  |   |
// head body
// head(meta,meta,title,link) body(div,script)
// div(img,h1,p,div)

//DOM manipulation

//selecting with id
let x=document.getElementById("heading");
console.dir(x);

//selecting with class
let y=document.getElementsByClassName("sp");
console.dir(y);

//selecting with tag
let z=document.getElementsByTagName("p");
console.log(z);

// query selector
let firstEl=document.querySelector("p");//returns first 1st element matching with it whether it would be class,id,or tag
let allEl=document.querySelectorAll("p");//returns ALL elements matching with it whether it would be class,id,or tag
console.dir(firstEl);
console.dir(allEl);
let firstcl=document.querySelector(".sp");
console.dir(firstcl);
let allcl=document.querySelectorAll(".sp");
console.dir(allcl);
let firstid=document.querySelector("#heading");
console.dir(firstid);
let allid=document.querySelectorAll("#heading");
console.dir(allid);
console.dir(firstEl.firstChild);
firstEl.textContent="";
//properties
// 1.tagName //to get tagname 
// 2.innerText // to get  inner text
// 3.innerHTML //to get inner text with html tags
// 4.textContent //to set inner text 
let div=document.querySelector("div");
console.log(div);
// Getting div attribute (id,class,name,.....);
let d_id=div.getAttribute("id");
console.log(d_id);
let d_class=div.getAttribute("class");
console.log(d_class);
let d_name=div.getAttribute("name");
console.log(d_name);
//Setting div attribute (id,class,name,....)
// setAttribute("attr","change_name");
div.setAttribute("class","popcorn");
// SetAttribute methode changes the class but for adding or removing the  class to the 
// existing class we use property call class List
//adding
div.classList.add("hi");
//remove
div.classList.remove("popcorn");
//changing style (qureyselectorelement.style.styleName)
div.style.backgroundColor="red";
div.style.fontSize="90px";
div.innerText=`Hello 1`;


//Insert elements
//1.Create the element;
// document.createElment("tag")
let heading_2=document.createElement("h2");
heading_2.innerHTML="<strong>POKEMON</strong>";
//2.Insert the element
//2.1 in the node but last of the node
document.querySelector("header").append(heading_2);
//2.2 in the node but first of the node
document.querySelector("header").prepend(heading_2);
//2.3 adds before the node (outside) 
document.querySelector("header").before(heading_2);
//2.3 adds after the node (outside) 
document.querySelector("header").after(heading_2);

// Delete element-->node.remove();
document.querySelector("header").remove();
//Append.child() and remove.child();








