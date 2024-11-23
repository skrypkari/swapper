import AdvantagesComponent from '@/components/Advantages';
import HomeComponent from '@/components/Home';
import FeaturesComponent from '@/components/Features';
import ReviewsComponent from '@/components/Reviews';
import ContactComponent from '@/components/Contact';
import FaqComponent from '@/components/Faq';
import Image from 'next/image';
export default function Home() {

  return (
    <>
      <main className='overflow-hidden max-w-screen'>
        <HomeComponent />
        <AdvantagesComponent />
        <FeaturesComponent />
        <ReviewsComponent />
        <ContactComponent />
        <FaqComponent />
      </main>
      <footer className='bg-black/50 border-t border-white/15 pt-[50px] pb-[50px]'>
        <div className='cont mx-auto flex flex-col md:flex-row items-center md:items-start justify-between w-full'>
          <div className='flex flex-col items-center text-center md:items-start md:text-left gap-[20px]'>
            <div className='flex items-center gap-[5px]'>
              <Image src='/logo.svg' alt='Fortnite Saturn Swapper v2 SkinChanger Logo' className='h-[20px]' />
              <span className='text-[24px]'>Saturn Swapper</span>
            </div>
            <p className='text-[15px]'>Play with the best free skin changer, Saturn Swapper!</p>
            <p className='text-[15px]'>© 2024 Saturn Swapper. All rights reserved.</p>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-16'>
            <div className='flex flex-col mt-10 md:mt-0 items-center text-center md:text-right md:items-end gap-[20px]'>
              <p className='text-[16px]'>Contact us: </p>
              <div className='flex items-center gap-[10px]'>
                <a href='mailto:info@saturn.com'>
                  <Image src='/logo.svg' alt='Email' />
                </a>
                <p>info@saturn.com</p>
              </div>
            </div>
            <nav>
              <ul className="flex flex-col items-center md:items-end">
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
          </div>
        </div>
      </footer>
    </>
  );
}
