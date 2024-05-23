import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isSidebar, setIsSidebar] = useState(false);

    useEffect(() => {
        if (isSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isSidebar]);

    return (
        <header className="header">
            <NavLink to='/home' className='block-container '>
                <p className="text-xl text-white ">MOTION</p>
            </NavLink>
            <RxHamburgerMenu className="cursor-pointer text-2xl text-white" onClick={() => setIsSidebar(!isSidebar)} />
            {isSidebar && (
                <nav className="fixed top-0 right-0 w-2/3 sm:w-1/3 h-full bg-black shadow-lg flex flex-col items-center p-6 z-50 transition-transform transform">
                    <NavLink to='/home' className={({ isActive }) => isActive ? 'text-blue-500 my-2' : 'text-white my-2'} onClick={() => setIsSidebar(!isSidebar)}>
                        Home
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 my-2' : 'text-white my-2'} onClick={() => setIsSidebar(!isSidebar)}>
                        About
                    </NavLink>
                    <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500 my-2' : 'text-white my-2'} onClick={() => setIsSidebar(!isSidebar)}>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500 my-2' : 'text-white my-2'} onClick={() => setIsSidebar(!isSidebar)}>
                        Contact
                    </NavLink>
                    <NavLink to='/legal' className={({ isActive }) => isActive ? 'text-blue-500 my-2' : 'text-white my-2'} onClick={() => setIsSidebar(!isSidebar)}>
                        Legal
                    </NavLink>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
