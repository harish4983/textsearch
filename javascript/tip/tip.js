function calc(){
    let x=document.getElementById("bill").value;
    console.log( "bill amount is " +x);
   
    if(x==""||x==null){
        alert("Enter Your Bill Amount");
    }

    let b=(x>=50&&x<=300)?(x*(15/100)):(x*(20/100));
    console.log("tip amount is" +b);
    
    let total=parseInt(x)+parseInt(b);
    console.log( "total amount is " +total);
    
    document.getElementById("tip").innerHTML= "Tips : " +b;
    document.getElementById("total").innerHTML="Total  Amount to be Paid : " +total;
}