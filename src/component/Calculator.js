import React, {useState} from 'react';
import KeyPad from "./KeyPad";
import Result from "./Result";


function Calculator() {
    const [result, setResult] = useState("")

    function reset() {
        setResult("");
    }

    function onKeyClick(button) {
        console.log("on key click", button);
        if(button === "="){
            calculate()
        } else if(button === "C"){
            reset()
        }
        else if(button === "CE"){
            backspace()
        } else {
            setResult(result + button)
        }
    }

    function backspace(){
        setResult(result.slice(0, -1))
    }

    function calculate() {
        console.log("in calculate")

        var checkResult = ''

        if(result.includes('--')){
            checkResult = result.replace('--','+')
        } else {
            checkResult = result
        }

        try {
            console.log("setting result")
            setResult((eval(checkResult) || "" ) + "")
            
        } catch (e) {
            setResult("ERROR")

        }
    }


    return (
        <div className="calculator-body">
            <h1>Simple Calculator</h1>
                <Result result={result}/>
                <KeyPad onClick={onKeyClick}/>
            </div>
    );
    
}

export default Calculator;