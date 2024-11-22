'use client'
import { motion } from 'framer-motion';
import AccordionItem from "./ui/AccordionItem";

const Faq = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id='faq' className="pt-[110px] pb-[115px] min-w-screen cont mx-auto flex flex-col items-center gap-[50px] justify-center">
            <motion.h2
                className="text-[48px] font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={variants}
            >
                FAQ
            </motion.h2>
            <motion.div
                className='w-full max-w-[955px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, delay: 0.1 }}
                variants={variants}
            >
                <AccordionItem question="What is SaturnSwapper?" answer="SaturnSwapper is a Fortnite skin changer that allows you to access a wide variety of skins, customize your character with ease, and enjoy a smooth, secure experience – all with just a few clicks!" />
            </motion.div>
            <motion.div
                className='w-full max-w-[955px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, delay: 0.2 }}
                variants={variants}
            >
                <AccordionItem question="Is SaturnSwapper safe to use?" answer="Yes, SaturnSwapper is 100% safe to use. We take your security seriously and have implemented top-of-the-line security measures to ensure that your account is never at risk." />
            </motion.div>
            <motion.div
                className='w-full max-w-[955px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, delay: 0.3 }}
                variants={variants}
            >
                <AccordionItem question="How do I download SaturnSwapper?" answer="To download SaturnSwapper, simply click the 'Download' button on our website. The download process is quick and easy, so you can start customizing your Fortnite experience right away!" />
            </motion.div>
            <motion.div
                className='w-full max-w-[955px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, delay: 0.4 }}
                variants={variants}
            >
                <AccordionItem question="Can I use SaturnSwapper on any device?" answer="Yes, SaturnSwapper is compatible with all devices, including PC, PlayStation, Xbox, and mobile. No matter where you play Fortnite, you can enjoy the benefits of SaturnSwapper!" />
            </motion.div>
            <motion.div
                className='w-full max-w-[955px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, delay: 0.5 }}
                variants={variants}
            >
                <AccordionItem question="How do I contact SaturnSwapper support?" answer="If you have any questions or need assistance with SaturnSwapper, our support team is here to help! Simply click the 'Contact Support' button on our website, and we'll get back to you as quickly as possible." />
            </motion.div>
        </section>
    );
}

export default Faq;