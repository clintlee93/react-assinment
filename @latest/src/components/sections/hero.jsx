import React from 'react'
import heroBackground from '../../assets/hero.bg.jpg';

const Hero = () => {
    return (
    <section className="min-h-screen flex items-center relative">
        
        <div s
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.2,
            }}
        />
        
        
        <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
            <h2 className="text-5xl text-white md:text-6xl flex align-centre font-bold mb-6">Artisanal Coffee Experience</h2>
            <p className="text-xl text-white align-centre mb-8">Handcrafted beverages, freshly roasted beans, and a cozy atmosphere that feels like home.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-md font-medium text-lg transition-colors">
                Order Now
            </button>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Hero