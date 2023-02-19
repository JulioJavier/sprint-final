import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import LocationIcon from '../assets/LocationIcon.svg'
import { context } from '../context/authContext'
// import Carousel from '../components/Carousel'


const Home = () => {
  const authContext = useContext(context)
  console.log(authContext);
  return (
    <>   
    <div className='flex gap-1 h-10 mt-2 mb-2'>
      <img src={LocationIcon} alt="LocationIcon" />
      <div className='flex flex-col justify-center'>
        <span className='flex text-yellow-1000 text-lg'>DELIVER TO</span>
      </div>
      
    </div>
    {/* <Carousel /> */}
    <Navbar/>
    </>
  )
}

export default Home