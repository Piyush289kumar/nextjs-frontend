import Image from 'next/image';

export default function Carousel() {
    return (
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <Image
                        src="/docs/images/carousel/carousel-1.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Carousel 1"
                        className="absolute"
                    />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image
                        src="/docs/images/carousel/carousel-2.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Carousel 2"
                        className="absolute"
                    />
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image
                        src="/docs/images/carousel/carousel-3.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Carousel 3"
                        className="absolute"
                    />
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image
                        src="/docs/images/carousel/carousel-4.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Carousel 4"
                        className="absolute"
                    />
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image
                        src="/docs/images/carousel/carousel-5.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Carousel 5"
                        className="absolute"
                    />
                </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === 0 ? 'aria-current="true"' : ''}`}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
