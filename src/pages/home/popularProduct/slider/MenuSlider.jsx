// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";

import "./style.css";
import { Link } from "react-router-dom";
const MenuSlider = () => {
    const [groceryM, setGroceryM] = useState([]);

    useEffect((() => {
        fetch('grocery_menu.json')
            .then(res => res.json())
            .then(data => setGroceryM(data))
    }), [])
    return (
        <div className="mx-4">

            <br />
            <div className="hidden md:block">
                <Swiper slidesPerView={3} className="mySwiper">
                    {
                        groceryM.map(menu => <SwiperSlide key={menu.id}>
                            <Link className=" " to={menu.menu_link}>
                                <div className="border shadow-sm p-2 m-4">
                                    <div className="px-3">
                                        <img className="w-full" src={menu.image} alt="" />
                                    </div>

                                    <div className=" text-red-900 text-xl p-2">{menu.name}</div>
                                </div>
                            </Link>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
            <div className="block md:hidden">
                <Swiper slidesPerView={1} className="mySwiper">
                    {
                        groceryM.map(menu => <SwiperSlide key={menu.id}>
                            <Link className=" " to={menu.menu_link}>
                                <div className="border shadow-sm p-2 m-4">
                                    <div className="px-3">
                                        <img className="w-full" src={menu.image} alt="" />
                                    </div>

                                    <div className=" text-red-900 text-xl p-2">{menu.name}</div>
                                </div>
                            </Link>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div >
    );
};

export default MenuSlider;