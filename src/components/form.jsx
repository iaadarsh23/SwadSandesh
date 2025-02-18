import { useForm } from "react-hook-form";
import { useState } from "react";
import { getdata } from "../api/openaiApi";
import bg1 from "/assets/images/c.jpg";

export default function MyForm() {
	const {
		register,
		handleSubmit,
		reset,

		formState: { errors, isSubmitting },
	} = useForm();

	//for displaying the data
	const [dishName, setdishName] = useState("");

	//storing the data in a array.

	//cleaning the response
	let [cleanData, setCleanData] = useState([]);

	//handlesubmit is data dega aur ye object return karvayega
	async function OnSubmit(data) {
		try {
			const response = await getdata(data.dishName);

			// Split the response into lines and store it in the recipe state
			if (typeof response === "string") {
				const cleaned = response.replace(/\*/g, "").trim();
				const recipeLines = cleaned.split("\n"); // Split by newline

				setCleanData(recipeLines);
			} else {
				setCleanData(response); // If the response is already an array
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		//clearing the inputbox after submiting.
		reset();
		//response strind cleanup function
	}

	// ...existing imports and function declaration...

	return (
		<div
			className="min-h-screen"
			style={{
				backgroundImage: `url(${bg1})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			id="formbg"
		>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<div className="text-center space-y-6">
					<div className="relative inline-block">
						<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-2xl opacity-20 rounded-full"></div>
						<div className="relative inline-block p-4 bg-white/95 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M16 2v20M12 17l4 4 4-4M8 22V2M3 9l5-7 5 7M3 15h10" />
							</svg>
						</div>
					</div>

					<div className="space-y-4">
						<h1 className="relative inline-block">
							{/* Background decoration */}
							<span className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-indigo-200 shadow-xl"></span>

							{/* Main text */}
							<span className="relative block text-4xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent p-6 tracking-tight">
								Swad Sandesh
							</span>
						</h1>
						<p className="text-white text-xl sm:text-xl max-w-2xl mx-auto leading-relaxed font-bold">
							Discover delicious recipes with our AI-powered recipe finder.
							<span className="hidden sm:inline">
								<br />
								Enter any dish name to get started.
							</span>
						</p>
					</div>
				</div>

				<div className="mt-12 bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 transform hover:shadow-2xl transition-all duration-300">
					<h2 className="text-2xl sm:text-3xl text-center text-slate-800 font-semibold mb-8">
						Get Your Recipe
					</h2>
					<form
						onSubmit={handleSubmit(OnSubmit)}
						className="flex flex-col sm:flex-row gap-4 sm:gap-6"
					>
						<div className="flex-1">
							<div className="relative group">
								<input
									type="text"
									placeholder="Enter dish name (e.g., Shahi Paneer)"
									className="w-full h-14 px-5 text-lg rounded-xl border-2 border-indigo-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-indigo-300"
									{...register("dishName", {
										required: true,
										maxLength: 100,
										minLength: 3,
									})}
									onChange={(e) => setdishName(e.target.value)}
								/>
								{errors.dishName && (
									<p className="absolute -bottom-6 left-2 text-red-500 text-sm font-medium">
										{errors.dishName.type === "required" &&
											"✱ Dish name is required"}
										{errors.dishName.type === "minLength" &&
											"✱ Minimum 3 characters needed"}
										{errors.dishName.type === "maxLength" &&
											"✱ Maximum 100 characters allowed"}
									</p>
								)}
							</div>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="h-14 px-8 sm:px-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
						>
							{isSubmitting ? (
								<>
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									<span className="animate-pulse">Cooking up...</span>
								</>
							) : (
								"Get Recipe"
							)}
						</button>
					</form>
				</div>

				{cleanData.length > 0 && (
					<div className="mt-12 bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
						<div className="p-6 sm:p-8">
							<h2 className="text-2xl sm:text-3xl text-slate-800 font-semibold mb-6 flex items-center gap-3">
								<span className="inline-block p-2 bg-indigo-100 rounded-lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-indigo-600"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
									</svg>
								</span>
								Your Recipe
							</h2>
							<div className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
								<ul className="space-y-4">
									{cleanData.map((item, index) => (
										<li
											key={index}
											className="p-5 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 rounded-xl border border-indigo-100/80 hover:border-indigo-200 transition-all duration-300 hover:shadow-md"
										>
											<p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
												{item}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
