import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './style.css'
import Sidebar from "./sidebar/Sidebar";
import { FaLocationPin } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../footer/Footer";
import Login from "../../pages/user/login/Login";
import Cart from "./cart/Cart";
import CartBody from "./cart/cartBody/CartBody";
import { GiPaperBagOpen } from "react-icons/gi";
import ButtomNav from "./buttomNav/ButtomNav";

const Navigetions = ({ children }) => {
    const [toggle, setToggle] = useState(true);
    const [openCart, setOpenCart] = useState(false);
    return (
        <div>
            <div className="drawer h-fit">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#fdd670] fixed z-20 px-6 py-0">
                        <div className="flex-none ">
                            <button onClick={() => setToggle(!toggle)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
                        </div>
                        <div className="flex-none px-2 mx-5 uppercase text-3xl pacifico-regular">caldal <small className=" text-xs mx-6">(clone)</small></div>

                        <div className="flex-1 hidden lg:block mx-6">
                            <label className="input input-bordered w-full flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <button className=" p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </button>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-3 uppercase">
                                {/* Navbar menu content here */}
                                <li>
                                    <button className="hover:bg-yellow-500 rounded-none">
                                        <div className="flex gap-2 text-[#ff686e] ">
                                            <div className=""><FaLocationPin /></div>
                                            <div className=" uppercase font-extrabold -mt-1">dhaka</div>
                                            <div className=""><MdKeyboardArrowDown /></div>

                                        </div>
                                    </button>
                                </li>
                                {/*  */}
                                <li className="">
                                    <div className=" p-0 rounded-lg uppercase bg-white hover:bg-white">
                                        <button className=" uppercase hover:bg-[#ff686e] hover:text-white font-bold p-2">en</button>|
                                        <button className=" uppercase hover:bg-[#ff686e] hover:text-white font-bold p-2">bn</button>
                                    </div>
                                </li>
                                {/*  */}
                                <li>
                                    <div className=" mx-3 px-6 py-2 bg-[#ff686e] text-white uppercase font-semibold" onClick={() => document.getElementById('open').showModal()}>
                                        login
                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        <dialog id="open" className="modal text-black p-4">
                                            <Login />
                                        </dialog>
                                    </div>



                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children}

                    <div className="hidden md:block">
                        {
                            toggle ?
                                <div className=" flex">
                                    <div className=" sidebar fixed top-16 bg-base-100 z-10">
                                        <ul className=" inner-section menu p-4 w-fit h-screen overflow-auto">
                                            {/* Sidebar content here */}
                                            <Sidebar />

                                        </ul>
                                    </div>

                                    <div className=" lg:ml-60 w-full mt-16 ">
                                        <Outlet />
                                        <Footer />
                                    </div>

                                </div> : <div className="ml-0  mt-16">
                                    <Outlet />
                                    <Footer />
                                </div>
                        }
                    </div>

                    <div className="block md:hidden">
                        {
                            !toggle ?
                                <div className=" flex">
                                    <div className=" sidebar shadow-2xl fixed top-16 bg-base-100 z-10">
                                        <ul className=" inner-section menu p-4 w-fit h-screen overflow-auto">
                                            {/* Sidebar content here */}
                                            <Sidebar />

                                        </ul>
                                    </div>

                                    <div className=" lg:ml-60 w-full mt-16 ">
                                        <Outlet />
                                        <Footer />
                                    </div>

                                </div> : <div className="ml-0  mt-16">
                                    <Outlet />
                                    <Footer />
                                </div>
                        }
                    </div>

                    <div className="hidden  md:block">
                        <div className="cart fixed top-[50%] right-0">
                            <button onClick={() => setOpenCart(true)}> <Cart /></button>
                        </div>

                        {
                            openCart ?
                                <div className="h-screen w-80 fixed  top-16  right-0 bg-base-200 shadow-xl ">
                                    <div className="bg-base-300 p-2 flex justify-between">
                                        <div className="text-md uppercase font-bold inline-flex">
                                            <div className="text-2xl mx-1"><GiPaperBagOpen /></div>
                                            <div className="">2 items</div>
                                        </div>

                                        <div className="">
                                            <button onClick={() => setOpenCart(false)} className="border border-black rounded py-1 px-4 text-xs uppercase font-semibold" >
                                                close
                                            </button>
                                        </div>
                                    </div>

                                    <div className=""><CartBody /></div>
                                </div> : null
                        }
                    </div>

                    <div className=" ">
                        <ButtomNav/>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Navigetions;

