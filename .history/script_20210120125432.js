

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
     document.getElementById("demo").innerHTML = data.Title;
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
