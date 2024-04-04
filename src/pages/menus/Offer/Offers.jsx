import { useEffect, useState } from "react";
import { BiFilterAlt  } from "react-icons/bi";

const Offers = () => {
    const [groceryM, setGroceryM]= useState([]);

    useEffect((()=>{
        fetch('grocery_menu.json')
        .then(res => res.json())
        .then(data => setGroceryM(data))
    }),[])
    return (
        <div>
            <div className='mx-10 my-6 md:mx-20'>
                {/* filter by cetagories */}
                <div className="py-4 border-b">
                    <div className="title flex font-semibold">
                        <div className="text-2xl px-3"><BiFilterAlt /></div>
                        <div className="">Filter By Category</div>
                        {/* <div className=""></div> */}
                    </div>

                    <div className="content my-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                            {
                                groceryM.slice(0,7).map(menu=> <div key={menu.id} className="item border shadow-sm rounded p-2 flex justify-between">
                                
                                <div className="cnt font-extralight">{menu.name} <span className="">(00)</span></div>
                                <div className="icon"><img className="w-6 h-6" src={menu.image} alt="" /></div>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;