
function header () {
    return (
        <header className="bg-black shadow">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center"> 
                <h1 className="text-3xl font-bold text-blue-800">Cosy Cup Cafe</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="#menu" className="text-gray-600 hover:text-gray-800">Menu</a></li>
                        <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
                        <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default header;