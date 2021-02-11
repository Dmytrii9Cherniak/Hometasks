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
.then(iced => {
    for ( let i = 0 ; i < 20; i++ ) 
    document.write(`
    <div> 
        <h5> ${iced.title} ${iced.description} </h5>
    </div>
    `)
})
















