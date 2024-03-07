import { BsRecordCircle, BsSearch } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import SelectItem from "./SelectItem";

const TripCard = () => {
    return (
        <div className='md:top-1/4 top-10 m-10 md:mx-auto absolute max-w-7xl  space-y-4'>
<h1 className='text-white text-3xl font-medium'>Welcome To <span className="text-blue-700 font-bold text-4xl">AirBook</span></h1>
            
<div className="bg-white dark:bg-gray-800 rounded-md p-10 ">
   
   <div className="space-y-3">
    <div className='flex justify-between flex-col md:flex-row gap-3'>
    <div className='flex gap-3'>
        
        <button className="bg-slate-300 flex items-center gap-3 text-black py-2 font-medium px-3 rounded">
          <RiCheckboxBlankCircleLine className="text-slate-500"/>
        One Way
      </button>
        <button className="flex items-center gap-3 bg-blue-500 text-blue-50 py-2 font-medium px-3 rounded">
          <BsRecordCircle/>
        Round Trip
      </button>
     </div>


    <div className='flex gap-3'>
        
    <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 " id="menu-button" aria-expanded="true" aria-haspopup="true">
      1 Traveller
      <svg className="-mr-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Economy
      <svg className="-mr-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
     </div>
    </div>


      <div className="flex gap-1 md:gap-3 w-12/12 flex-wrap md:flex-row  items-center">
        <SelectItem
        title={'DAC'}
        subTitle={'Dhaka'}
        text={'Hazrat Shahajalal International'}
        ></SelectItem>
        <SelectItem
        title={'DAC'}
        subTitle={'Dhaka'}
        text={'Hazrat Shahajalal International'}
        ></SelectItem>
        <SelectItem
        title={'DAC'}
        subTitle={'Dhaka'}
        text={'Hazrat Shahajalal International'}
        ></SelectItem>
        <SelectItem
        title={'DAC'}
        subTitle={'Dhaka'}
        text={'Hazrat Shahajalal International'}
        ></SelectItem>

<button className=" bg-yellow-400 w-full flex justify-center md:w-auto md:p-4 py-2 rounded-md font-bold mr-4 text-white">

<BsSearch className="font-extrabold md:text-3xl"/>

  </button>
      </div>


   </div>


</div>

        </div>
    );
};

export default TripCard;