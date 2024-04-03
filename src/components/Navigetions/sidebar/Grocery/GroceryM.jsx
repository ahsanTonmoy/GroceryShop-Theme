import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const GroceryM = () => {
    const [groceryM, setGroceryM]= useState([]);

    useEffect((()=>{
        fetch('grocery_menu.json')
        .then(res => res.json())
        .then(data => setGroceryM(data))
    }),[])
    return (
        <div>
            <div className="">
                {
                    groceryM.map(menu => <li key={menu.id}><NavLink to={menu.menu_link}>{menu.name}</NavLink></li>)
                }
            </div>
        </div>
    );
};

export default GroceryM;