const Login=()=>{
    return(
        <div className="w-full">
            <div className="h-16 w-full bg-black p-1">
                <div className="text-white text-2xl flex justify-left mt-3 ml-20">Cabio</div>
            </div>
            <div className="w-3/12 mx-auto mt-12">
                <div className="text-2xl font-bold">
                    What's your phone number or email?
                </div>
                <form className="mt-6 flex flex-col">
                    <input className="rounded-md px-4 py-2 bg-gray-200" placeholder="Enter phone number or email"/>
                    <button className="px-4 py-3 bg-black text-white mt-4 rounded-xl">Continue</button>
                </form>
            </div>
        </div>
    )
}
export default Login;