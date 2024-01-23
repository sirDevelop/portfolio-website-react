import Navigation from "../Components/Navigation"
import useWindowDimensions from "../Components/useWindowDimensions"
import Billiards from "../Components/GenerativeArt/Billiards"
import SierpinskiTriangle from "../Components/GenerativeArt/SierpinskiTriangle"
import GameOfLife, { populationReturn } from "../Components/GenerativeArt/GameOfLife"
import parse from 'html-react-parser';

import { Card, Button, Row, Col, Container, Collapse } from "react-bootstrap"
import Swal from 'sweetalert2'
import React, { useState, useEffect } from "react"
import { createPortal } from 'react-dom'
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMain } from "../Components/useMain"

const GenerativeArt = () => {
	
	const { height, width } = useWindowDimensions()
	const small = { limit: Math.sqrt(width * height) / 40, wipeSize: Math.sqrt(width * height) / 15, ballRadiusLowerLimit: Math.sqrt(width * height) / 200, ballRadiusUpperLimit: Math.sqrt(width * height) / 100 }
	const full = { limit: Math.sqrt(width * height) / 20, wipeSize: Math.sqrt(width * height) / 5, ballRadiusLowerLimit: Math.sqrt(width * height) / 100, ballRadiusUpperLimit: Math.sqrt(width * height) / 50 }

	const smallComponents = [{
		id: "billiard",
		title: "Billiard Balls",
		component: <Billiards bypassCanvas={false} index={0} type={"card"} width={width * 0.2} height={height * 0.15} limit={small.limit}
			WipeSize={small.wipeSize} ballRadiusLowerLimit={small.ballRadiusLowerLimit}
			ballRadiusUpperLimit={small.ballRadiusUpperLimit} />,
		description: "A simulation in which the larger sized balls absorb the smaller ones. Play it across multiple panels in full screen mode.",
		instructions: `<ul className="list-style-none m-0 p-0"><li className="text-dark">Click to spawn a new ball.</li> <li className="text-dark">Hold the mouse down to continuously spawn.</li><li className="text-dark">Right click inside the screen to start/pause.</li></ul>`
	},
	{
		id: "sierpinksiTriangle",
		title: "Sierpinski's Triangle",
		component: <SierpinskiTriangle type={"card"} index={1} width={300} height={200} />,
		description: "A famous fractal in which an equilateral triangle recursively subdivides itself into smaller equilateral triangles.",
		instructions: `<ul className="list-style-none m-0 p-0"><li className="text-dark">Keep clicking on the triangle to render more iterations of this fabulous fractal.</li></ul>`
	},
	{
		id: "gameOfLife",
		title: "The Game of Life",
		component: <GameOfLife type={"card"} index={2} width={300} height={200} />,
		description: "A cellular automaton by Mathematician John Conway designed to model population growth. Black represents life and white represents death.",
		instructions: `<ul className="list-style-none m-0 p-0"><li className="text-dark">Click to pause/ restart the simulation.</li><li className="text-dark">Hold and drag your mouse across the cells to create new colonies.</li></ul>`
	}
	]

	const [fullScreenComponents, setFullScreenComponents] = useState([{
		id: "billiard", isFullScreen: false, component:
			<Billiards bypassCanvas={false} index={smallComponents.length} width={width * 0.8} height={height * 0.8} limit={full.limit}
				WipeSize={full.wipeSize} ballRadiusLowerLimit={full.ballRadiusLowerLimit}
				ballRadiusUpperLimit={full.ballRadiusUpperLimit} />

	},
		{ id: "sierpinksiTriangle", isFullScreen: false, component: <SierpinskiTriangle index={smallComponents.length} width={width * 0.4} height={height * 0.6} /> },
		{ id: "gameOfLife", isFullScreen: false, component: <GameOfLife index={smallComponents.length} width={width*0.4} height={height*0.4} /> }
	])

	const showFullScreen = (id) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-secondary",
			},
			buttonsStyling: false
		});
		swalWithBootstrapButtons.fire({
			grow: "fullscreen",
			confirmButtonText: "Close",
			didOpen: () => {
				setFullScreenComponents(fullScreenComponents => { return [...fullScreenComponents.map((_) => { return { ..._, isFullScreen: _.id === id ? true : false } })] })
			},
			didClose: () => {
				setFullScreenComponents(fullScreenComponents => { return [...fullScreenComponents.map((_) => { return { ..._, isFullScreen: false } })] })
			},
		})
	}

	return (
		<>
			<section id="digital_art" className="sections pb-5">
				<div className="main-container text-center">
					<div className="greeting-wrapper center">
						<h1 style={{ marginBottom: 10 }}>Generative Art Gallery</h1>
						<p>All rights reserved. <FontAwesomeIcon icon={faCopyright} /> 2024</p>
					</div>
					<div className="nav-wrapper border border-secondary border-bottom-0">
						<div className="dots-wrapper">
							<div id="dot-1" className="browser-dot" />
							<div id="dot-2" className="browser-dot" />
							<div id="dot-3" className="browser-dot" />
						</div>
						<Navigation />
					</div>
					<div id="gallery" className="border border-secondary border-top-0">
						<Row>
							{smallComponents.map((art, i) => {
								return (
									<Col key={i} sm={4} onMouseEnter={() => {}}>
										<Card className="gen_art p-3 m-3">
											<Card.Img as={Container} variant="top" className="p-0">
												{art.component}
											</Card.Img>
											<Card.Body>
												<Card.Title>{art.title}</Card.Title>
												<Card.Text className="text-dark">
													{art.description}
													<hr />
													{parse(art.instructions)}
												</Card.Text>
												<Button variant="primary" onClick={() => { 
													showFullScreen(art.id)
													}}>Full Screen</Button>
											</Card.Body>
										</Card>
									</Col>
								)
							})
							}
						</Row>
					</div>
				</div>

				{fullScreenComponents.sort().map((art, i) => {
					return (<>
						{art.isFullScreen &&
							createPortal(
								<Row>
									<Col key={i} sm={12} className="center">
										{art.component}
									</Col>
								</Row>,
								Swal.getHtmlContainer()
							)}
					</>)
				})}
			</section>
		</>
	)
}

export default GenerativeArt
