// Insert your code here
console.log("connecté");

// boucle pour afficher les 15 premiers pokemon sur la liste
for (let i = 1; i < 16; i++) {
  const listPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      const imgPokemon = (document.querySelector(
        "#pokemonContainer"
      ).innerHTML += `
 <div class="pokemon ${data.types[0].type.name}">
     <div class="imgContainer">
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pikachu" />
     </div>
     <div class="info">
         <h3 class="name">${data.name}</h3>
         <span class="type">Type: <span>${data.types[0].type.name}</span></span>
     </div>
 </div>`);
    });
}
// ajouter un bouton
document.querySelector("#next").addEventListener("click", function () {
  // déclarer variable qui récupère toute la base des pokemon
  let myVar = document.querySelectorAll(".pokemon").length;

  //afficher après le clique des boutons, 15 Pokemon supplémentaires
  for (let i = myVar; i < myVar + 15; i++) {
    const listPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const imgPokemon = (document.querySelector(
          "#pokemonContainer"
        ).innerHTML += `
   <div class="pokemon ${data.types[0].type.name}">
       <div class="imgContainer">
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pikachu" />
       </div>
       <div class="info">
           <h3 class="name">${data.name}</h3>
           <span class="type">Type: <span>${data.types[0].type.name}</span></span>
       </div>
   </div>`);
      });
  }
});
