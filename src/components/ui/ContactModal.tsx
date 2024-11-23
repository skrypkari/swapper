'use client'
import { useState } from 'react';
import Modal from './Modal';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactModal = () => {

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
        setIsOpen(false);
        toast('Message sent successfully', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        setError('');
        setSubmitted(true);
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <Modal onClose={onClosed} isOpen={isOpen}>
                <h4 className="font-bold text-[24px] text-center w-full">Contact Us</h4>
                <p className='text-[12px] mt-5 text-white/70 text-center'>Use the form below to contact our support team. Please allow up to 48 hours for a response to your inquiry.</p>
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
                    maxLength={64}
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
            <button className="w-full max-w-[562px] hover:bg-main hover:text-white transition-all bg-white text-second h-[50px] rounded-[8px] mt-[28px] text-[16px]" onClick={() => setIsOpen(true)}>Contact Support</button>

        </>
    )
}

export default ContactModal;