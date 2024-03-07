

const OfferCArd = ({img, subTitle, title}) => {
    return (
        <div>
          
<div className="bg-white rounded-xl shadow-lg">
	<div className="flex gap-5 items-center">

        <img src={img} alt="tailwind logo" className="rounded-xl w-52" />
		<div className="m-5">
			
            <p className=" hidden md:flex text-black font-medium text-sm">{subTitle}</p>
            <h3 className="hidden md:flex font-bold w-56 text-blue-700 text-xl">{title}</h3>
				
        </div>
			
				
				
			</div>
		</div>
	</div>
       
    );
};

export default OfferCArd;