import React from "react";

const customStyle = {
    color : "brown",
    fontSize : "20px",
    border : "1px solid black"
}

function Heading(){
    return  <div>
    <h2 style={customStyle}> Food Items </h2>
    <ul>
        <li> Pav Bhaji </li>
        <img className="food-img"
        src="https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=612x612&w=0&k=20&c=PP5ejMisEwzcLWrNmJ8iPPm_u-4P6rOWHEDpBPL2n7Q=" />
        <li> Biryani </li>
        <img className="food-img"
        src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"></img>
        <li> Pizza </li>
        <img className="food-img"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" />
    </ul>
</div>
}

export default Heading;