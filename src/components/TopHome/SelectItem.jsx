

const SelectItem = ({title, subTitle, text}) => {
    return (
       
            <div className="flex w-5/12 md:w-auto items-center border-2 border-slate-300 rounded-md p-2">
                <h1 className="font-bold text-sm md:text-base md:ms-4">{title}</h1>
                <hr className="w-[2px] mx-2  h-9 bg-slate-400"/>
                <div>
                    <h2 className="font-medium text-xs md:text-base">{subTitle}</h2>
                    <p className="line-clamp-1 max-w-32 text-xs md:text-base">{text}</p>
                </div>
            </div>
            
       
    );
};

export default SelectItem;