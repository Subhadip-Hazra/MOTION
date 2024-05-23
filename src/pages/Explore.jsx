import { Link } from "react-router-dom"
import { Banner, Card, Faq} from "../components"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { works } from "../constants";


/* eslint-disable react/no-unknown-property */
const Explore = () => {

    return (
        <section className="max-container">
            <div className="flex-row sm:flex h-screen justify-center">
                <Banner />
                <div className="text-slate-50">
                    <h1 className="text-6xl sm:text-8xl sm:mt-24 blue-gradient_text">
                        MOTION
                    </h1>
                    <p className="text-2xl sm:text-3xl sm:pr-10 mt-6 ">
                        An<span className="text-blue-600"> AI powered </span> image recognization app generate image to information!
                    </p>
                    <Link to={"/home"}><button className='btn mt-16 boxer' style={{ fontSize: '18px', fontWeight: 'inherit', borderRadius: '30px', backgroundColor: 'blue', padding: '15px 30px 15px 30px' }}><span>{"EXPLORE NOW"}</span> </button></Link>
                </div>
            </div>
            <div className=" px-1 sm:px-20 text-slate-300">
            <hr className="border-slate-200 mt-20 sm:mt-2 " />
                <h3 className="subhead-text mt-10">About</h3>
                    <p className="w-full mt-5 first-letter:text-3xl sm:first-letter:text-5xl">
                    Welcome to our innovative Image Recognition App, designed to enhance your digital experience by seamlessly merging technology with everyday life. Our app leverages advanced image recognition technology to provide instant and insightful information about the images you capture.
                    </p>
                <h3 className="subhead-text mt-20">How Our App Helps You</h3>
                    <p className="w-full mt-5">
                    {"In today's fast-paced world, access to quick and accurate information is paramount. Our Image Recognition App is your perfect companion, whether you're a student, a professional, or simply a curious individual. By using our app, you can:"}
                    </p>
                <div className="mb-20">
                    <Card/>
                </div>
                <h3 className="subhead-text text-slate-300">How Our App Works</h3>
                    <p className="w-full mt-5">
                    Using our app is as simple as it is powerful. Here’s a step-by-step guide to how it works:
                    </p>
                <div className="my-20 flex ">
                    <VerticalTimeline>
                        {works.map((work) =>(
                            <VerticalTimelineElement  key={work.title} icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img src={work.icon} alt={work.title} className="w-[50%] h-[50%] object-contain"  />
                                </div>
                            }
                            iconStyle={{ background:work.iconBg }}                           
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle:'solid',
                                borderBottomColor:work.iconBg,
                                background:'#18181B',
                                boxShadow: 'rgba(0, 0,0, 1) 2px 2px 3px 0px, rgba(0, 0, 0, 1) 2px 6px 6px 0px'
                                
                            }}                            
                            >
                                <div>
                                    <h3 className="text-xl text-slate-300 font-poppins font-semibold">
                                        {work.title}
                                    </h3>
                                </div>
                                <ul className="my-5 list-disc ml-5 space-y-2 ">
                                    {work.points.map((point,index) =>(
                                        <li key={`experience-point-${index}`} className="text-slate-400 font-normal pl-1 text-sm sm:text-md ">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <p className="w-full my-10">Our app uses cutting-edge machine learning and artificial intelligence technologies to ensure that the information provided is accurate and up-to-date. The user-friendly interface ensures a smooth and enjoyable experience, making it easy for anyone to use, regardless of their technical expertise.</p>
                <h3 className="subhead-text mt-16 text-slate-300">Why Choose Our App?</h3>
                    
                <div className="w-full my-10">
                    <Faq/>
                </div>
                <p className="w-full my-8">
                Experience the future of information at your fingertips with our Image Recognition App. Download now and start exploring the world in a whole new way!
                </p>
            <hr className="border-slate-200 " />
            </div>
        </section>
    )
}

export default Explore
