import Marquee from './ui/Marquee';
import BurgerMenu from './ui/BurgerMenu';
import Image from 'next/image';
const Home = () => {
    return (
        <>
            <header className="fixed bg-black/80 backdrop-blur-sm w-full">
                <div className="flex py-[20px] gap-2 items-center justify-between cont mx-auto">
                    <div className="flex items-center space-x-[5px]">
                        <Image height={20} width={20} src="/logo.svg" alt="Fortnite Saturn Swapper v2 SkinChanger Logo" className="h-[20px]" />
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
                                <a href="#support">Support</a>
                            </li>
                            <li className="cursor-pointer hover:text-white/60 transition-all">
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <BurgerMenu/>
                </div>
            </header>
            
            <section id="home" className="min-h-screen min-w-screen bg-gradient-to-t from-background to-foreground">
                <div className="cont w-full flex flex-col gap-10 md:gap-20 items-center justify-center min-h-[100vh] mx-auto">
                    <div className="flex flex-col items-center text-center max-w-[600px] w-full">
                        <h1 className="text-[48px] md:text-[64px] font-bold">Saturn<br />Swapper</h1>
                        <p className="text-[16px] md:text-[20px] mt-[16px]">Download the BEST free Fortnite skin changer.</p>
                        <p className="text-[16px] md:text-[16px] mt-[10px]">Saturn Swapper allows you to use a wide <br/>variety of skins for your cosmetics.</p>
                        <p className="text-[16px] md:text-[16px] mt-[5px]">Download your free skin changer now!</p>
                        <a 
                            href="#functionality"
                            className="w-full hover:bg-second hover:text-white transition-all bg-white text-foreground h-[50px] rounded-[8px] mt-[28px] flex items-center justify-center text-[20px]"
                        >
                            Download
                        </a>
                    </div>
                    <Marquee/>
                </div>
                <div className="max-w-[850px] w-full mx-auto mt-10 md:mt-0">
                    <ul className="flex flex-col md:flex-row gap-10 md:mt-0 items-center justify-between ">
                        <li className="text-center ">
                            <span className="md:text-[24px]">Support<br />Regulary Updates</span>
                        </li>
                        <li className="text-center ">
                            <span className="md:text-[24px]">100k+<br />Downloads</span>
                        </li>
                        <li className="text-center ">
                            <span className="md:text-[24px]">Totally safe<br />Undetect 100%</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;