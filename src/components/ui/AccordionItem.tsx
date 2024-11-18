'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-white max-w-[955px] w-full pb-[20px]">
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
                <p className="text-[20px]">{question}</p>
                <motion.img
                    src='/down.svg'
                    className={`transition-all ${isOpen ? 'rotate-180' : ''}`}
                    alt="Toggle"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="pt-[10px] overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <p className="text-[16px]">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;