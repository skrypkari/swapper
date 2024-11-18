'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './ui/Modal';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [messageText, setMessageText] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onClosed = () => {
        setIsOpen(false);
    }

    const handleSubmit = () => {
        if (!nickname || !email || !messageText) {
            setError('All fields are required');
            return;
        }
        // Handle form submission logic here
        setError('');
        setSubmitted(true);
    }

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="pt-[110px] min-w-screen cont mx-auto flex flex-col items-center gap-[50px] justify-center">
            <Modal onClose={onClosed} isOpen={isOpen}>
                <h4 className="font-bold text-[24px] text-center w-full">Leave a review</h4>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <input
                    className="bg-white/10 outline-0 appearance-none text-white placeholder:text-white/80 ring-0 w-full h-[50px] rounded mt-5 px-5"
                    maxLength={16}
                    placeholder="Your Name"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <input
                    className="bg-white/10 outline-0 appearance-none text-white placeholder:text-white/80 ring-0 w-full h-[50px] rounded mt-5 px-5"
                    maxLength={16}
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="bg-white/10 outline-0 appearance-none text-white placeholder:text-white/80 ring-0 w-full h-[150px] rounded my-5 pt-3 px-5"
                    maxLength={200}
                    placeholder="Your Message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)} />
                <button className="hover:bg-second hover:text-white transition-all bg-white text-foreground h-[30px] rounded-[8px] px-5 w-full text-[16px]" onClick={handleSubmit}>{submitted ? 'Submitted' : 'Submit'}</button>
            </Modal>
            <motion.div
                className="bg-second px-5 text-center py-[45px] w-full rounded-[20px] flex flex-col items-center justify-center gap-[25px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={variants}
            >
                <h2 className="text-[20px] font-bold">Need Help? Contact Support</h2>
                <p className="max-w-[562px] w-full text-[15px] text-center">If you have any questions or need assistance with the Skinchanger, our support team is here to help! Reach out to us, and we&apos;ll get back to you as quickly as possible.</p>
                <button className="w-full max-w-[562px] hover:bg-main hover:text-white transition-all bg-white text-second h-[50px] rounded-[8px] mt-[28px] text-[16px]" onClick={() => setIsOpen(true)}>Contact Support</button>
            </motion.div>
        </section>
    );
}

export default Contact;