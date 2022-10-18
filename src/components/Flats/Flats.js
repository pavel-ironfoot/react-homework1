import React, { useState } from 'react';
import './Flats.css';

const Flats = () => {
    const [entrance, setEntrance] = useState(0);
    const [showCode,setShowCode] = useState('тут можна побачити код після натискання кнопки');
    const onChangeFunc = (e) => {
        let flat = e.target.value;
        let res;
        if (flat < 21 && flat > 0) {
            res = 1;
        } else if (flat < 41 && flat > 20) {
            res = 2;
        } else if (flat < 61 && flat > 40) {
            res = 3;
        } else {
            res = 'від 1 до 60 будь-ласка';
        }
        setEntrance(res);
    }
    const showCodeF =()=>{
        setShowCode(`const getEntrance=(flat)=>{
        if (flat < 21 && flat > 0) {
            return 1;
        } else if (flat < 41 && flat > 20) {
            return 2;
        } else if (flat < 61 && flat > 40) {
            return 3;
        } else {
            return 'від 1 до 60 будь-ласка';
        }
    }`);
    }
    return (
        <div className='flats'>
            <h1>Flats</h1>
            <p>В завданні потрібно по номеру квартири визначити номер під'їзду</p>
            <h4>Будь-ласка введіть номер квартири:</h4>
            <input onChange={onChangeFunc} type='text'></input>
            <h3>Під'їзд номер:</h3>
            <div>{entrance}</div>
            <hr  />
            <button onClick={showCodeF}>Переглянути код</button>
            <div ><pre>{showCode}</pre></div>
        </div>
    );
}
export default Flats;