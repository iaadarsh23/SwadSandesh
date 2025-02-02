export default function NavHeader() {
	return (
		<nav className="relative flex justify-between items-center px-6 py-4 bg-white">
			<div className="text-3xl font-bold text-green-700">
				<a href="#">SwadSandesh</a>
			</div>
			<ul className="flex gap-6 text-2xl text-gray-800">
				<li className="hover:text-green-400 cursor-pointer">Home</li>
				<li className="hover:text-green-400 cursor-pointer">GetRecipe</li>
				<li className="hover:text-green-400 cursor-pointer">Contact</li>
			</ul>
			<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400"></div>
		</nav>
	);
}
