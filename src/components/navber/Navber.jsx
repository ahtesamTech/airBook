import logo from '../../assets/LOGO.png'

const Navber = () => {
    return (
        <div className=' fixed z-50 right-0 left-0 top-0'>
           
<nav className="bg-white/85 w-full px-8 md:px-auto">
	<div className="md:h-16 h-12 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div className="text-indigo-500 md:order-1">
		
        <img src={logo} className='w-20 md:w-10/12' alt="" />
			
		</div>
        
		<div className="text-gray-500 hidden md:flex order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
               
				<li className="md:px-4 md:py-2 text-black"><a href="#">Blog</a></li>
				<li className="md:px-4 md:py-2 text-black"><a href="#">offer</a></li>
				<li className="md:px-4 md:py-2 text-black"><a href="#">Airlines</a></li>
				<li className="md:px-4 md:py-2 text-black"><a href="#">About</a></li>
				
			</ul>
		</div>
		<div className="order-2 md:order-3 hidden md:flex">
			<button className="px-6 py-1 text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg flex items-center">
                <span>Sign in</span>
            </button>
		</div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     
      <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>


	</div>
</nav>
        </div>
    );
};

export default Navber;