function check(){
    let x= document.getElementById("lyear").value;
    console.log(x);

    if(x%4==0)
    {
        if(x%100==0)
        {
            if(x%400==0)
            {
                alert(true);
            }
            else
            {
                alert(false);
            }
        }
        else
        {
            alert(true);
        }

    }
    else
    {
        alert(false);
    }
}