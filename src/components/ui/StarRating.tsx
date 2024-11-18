import React from 'react';

const StarRating = ({ rating }: {rating: number}) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="flex items-center gap-[5px]">
            {[...Array(fullStars)].map((_, index) => (
                <img key={index} src="/star.svg" className="w-[20px] h-[20px]" alt="Full Star" />
            ))}
            {halfStars === 1 && <img src="/halfstar.svg" className="w-[20px] h-[20px]" alt="Half Star" />}
            {[...Array(emptyStars)].map((_, index) => (
                <img key={index} src="/emptystar.svg" className="w-[20px] h-[20px]" alt="Empty Star" />
            ))}
        </div>
    );
};

export default StarRating;