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
        <div className=" capitalize">
            <div className="my-2 border-b-2 py-2">
                <li><NavLink to={'/offers'}>offers <div className="badge p-2 border  border-[#ff686e] text-[#ff686e] font-semibold">10</div></NavLink></li>
                <li><NavLink to={'/eggClub'}>egg club</NavLink></li>
                <li><NavLink to={'/deals'}>deals of the day</NavLink></li>
            </div>
            <div className="">
                {
                    groceryM.map(menu => <li key={menu.id}><NavLink to={menu.menu_link}>{menu.name}</NavLink></li>)
                }
            </div>
        </div>
    );
};

export default GroceryM;