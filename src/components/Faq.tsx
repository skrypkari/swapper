import AccordionItem from "./ui/AccordionItem";

const Faq = () => {

    return (
        <section id='faq' className="pt-[110px] pb-[115px] min-w-screen cont mx-auto flex flex-col items-center gap-[50px] justify-center">
            <h2
                className="text-[48px] font-bold"
            >
                FAQ
            </h2>
            <div
                className='w-full max-w-[955px]'
            >
                <AccordionItem question="What is SaturnSwapper?" answer="SaturnSwapper is a Fortnite skin changer that allows you to access a wide variety of skins, customize your character with ease, and enjoy a smooth, secure experience – all with just a few clicks!" />
            </div>
            <div
                className='w-full max-w-[955px]'
            >
                <AccordionItem question="Is SaturnSwapper safe to use?" answer="Yes, SaturnSwapper is 100% safe to use. We take your security seriously and have implemented top-of-the-line security measures to ensure that your account is never at risk." />
            </div>
            <div
                className='w-full max-w-[955px]'
            >
                <AccordionItem question="How do I download SaturnSwapper?" answer="To download SaturnSwapper, simply click the 'Download' button on our website. The download process is quick and easy, so you can start customizing your Fortnite experience right away!" />
            </div>
            <div
                className='w-full max-w-[955px]'
            >
                <AccordionItem question="Can I use SaturnSwapper on any device?" answer="Yes, SaturnSwapper is compatible with all devices, including PC, PlayStation, Xbox, and mobile. No matter where you play Fortnite, you can enjoy the benefits of SaturnSwapper!" />
            </div>
            <div
                className='w-full max-w-[955px]'
            >
                <AccordionItem question="How do I contact SaturnSwapper support?" answer="If you have any questions or need assistance with SaturnSwapper, our support team is here to help! Simply click the 'Contact Support' button on our website, and we'll get back to you as quickly as possible." />
            </div>
        </section>
    );
}

export default Faq;