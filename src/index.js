
document.addEventListener("DOMContentLoaded", function() {
    getImage()
    getBreed()
    
})

//challenge 1:
function getImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        const imgDiv = document.getElementById("dog-image-container")
        const img = data.message
        for (const el of img) {
            let pic = document.createElement("img")
            pic.setAttribute("src", el)
            imgDiv.append(pic)
        }
    })
}

//challenge 2:
let breed = []
function getBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        breed = Object.keys(data.message);
        updateList(breed);
        breedFilter();
    }) 
}

function buildList(breed) {
    const dogBreeds = document.getElementById("dog-breeds");
    let li = document.createElement("li");
    li.setAttribute("class", "breed");
    li.innerText = breed;
    li.style.cursor = 'pointer';
    dogBreeds.appendChild(li);
    li.addEventListener("click", changeColor);
}

function updateList(breed) {
    let dogBreeds = document.getElementById("dog-breeds");
    refreshBreeds(dogBreeds)
    
    breed.forEach(breed => buildList(breed));
}

function refreshBreeds(el) {
    let child = el.lastElementChild
    while (child) {
        el.removeChild(child);
        child = el.lastElementChild;
    }
}

//challenge 3:
function changeColor(e) {
    e.target.style.color = "blue";
}

//challenge 4:

function breedFilter() {
    let selectLetter = document.getElementById("breed-dropdown");

    selectLetter.addEventListener("change", e => {
        selectBreedByLetter(e.target.value)
    })
 }

 function selectBreedByLetter(l) {
     updateList(breed.filter(brd => brd.startsWith(l)));
 }