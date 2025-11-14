import React from 'react'

const Testimonials = () => {
    return (
    <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
            </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-900  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
            <div className="mb-6">
            <div className="text-2xl text-white leading-relaxed italic mb-6">
                "The best coffee in town! I come here every morning before work. The baristas know my order by heart."
            </div>
            </div>
            <div className="flex items-center">
            <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                JS
                </div>
                <div>
                <h4 className="font-semibold text-white">Jessica Smith</h4>
                <p className="text-blue-400 text-sm">Regular Customer</p>
                </div>
            </div>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
            <div className="mb-6">
                <div className="text-2xl text-white leading-relaxed italic mb-6">
                "I love studying at Cosy Cup Cup Cafe. The atmosphere is perfect, and the coffee keeps me going through long study sessions."
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-linear-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                MD
                </div>
                <div>
                <h4 className="font-semibold text-white">Michael Davis</h4>
                <p className="text-blue-400 text-sm">Student</p>
                </div>
            </div>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
            <div className="mb-6">
                <div className="text-2xl text-white leading-relaxed italic mb-6">
                "As a remote worker, this is my favorite spot. Great WiFi, comfortable seating, and amazing coffee. What more could you ask for?"
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                SR
                </div>
                <div>
                <h4 className="font-semibold text-white">Sarah Roberts</h4>
                <p className="text-blue-400 text-sm">Freelancer</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Testimonials