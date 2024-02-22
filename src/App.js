import Preloader from "./Components/Preloader"
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense, useState } from 'react';

// check when its fully loaded, works with Suspense
// lazy loading - shows you preloader until the website is fully loaded
// lazy and suspense work together
const delay = 1500
const MainComponent = lazy(() => {
	return new Promise(resolve => {
		setTimeout(() => resolve(import("./Components/useMain")), delay);
	});
});
const Intro = lazy(() => import('./Sections/Intro'))
const More = lazy(() => import('./Sections/More'))
const Music = lazy(() => import('./Sections/Music'))
const PastProjects = lazy(() => import('./Sections/PastProjects'))
const Contact = lazy(() => import('./Sections/Contact'))
const DigitalArt = lazy(() => import('./Sections/DigitalArt'))
const GenerativeArt = lazy(() => import('./Sections/GenerativeArt'))
const Footer = lazy(() => import('./Sections/Footer'))

const App = () => {
	const [preloaderStage, setPreloaderStage] = useState(0)
	const removeTheQuote = () => {
		setTimeout(() => {
			setPreloaderStage(1)
		}, delay)
		return <></>
	}
	useEffect(() => {
		axios.post(process.env.REACT_APP_SERVER_URL + "/test").then((response) => {
			console.log(response)
		}).catch((error) => {
			console.log(error)
		})
	}, [])

	return (
		<>
			{/* when you change the page, this part shows */}
			<Suspense fallback={<Preloader preloaderStage={preloaderStage} />}>
				{removeTheQuote()}
				{/* when you refresh the page both preloaders stage 0 and 1 are shown */}
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
