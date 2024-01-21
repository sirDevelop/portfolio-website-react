import Navigation from "../Components/Navigation"
import useWindowDimensions from "../Components/useWindowDimensions"
import Billiards from "../Components/GenerativeArt/Billiards"
import SierpinskiTriangle from "../Components/GenerativeArt/SierpinskiTriangle"
import GameOfLife from "../Components/GenerativeArt/GameOfLife"

import { Card, Button, Row, Col, Container } from "react-bootstrap"
import Swal from 'sweetalert2'
import { useState } from "react"
import { createPortal } from 'react-dom'


const GenerativeArt = () => {
	const [fullScreenBilliards, setFullScreenBilliards] = useState(false)
	const [fullScreenSierpinskiTriangle, setFullScreenSierpinskiTriangle] = useState(false)
	const [fullScreenGameofLife, setFullScreenGameofLife] = useState(false)
	
	const { height, width } = useWindowDimensions()
	const limit = Math.sqrt(width * height) / 40
	const wipeSize = Math.sqrt(width * height) / 20
	const ballRadiusLowerLimit = Math.sqrt(width * height) / 100
	const ballRadiusUpperLimit = Math.sqrt(width * height) / 37.5
	let canvasIndex = 0

	const showFullScreenBilliards = () => {
		Swal.fire({
			grow: "fullscreen",
			confirmButtonText: "Close",
			didOpen: () => setFullScreenBilliards(true),
			didClose: () => setFullScreenBilliards(false),
		})
	}

	const showFullScreenSierpinskiTriangle = () => {
		Swal.fire({
			grow: "fullscreen",
			confirmButtonText: "Close",
			didOpen: () => setFullScreenSierpinskiTriangle(true),
			didClose: () => setFullScreenSierpinskiTriangle(false),
		})
	}

	const showFullScreenGameofLife = () => {
		Swal.fire({
			grow: "fullscreen",
			confirmButtonText: "Close",
			didOpen: () => setFullScreenGameofLife(true),
			didClose: () => setFullScreenGameofLife(false),
		})
	}

	return (
		<section id="digital_art" className="sections">
			<div className="main-container text-center">
				<div className="greeting-wrapper center">
					<h1 style={{ marginBottom: 10 }}>Generative Art Gallery</h1>
					<p>All rights reserved.</p>
				</div>
				<div className="nav-wrapper border border-secondary border-bottom-0">
					<div className="dots-wrapper">
						<div id="dot-1" className="browser-dot" />
						<div id="dot-2" className="browser-dot" />
						<div id="dot-3" className="browser-dot" />
					</div>
					<Navigation />
				</div>
				<div id="gallery" className="border border-secondary border-top-0 border-bottom-0">
					<Row>
						<Col sm={4}>
							<Card className="bg-transparent p-3 m-3">
								<Card.Img as={Container} variant="top">
									<Billiards bypassCanvas={false} index={canvasIndex++} width={300} height={200} limit={limit}
										WipeSize={wipeSize} ballRadiusLowerLimit={3}
										ballRadiusUpperLimit={10} />
								</Card.Img>
								<Card.Body>
									<Card.Title>Billiard Balls</Card.Title>
									<Card.Text>
										Click and enjoy watching the game play itself ...
									</Card.Text>
									<Button variant="primary" onClick={() => showFullScreenBilliards()}>Full Screen</Button>
									<Button variant="warning" onClick={() => showFullScreenBilliards()}>Reset</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={4}>
							<Card className="bg-transparent p-3 m-3">
								<Card.Img as={Container} variant="top">
									<SierpinskiTriangle index={canvasIndex++} width={300} height={200} />
								</Card.Img>
								<Card.Body>
									<Card.Title>Sierpinski's Triangle</Card.Title>
									<Card.Text>
										A triangle unto itself infinte times
									</Card.Text>
									<Button variant="primary" onClick={() => showFullScreenSierpinskiTriangle()}>Full Screen</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={4}>
							<Card className="bg-transparent p-3 m-3">
								<Card.Img as={Container} variant="top">
									<GameOfLife index={canvasIndex++} width={300} height={200} />
								</Card.Img>
								<Card.Body>
									<Card.Title>Game of Life by Conway</Card.Title>
									<Card.Text>
										A simulation of our population's survival over time
									</Card.Text>
									<Button variant="primary" onClick={() => showFullScreenGameofLife()}>Full Screen</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
			{fullScreenBilliards &&
				createPortal(
					<Row>
						{
						[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
							return <Col sm={4} key={i}>
								<Billiards bypassCanvas={true} index={canvasIndex++} width={width * 0.25} height={height * 0.25} limit={limit}
									WipeSize={wipeSize} ballRadiusLowerLimit={ballRadiusLowerLimit/4}
									ballRadiusUpperLimit={ballRadiusUpperLimit/4} />
							</Col>
						})
						}
					</Row>,
					Swal.getHtmlContainer()
				)}
			{fullScreenSierpinskiTriangle &&
				createPortal(
					<Row>
						<Col sm={4}>
							<SierpinskiTriangle index={canvasIndex++} width={300} height={200} />
							</Col>
					</Row>,
					Swal.getHtmlContainer()
				)}

			{fullScreenGameofLife &&
				createPortal(
					<Row>
						<Col sm={4}>
							<GameOfLife index={canvasIndex++} width={300} height={200} />
						</Col>
					</Row>,
					Swal.getHtmlContainer()
				)}
		</section>
	)
}

export default GenerativeArt
