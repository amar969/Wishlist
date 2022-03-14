import React from "react";

function Vegetables(){
    const [tomatoes, setCount] = React.useState(11);
    const [potatoes, setCount1] = React.useState(8);
    const [carrots, carrotCount2] = React.useState(5);
    const [onions, onionsCount2] = React.useState(7);
    
    // Tomatoes
    function changeCount(val){
        setCount((tomatoes) => {return tomatoes + val})
    }

    // Potatoes
    function changePotatoes(val){
        setCount1((potatoes) => {return potatoes + val})
    }

    // Carrots
    function changeCarrotCount(val){
        carrotCount2((carrots) => {return carrots + val})
    }

    // Onions
    function changeOnionsCount(val){
        onionsCount2((onions) => {return onions + val})
    }

    return (
        <>
            <h3>Tomatoes : {tomatoes} Kgs</h3>
            <button onClick={() =>changeCount(+1)}>+</button> 
            <button onClick={() => changeCount(-1)}>-</button> 

            <h3>Potatoes : {potatoes} Kgs</h3>
            <button onClick={() => changePotatoes(+1)}>+</button>
            <button onClick={() => changePotatoes(-1)}>-</button>

            <h3>Carrots : {carrots} Kgs</h3>
            <button onClick={() => changeCarrotCount(+1)}> + </button>
            <button onClick={() => changeCarrotCount(-1)}> - </button>

            <h3>Onions : {onions} Kgs</h3>
            <button onClick={() => changeOnionsCount(+1)}> + </button>
            <button onClick={() => changeOnionsCount(-1)}> - </button>
        </>
    )
}

export {Vegetables}