import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
interface StarRatingProps {
    rating: number;
    onRatingChange: Dispatch<SetStateAction<number>>;
}

const Rating = ({ rating, onRatingChange }: StarRatingProps) => {
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(null);
    };

    const handleClick = (index: number) => {
        onRatingChange(index);
        console.log(rating)
    };

    const renderStar = (index: number) => {
        if (hoverRating !== null) {
            if (hoverRating >= index) {
                return '/star.svg'; 
            } else if (hoverRating >= index - 0.5) {
                return '/halfstar.svg';
            } else {
                return '/emptystar.svg';
            }
        } else {
            if (rating >= index) {
                return '/star.svg'; 
            } else if (rating >= index - 0.5) {
                return '/halfstar.svg'; 
            } else {
                return '/emptystar.svg';
            }
        }
    };

    return (
        <div className="flex items-center gap-[5px]">
            {[1, 2, 3, 4, 5].map((index) => (
                <div
                    key={index}
                    className="relative w-[20px] h-[20px] cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        width={19}
                        height={18}
                        src={renderStar(index)}
                        className="absolute top-0 left-0 w-full h-full"
                        alt="Star"
                        onClick={() => handleClick(index)}
                    />
                    <div
                        className="absolute top-0 left-0 w-1/2 h-full"
                        onMouseEnter={() => handleMouseEnter(index - 0.5)}
                        onClick={() => handleClick(index - 0.5)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Rating;