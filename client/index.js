
console.log("js connected");

const anmlBtn = document.querySelector("button");
const anmlForm = document.querySelector("form");

const name = document.getElementById("name");
const species = document.getElementById("species");
const color = document.getElementById("color");
const size = document.getElementById("size");
const age = document.getElementById("age");

function createCard(animal){
  
}

function getAnimals(){
  axios.get("http://localhost:5678/animals").then(res => {
    console.log(res.data);
    res.data.forEach(animal => createCard(animal))
  }).catch(err => console.log(err));
}

function addAnimal(event){
  event.preventDefault();

  const body = {
    name: name.value,
    species: species.value,
    color: color.value,
    size: size.value,
    age: age.value
  }

  axios.post("http://localhost:5678/animal", body).then(res => {
    console.log(res.data);
  }).catch(err => console.log(err));
}

anmlBtn.addEventListener("click", getAnimals);
anmlForm.addEventListener("submit", addAnimal);

