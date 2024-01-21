import Preloader from "./Components/Preloader"
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react';

// check when its fully loaded, works with Suspense
const MainComponent = lazy(() => import('./Components/useMain'))
const PersonalizeTheme = lazy(() => import('./Components/PersonalizeTheme'))
const Intro = lazy(() => import('./Sections/Intro'))
const More = lazy(() => import('./Sections/More'))
const Music = lazy(() => import('./Sections/Music'))
const PastProjects = lazy(() => import('./Sections/PastProjects'))
const Contact = lazy(() => import('./Sections/Contact'))
const DigitalArt = lazy(() => import('./Sections/DigitalArt'))
const GenerativeArt = lazy(() => import('./Sections/GenerativeArt'))
const Footer = lazy(() => import('./Sections/Footer'))

const App = () => {
	return (
		<>
			<Suspense fallback={<Preloader />}>
				<MainComponent>
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
									<Contact />
								</>
							}
						/>
						<Route
							path="/generative_art"
							element={
								<>
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
				</MainComponent>
			</Suspense>
		</>
	)
}

export default App
