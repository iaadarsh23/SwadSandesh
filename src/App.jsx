import "./App.css";
import NavHeader from "./components/Header";
import HomePage from "./components/Home";
import MainSection from "./components/main";

function App() {
	return (
		<>
			<div className="flex flex-col">
				<NavHeader />
				<HomePage />
				<MainSection />
			</div>
		</>
	);
}

export default App;
