const form = document.getElementById("form");
const inp = document.getElementById("inp");
const but = document.getElementById("but");
const container = document.getElementById("container");

form.addEventListener("submit", async (e)=>{
 e.preventDefault(); 

  const userInput = inp.value
  const request = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
  let showBox = document.createElement("div")
  let newShow = document.createElement("img")
  let newShowName = document.createElement("p")
  newShow.src = request.data[0].show.image.medium
  newName = request.data[0].show.name
  newShowName.append(newName)
  newShowGanre =""
  for(let i=0;i<request.data[0].show.genres.length;i++){
    newShowGanre += `${request.data[0].show.genres[i]} `
  }
  showBox.append(newShow)
  showBox.append(newShowName)
  showBox.append(`Genre: ${newShowGanre}`)
  container.append(showBox)
  console.log(request.data)
  inp.value = ""
});
