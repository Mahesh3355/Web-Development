//Event handling
let btn1=document.querySelector("#btn1");
let box=document.querySelector('div');
box.onmouseover=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log('Thanks For Visiting!!!')
}
//Event Object
// It is a special object which has details about the event
// All event handlers have access to the Event Object's properties and method

// Event Listeners
// node.addEventListener(event,callback)
btn1.addEventListener("click",()=>{
    console.log("hi");
})
const x=()=>{
    console.log('69')
}
btn1.addEventListener("click",x);
// node.rempveEventListener(event,callback)
btn1.removeEventListener('click',x);
//toggle button for background
let mode="light-mode";
btn1.addEventListener("click",()=>{
    if(!document.body.classList.contains('dark') && !document.body.classList.contains('light') ){
        document.body.classList.add('dark');
    }
    else
    {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    }
})
//Adding Class in element;
// 1-type :element.classList.add(c1,c2,c3,......);
// 2-type : 
// 1st step: create a class array const Array_Name=[c1,c2,...];
// 2nd step: put the array
// ex:
const cls=["foo","bar"];
box.classList.add(...cls);
// Removing Class in element;
// element.classList.remove(c1,c2,....);//this class should be present in the element otherwise it will throw error
const cls1=["boxpp","foo"];
box.classList.remove(...cls1);
// replace element.classList("existing","Replacing one")
box.classList.replace("bar","foo");






