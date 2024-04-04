import { useEffect, useState } from "react";
import { ImPower } from "react-icons/im";
import { FaAngleDoubleRight } from "react-icons/fa";

const OfferItem = () => {
    const [products, setProducts] = useState([]);

    useEffect((() => {
        fetch('grocary_product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }), [])


    const offers = products.filter(fruit => fruit.has_offer === true);
    console.log(offers);
    return (
        <div>
            {/*  */}
            <div className="my-8">
                <div className="my-5 text-4xl font-extralight capitalize">offer deals</div>
                <div className="grid md:grid-cols-2 h-2/3 gap-4">
                    {
                        offers.map(item => <div key={item.id} className="item flex gap-4 border w-full h-[240px] p-4 rounded">
                            <div className="w-2/3 relative">
                                <img src={item.image} className=" w-full h-full" />
                                <div className=" absolute top-2 -left-1 border-l-8 border-[#ff686e] bg-black bg-opacity-30 text-white px-2 py-1 font-bold capitalize mr-2">{item.offer}</div>
                            </div>
                            <div className="w-1/3 py-4 text-center grid gap-2">
                                <div className=" grid gap-1">
                                    <h1 className="text-sm">{item.name}</h1>
                                    <h4 className="">per {item.unit}</h4>
                                </div>

                                <div className=" font-semibold">৳ <span className="text-[#ff686e] font-bold">{item.price}</span></div>

                                <div className="">
                                    <div className="btn-link flex gap-3 justify-center capitalize text-[#ff685e] text-sm font-semibold">view details <div className="mt-[6px]"><FaAngleDoubleRight /></div></div>
                                </div>

                                <button className="py-2 flex px-4 gap-1 border rounded capitalize font-bold text-[#ff686e]">
                                    <div className="text-sm mt-[2px]"><ImPower /></div>
                                    <div className="text-[12px]">add to bag</div>
                                </button>
                            </div>
                        </div>)
                    }



                </div>
            </div>
        </div>
    );
};

export default OfferItem;