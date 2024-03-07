import bgImg from '../../assets/Rectangle.png'
import TripCard from './TripCard';


const TopHome = () => {
    return (
        
<section  className="h-screen flex w-full justify-center  bg-cover relative bg-no-repeat"  style={{backgroundImage: `url(${bgImg})`}}>

<TripCard></TripCard>

</section>
      
    );
};

export default TopHome;