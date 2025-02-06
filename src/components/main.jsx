export default function MainSection() {
	function handleAdd() {}

	return (
		<main>
			<div className="flex justify-center item-center m-5">
				<form className="flex gap-6 min-w-[150px] ">
					<input
						type="text"
						placeholder="eg. Sahi Paneer"
						aria-label="Add indegredients"
						className="border border-gray-300 p-2 rounded-md w-[50rem]"
						name="ingredients"
					/>
					<button
						onClick={handleAdd}
						type="submit"
						className=" w-[30rem] bg-black text-white p-2 rounded-md hover:bg-green-600"
					>
						Add
					</button>
				</form>
			</div>
		</main>
	);
}
