import { Link } from "react-router-dom";

const ContentMid=()=>{
    return(
        <div className="w-full">
        <div className="w-full flex p-2 mt-12">
            <div className="w-6/12 ml-20">
                <img src="https://miro.medium.com/v2/resize:fit:1116/0*1P31ObVOum3O6en_.png" height="400" width="500"/>
            </div>
            <div className="w-4/12 text-left">
                <div className="text-5xl font-bold mt-24">
                    Drive when you want, make what you need
                </div>
                <div className="text-lg mt-8">
                    Make money on your schedule with deliveries or rides-or both. You can use your own car or choose rental through Cabio.
                </div>
                <div className="flex-row mt-8">
                    <button className="px-4 py-3 text-white bg-black font-bold mr-6 rounded-md">Get Started</button>
                    <Link className="border-b-2 border-gray-200">Already have an account? Sign in</Link>
                </div>
            </div>
        </div>
        <div className="w-full flex p-2 mt-12">
        <div className="w-4/12 text-left ml-20">
                <div className="text-5xl font-bold mt-24">
                   The Cabio you know, reimagined for business
                </div>
                <div className="text-lg mt-8">
                    Cabio for business is a platform for managing global rides and meals, and local deliveries, for companies of any size.
                </div>
                <div className="flex-row mt-8">
                    <button className="px-4 py-3 text-white bg-black font-bold mr-6 rounded-md">Get Started</button>
                    <Link className="border-b-2 border-gray-200 hover:w-full hover:transition duration-700 hover:border-black">Check out our solutions</Link>
                </div>
            </div>
            <div className="w-6/12 mt-12 ml-20 bg-[img1]">
                <img src="https://blogapi.uber.com/wp-content/uploads/2024/01/01_U4B_BusinessTravelAirport_1920x1080.jpg" height="900" width="800"  className="rounded-xl"/>
            </div>
        </div>
        <div className="w-full flex p-2 mt-12">
        
            <div className="w-6/12 mt-12 ml-20 bg-[img1]">
                <img src="https://shakuro.com/_next/image?url=https:%2F%2Fblog.cgify.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fmobile_app_development-illustration_by_ranganath_krishnamani.png&w=2560&q=98" height="800" width="500" className="rounded-xl"/>
            </div>
            <div className="w-4/12 text-left">
                <div className="text-5xl font-bold mt-24">
                   Make money by renting out your car
                </div>
                <div className="text-lg mt-8">
                  Connect with thousands of drivers and earn more per week with Cabio's  free fleet management tools.
                </div>
                <div className="flex-row mt-8">
                    <button className="px-4 py-3 text-white bg-black font-bold mr-6 rounded-md">Get Started</button>   
                </div>
            </div>
        </div>
        </div>
    )
}
export default ContentMid;