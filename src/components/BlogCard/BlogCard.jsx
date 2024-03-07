

const BlogCard = ({img, profile, name, }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg pb-3">
              <div className="">
                <img src={img} alt="" />
                <div className="flex gap-6 px-4  py-3">
                    <p className="text-yellow-400 font-bold text-sm">Name of place</p>
                    <p className="font-medium text-gray-600 text-sm">12 september 23</p>
                </div>
                <h1 className="w-80 line-clamp-2 text-black font-bold px-4 text-xl">Sustainable Tourism: Preserving The Planet While Seeing </h1>

                <div className="flex justify-center">
                <hr className="w-11/12 bg-slate-400 my-2"/>
                </div>


            <div className="flex justify-between px-5">
               <div className="flex items-center gap-4">
               <img src={profile} className="w-8 rounded-full h-8" alt="" />
                <p className="font-bold text-xs">{name}</p>
               </div>
               <p className="text-yellow-400 font-bold">Read More >> </p>
            </div>

              </div>
        </div>
    );
};

export default BlogCard;