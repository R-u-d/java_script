let counter = 1;
let interval = setInterval(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + counter)
    .then(response => response.json())
    .then(data => {
        console.log({name: data.name, id: data.id})
        counter++;
        if (counter > 150) {
            clearInterval(interval);
        }
    })
},1000)