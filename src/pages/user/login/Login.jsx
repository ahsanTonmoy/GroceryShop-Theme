import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";
import './style.css'
const Login = () => {
    return (
        <div>
            <div className="modal-box w-full rounded-sm h-full">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="hover:text-[#ff686e] btn-sm  absolute right-4 top-4 text-2xl p-2 ">✕</button>
                </form>

                <div className=" m-4">
                    <div className="title uppercase text-lg">login</div>

                    <div className="py-3">
                        <form action="#">
                            <div className="btns grid grid-cols-1 gap-4">
                                <button className="flex text-white bg-blue-800 p-4">
                                    <div className="mx-4 text-xl"><FaFacebookF /></div>
                                    <div className=" ">Sign Up or Login with Facebook</div>
                                </button>

                                <button className="flex text-white border p-4">
                                    <div className="mx-4 text-xl"><FcGoogle /></div>
                                    <div className=" text-black">Sign Up or Login with Google</div>
                                </button>
                            </div>

                            <div className="">
                                <div className="divider uppercase font-semibold">or</div>
                            </div>
                            {/* login form */}

                            <div className="card  w-full ">
                                <form className="card-body p-0">
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="email" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control my-2">
                                        <input type="password" name="password" placeholder="password" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#ff686e] uppercase text-white hover:bg-[#ff686e]">Login</button>
                                    </div>

                                    <div className="py-2">
                                        <div className="">
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover capitalize">Forgot password?</a>
                                            </label>
                                        </div>

                                        <div className=" capitalize py-2 label-text-alt">
                                            you don&apos;t have an account please! <Link className=" btn-link" to={''}>
                                                register
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;