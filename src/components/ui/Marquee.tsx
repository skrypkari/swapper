'use client'

import Marq from "react-fast-marquee";

const items = [
    {
        name: "Moon Knight",
        image: "/moonknight.webp"
    },
    {
        name: 'Mysterious Sfate',
        image: '/mysteriousfate.webp'
    },
    {
        name: 'She Venom',
        image: '/shevenom.webp'
    },
    {
        name: 'Slim Shady',
        image: '/slimshady.webp'
    },
    {
        name: 'Tectonic',
        image: '/tectonic.webp'
    },
    {
        name: 'Zuri',
        image: '/zuri.webp'
    },
    {
        name: 'Titan',
        image: '/titan.webp'
    },
    {
        name: 'Dynamic Hush',
        image: '/dynamichush.webp'
    },
    {
        name: 'Dawn',
        image: '/dawn.webp'
    }
]

const Marquee = () => {

    return(
        <Marq autoFill={true}>
            {items.map((item, index) => (
                <div key={index} className="px-4 mr-5 py-2 gap-5 bg-black/40 border border-white/5 rounded-lg flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">
                        <img className="rounded" src={item.image} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                </div>
            ))}
        </Marq>
    )
}

export default Marquee;