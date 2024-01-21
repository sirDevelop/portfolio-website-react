import { useState } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
const PastProjects = () => {
	const [projects, setProjects] = useState([
		{ isHovered: false }
	])
	const getHoverDirection = (event) => {
		var directions = ["top", "right", "bottom", "left"]
		var item = event.currentTarget
		var w = item.offsetWidth
		var h = item.offsetHeight
		var x =
			(event.clientX - item.getBoundingClientRect().left - w / 2) *
			(w > h ? h / w : 1)
		var y =
			(event.clientY - item.getBoundingClientRect().top - h / 2) *
			(h > w ? w / h : 1)
		var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
		return directions[d]
	}
	const [activeFilter, setActiveFilter] = useState()
	return (
		<section id="past_projects" className="sections">
			<div className="main-container text-center">
				<div className="slight-expand-on-hover">
					<h3 className="text-center mt-4">A Few Past Projects</h3>
				</div>
				<div className="container my-4">
					<ul id="filters" className="nav nav-tabs">
						<li className="nav-item" onClick={() => setActiveFilter("*")}>
							<a
								className={`nav-link ${activeFilter === "*" ? "active" : ""}`}
								aria-current="page"
							>
								All Projects
							</a>
						</li>
						<li className="nav-item" onClick={() => setActiveFilter("se")}>
							<a className={`nav-link ${activeFilter === "se" ? "active" : ""}`} aria-current="page">
								Software Engineering
							</a>
						</li>
						<li className="nav-item" onClick={() => setActiveFilter("ds")}>
							<a className={`nav-link ${activeFilter === "ds" ? "active" : ""}`}>Data Science</a>
						</li>
					</ul>
				</div>
				<Row>
					{/* <div className="spinner-grow mx-auto" role="status">
						<span className="sr-only">Loading...</span>
					</div> */}
					{projects.sort().map((project, i) => {
						return <Col sm={4} key={i}><div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src={require("../assets/image/artery-fractal-min.png")}
										style={{ width: 300, height: 300 }}
									/>
								</div>
								<div className="flip-card-back">
									<h1>John Doe</h1>
									<p>Architect &amp; Engineer</p>
									<p>We love that guy</p>
								</div>
							</div>
						</div>
							<Card className={`border-0 bg-transparent opacity-0`}>
								<Card.Img variant="top" src={require("../assets/image/artery-fractal-min.png")} />
							</Card>
						</Col>

						return <Col sm={4} key={i}>
							<Card className={`border-0 bg-transparent transition ${project.isHovered ? "opacity-0" : ""}`} onMouseEnter={() => setProjects(projects => { return [...projects.filter((_, index) => index !== i), { isHovered: true }] })} >
								<Card.Img variant="top" src={require("../assets/image/artery-fractal-min.png")} />
								{/* <Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the
									bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body> */}
							</Card>
						</Col>
					})}
				</Row>
			</div>
		</section>
	)
}

export default PastProjects
