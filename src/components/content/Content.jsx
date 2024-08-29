import {APILoader, PlacePicker} from '@googlemaps/extended-component-library/react';
import React, { useState } from 'react';

const Content=()=>{
    const locationStyle={
        width:"60%"
    }
    const destinationStyle={
        width:"60%",
        margin:"20px 0"
    }
    const [location,setLocation] = React.useState('');
    const [destination,setDestination]=useState('');
  const handlePlaceChange = (e) => {
    setLocation(e.target.value);
    console.log(location && location.formattedAddress);
  };
  const handlePlaceChange1=(e)=>{
        setDestination(e.target.value);
        console.log(destination && destination.formattedAddress);
  };
  const countries = ['in'];
    return(
        <div className="bg-black w-full flex py-4">
 <APILoader apiKey="AIzaSyCYkkDA-nwSfQwK8HYAgg-9vE-c9HolewU" solutionChannel="GMP_GCC_placepicker_v1" />
            <div className="flex-col w-6/12 p-1">
                <div className="text-white text-5xl mt-40 w-8/12 text-left ml-20 font-bold">
                    Go anywhere with Cabio
                </div>
                <div className="text-white text-left ml-20 mt-16 text-lg">
                    Request a ride, hop in, and go. 
                </div>
                <div className="mt-4">
                    <form className="w-full flex justify-left ml-20 flex-col">
                    <PlacePicker country={countries} placeholder="Enter location" onPlaceChange={handlePlaceChange} className="w-7/12"/>
                    <PlacePicker country={countries} placeholder="Enter destination" onPlaceChange={handlePlaceChange1} className="w-7/12 mt-4" />
                    {/* <p className='text-white'>{location  && location.formattedAddress} </p><p className='text-white'>{destination && destination.formattedAddress}</p> */}
                        {/* <input className="p-4 w-7/12 rounded-md h-12" placeholder="Enter location"/>
                        <input className="p-4 w-7/12 rounded-md h-12 mt-4" placeholder="Enter destination"/> */}
                        <button className="text-black px-3 py-2 bg-white w-3/12 mt-4 rounded-md font-bold">See Prices</button>
                    </form>
                </div>
                
            </div>
            <div  className="mt-8 ml-6">
            <img src="https://th.bing.com/th/id/R.d9edd944c2e0d9a05dec0abd996d75a4?rik=5xypj03C4xj6KQ&riu=http%3a%2f%2fimphalsafecab.com%2fpublic%2fimages%2fhome.jpg&ehk=zE4w9iCc4hlWRWFJ9Kd%2fO4R9BhZS5vpkjBIDH6jKWvs%3d&risl=&pid=ImgRaw&r=0" height="400" width="500" className="rounded-xl"/>

            </div>

        </div>
    )
}
export default Content;