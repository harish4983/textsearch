function gen(){
    fetch("https://api.quotable.io/random")
    .then( x => x.json())
    .then(y =>{
         document.getElementById("quote").innerHTML=y.content;
         document.getElementById("author").innerHTML="~"+y.author;
    })
}