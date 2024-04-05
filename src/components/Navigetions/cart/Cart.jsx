import React from 'react';
import { GiPaperBagOpen } from "react-icons/gi";

const Cart = () => {
    return (
        <div>
            <div className="bg-black bg-opacity-45 uppercase text-center text-[#fdd670] font-bold shadow-2xl ">
                <div className="p-2 text-center">
                    <div className="text-2xl w-5/12 mx-auto "><GiPaperBagOpen/></div>
                    <div className="text-sm">2 items</div>
                </div>
                <div className="bg-base-200 px-2 text-black">৳ <span>500</span></div>
            </div>
        </div>
    );
};

export default Cart;