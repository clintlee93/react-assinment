import React, { useState, useEffect } from 'react'
import affogatoImage from '../../assets/affogato.jpg';
import espressoImage from '../../assets/expresso.jpg';
import hotCoffeeImage from '../../assets/hotcoffee rfl.jpg';
import latteImage from '../../assets/latte.jpg';
import creamyImage from '../../assets/creamyaffogato.jpg';
import wine from '../../assets/Wine.jpg'

const Menu = () => { 
    const drinks = [
        {
            image: affogatoImage,
            name: "Americano",
            description: "Bold espresso shots topped with hot water, producing a light layer of crema in true European style.",
            price: "$4.50"
        },
        {
            image: espressoImage,
            name: "Espresso",
            description: "Rich, concentrated coffee brewed by forcing hot water through finely-ground beans.",
            price: "$3.75"
        },
        {
            image: hotCoffeeImage,
            name: "Hot Coffee",
            description: "Freshly brewed coffee made from premium roasted beans.",
            price: "$3.25"
        },
        {
            image: latteImage,
            name: "Vanilla Latte",
            description: "Smooth espresso combined with steamed milk and a hint of vanilla syrup, topped with foam.",
            price: "$4.25"
        },
        {
            image: creamyImage,
            name: "Pumpkin Spice Latte",
            description: "Our signature espresso blended with pumpkin and autumn spices, topped with whipped cream.",
            price: "$4.25"
        },
        {
            image: wine,
            name: "Wine",
            description: "We also offer wine",
            price: "$4.25"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === drinks.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [drinks.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? drinks.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === drinks.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Our Signature Drinks</h2>
                
                <div className="relative overflow-hidden rounded-lg">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {drinks.map((drink, index) => (
                            <div 
                                key={index} 
                                className="w-full shrink-0 bg-black rounded-lg overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div 
                                        className="h-64 md:h-80 md:w-1/2 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${drink.image})` }}
                                    ></div>
                                    <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                        <h3 className="text-2xl text-white font-bold mb-4">{drink.name}</h3>
                                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">{drink.description}</p>
                                        <span className="text-amber-500 font-bold text-xl">{drink.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {drinks.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-amber-500 scale-125' 
                                        : 'bg-white/50 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="text-center mt-10">
                    <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-md font-medium text-lg transition-colors">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Menu