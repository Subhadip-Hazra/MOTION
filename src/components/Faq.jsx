import { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { faqs } from "../constants";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mb-3 space-y-0.5">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-[#18181B] p-3 rounded-lg shadow-md text-slate-200 card-border">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                        <h4 className="text-primary text-xl">{faq.heading}</h4>
                        {activeIndex === index ? (
                            <IoIosArrowDropdownCircle size={24} />
                        ) : (
                            <IoIosArrowDropleftCircle size={24} />
                        )}
                    </div>
                    <div className={`mt-3 text-base text-primary/70 accordion-content ${activeIndex === index ? 'expanded' : 'collapsed'}`}>
                        {faq.faq}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
