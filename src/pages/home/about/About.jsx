import React from 'react';
import { GiChipsBag } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { RiEBike2Fill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";

const About = () => {
    return (
        <div>
            <div className="m-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* for product */}
                    <div className="item border shadow-sm rounded p-4 flex justify-around">
                        <div className="icon"><GiChipsBag className='text-3xl text-center'/></div>
                        <div className="cnt"><span className=' font-bold text-[#ff686e]'>+15000 products</span> to shop from</div>
                    </div>
                    {/* for payment */}
                    <div className="item border shadow-sm rounded p-4 flex justify-around">
                        <div className="icon"><GiPayMoney className='text-3xl text-center'/></div>
                        <div className="cnt">Pay <span className=' font-bold text-[#ff686e]'>After</span> receiving products</div>
                    </div>
                    {/* for delivary */}
                    <div className="item border shadow-sm rounded p-4 flex justify-around">
                        <div className="icon"><RiEBike2Fill className='text-3xl text-center'/></div>
                        <div className="cnt"> Get your delivery within <span className=' font-bold text-[#ff686e]'>1 hours</span></div>
                    </div>
                    {/*  */}
                    <div className="item border shadow-sm rounded p-4 flex justify-around">
                        <div className="icon"><BiSolidOffer className='text-3xl text-center'/></div>
                        <div className="cnt">Get offers that <span className=' font-bold text-[#ff686e]'>Save Money</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;