import Image from 'next/image';

const Advantages = () => {
    const items = [
        {
            icon: '/custom.svg',
            title: 'Customization',
            description: 'Allows players to personalize their in-game appearance with a variety of skins, expressing unique styles and creativity.'
        },
        {
            icon: '/gamepad.svg',
            title: 'Experience',
            description: 'New skins can make gameplay more exciting, motivating players to keep coming back for a fresh visual experience.'
        },
        {
            icon: '/lock.svg',
            title: 'Unlock skins',
            description: 'Using rare skins can boost your confidence, making you feel part of an elite group with exclusive content.'
        },
        {
            icon: '/confidence.svg',
            title: 'Better Confidence',
            description: 'Using rare skins can boost your confidence, making you feel part of an elite group with exclusive content.'
        }
    ];
    return (
        <>
            <section id="advantages" className="px-1 pt-[110px] min-w-screen cont mx-auto flex gap-5 flex-col xl:flex-row items-center text-center xl:text-left xl:items-start justify-between">
                <div
                    className="max-w-[480px]"
                >
                    <h2 className="text-[36px] md:text-[48px] font-bold">Advantages</h2>
                    <p className="text-[24px] md:text-[32px] font-bold mt-[50px]">Why Choose<br />SaturnSwapper?</p>
                    <p className="md:text-[20px] mt-[20px]">Unlimited skins, easy setup, and top security—customize your Fortnite experience with no risk to your account!</p>
                </div>
                <div
                    className="grid md:grid-cols-2 mt-10 xl:mt-0 w-full max-w-[650px] gap-[50px]"
                >
                    {items.map((item, index) => (
                        <div key={index} className="border items-center xl:items-start border-white rounded-[12px] col-span-1 py-[21px] px-[20px] flex flex-col gap-[15px]">
                            <Image src={item.icon} alt={item.title} width={50} height={50} />
                            <h3 className="text-[16px] font-bold">{item.title}</h3>
                            <p className="text-[14px]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Advantages;