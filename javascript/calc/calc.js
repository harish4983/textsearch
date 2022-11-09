function disp(id)
{
    document.getElementById('output').value+=id.innerText;
    
}
function clear1()
{
   document.getElementById('output').value=" ";   
}

function result()
{
    document.getElementById('output').value=eval(document.getElementById('output').value);
}
