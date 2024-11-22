'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import Rating from "@/components/ui/Rating";
import ReviewCards from "@/components/ui/Reviews";

interface Review {
    date: Date;
    rating: number;
    nickname: string;
    review: string;
}

const Reviews = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [nickname, setNickname] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [error, setError] = useState('');

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const now = new Date();
        const storedReviews = localStorage.getItem('reviews');
        setReviews(storedReviews ? JSON.parse(storedReviews) : [
            { date: new Date(now.getTime() - 6 * 60 * 60 * 1000), rating: 5, nickname: "EpicGamer92", review: "SaturnSwapper completely changed the way I play Fortnite. The interface is super intuitive, and it takes just a few seconds to swap skins. It's a must-have for anyone looking to spice up their game." },
            { date: new Date(now.getTime() - 12 * 60 * 60 * 1000), rating: 5, nickname: "Frostbite_x", review: "SaturnSwapper is a solid tool. I like the variety of skins it offers, but sometimes it takes a while to load the new skins. Still, it's worth the wait, and it definitely adds a lot of fun to my Fortnite sessions." },
            { date: new Date(now.getTime() - 15 * 60 * 60 * 1000), rating: 5, nickname: "ProPlayerX", review: "I've tried several skin changers, but SaturnSwapper is hands down the best. It’s fast, reliable, and there’s no lag. I can change skins mid-game, and it works flawlessly every time. Highly recommend!" },
            { date: new Date(now.getTime() - 22 * 60 * 60 * 1000), rating: 5, nickname: "SkyHighGamer", review: "SaturnSwapper is great, but it could be even better with more customization options. Still, it’s very easy to use and has a wide selection of skins. I really enjoy using it for my Fortnite matches!" }
        ]);
    }, []);

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
        const updatedReviews = [newReview, ...reviews.slice(0, -1)];

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

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        }

        return `${diffInHours} hours ago`;
    };

    return (
        <section id="reviews" className="pt-[110px] min-w-screen cont mx-auto flex flex-col items-center gap-[50px] justify-center">
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
            <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={variants}
            >
                <h2 className="text-[48px] font-bold">Reviews</h2>
                <div className="flex items-center absolute -right-2 -bottom-2 translate-x-full -translate-y-full">
                    <span className="text-sm">4.9</span>
                    <img src="/star.svg" className="w-[12px] pl-[3px] h-[11px]" alt="Saturn Swapper v2 Fortnite Skinchanger Reviews" />
                </div>
            </motion.div>
            <motion.div
                className="grid lg:grid-cols-2 gap-[35px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={variants}
            >
                <ReviewCards reviews={reviews.map(review => ({ ...review, date: formatTimeAgo(review.date) }))}/>
            </motion.div>
            <motion.div
                className="flex flex-col lg:flex-row w-full max-w-[954px] items-center gap-[20px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                variants={variants}
            >
                <button onClick={() => setIsOpen(true)} className="w-full hover:bg-white hover:text-main transition-all bg-second text-white h-[50px] rounded-[8px] mt-[28px] text-[24px]">Leave a review</button>
                <button className="w-full lg:max-w-[295px] hover:bg-second transition-all border-2 border-second text-white h-[50px] rounded-[8px] mt-[28px] text-[16px]">See all reviews</button>
            </motion.div>
        </section>
    );
};

export default Reviews;