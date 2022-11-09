//*****Swap the numbers*****
// let x=410;
// let y=300;
// x=x+y;//10
// y=x-y;//4
// x=x-y;//6
// console.log(x,y);

// *****find the largest number*****
// const arr=[20,200,310];
// let x=Math.max(...arr);
// console.log(x);

//*****Print the even numbers*****
// let x=100;
// for(let i=1;i<=x;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//*****print the odd numbers*****
// let x=100;
// for(let i=1;i<=x;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
    
// async function getUsers()
// {

// let data=await fetch("https://jsonplaceholder.typicode.com/users");
// let jsonData=await data.json();

// localStorage.setItem('user',JSON.stringify(jsonData));
// }
// getUsers();

// let users=JSON.parse(localStorage.getItem('user'));;
// console.log(users);
// let t='<table border="1px"><tr><td>Name</td><td>Email</td></tr>';
// users.map(u => {
//             t+=`<tr><td>${u.name}</td><td>${u.email}</td></tr> `;
            
//     });
//     t+='</table>';
//     document.getElementById('quote').innerHTML=t;

// fetch("https://jsonplaceholder.typicode.com/users").then(x => x.json()).then(y=>{
//     // console.log(y)
//     users=y;
//     // console.log(users);
//     let t='<table border="1px"><tr><td>Name</td><td>Email</td></tr>';
    
//     users.map(u => {
//         t+=`<tr><td>${u.name}</td><td>${u.email}{</td></tr> `;
        
// });
// t+='</table>';
// document.getElementById('quote').innerHTML=t;
//     }) 

 //   console.log('outside then users',users);

//***** Map-Filter-Reduce*****

// const emp=[{id:1,name:"Harish",city:"Madurai",job:"IT"},
//            {id:2,name:"Chinna",city:"Chennai", job:"Lecturer"},
//            {id:3,name:"Anand",city:"Bangalore", job:"IT"},
//            {id:4,name:"Arms",city:"Chennai", job:"Vet"},
//            {id:5,name:"Hari",city:"Madurai", job:"Non-IT"},
//            {id:6,name:"Siva",city:"Chennai", job:"Driving"}];

    
//     // const empCity= emp.map((e)=>e.name+" - "+e.city);
//     // console.log(empCity);

//     let t= "<table border='1px'><tr><td>Name</td><td>city</td><tr>";
//     emp.map(e=>{
//        t+= `<tr><td>${e.name}</td><td>${e.city}</td></tr>`;
//         return t;
//     });
//     document.getElementById("quote").innerHTML=t;
    // t+=</table>;


    // const empName= emp.filter((e)=>e.city=="Madurai");
    // console.log(empName);

    // const number=[81,9,16,25,100];
    // // let sum=number.reduce((e,d)=>e+d);
    // // console.log(sum);

    // const num= number.map(Math.sqrt);
    // console.log(num);

    // function clr(){
    //     document.getElementById("quote").style.color="blue";
    // }
    // let col=document.getElementById("quote").addEventListener("dblclick",clr);


//*****Function******/

// function text(){
//     document.getElementById("quote").innerHTML="some text";
// }
// text();

//***** Anonymous Function******/
// const text=function(){
//         document.getElementById("quote").innerHTML="some text";
// }
// text();

//***** Arrow Function*****/

// const emp=[{id:1,name:"Harish",city:"Madurai",job:"IT"},
//            {id:2,name:"Chinna",city:"Chennai", job:"Lecturer"},
//            {id:3,name:"Anand",city:"Bangalore", job:"IT"},
//            {id:4,name:"Arms",city:"Chennai", job:"Vet"},
//            {id:5,name:"Hari",city:"Madurai", job:"Non-IT"},
//            {id:6,name:"Siva",city:"Chennai", job:"Driving"}];

// let x= emp.map((result) =>result.name );
// console.log(x);

//*****Regular Expression*****

// let a="Javascript is a client-side programming language";
// let b=new RegExp("a","g");
// console.log(a.match(b));









