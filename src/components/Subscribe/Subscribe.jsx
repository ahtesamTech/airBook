import NewsLetterImag from '../../assets/Isolation_Mode.png'

const Subscribe = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={NewsLetterImag} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>


		<div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-4">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Subscribe To Our Newsletter!
			</h1>
			<p className="mt-6 text-lg  font-bold text-blue-600">
                Subscribe To Our Newsletter And Stay <br /> Updated.
			</p>
			<div className=" space-y-4">
				<input type="text" className='border-2 border-blue-500 placeholder-blue-200 rounded-md px-3 w-full py-2'  placeholder='Your Email'/>

                <button className='w-full py-2 rounded-md font-bold bg-yellow-500'>Subscribe</button>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Subscribe;