import React from 'react';

export let Shapka = () => (
    <header className = 'header'>
        <div className='form'>
            <button className='button' onClick={() => {}}>Натисни на мене</button>
            <input className='input' placeholder='login' type = 'text'/>
            <input className='input' placeholder='password' type='password'/>
        </div>
    </header>
)

export let Products = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
            <h3>{props.description}</h3>
        </div>
    )
}

export let Footer = () => (
    <footer className='footer'></footer>
)
