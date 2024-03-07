import './App.css'
import FeaturedCard from './components/DestinationCard/FeaturedCard'
import TopHome from './components/TopHome/TopHome'
import SectionTitle from './components/brackTitle/SectionTitle'
import Navber from './components/navber/Navber'
import f1 from './assets/f2.png'
import f2 from './assets/f1.png'
import f3 from './assets/f3.png'
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos } from "react-icons/md";
import Footer from './components/footer/Footer'
import Subscribe from './components/Subscribe/Subscribe'
import OfferCArd from './components/OfferCard/OfferCArd'
import of1 from './assets/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png'
import of2 from './assets/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png'
import of3 from './assets/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png'
import Carousel from 'react-material-ui-carousel'
import blog1 from './assets/blog1.png'
import blog2 from './assets/blog2.png'
import blog3 from './assets/blog3.png'
import profile1 from './assets/testimonial/Rectangle 30.png'
import profile2 from './assets/testimonial/Rectangle 32.png'
import profile3 from './assets/testimonial/Rectangle 33.png'
import BlogCard from './components/BlogCard/BlogCard'

function App() {

  const freaturedDes = [
    {
      img: f1,
      name : 'Stopover Opportunity In istanbul With Turkish Airlines',
      id: 1
    },
    {
      img: f2,
      name : 'Discover The Timeless City With Touristanbul of Turkish Airlines',
      id: 2
    },
    {
      img: f3,
      name : 'The Best of Abu Dhabi With Exclusive Etihad Airways',
      id: 4
    },
  ]


  const offerData = [
    {
      img: of1,
      name : 'Up To 14% Discount On The Base Fare Of Domestic Flights',
      offerDis: 'With Bkash Payment Only',
      id: 1
    },
    {
      img: of2,
      name : 'Up To 12% Discount On The Base Fare Of Domestic Flights',
      offerDis: 'With Bkash Payment Onl',
      id: 2
    },
    {
      img: of3,
      name : 'Up To 14% Discount On The Base Fare Of Domestic Flights',
      offerDis: 'With Bkash Payment Onl',
      id: 3
    },
  ]


  const blogData = [
    {
      img: blog1,
      profile: profile1,
      name : 'Elart Theame',
      offerDis: 'With Bkash Payment Only',
      id: 1
    },
    {
      img: blog2,
      profile: profile2,
      name : 'Aria Mantague',
      offerDis: 'With Bkash Payment Onl',
      id: 2
    },
    {
      img: blog3,
      profile: profile3,
      name : 'Ys Stafen',
      offerDis: 'With Bkash Payment Onl',
      id: 3
    },
  ]


  return (
    <>
      <section className='relative bg-neutral-50'>
        {/* <div className=' z-30 fixed top-0 left-0 right-0 w-full'>
           */}
          <Navber></Navber>
       
        <div className='z-0'>
          <TopHome></TopHome>
          <div className=' mx-auto'>
          <SectionTitle title={'Featured Destinations'}/>
          
          <div className='max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-5'>
           {
            freaturedDes.map(res =>  <FeaturedCard key={res.id} img={res.img} title={res.name}></FeaturedCard>)
           }
          </div>

          <SectionTitle title={'Deals And Offers'}></SectionTitle>

          <div className='flex max-w-7xl mx-auto justify-between overflow-hidden flex-row gap-4 '>
            
            {
              offerData.map(res => <OfferCArd key={res.id} img={res.img}
              title={res.name}
              subTitle={res.offerDis}
              ></OfferCArd>)
            }
          </div>
          {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<ol className="flex justify-center gap-1 mt-3 text-xs font-medium">
  

  <li>
    <a
      href="#"
      className="block size-4 rounded-full border border-gray-100 bg-gray-400 text-center leading-8 text-gray-900"
    >

    </a>
  </li>

  <li className="block size-4 rounded-full border-yellow-500 bg-yellow-500 text-center leading-8 text-white">
    
  </li>

  <li>
    <a
      href="#"
      className="block size-4 rounded-full border border-gray-100 bg-gray-400 text-center leading-8 text-gray-900"
    >

    </a>
  </li>

</ol>

          
          <SectionTitle title={'Testimonials'}></SectionTitle>

          <div className='bg-blue-600  flex py-28'>

          <img src={ profile2} alt="" />
            <div className='w-80 flex mx-auto bg-white '>
              <img src={ profile1} alt="" />
              <p className='p-9'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam cumque consequatur neque. Enim rerum iure temporibus
              </p>

              <p>Your Name</p>

            </div>
            <img src={ profile3} alt="" />

          </div>

      <SectionTitle title={'Travel Blog'}></SectionTitle>    
<div className='max-w-7xl mx-auto flex gap-2 flex-col md:flex-row justify-around items-center relative'>
<MdOutlineArrowBackIos className='bg-yellow-300 text-xl w-9 p-3 h-9 rounded-full'></MdOutlineArrowBackIos>

  {
    blogData.map(res => <BlogCard key={res.id} img={res.img} profile={res.profile} name={res.name}></BlogCard>)
  }


<MdOutlineArrowForwardIos className='bg-yellow-300 text-xl w-9 p-3 h-9 rounded-full'></MdOutlineArrowForwardIos>

</div>




          <Subscribe></Subscribe>
          </div>
          
        </div>

        <Footer></Footer>
      </section>
    </>
  )
}

export default App
