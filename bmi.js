function calc()
{
let mass1=document.getElementById("mark").value;
console.log(mass1);
let height1=document.getElementById("mark1").value;
console.log(height1);

let mass2=document.getElementById("john").value;
console.log(mass2);
let heignkjlht2=document.getElementById("john1").value;
console.log(height2);

let marks=mass1/(height1*height1);
let marks1=Math.ceil(marks);
console.log(marks1); 
 
let johns=mass2/(height2*height2);
let johns1=Math.ceil(johns);

console.log(johns1);

if(marks1>johns1)
{
    alert("Mark's BMI " +marks1+ " is higher than John's BMI " +johns1);
}
else{
    alert("John's BMI " +johns1+ " is higher than Mark's BMI " +marks1);
}
}