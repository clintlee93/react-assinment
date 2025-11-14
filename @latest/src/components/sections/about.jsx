import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-gray-900" id="location">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">About Us</h2>
            <p className="text-xl text-gray-100">Find our location and opening hours</p>
        </div>
        
            <div className="hours">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Opening Hours</h3>
                <ul className="space-y-4 mb-8 text-gray-300">
                    <li className="flex justify-between border-b pb-4">
                        <span className="font-medium ">Monday - Friday</span>
                        <span>7:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b pb-4">
                        <span className="font-medium">Saturday</span>
                        <span>8:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span>8:00 AM - 6:00 PM</span>
                    </li>
                </ul>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
                    <div className="space-y-3">
                        <p className="flex items-center text-gray-300">
                            <i className="fas fa-map-marker-alt text-amber-700 mr-3"></i>
                            123 Coffee Street, Brew City
                        </p>
                        <p className="flex items-center text-gray-300">
                            <i className="fas fa-phone text-amber-700 mr-3"></i>
                            (555) 123-4567
                        </p>
                        <p className="flex items-center text-gray-300">
                            <i className="fas fa-envelope text-amber-700 mr-3"></i>
                            hello@cosycupcup.cafe
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>
  )
}

export default About