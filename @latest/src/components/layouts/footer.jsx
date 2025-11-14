import React from 'react'

const footer = () => {
    return (
            <footer class="bg-black border-t border-gray-800 py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <i class="fas fa-mug-hot text-amber-500 text-2xl mr-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-20 "></i>
                        <h3 class="text-xl font-bold text-white">Little Chef Cafe</h3>
                    </div>
                    <p class="text-gray-400">Come and experience our amazing coffee brewed to perfection.</p>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">Menu</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">Careers</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Contact</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><i class="fas fa-map-marker-alt mr-2 text-amber-500"></i> 123 Coffee Street, City</li>
                        <li><i class="fas fa-phone mr-2 text-amber-500"></i> (123) 456-7890</li>
                        <li><i class="fas fa-envelope mr-2 text-amber-500"></i> info@littlechefcafe.com</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Follow Us</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors">
                            <i class="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                    
                    <div class="mt-6">
                        <h4 class="text-lg font-bold mb-2">Newsletter</h4>
                        <div class="flex">
                            <input type="email" placeholder="Your email" class="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" />
                            <button class="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-r-md transition-colors">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; 2023 Little Chef Cafe. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}

export default footer