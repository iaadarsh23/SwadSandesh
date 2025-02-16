import { useEffect, useState } from "react";
import { getdata } from "../api/openaiApi";
import MyForm from "./form";

export default function MainSection() {
	// useEffect(() => {
	// 	getdata;
	// }, []);

	return (
		<main>
			<MyForm />

			{/* displayying the data on the page */}
			<div>
				<h1>Submitted data</h1>
				<ul></ul>
			</div>
		</main>
	);
}
