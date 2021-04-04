import React, { useState } from 'react';
import './App.css'

function App() {

    let resource = 'https://jsonplaceholder.typicode.com';
    
    let [myPoint, setMyPoint] = useState('');
    let [myId, setMyId] = useState('');

    let [error, setError] = useState('');

    let [item, setItem] = useState([]);
    let [differentItem, setDifferentItem] = useState(null);

    let All_recourses = [
        'posts',
        'comments',
        'albums',
        'photos',
        'todos',
        'users'
    ]

let submit = () => {
if(!myPoint){
    return setError('Необхідно заповнити перший інпут')
}
if(!All_recourses.includes(myPoint.trim())){
    return setError('Неправильне значення. Попробуйте використати: posts, comments, albums, photos, todos, users')
}

let idNum = Number(myId);

if (!idNum && myId !== ''){
    return setError('Потрібно вводити лише нумерові значення')
};

if (idNum < 1 && idNum !== 0){
    return setError('Значення не можуть бути менше 1')
}

if (idNum > 100 && idNum !== 0){
    return setError('Значення не можуть бути більше 100')
}

getInformation();
setError('')
}

   let getInformation = async () => {
       let response = await fetch(`${resource}/${myPoint.trim()}/${myId.trim()}`)
       let json = await response.json()

       myId && json ? setDifferentItem(json) : setItem(json);

       if (myId){
           setDifferentItem(json);
           setItem([])

           return
       }
       setDifferentItem(null)
       setItem(json)
   }

    return (
<div>

    <header>
        <input  className={'input'} value={myPoint} onChange={({target: {value}}) =>setMyPoint(value)} type='text'/>
        <input  className={'input'} value={myId} onChange={({target: {value}}) =>setMyId(value)} type='text'/>
    <button onClick={submit}>Дістати значення</button>
    </header>

    <main>
        <div className={'different_item'}>
            {differentItem &&
            JSON.stringify(differentItem, null, 2)
            }
        </div>
    </main>

<h1 className={'error'}>{error}</h1>

    <div className={'products'}>
        {item.map(el => <div className={'different_product'}><p>{el.id} -- {el.title ?? 'N/A'}</p><button>Переглянути</button></div>)}
    </div>
</div>
  );
}

export default App;