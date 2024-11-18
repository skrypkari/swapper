'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Features = () => {
    return (
        <motion.section
            id='functionality'
            className="pt-[110px] min-w-screen cont mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <Image quality={100} src="/frame.png" alt="Customization" width={650} height={386} />
            </motion.div>
            <motion.div
                className="max-w-[480px] mt-10 xl:mt-0 text-center xl:text-right"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <h2 className="text-[36px] md:text-[48px] font-bold">Features</h2>
                <p className="text-[24px] md:text-[32px] font-bold mt-[50px]">Powerful Features<br />of the SaturnSwapper</p>
                <p className="md:text-[20px] mt-[20px]">Access a wide variety of skins, customize your character with ease, and enjoy a smooth, secure experience <br/>– all with just a few clicks!</p>
                <button className="w-full hover:bg-white hover:text-main transition-all bg-second text-white h-[50px] rounded-[8px] mt-[28px] text-[20px]">Download</button>
            </motion.div>
        </motion.section>
    );
}

export default Features;