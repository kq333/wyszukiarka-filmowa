

let btn = document.getElementById("btn");

btn.disabled = true;


 document.getElementById("search").onclick = function(){inputClick()};

 inputClick = () =>{
   
    btn.disabled = false;
   
    btn.classList.toggle("btn2");

    
  

}


btn.addEventListener('click', ()=>{

    btn.classList.toggle("btn");


   
    let search = document.getElementById("search").value;
    document.querySelector(".poster").innerHTML ="";
 
 
    const url =   'http://www.omdbapi.com/?apikey=7bd5b2c8&t=';

    const result  = url + search;
    fetch(result)

  .then((res)=>{
      return res.json();
  })

  .then((data)=>{
     document.querySelector(".movieTitle").innerHTML = data.Title;
     document.querySelector(".NameD").innerHTML = "Reżyseria:";
     document.querySelector(".DirectorName").innerHTML = data.Director;
     document.querySelector(".NameA").innerHTML = "Występują:";
     document.querySelector(".ActorsName").innerHTML = data.Actors;
     document.querySelector(".NameC").innerHTML = "Kraj:";
     document.querySelector(".CountryName").innerHTML = data.Country;
     document.querySelector(".NameY").innerHTML = "Rok:";
     document.querySelector(".YearName").innerHTML = data.Released;
     document.querySelector(".NameG").innerHTML = "Gatunek:";
     document.querySelector(".GenreName").innerHTML = data.Genre;   
     document.querySelector(".NameP").innerHTML = "Opis:";
     document.querySelector(".PlotName").innerHTML = data.Plot;
     document.querySelector(".NameR").innerHTML = "Ocena Imdb:";
     document.querySelector(".RatingName").innerHTML = data.imdbRating;

  


    let poster = data.Poster;

      createImage = () =>{
          const elem = document.createElement("img")
          document.querySelector(".poster").appendChild(elem);
          elem.src = poster;
      }
      createImage();
  })

 .catch((error)=>{
     alert(error)
 });
  

 
    


});

