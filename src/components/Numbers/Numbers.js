import { useDispatch, useSelector } from "react-redux/es/exports";
import React from "react";
import './Numbers.css';
import { addNumberAction, minusNumberAction } from "../../store/addReducer";
import { getNumberAction } from "../../store/getNumberReducer";
import { getPiAction, roundPiAction } from "../../store/piReducer";
import { showResult2aAction, showResult2bAction, showResult2cAction } from "../../store/resultReducer";
const Numbers = () => {

    const dispatch = useDispatch();
    const number = useSelector(state=>state.number.number);
    let getPiNumber = useSelector(state=>state.pi.piNumber); 
    let getNumber = useSelector(state=>state.getNumber.getNumber);
    const result2a = useSelector(state=>state.result.result2a);
    const result2b = useSelector(state=>state.result.result2b);
    const result2c = useSelector(state=>state.result.result2c);

    const numberPi = ()=>{
        dispatch(getPiAction());
    }
    const numberPiRound = ()=>{
        dispatch(roundPiAction());
    }
    const showResult2a=()=>{
        dispatch(showResult2aAction('const PI = Math.PI;  const piRound = Math.PI.toFixed(2);'));
    }
    const showResult2b=()=>{
        dispatch(showResult2bAction('let a =(0.6+0.7).toFixed(1);'));
    }
    const showResult2c=()=>{
        dispatch(showResult2cAction('let str = "100$"; let strNumber = parseInt(str,10);'));
    }
    
    const getNumberFromStr =()=>{
        let str = prompt('enter str','100$');
        dispatch(getNumberAction(str));
    }

    const addNumber = () =>{
        let num = +prompt('enter num',0.6);
        dispatch(addNumberAction(num));
    }
    const minusNumber = () =>{
        let num = +prompt('enter num',0.7);
        dispatch(minusNumberAction(num));
    }
    return (
        <div className="numbers">
            <h1>Numbers</h1>
            <h3>2.a.</h3>
            <p>В завданні потрібно отримати число Пі а потім округлити його до двох знаків після коми</p>
            <button onClick={numberPi}>Отримати число Pi</button>
            <button onClick={numberPiRound}>Округлити до двух знаків після крапки </button>
            <div>{getPiNumber}</div>
            <button onClick={showResult2a}>Переглянути код</button>
            {result2a.length>0?<div>{result2a}</div>:<div>тут можна побачити код після натискання кнопки</div>}
            <hr  />
            <hr  />
            <h3>2.b.</h3>
            <p> В завданні потрібно додати 0.6 + 0.7 щоб вийшло 1.3, але ви можете додати інші числа з одним знаком після коми</p>           
            <button onClick={addNumber}>Додати Число</button>
            <button onClick={minusNumber}>Відняти Число</button>
            <div>{number}</div>
            <button onClick={showResult2b}>Переглянути код</button>
            {result2b.length>0?<div>{result2b}</div>:<div>тут можна побачити код після натискання кнопки</div>}
            <hr  />
            <hr  />
            <h3>2.c.</h3>
            <p>В завданні потрібно отримати число з рядка '100$', але дана функція працює і для інших строк типу '3421px'</p>
            <p>Натисніть на кнопку щоб ввести строку</p>
            <button onClick={getNumberFromStr}>Ввести строку</button>
            <div>{getNumber}</div>
            <button onClick={showResult2c}>Переглянути код</button>
            {result2c.length>0?<div>{result2c}</div>:<div>тут можна побачити код після натискання кнопки</div>}
        </div>
    );
}
export default Numbers;