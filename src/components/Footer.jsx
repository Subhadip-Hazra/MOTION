import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
    return (
        <footer className='footer card-border text-slate-200 font-poppins bg-[#18181B] sm:px-20'>
            <hr className='border-[#18181B] w-full' />

            <div className='footer-container'>
                <p>
                    © 2024 <strong>Subhadip Hazra</strong>. All rights reserved.
                </p>

                <div className='flex gap-3 justify-center items-center'>
                    {socialLinks.map((link) => (
                        <Link key={link.name} to={link.link} target='_blank'>
                            <img
                                src={link.iconUrl}
                                alt={link.name}
                                className='w-8 h-8 object-contain text-xl'
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;