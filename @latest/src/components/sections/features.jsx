import React from 'react'

const features = () => {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Little Chef Cafe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                    <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-coffee text-2xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3  text-white">Premium Beans</h3>
                    <p className="text-gray-400">We source only the finest ethically-sourced coffee beans from around the world.</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                    <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-user-chef text-2xl text-black"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3  text-white">Expert Baristas</h3>
                    <p className="text-gray-400">Our skilled baristas are trained to craft the perfect cup every time.</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                    <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-heart text-2xl text-black"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3  text-white">Made with Love</h3>
                    <p className="text-gray-400">Every beverage is prepared with care and attention to detail.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default features