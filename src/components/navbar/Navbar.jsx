import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="w-full h-20 p-2 bg-black flex">
            
            <Link className="text-white text-xl ml-20 flex justify-left mt-4 font-bold">
                Cabio
            </Link>
            <div>
            <Link className="text-white flex justify-end mt-3 ml-10 font-bold hover:rounded-full px-3 py-2 hover:bg-stone-700">
                Ride
            </Link>
            </div>
           
            <div>
            <Link className="text-white flex justify-end mt-3 ml-10 font-bold hover:rounded-full px-3 py-2 hover:bg-stone-700">
                Drive
            </Link>
            </div>
           
            <div>
            <Link className="text-white flex justify-end mt-3 ml-10 font-bold hover:rounded-full px-3 py-2 hover:bg-stone-700">
               Business
            </Link>
            </div>
           
            <div>
            <Link className="text-white flex justify-end mt-3 ml-10 font-bold hover:rounded-full px-3 py-2 hover:bg-stone-700">
                About
            </Link>
            </div>
            
            <div className="ml-72">
            <Link className="text-white flex justify-items-end mt-3 ml-10 font-bold hover:rounded-full px-3 py-2 hover:bg-stone-700">
                Help
            </Link>
            </div>
            <div>
            <Link to="/login" className="text-white flex justify-items-end mt-3 ml-10 font-bold hover:rounded-full px-3 py-2 hover:bg-stone-700">
                Log in
            </Link>
            </div>
           
            <div>
            <Link className="text-black flex font-bold mt-3 ml-10 bg-white px-3 py-2 rounded-full hover:bg-stone-200">
                Sign up
            </Link>
            </div>
        </div>
    )
}
export default Navbar;