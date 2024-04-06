import React from "react";
import * as calc from "./Calc";

function Calculator(){
    return <div>
        <h3>Calculations </h3>
        <ul>
            <li>{calc.add(1,2)}</li>
            <li>{calc.multiply(2,3)}</li>
            <li>{calc.subtract(7,2)}</li>
            <li>{calc.divide(11,2)}</li>
        </ul>
    </div>
}

export default Calculator;