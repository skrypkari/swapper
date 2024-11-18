import { Dispatch, SetStateAction, useState } from 'react';

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
                return '/star.svg'; // Полная звезда при наведении
            } else if (hoverRating >= index - 0.5) {
                return '/halfstar.svg'; // Половинная звезда при наведении
            } else {
                return '/emptystar.svg'; // Пустая звезда при наведении
            }
        } else {
            if (rating >= index) {
                return '/star.svg'; // Полная звезда при выборе
            } else if (rating >= index - 0.5) {
                return '/halfstar.svg'; // Половинная звезда при выборе
            } else {
                return '/emptystar.svg'; // Пустая звезда при выборе
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
                    <img
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