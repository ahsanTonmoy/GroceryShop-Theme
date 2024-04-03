import { FaEgg } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import './style.css'
import GroceryM from "./Grocery/GroceryM";
const Sidebar = () => {
    const menu = <>
        <li className="menuItem">
            <NavLink to={'/'}>
                <div className="">
                    <div className="icon m-1 w-12/12 mx-auto">
                        <FaEgg className="bg-yellow-500 w-12/12 mx-auto p-1 text-2xl rounded-full text-[#ffff]" />
                    </div>
                    {/*  */}
                    <div className="title uppercase  text-[10px] font-bold">Grocery</div>
                </div>
            </NavLink>
        </li>

        <li className="menuItem">
            <NavLink to={'/pharmecy'}>
                <div className="w-full">
                    <div className="icon m-1">
                        <FaEgg className="bg-yellow-500 w-12/12 mx-auto p-1 text-2xl rounded-full text-[#ffff]" />
                    </div>
                    {/*  */}
                    <div className="title uppercase text-[10px] font-bold">pharmecy</div>
                </div>
            </NavLink>
        </li>

        <li className="menuItem">
            <NavLink to={'/pharmecy'}>
                <div className="">
                    <div className="icon m-1">
                        <FaEgg className="bg-yellow-500 w-12/12 mx-auto p-1 text-2xl rounded-full text-[#ffff]" />
                    </div>
                    {/*  */}
                    <div className="title uppercase  text-[10px] font-bold">cookups</div>
                </div>
            </NavLink>
        </li>
    </>
    return (
        <div className="sidebar">
            <div className=" grid grid-cols-3 gap-2">
                {menu}
            </div>

            <div className="">
                <GroceryM/>
            </div>
            
        </div>
    );
};

export default Sidebar;