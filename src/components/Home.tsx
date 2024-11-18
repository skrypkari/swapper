'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="absolute top-[40px] w-full">
                <div className="flex gap-2 items-center justify-between cont mx-auto">
                    <div className="flex items-center space-x-[5px]">
                        <img src="/logo.svg" alt="Fortnite Saturn Swapper v2 SkinChanger Logo" className="h-[20px]" />
                        <span className="text-[24px]">Saturn Swapper</span>
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center space-x-[20px]">
                            <li className="cursor-pointer hover:text-white/60 transition-all">
                                <a href="#home">Home</a>
                            </li>
                            <li className="cursor-pointer hover:text-white/60 transition-all">
                                <a href="#advantages">Advantages</a>
                            </li>
                            <li className="cursor-pointer hover:text-white/60 transition-all">
                                <a href="#functionality">Functionality</a>
                            </li>
                            <li className="cursor-pointer hover:text-white/60 transition-all">
                                <a href="#reviews">Reviews</a>
                            </li>
                            <li className="cursor-pointer hover:text-white/60 transition-all">
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <button className="lg:hidden" onClick={toggleMenu}>
                        <img src="/menu.svg" alt="Menu" />
                    </button>
                </div>
            </header>
            <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-full bg-main shadow-lg z-50 lg:hidden"
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
                        <a href="#faq" onClick={toggleMenu}>FAQ</a>
                    </li>
                </ul>
                <button onClick={toggleMenu} className='fixed top-6 right-6'>
                    <img src='/close.svg'></img>
                </button>
            </motion.nav>
            <section className="min-h-screen min-w-screen bg-gradient-to-t from-background to-foreground">
                <div className="cont pt-[200px] w-full flex flex-col md:flex-row items-center justify-between min-h-[100vh] mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-[48px] md:text-[64px] font-bold">Saturn<br></br>Swapper</h1>
                        <p className="text-[16px] md:text-[20px] mt-[16px]">Fortnite Chapter 5 Season 2</p>
                        <p className="text-[16px] md:text-[20px] mt-[10px]">Play with the Rarest Skins!</p>
                        <button className="w-full hover:bg-second hover:text-white transition-all bg-white text-foreground h-[50px] rounded-[8px] mt-[28px] text-[20px]">Download</button>
                    </div>
                    <div>
                        <img src="/home.png" alt="Fortnite Saturn Swapper v2 SkinChanger Download" />
                    </div>
                </div>
                <div className="max-w-[850px] w-full mx-auto mt-10 md:mt-0">
                    <ul className="flex flex-col md:flex-row gap-10 md:mt-0 items-center justify-between ">
                        <li className="text-center "> 
                            <span className="md:text-[24px]">Support<br/>Regulary Updates</span>
                        </li>
                        <li className="text-center "> 
                            <span className="md:text-[24px]">100k+<br/>Downloads</span>
                        </li>
                        <li className="text-center "> 
                            <span className="md:text-[24px]">Totally safe<br/>Undetect 100%</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;