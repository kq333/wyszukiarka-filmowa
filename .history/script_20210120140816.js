

const btn = document.getElementById("btn");

           

btn.addEventListener('click', ()=>{

 document.querySelector(".poster").innerHTML ="";
    

 const search = document.getElementById("search").value;

 const url =   'http://www.omdbapi.com/?apikey=7bd5b2c8&t=';

//   const url = 'http://api.tvmaze.com/search/shows?q=';


  const result  = url + search;
  fetch(result)

  .then((res)=>{
      return res.json();
  })
  .then((data)=>{
     document.querySelector(".movieTitle").innerHTML = data.Title;
     document.querySelector(".NameD").innerHTML = "Reżyser:";
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



      console.log(data)
      console.log(data.Actors)
      console.log(data.Poster)
      let poster = data.Poster

      imageCreate = () =>{
          const elem = document.createElement("img")
          document.querySelector(".poster").appendChild(elem);
          elem.src = poster;
      }
      imageCreate();

     

  })
})
