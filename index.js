// ********************** ejercicio #1 **********************






// ********************** ejercicio #2 **********************


// const dom = () => {
//     for (let key of keys) {
//         let li = document.createElement("li");
//         li.innerText = `${key} : ${localStorage.getItem(key)}`;
//         ul.append(li);
//     }
//     body.append(ul);

//     const button = document.createElement("button");
//     button.innerText = "increment";
//     button.addEventListener("click", () => {
//         localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + 1);
//         ul.children[3].innerText = `counter : ${localStorage.getItem("counter")}`;
//     })
//     body.append(button);
// }


// const body = document.querySelector("body");
// const ul = document.createElement("ul");
// const keys = Object.keys(localStorage);
// localStorage.setItem("counter", 5);
// dom();



// ********************** ejercicio #3 **********************


// const body = document.querySelector("body");
// const form = document.createElement("form");
// const labelName = document.createElement("label");
// const labelEmail = document.createElement("label");
// const labelContra = document.createElement("label");
// const inputName = document.createElement("input");
// const inputEmail = document.createElement("input");
// const inputContra = document.createElement("input");
// const submit = document.createElement("input");
// submit.type = "submit";
// submit.innerText = "enviar";
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let user = {
//         "name": e.target[0].value,
//         "email": e.target[1].value,
//         "password": e.target[2].value
//     }
//     localStorage.setItem("users", user);
//     console.log(localStorage.getItem("users").email);
// })
// labelName.innerText = "NAME";
// labelEmail.innerText = "EMAIL";
// labelContra.innerText = "CONTRASEÑA";
// form.append(labelName, inputName, labelEmail, inputEmail, labelContra, inputContra, submit);
// body.append(form);



// ********************** ejercicio #4 **********************

const pokemons = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]


const h1 = document.createElement("h1");
h1.innerText = "VENTA DE POKEMONS";
h1.style.textAlign = "center";

const styleContain = () => {
    divPrincipal.style.display = "flex";
    divPrincipal.style.gap = "20px";
    divPrincipal.style.flexWrap = "wrap";
    divPrincipal.style.padding = "20px";
    divPrincipal.style.justifyContent = "center";
}


const body = document.querySelector("body");
const divPrincipal = document.createElement("div");
styleContain();

for (let { id, name, img } of pokemons) {
    const pokemon = document.createElement("section");
    pokemon.classList = "pokeCard";
    const labelName = document.createElement("p");
    const labelId = document.createElement("p");
    const pokeImg = document.createElement("img");
    const buttonCompra = document.createElement("button");
    labelId.innerText = `ID: ${id}`;
    labelName.innerText = `NAME: ${name}`;
    pokeImg.src = img;
    pokeImg.style.height = "150px"
    buttonCompra.innerText = "COMPRAR";
    buttonCompra.addEventListener("click", () => {
        let pokeObject = {
            "id": id,
            "name": name,
            "img": img
        }
        localStorage.setItem(id, JSON.stringify(pokeObject));
        console.log(localStorage.getItem(id));
    })
    pokemon.style.border = "solid black 2px";
    pokemon.style.padding = "10px";
    pokemon.style.boxSizing = "border-box";
    pokemon.style.width = "200px";
    pokemon.style.display = "flex";
    pokemon.style.flexDirection = "column";
    pokemon.style.justifyContent = "space-around"
    pokemon.append(labelId, labelName, pokeImg, buttonCompra);
    divPrincipal.append(pokemon);
}
body.append(h1, divPrincipal)

