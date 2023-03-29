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


const keys = Object.keys(localStorage);
for (let key of keys) {
    let { id, name, img } = JSON.parse(localStorage.getItem(key));
    const pokemon = document.createElement("section");
    const labelName = document.createElement("p");
    const labelId = document.createElement("p");
    const pokeImg = document.createElement("img");
    const buttonDelete = document.createElement("button");
    labelId.innerText = `ID: ${id}`;
    labelName.innerText = `NAME: ${name}`;
    pokeImg.src = img;
    pokeImg.style.height = "150px"
    buttonDelete.innerText = "DELETE";
    buttonDelete.addEventListener("click", () => {
        pokemon.remove();
        localStorage.removeItem(key);
    })
    pokemon.style.border = "solid black 2px";
    pokemon.style.padding = "10px";
    pokemon.style.boxSizing = "border-box";
    pokemon.style.width = "200px";
    pokemon.style.display = "flex";
    pokemon.style.flexDirection = "column";
    pokemon.style.justifyContent = "space-around"
    pokemon.append(labelId, labelName, pokeImg, buttonDelete);
    divPrincipal.append(pokemon);
}
body.append(divPrincipal)



