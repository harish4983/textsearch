function search(){
    let texttosearch=document.getElementById("txtsearch").value;
    console.log(texttosearch);
    let paragraph=document.getElementById("para");
    // texttosearch=texttosearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern= new RegExp(`${texttosearch}`,"i");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
}