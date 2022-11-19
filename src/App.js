import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import "./App.css";
import { VideoTest } from "./components/VideoTest/VideoTest.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/test" element={<VideoTest />} />
			</Routes>
		</div>
	);
}

export default App;
