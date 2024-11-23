import AllReviews from "./ui/AllReviews";
import ReviewsModals from "./ui/ReviewsModals";
import Image from 'next/image';
const Reviews = () => {

    return (
        <section id="reviews" className="pt-[110px] min-w-screen cont mx-auto flex flex-col items-center gap-[50px] justify-center">
            
            <div
                className="relative"
            >
                <h2 className="text-[48px] font-bold">Reviews</h2>
                <div className="flex items-center absolute -right-2 -bottom-2 translate-x-full -translate-y-full">
                    <span className="text-sm">4.9</span>
                    <Image height={11} width={12} src="/star.svg" className="w-[12px] pl-[3px] h-[11px]" alt="Saturn Swapper v2 Fortnite Skinchanger Reviews" />
                </div>
            </div>
            <div
                className="grid lg:grid-cols-2 gap-[35px]"
            >
                <AllReviews/>
            </div>
            <div
                className="flex flex-col lg:flex-row w-full max-w-[954px] items-center gap-[20px]"
            >
                <ReviewsModals/>
            </div>
        </section>
    );
};

export default Reviews;