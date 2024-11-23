import ContactModal from "./ui/ContactModal";

const Contact = () => {

    return (
        <section id='support' className="pt-[110px] min-w-screen cont mx-auto flex flex-col items-center gap-[50px] justify-center">
            <div
                className="bg-second px-5 text-center py-[45px] w-full rounded-[20px] flex flex-col items-center justify-center gap-[25px]"
            >
                <h2 className="text-[20px] font-bold">Need Help? Contact Support</h2>
                <p className="max-w-[562px] w-full text-[15px] text-center">If you have any questions or need assistance with the Skinchanger, our support team is here to help! Reach out to us, and we&apos;ll get back to you as quickly as possible.</p>
                <ContactModal />
            </div>
        </section>
    );
}

export default Contact;