"use client";

import { useState, useEffect } from "react";

export function Carousel({
    items,
    autoPlay = false,
    autoPlayInterval = 5000,
    showArrows = true,
    showDots = true,
    showIndicators = true,
    className = "",
    itemClassName = "",
    arrowClassName = "",
    dotClassName = "",
    indicatorClassName = "",
    renderItem,
    onItemChange
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === items.length - 1 ? 0 : prev + 1
            );
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, items.length]);

    const nextItem = () => {
        setCurrentIndex((prev) =>
            prev === items.length - 1 ? 0 : prev + 1
        );
    };

    const prevItem = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? items.length - 1 : prev - 1
        );
    };

    const goToItem = (index) => {
        setCurrentIndex(index);
    };

    // Call onItemChange callback when current item changes
    useEffect(() => {
        if (onItemChange) {
            onItemChange(currentIndex, items[currentIndex]);
        }
    }, [currentIndex, items, onItemChange]);

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className={`relative ${className}`} style={{ height: '100%' }}>
            {/* Navigation Arrows - Fixed position at 220px from top */}
            {showArrows && items.length > 1 && (
                <>
                    <button
                        onClick={prevItem}
                        className={`absolute z-40 w-6 h-6 cursor-pointer bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors shadow-lg top-[120px] lg:top-[180px] ${arrowClassName}`}
                        aria-label="Previous item"
                        style={{
                            left: '-12px',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <img src={"/images/icons/carosel-left-icon.svg"} alt="Previous item" />
                    </button>

                    <button
                        onClick={nextItem}
                        className={`absolute z-40 w-6 h-6 cursor-pointer bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors shadow-lg top-[120px] lg:top-[180px] ${arrowClassName}`}
                        aria-label="Next item"
                        style={{
                            right: '-12px',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <img src={"/images/icons/carosel-right-icon.svg"} alt="Next item" />
                    </button>
                </>
            )}

            {/* Main Carousel Container */}
            <div className="relative overflow-hidden" style={{ height: '100%' }}>
                {/* Current Item */}
                <div className={`h-full flex items-center justify-center ${itemClassName}`}>
                    {renderItem ? renderItem(items[currentIndex], currentIndex) : (
                        <div className="min-h-[300px] flex flex-col justify-center">
                            {typeof items[currentIndex] === 'string' ? (
                                <p className="text-black text-lg leading-relaxed">{items[currentIndex]}</p>
                            ) : (
                                <div>{JSON.stringify(items[currentIndex])}</div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Dots Navigation */}
            {showDots && items.length > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToItem(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                } ${dotClassName}`}
                            aria-label={`Go to item ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Numbered Indicators */}
            {showIndicators && items.length > 1 && (
                <div className={`flex justify-center items-center space-x-4 mt-4 ${indicatorClassName}`}>
                    <span className="text-sm text-gray-600">
                        {currentIndex + 1} / {items.length}
                    </span>
                </div>
            )}
        </div>
    );
}

// Specific carousel components for common use cases
export function TestimonialCarousel({ testimonials, ...props }) {
    const renderTestimonial = (testimonial) => (
        <div className="flex">
            <div className="w-[6%] lg:w-[10%]"></div>


            <div className="w-[94%] lg:w-[90%]">
                <blockquote className="text-black text-lg leading-relaxed mb-6">
                    "{testimonial.text}"
                </blockquote>

                <div className="mt-auto">
                    <div className="font-bold text-black text-lg">
                        {testimonial.author}
                    </div>
                    <div className="text-black text-base">
                        {testimonial.title}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Carousel
            items={testimonials}
            renderItem={renderTestimonial}
            {...props}
        />
    );
}

export function ImageCarousel({ images, ...props }) {
    const renderImage = (image) => (
        <div className="flex justify-center items-center">
            <img
                src={typeof image === 'string' ? image : image.src}
                alt={typeof image === 'string' ? 'Carousel image' : image.alt || 'Carousel image'}
                className="max-w-full h-auto object-cover"
            />
        </div>
    );

    return (
        <Carousel
            items={images}
            renderItem={renderImage}
            {...props}
        />
    );
}
