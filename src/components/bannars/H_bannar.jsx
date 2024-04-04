
const H_bannar = () => {
    return (
        <div >
            <div className="h-fit p-10 md:p-20 bg-repeat" style={{ backgroundImage: `url('https://i.ibb.co/brXYtjJ/landing-Banner.png')` }}>
                <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
                    <div className="my-8">
                        <div className="title font-bold text-4xl">
                            Grocery Delivered at your Doorstep
                        </div>

                        <div className="my-8">
                            <label className="input input-bordered w-10/12 flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <button className=" p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </button>
                            </label>
                        </div>
                    </div>
                    <div className="md:block hidden">
                        <img className="w-full" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-459/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default H_bannar;