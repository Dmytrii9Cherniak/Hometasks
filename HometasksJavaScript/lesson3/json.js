fetch('https://api.sampleapis.com/coffee/hot')
.then (Response => Response.json())
.then (title => {
    for ( let i = 0 ; i < 20 ; i++){
    const coffee = title[i];
    console.log(coffee , coffee.id, coffee.description, coffee.ingredients)
    document.write(
        `<div> 
            <h3>${coffee.id} ${coffee.description} ${coffee.ingredients}</h3>
        </div>`
    );
    }
})

fetch('https://api.sampleapis.com/coffee/iced')
.then(Response => Response.json())
.then(icedCoffee =>{
    for (let b = 0; b < 6; b++){
        const ice = icedCoffee[b];
        console.log(ice)
        document.write(`
        <div> <h2> ${ice.id} ${ice.description} ${ice.ingredients} </h2> </div>
        `)
    }
})














