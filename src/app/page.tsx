import AdvantagesComponent from '@/components/Advantages';
import HomeComponent from '@/components/Home';
import FeaturesComponent from '@/components/Features';
import ReviewsComponent from '@/components/Reviews';
import ContactComponent from '@/components/Contact';
import FaqComponent from '@/components/Faq';
export default function Home() {

  return (
    <>
      <main>
        <HomeComponent/>
        <AdvantagesComponent/>
        <FeaturesComponent/>
        <ReviewsComponent/>
        <ContactComponent/>
        <FaqComponent/>
      </main>
      <footer className='bg-gradient-to-b from-background to-foreground pt-[110px] pb-[110px]'>
        <div className='cont mx-auto flex flex-col md:flex-row items-center justify-between w-full'>
          <div className='flex flex-col items-center text-center md:items-start md:text-left gap-[25px]'>
            <div className='flex items-center gap-[5px]'>
              <img src='/logo.svg' alt='Fortnite Saturn Swapper v2 SkinChanger Logo' className='h-[20px]' />
              <span className='text-[24px]'>Saturn Swapper</span>
            </div>
            <p className='text-[15px]'>© 2024 Saturn Swapper. All rights reserved.</p>
          </div>
          <div className='flex flex-col mt-10 md:mt-0 items-center text-center md:text-right md:items-end gap-[20px]'>
            <p className='text-[15px]'>Contact us: </p>
            <div className='flex items-center gap-[10px]'>
              <a href='mailto:info@saturn.com'>
                <img src='/logo.svg' alt='Email' />
              </a>
              <p>info@saturn.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
