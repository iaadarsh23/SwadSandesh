import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getdata } from "../api/openaiApi";

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

	return (
		<div className="p-4">
			<form
				className="flex gap-6 min-w-[150px]"
				onSubmit={handleSubmit(OnSubmit)}
			>
				<input
					type="text"
					aria-label="ingredients"
					name="dish"
					placeholder="eg. Shahi Paneer"
					onChange={(e) => setdishName(e.target.value)}
					className="border border-gray-300 p-2 rounded-md w-[50rem]"
					//1. react-hook-form se link kar rhe hai hum
					//2.applying validation to it
					{...register("dishName", {
						required: true,
						maxLength: 100,
						minLength: 3,
					})}
				/>
				{/* error handling */}
				{errors.dishName && (
					<p className="text-red-500">
						{errors.dishName.type === "required" && "Dish name is required"}
						{errors.dishName.type === "minLength" &&
							"Minimum length is 3 characters"}
						{errors.dishName.type === "maxLength" &&
							"Maximum length is 100 characters"}
					</p>
				)}
				{/* button ko disabled kr denge when api is calling in backgroung */}
				<button
					type="submit"
					className="w-[30rem] bg-black text-white p-2 rounded-md hover:bg-green-600"
					disabled={isSubmitting}
					//agr submit ho rha h toh getting recipe dikhega
				>
					{isSubmitting ? "Getting Recipe..." : "Get Recipe"}
				</button>
			</form>
			{/* displaying the data */}
			<div className="flex flex-col justify-center items-center m-6 p-7">
				<h2 className="font-bold m-7 text-5xl">Your Recipes:</h2>
				<ul className=" border-3 border-green-600 rounded-2xl  m-5 p-5 text-2xl ">
					{cleanData.map((item, index) => (
						<li key={index} className=" m-6">
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
