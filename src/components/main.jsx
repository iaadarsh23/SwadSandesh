import React from "react";
export default function MainSection() {
	// handling the input value from the form
	const [userInput, setUserInput] = React.useState("");
	const [storedInput, setStoredInput] = React.useState([]);

	//this function will take the event object created when the user enters the value in the box and update the input value onchange
	function handleInput(event) {
		const value = event.target.value;
		setUserInput(value);
	}

	//storing and displayying the data in an array

	//handling the btn submission
	function handleSubmit(event) {
		event.preventDefault();

		const storing = [...storedInput, userInput];
		setStoredInput(storing);
		setUserInput("");
	}

	return (
		<main>
			<div className="flex justify-center item-center m-5">
				<form className="flex gap-6 min-w-[150px] " onSubmit={handleSubmit}>
					<input
						type="text"
						value={userInput}
						onChange={handleInput}
						placeholder="eg. Sahi Paneer"
						aria-label="Add indegredients"
						className="border border-gray-300 p-2 rounded-md w-[50rem]"
						name="ingredients"
					/>
					<button
						type="submit"
						className=" w-[30rem] bg-black text-white p-2 rounded-md hover:bg-green-600"
					>
						Add
					</button>
				</form>
			</div>
			{/* displayying the data on the page */}
			<div>
				<h1>Submitted data</h1>
				<ul>
					{storedInput.map((data, index) => (
						<li>{data}</li>
					))}
				</ul>
			</div>
		</main>
	);
}
