import { useState } from 'react';
import { LuMessagesSquare } from "react-icons/lu";
import { GiPaperBagOpen } from "react-icons/gi";
import CartBody from '../cart/cartBody/CartBody';

const ButtomNav = () => {
    const [openCart, setOpenCart] = useState(false);
    return (
        <div>
            <div className=" fixed bottom-0 left-0 w-screen z-20 bg-white px-4">
                <div className=" flex text-2xl">
                    <button className='flex-none w-14 p-4'>
                        <div className=""><LuMessagesSquare /></div>
                    </button>
                    <button className="grow bg-[#ff585e] text-center uppercase font-bold text-white text-lg">
                        <div className="">start shopping</div>
                    </button>
                    <button onClick={() => setOpenCart(true)} className=' w-14 flex-none p-4'>
                        <div className=""><GiPaperBagOpen></GiPaperBagOpen></div>
                    </button>

                    {/*  */}
                    {
                        openCart ?
                            <div className="h-screen w-80 fixed  top-0  right-0 bg-base-200 shadow-xl">
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
                            </div>
                            : null
                    }
                </div>
            </div>
        </div>
    );
};

export default ButtomNav;