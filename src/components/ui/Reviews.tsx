import React from 'react';
import StarRating from './StarRating';

interface Review {
    rating: number;
    nickname: string;
    review: string;
    date: string;
}

interface ReviewsProps {
    reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {

    return (
        <>
            {reviews.slice(0, 4).map((review, index) => (
                <div key={index} className="border col-span-1 border-white rounded-[12px] p-[25px] min-h-[200px] max-w-[460px] flex flex-col">
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-[10px]">
                            <StarRating rating={review.rating} />
                        </div>
                        <p className="text-[12px] text-white/70">{review.date}</p>
                    </div>
                    <h3 className="text-[14px] mt-[15px]">{review.nickname}</h3>
                    <p className="text-[12px] text-[#B8B8B8] mt-[5px]">{review.review}</p>
                </div>
            ))}
        </>
    );
};

export default Reviews;