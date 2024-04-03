import { useEffect, useState } from "react";
import MenuSlider from "./slider/MenuSlider";

const Populer = () => {
    const [groceryM, setGroceryM]= useState([]);

    useEffect((()=>{
        fetch('grocery_menu.json')
        .then(res => res.json())
        .then(data => setGroceryM(data))
    }),[])
    return (
        <div>
            <div className="my-10">
                <div className="sec-title my-6">
                    <div className="divider uppercase font-semibold">Popular Categories</div>
                </div>

                <div className="content">
                    <MenuSlider/>
                </div>
            </div>
        </div>
    );
};

export default Populer;