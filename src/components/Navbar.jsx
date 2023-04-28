import { useState } from "react";
import useAuth from "../hook/useAuth";



export default function Navbar() {

    const [navMenu, setNavMenu] = useState(false);
    const { setAuth } = useAuth();

    const handleNavMenu = () => {

        setNavMenu(!navMenu);
      };

    const handleLogout = () => {
        setAuth({});
      };

    return (
        <>

	<nav class="relative px-4 py-4 flex justify-between items-center bg-white">
		<a class="text-3xl font-bold leading-none" href="#">
        <img src="icon/vite.svg" alt="" />
		</a>
		<div class="lg:hidden">
			<button class="navbar-burger flex items-center text-blue-600 p-3" onClick={handleNavMenu}>
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

		<button class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" onClick={handleLogout}>Logout</button>
	</nav>
    {navMenu && (<div class="navbar-menu relative z-50">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto text-3xl font-bold leading-none" href="#">
					<img src="icon/vite.svg" alt="" />
				</a>
				<button class="navbar-close" onClick={handleNavMenu}>
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			
			<div class="mt-auto">
				<div class="pt-6">
					<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" onClick={handleLogout}>Logout</a>
				</div>
			</div>
		</nav>
	</div>)}
	



        </>
    );
}
