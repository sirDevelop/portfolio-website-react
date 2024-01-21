import { Routes, Route } from "react-router-dom"
import Intro from "./Sections/Intro"
import More from "./Sections/More"
import { Music } from "./Sections/Music"
import PastProjects from "./Sections/PastProjects"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
import DigitalArt from "./Sections/DigitalArt"
import GenerativeArt from "./Sections/GenerativeArt"

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
							<DigitalArt />
							<Music />
						</>
					}
				/>
				<Route
					path="/generative_art"
					element={
						<>
							<GenerativeArt />
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
