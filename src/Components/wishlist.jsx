import React from "react";

function Wishlist(){
    const [query, setQuery] = React.useState("");
    const [wlist, setTasks] = React.useState([]);

    const handleChange = (e) =>{
        const {value} = e.target
        setQuery(value)
    }

    const addToWList = () =>{
        const payload = {
            towish: query,
            status: false 
        };

        let updatedwishList = [...wlist, payload];
        setTasks(updatedwishList);

        if(wlist.length > 4){
            console.log("overflow")
            
        }
    }

    return(
        <>
            <h1>Wishlist</h1>
            <input
            placeholder="Add your wishlist here"
            onChange={handleChange}
            value={query}
             />
             <button onClick={addToWList}>ADD</button>
            {wlist.map(({towish, status}, idx) =>(
                <div key={idx}>{towish}</div>
            ))}
        </>
    )
}

export {Wishlist}