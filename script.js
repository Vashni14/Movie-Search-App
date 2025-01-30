let moviesub = document.querySelector(".sub");
let mov = document.querySelector(".intext");
moviesub.addEventListener("click",name);
async function name() {
    const URL=`http://www.omdbapi.com/?t=${mov.value}&apikey=f6262cfe`;
    let response=await fetch(URL);
    let data=await response.json(); 
    let tit=document.querySelector(".tit");
    tit.innerHTML=`Title:${data["Title"]}`;
    let rel=document.querySelector(".rel");
    rel.innerHTML=`Released:${data["Released"]}`;
    let gen=document.querySelector(".gen");
    gen.innerHTML=`Genre:${data["Genre"]}`;
    let ac=document.querySelector(".ac");
    ac.innerHTML=`Actors:${data["Actors"]}`;
    let pl=document.querySelector(".pl");
    pl.innerHTML=`Plot:${data.Plot}`;
    let ra = document.querySelector(".ra");
ra.innerHTML = `Rating: ${data.Ratings[0].Value}`; 
    let img=document.querySelector("img");
    img.src=data["Poster"];
};






