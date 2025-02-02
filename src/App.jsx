import "./App.css";
import NavHeader from "./components/Header";
import HomePage from "./components/Home";

function App() {
	return (
		<>
			<div className="flex flex-col  ">
				<NavHeader />
				<HomePage />
			</div>
		</>
	);
}

export default App;
