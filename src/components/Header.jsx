import React from "react";

const Navbar = () => {
	return (
		<nav className="top-0 z-50 flex justify-between items-center p-3 bg-white shadow-md border-b border-gray-300 px-[100px]">
			{/* Logo Section */}
			<div className="text-3xl font-bold text-orange-700 hover:text-green-800 transition duration-200">
				<a href="#">Swad Sandesh</a>
			</div>

			{/* Social Links Section */}
			<ul className="flex gap-6">
				<li>
					<a
						href="https://github.com/iaadarsh23"
						target="_blank"
						className="hover:text-white transition duration-200"
					>
						<img
							src="./public/assets/images/github.png"
							alt="GitHub"
							style={{ width: "24px", height: "24px" }}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/adarsh-tripathi-529199260/"
						target="_blank"
						className="hover:text-[#0A66C2] transition duration-200"
					>
						<img
							src="./public/assets/images/linkedin.png"
							alt="LinkedIn"
							style={{ width: "24px", height: "24px" }}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://x.com/adarshtrip2306"
						target="_blank"
						className="hover:text-[#1DA1F2] transition duration-200"
					>
						<img
							src="./public/assets/images/twitter.png"
							alt="Twitter"
							style={{ width: "24px", height: "24px" }}
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
