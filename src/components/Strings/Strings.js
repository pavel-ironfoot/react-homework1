import { useDispatch, useSelector } from "react-redux/es/exports";
import React, { useState } from 'react';
import './Strings.css';
import { bigLettersAction, bigLettersWithStrAction, getLettersAction, findSecondSpaceAction, withoutLastSixLettersAction } from "../../store/strReducer";

const Strings = () => {

    const dispatch = useDispatch();
    const str = useSelector(state=>state.strRed.str);
    const letters = useSelector(state=>state.strRed.letters);
    const strWith = useSelector(state=>state.strRed.strWith);
    const secondSpace = useSelector(state=>state.strRed.secondSpace);
    const sixLetters = useSelector(state=>state.strRed.sixLetters);
    const [code3a,setCode3a] = useState(`тут можна побачити код після натискання кнопки`);
    const [code3b,setCode3b] = useState(`тут можна побачити код після натискання кнопки`);
    const [code3c,setCode3c] = useState(`тут можна побачити код після натискання кнопки`);
    const [code3d,setCode3d] = useState(`тут можна побачити код після натискання кнопки`);

    const getBigLetters=()=>{
        const STR = 'some test string';
        let firstLetterBig = STR[0].toUpperCase();
        let lastLetterBig = STR[STR.length - 1].toUpperCase();
        dispatch(bigLettersAction(`перша літера ${firstLetterBig}, остання літера ${lastLetterBig}`));
    }
    const getLetters=()=>{
        const STR = 'some test string';
        let firstLetter = STR[0];
        let lastLetter = STR[STR.length - 1];
        dispatch(getLettersAction(`перша літера ${firstLetter}, остання літера ${lastLetter}`));
    }
    const getBigLettersWith=()=>{
        const STR = 'some test string';
        let firstLetterBig = STR[0].toUpperCase();
        let lastLetterBig = STR[STR.length - 1].toUpperCase();
        let newStrWithBigLetters = firstLetterBig + STR.slice(1, STR.length - 1) + lastLetterBig;
        dispatch(bigLettersWithStrAction(newStrWithBigLetters));
    }
    const findSpace=()=>{
        const STR = 'some test string';
        let space1 = STR.indexOf(' ');
        let space2 = STR.indexOf(' ', space1 + 1);
        dispatch(findSecondSpaceAction(space2));
    }
    const deleteLastSixLetters = () =>{
        const STR = 'some test string';
        let newStrWithoutLastSix = STR.slice(0, STR.length - 6);
        dispatch(withoutLastSixLettersAction(newStrWithoutLastSix));
    }
    const showResult3a = () =>{
        setCode3a(`    const STR = 'some test string';
    let firstLetter = STR[0];
    let lastLetter = STR[STR.length - 1];`);
    }

    const showResult3b = () =>{
        setCode3b(`    const STR = 'some test string';
    let firstLetterBig = STR[0].toUpperCase();
    let lastLetterBig = STR[STR.length - 1].toUpperCase();
    let newStrWithBigLetters = firstLetterBig + STR.slice(1, STR.length - 1) + lastLetterBig;`);
    }

    const showResult3c = () =>{
        setCode3c(`    const STR = 'some test string';
    let spaceOne = STR.indexOf(' ');
    let spaceTwo = STR.indexOf(' ', spaceOne + 1);`);
    }

    const showResult3d = () =>{
        setCode3d(`    const STR = 'some test string';
    let newStrWithoutLastSix = STR.slice(0, STR.length - 6);`);
    }

    return (
        <div className="strings">
            <h1>Strings</h1>
            <h3>3.a.</h3>
            <p>Отримати першу і останню літеру 'some test string'</p>
            <div>
                <button onClick={getLetters}>Отримати літери</button>
                {letters}
            </div>
            <button onClick={showResult3a}>Переглянути код</button>
            <pre>{code3a}</pre>
            <hr  />
            <hr  />
            <h3>3.b.</h3>
            <p>Зробити першу і останню літери великими 'some test string'</p>
            <div>
                <button onClick={getBigLetters}>Зробити великими</button>
                {str}
            </div>
            <div>
                <button onClick={getBigLettersWith}>Речення з великими літерами</button>
                {strWith}
            </div>
            <button onClick={showResult3b}>Переглянути код</button>
            <pre>{code3b}</pre>
            <hr  />
            <hr  />
            <h3>3.c.</h3>
            <p>знайти індекс другого пробілу 'some test string'</p>
            <div>
                <button onClick={findSpace}>Показати індекс другого пробілу</button>
                {secondSpace}
            </div>
            <button onClick={showResult3c}>Переглянути код</button>
            <pre>{code3c}</pre>
            <hr  />
            <hr  />
            <h3>3.d.</h3>
            <p>Отримати строку без останніх шести символів 'some test string'</p>
            <div>
                <button onClick={deleteLastSixLetters}>Видалити шість останніх символів</button>
                {sixLetters}
            </div>
            <button onClick={showResult3d}>Переглянути код</button>
            <pre>{code3d}</pre>
            <hr />
            <hr />
        </div>
    );
}
export default Strings;