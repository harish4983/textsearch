function calc(){
let d1= document.getElementById("dr1").value;
console.log(d1);
let d2= document.getElementById("dr2").value;
console.log(d2);
let d3= document.getElementById("dr3").value;
console.log(d3);
let k1= document.getElementById("kr1").value;
console.log(k1);
let k2= document.getElementById("kr2").value;
console.log(k2);
let k3= document.getElementById("kr3").value;
console.log(k3);
 
let davg= (parseInt(d1)+parseInt(d2)+parseInt(d3))/3;
console.log(davg);

let kavg= (parseInt(k1)+parseInt(k2)+parseInt(k3))/3;
console.log(kavg);

if(davg>=100 && kavg>=100)
{
    if(davg==kavg)
    {
        console.log("match is draw");
    }
    else if(davg>kavg){
            console.log("Dolphin Wins");
        }
        else{
            console.log("Koala Wins");
        }

    


}
else
{
    console.log("No team wins the Trophy");
}


// let result=(davg>kavg)?("Dolphin wins the trophy"):("Koala wins the trophy");
// alert(result);
//  console.log(result);
}
