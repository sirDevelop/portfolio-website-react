import { Routes, Route } from "react-router-dom"
import Intro from "./Sections/Intro"
import More from "./Sections/More"
import { Music } from "./Sections/Music"
import PastProjects from "./Sections/PastProjects"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
import DigitalArt from "./Sections/DigitalArt"
import GenerativeArt from "./Sections/GenerativeArt"
import PersonalizeTheme from "./Components/PersonalizeTheme"

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Intro />
							<More />
							<Music />
							<PastProjects />
							<Contact />
						</>
					}
				/>
				<Route
					path="/digital_art"
					element={
						<>
							<div className="d-none"><PersonalizeTheme /></div>
							<DigitalArt />
							<Contact />
						</>
					}
				/>
				<Route
					path="/generative_art"
					element={
						<>
							<div className="d-none"><PersonalizeTheme /></div>
							<GenerativeArt />
							<Contact />
						</>
					}
				/>
				<Route
					path="/contact"
					element={
						<>
							<Intro />
							<Contact />
						</>
					}
				/>
			</Routes>
			<Footer />
		</>
	)
}

export default App
