import { tips } from "../constants";

const HomeCard = () => {
    return (
        <div className="grid mt-10 gap-6 sm:grid-cols-1 md:grid-cols-3 w-full" >
            {tips.map((tips, index) => (
                <div key={index} className="bg-[#18181B] p-5 rounded-lg shadow-md flex flex-col text-slate-200 card-border">
                    <div className="flex justify-start gap-3">
                    <img src={tips.imageUrl} alt={tips.heading} className="w-8 h-8 p-1 border-2 border-black-500 rounded-full mb-4" style={{ objectFit: 'cover' }} />
                    <h4 className="text-primary text-center text-xl">{tips.heading}</h4>
                    </div>
                    <p className="text-base text-primary/70 ">{tips.text}</p>
                </div>
            ))}
        </div>
    );
};

export default HomeCard;
