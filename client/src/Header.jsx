import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <header className= " color text-white p-3 shadow-md flex">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold cursor-pointer"></div>

                {/* Search Bar */}
                <div className="hidden sm:flex flex-1 mx-5">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="p-2 w-full text-white rounded-l-md border border-white text-black outline-none"
                    />
                    <button className="bg-yellow-500 p-2 rounded-r-md">
                        <FaSearch size={20} />
                    </button>
                </div>

                {/* Right Section: Icons */}
                <div className="flex items-center gap-5">
                    <div className="hidden sm:flex items-center cursor-pointer">
                        <FaUser size={20} />
                        <span className="ml-2">Login</span>
                    </div>

                    <div className="flex items-center cursor-pointer">
                        <FaShoppingCart size={20} />
                        <span className="ml-2 hidden sm:inline">Cart</span>
                    </div>

                    {/* Mobile Menu */}
                    <div className="sm:hidden cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
