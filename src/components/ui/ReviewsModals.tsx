'use client'

import Modal from "@/components/ui/Modal";
import Rating from "@/components/ui/Rating";
import StarRating from "@/components/ui/StarRating";
import { useEffect, useState } from "react";

interface Review {
    date: Date;
    rating: number;
    nickname: string;
    review: string;
}

const ReviewsModals = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenReviews, setOpenReviews] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [rating, setRating] = useState(0);
    const [nickname, setNickname] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [error, setError] = useState('');

    const onClosed = () => {
        setIsOpen(false);
        setError('');
    };

    const handleSubmit = () => {
        if (nickname.trim() === '' || reviewText.trim() === '' || rating === 0) {
            setError('Please fill in all fields and select a rating.');
            return;
        }

        const newReview = { date: new Date(), rating, nickname, review: reviewText };
        const updatedReviews = [newReview, ...reviews];

        setReviews(updatedReviews);
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));

        setIsOpen(false);
        setNickname('');
        setReviewText('');
        setRating(0);
        setError('');
    };

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const formatTimeAgo = (date: string | number | Date) => {
        const now = new Date();
        const diffInMs = now.getTime() - new Date(date).getTime();
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} hours ago`;
        } else {
            return `${diffInDays} days ago`;
        }
    };

    useEffect(() => {
        const now = new Date();
        const storedReviews = localStorage.getItem('reviews');
        setReviews(storedReviews ? JSON.parse(storedReviews) : [
            { date: new Date(now.getTime() - 6 * 60 * 60 * 1000), rating: 5, nickname: "Gunfire_Legion", review: "SaturnSwapper is a game-changer! Fast and easy to use, it makes switching skins in Fortnite super smooth. Definitely one of the best skin changers out there!" },
            { date: new Date(now.getTime() - 8 * 60 * 60 * 1000), rating: 5, nickname: "Steel_Assault", review: "Been using SaturnSwapper for a few weeks now and it never disappoints. The variety of skins is impressive and the speed is perfect. Highly recommend!" },
            { date: new Date(now.getTime() - 16 * 60 * 60 * 1000), rating: 5, nickname: "Bulletstorm_Fury", review: "The best skin changer for Fortnite. It’s quick, intuitive, and allows you to swap skins mid-game without any lag. Definitely a must-have!" },
            { date: new Date(now.getTime() - 18 * 60 * 60 * 1000), rating: 5, nickname: "Tactical_Strike", review: "SaturnSwapper is excellent. No bugs, no lag, and it’s incredibly fast. I love being able to change skins in the middle of the game. Great tool!" },
            { date: new Date(now.getTime() - 24 * 60 * 60 * 1000), rating: 5, nickname: "Phantom_Warfare", review: "I’ve used several skin changers, but SaturnSwapper is by far the best. It’s reliable and offers a wide selection of skins. Worth every penny!" },
            { date: new Date(now.getTime() - 27 * 60 * 60 * 1000), rating: 5, nickname: "Rapid_Fury", review: "SaturnSwapper is fast and works flawlessly every time. I can change skins mid-game with no issues, and that’s a huge plus!" },
            { date: new Date(now.getTime() - 32 * 60 * 60 * 1000), rating: 5, nickname: "Apex_Marksman", review: "This tool is exactly what I needed. It’s fast, easy to use, and doesn’t slow down gameplay at all. Perfect for anyone serious about Fortnite." },
            { date: new Date(now.getTime() - 34 * 60 * 60 * 1000), rating: 5, nickname: "Shockwave_Ops", review: "SaturnSwapper has made my Fortnite experience so much better. No more waiting for skins to load, and I can easily swap them during gameplay. Highly recommend!" },
            { date: new Date(now.getTime() - 38 * 60 * 60 * 1000), rating: 5, nickname: "Vortex_Sniper", review: "Fast, reliable, and easy to use. SaturnSwapper is my go-to skin changer now. It works flawlessly, and the skins look amazing." },
            { date: new Date(now.getTime() - 48 * 60 * 60 * 1000), rating: 5, nickname: "Iron_Frontlines", review: "Love SaturnSwapper! The skins are high quality, and I can switch them instantly. It’s the best tool I’ve used for Fortnite." },
            { date: new Date(now.getTime() - 52 * 60 * 60 * 1000), rating: 5, nickname: "NightStrike_21", review: "SaturnSwapper is a must-have for anyone looking to make their Fortnite experience more fun. The skins are super easy to load and switch during the game!" },
            { date: new Date(now.getTime() - 66 * 60 * 60 * 1000), rating: 5, nickname: "Silent_Thunder", review: "I’ve used this tool for a few weeks now, and it never crashes. The skins load quickly, and I love being able to change them mid-game!" },
            { date: new Date(now.getTime() - 68 * 60 * 60 * 1000), rating: 5, nickname: "Ghost_Assault", review: "SaturnSwapper is incredible. The variety of skins is great, and I can swap them during my matches without any lag. It's the perfect tool for Fortnite players." },
            { date: new Date(now.getTime() - 69 * 60 * 60 * 1000), rating: 5, nickname: "Blaze_Tracker", review: "It works every time with zero issues. SaturnSwapper has become my go-to tool for Fortnite. I can’t imagine playing without it." },
            { date: new Date(now.getTime() - 70 * 60 * 60 * 1000), rating: 5, nickname: "Echo_Viper", review: "The best skin changer for Fortnite. No more waiting for skins to load, no more crashes. It's fast and easy to use, and it’s made my games way more fun." },
            { date: new Date(now.getTime() - 72 * 60 * 60 * 1000), rating: 5, nickname: "Rogue_Bomber", review: "I’m really happy with SaturnSwapper. It’s fast, easy to use, and the skin selection is huge. Definitely worth checking out!" },
            { date: new Date(now.getTime() - 79 * 60 * 60 * 1000), rating: 5, nickname: "Crimson_Fury", review: "SaturnSwapper has transformed my Fortnite experience. It’s super easy to use, and I can swap skins without any lag. Highly recommend it to anyone who loves the game!" },
            { date: new Date(now.getTime() - 80 * 60 * 60 * 1000), rating: 5, nickname: "Phoenix_Stryker", review: "If you play Fortnite, you need SaturnSwapper. It’s the fastest and most reliable skin changer I’ve used. I can change skins mid-game without a hitch!" },
            { date: new Date(now.getTime() - 89 * 60 * 60 * 1000), rating: 5, nickname: "Shadow_Elite", review: "The tool is fantastic! I’ve used it for several weeks, and it’s been flawless every time. The skin variety is amazing, and it works perfectly." },
            { date: new Date(now.getTime() - 94 * 60 * 60 * 1000), rating: 5, nickname: "Quantum_Breach", review: "Best skin changer ever! SaturnSwapper runs smoothly, and I never have to wait for skins to load. It’s quick, responsive, and easy to use." },
            { date: new Date(now.getTime() - 100 * 60 * 60 * 1000), rating: 5, nickname: "Vigilante_Warrior", review: "Super fast and reliable. SaturnSwapper makes my Fortnite matches more fun by allowing me to switch skins instantly. Highly recommend to everyone!" },
            { date: new Date(now.getTime() - 101 * 60 * 60 * 1000), rating: 5, nickname: "Specter_Assault", review: "SaturnSwapper is an absolute must-have for Fortnite players. It works flawlessly, and I can swap skins mid-game without any lag. Great value for money." },
            { date: new Date(now.getTime() - 102 * 60 * 60 * 1000), rating: 5, nickname: "Rogue_Elite", review: "I love this tool. It makes my Fortnite experience much more enjoyable, and I can change skins quickly without any lag or issues." },
            { date: new Date(now.getTime() - 110 * 60 * 60 * 1000), rating: 5, nickname: "Silent_Reaper", review: "SaturnSwapper is fantastic! It’s quick, smooth, and reliable. I’ve never had a problem with it, and the skins are awesome." },
            { date: new Date(now.getTime() - 124 * 60 * 60 * 1000), rating: 5, nickname: "Fury_Clash", review: "Great skin changer, highly recommend. SaturnSwapper is easy to use, fast, and has an excellent selection of skins." },
        ]);
    }, []);

    return (
        <>
            <Modal onClose={() => setOpenReviews(false)} isOpen={isOpenReviews}>
                <h4 className="font-bold text-[24px] text-center w-full">All reviews</h4>
                <div className="max-h-[60vh] space-y-5 mt-5 py-2 px-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-violet-600 [&::-webkit-scrollbar-thumb]:bg-violet-900">
                    {reviews.map((review, index) => {
                        const reviewDate = formatTimeAgo(review.date);
                        return (
                            <div key={index} className="border col-span-1 border-white rounded-[12px] p-[25px] min-h-[200px] max-w-[460px] flex flex-col">
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-[10px]">
                                        <StarRating rating={review.rating} />
                                    </div>
                                    <p className="text-[12px] text-white/70">{reviewDate}</p>
                                </div>
                                <h3 className="text-[14px] mt-[15px]">{review.nickname}</h3>
                                <p className="text-[12px] text-[#B8B8B8] mt-[5px]">{review.review}</p>
                            </div>
                        )
                    })}
                </div>
                <p className="text-sm text-center py-5 text-white/80">This is just a small part of our reviews — the rest you can discover by working with us personally!</p>
            </Modal>
            <Modal onClose={onClosed} isOpen={isOpen}>
                <h4 className="font-bold text-[24px] text-center w-full">Leave a review</h4>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <input
                    className="bg-white/10 outline-0 appearance-none text-white placeholder:text-white/80 ring-0 w-full h-[50px] rounded mt-5 px-5"
                    maxLength={16}
                    placeholder="Your Nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <textarea
                    className="bg-white/10 outline-0 appearance-none text-white placeholder:text-white/80 ring-0 w-full h-[150px] rounded my-5 pt-3 px-5"
                    maxLength={200}
                    placeholder="Your Review"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <div className="flex items-center w-full justify-between">
                    <Rating rating={rating} onRatingChange={setRating} />
                    <button
                        className="hover:bg-second hover:text-white transition-all bg-white text-foreground h-[30px] rounded-[8px] px-5 min-w-[150px] text-[16px]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </Modal>
            <button onClick={() => setIsOpen(true)} className="w-full hover:bg-white hover:text-main transition-all bg-second text-white h-[50px] rounded-[8px] mt-[28px] text-[24px]">Leave a review</button>
            <button onClick={() => setOpenReviews(true)} className="w-full lg:max-w-[295px] hover:bg-second transition-all border-2 border-second text-white h-[50px] rounded-[8px] mt-[28px] text-[16px]">See all reviews</button>
        </>
    )

}

export default ReviewsModals;