'use client';

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Image from 'next/image';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="lg:hidden" onClick={toggleMenu}>
                <Image width={22} height={19} src="/menu.svg" alt="Fortnite Saturn Swapper v2 SkinChanger Menu" />
            </button>
            {isClient && isOpen && ReactDOM.createPortal(
                <motion.nav
                    initial={{ x: '100%' }}
                    animate={{ x: isOpen ? 0 : '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 bottom-0 w-full bg-main shadow-lg z-[9999999] lg:hidden"
                >
                    <ul className="flex flex-col items-center space-y-[20px] mt-[60px]">
                        <li className="cursor-pointer hover:text-white/60 transition-all">
                            <a href="#home" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className="cursor-pointer hover:text-white/60 transition-all">
                            <a href="#advantages" onClick={toggleMenu}>Advantages</a>
                        </li>
                        <li className="cursor-pointer hover:text-white/60 transition-all">
                            <a href="#functionality" onClick={toggleMenu}>Functionality</a>
                        </li>
                        <li className="cursor-pointer hover:text-white/60 transition-all">
                            <a href="#reviews" onClick={toggleMenu}>Reviews</a>
                        </li>
                        <li className="cursor-pointer hover:text-white/60 transition-all">
                            <a href="#support" onClick={toggleMenu}>Support</a>
                        </li>
                        <li className="cursor-pointer hover:text-white/60 transition-all">
                            <a href="#faq" onClick={toggleMenu}>FAQ</a>
                        </li>
                    </ul>
                    <button name='Close Menu' onClick={toggleMenu} className='fixed top-6 right-6'>
                        <Image alt='Fortnite Saturn Swapper v2 SkinChanger Close Menu' src='/close.svg'/>
                    </button>
                </motion.nav>,
                document.body
            )}
        </>
    );
}

export default BurgerMenu;