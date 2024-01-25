import { useState } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"

const PastProjects = () => {
	const [pastProjects, setPastProjects] = useState([
		{ category: "se", title: "Little Lemon Restaurant Website", text: "This is a fully responsive website that allows you to create user accounts, login/logout, view the menu, place orders, create reservations, and saves order and reservation history. Stack involves React, NodeJS, and MongoDB.", img: require("../assets/image/little-lemon-app-react.png"), link: "https://github.com/sirDevelop/little-lemon-app", linkTitle: "Source Code" },
		{ category: "se", title: "MouthWatering Deals Website", text: "This is a full stack website that allows a user to login via Google OAuth, visit a catalog to browse items and checkout their cart using Stripe. The items on the catalog page can be filtered by category and the user can view their order history. Stack involves React, NodeJS, and MonogDB.", img: require("../assets/image/ecommerce-website.png"), link: "https://github.com/sirDevelop/ecommerce-web-app", linkTitle: "Source Code" },
		{ category: "se", title: "Musical Beat Maker", text: "Web application that allows users to choose between 4 different kicks, 4 different snares, and 4 different hihats to produce a beat. The tempo can be adjusted from 20 bpm up to 300 bpm. Coded in React.", img: require("../assets/image/beatmaker-project.png"), link: "https://github.com/sirDevelop/beat-maker", linkTitle: "Source Code" },
		{ category: "se", title: "Musical Beat Producer", text: "Web application that allows users to create a sequence of beats to form a musical track. User can control up to 16 drum pads using the keyboard or by mouse click, and set the tempo up to 300 bpm. Coded in Angular.", img: require("../assets/image/producer-project.png"), link: "https://github.com/sirDevelop/producer", linkTitle: "Source Code" },
		{ category: "se", title: "This Personal Website!", text: "A full stack personal website involving HTML, CSS, React, and a NodeJS backend. Featuring personally created artwork, music from Spotify, and a contact section which sends your message to my Telegram bot.", img: require("../assets/image/portfolio-website.png"), link: "https://github.com/sirDevelop/portfolio-website-react", linkTitle: "Source Code" },
		{ category: "se", title: "ToDo List App", text: "Web application that allows users to login with Google OAuth, create todo lists and edit, save, and delete tasks. The overdue tasks are highlighted. The app is built with a React frontend, a NodeJS backend, and MongoDB.", img: require("../assets/image/todo-react-app.png"), link: "https://github.com/sirDevelop/todoListReact", linkTitle: "Source Code" },
		{ category: "ds", title: "Analysis of Ski Data", text: "Data from 330 different ski resorts across the country with 32 features are analyzed. Recommendations are given on what amenities should be taken away and added to the resort as well as ideal ticket price to maximize revenue.", img: require("../assets/image/ds-capstone.png"), link: "https://github.com/sirDevelop/DataScienceGuidedCapstone", linkTitle: "Source Code" },
		{ category: "ds", title: "Analysis of Cyclistic Bike Share", text: "An end to end data science project analyzing one year's worth of Cyclistic Rider Data. We created visualizations and insights based on member vs casual rider behavior and recommendations were given on how to convert casual riders to members.", img: require("../assets/image/cyclistic-project.png"), link: "https://github.com/sirDevelop/Cyclistic-Bike-Study", linkTitle: "Source Code" },
		{ category: "ds", title: "Analysis of London Housing Prices", text: "Housing prices of 32 boroughs in London are analyzed over a 2 decade period. After data processing and cleaning, visualizations and supporting conclusions are provided.", img: require("../assets/image/london-housing-analysis.png"), link: "https://github.com/sirDevelop/London-Housing-Data-Analysis", linkTitle: "Source Code" },
		{ category: "ds", title: "Analysis of Fitbit Data for BellaBeat", text: "Analysis of Fitbit data of 33 users across a span of 30 days. The findings are used to give recommendations to the smart device company BellaBeat.", img: require("../assets/image/bellabeat.png"), link: "https://github.com/sirDevelop/BellaBeat-Data-Analysis/tree/main", linkTitle: "Source Code" }
	])

	const [projects, setProjects] = useState([
		{ isHovered: false }
	])
	const getHoverDirection = (event) => {
		var directions = ["top", "right", "bottom", "left"]
		var item = event.target
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
	const [activeFilter, setActiveFilter] = useState("*")

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
					{pastProjects.sort((a, b) => {
						if (a.title < b.title) {
							return -1;
						}
						if (a.title > b.title) {
							return 1;
						}
						return 0;
					}).map((project, i) => {
						return (
							<Col sm={4} key={i} className={`pb-3 projects ${activeFilter !== project.category && activeFilter !== "*" ? "hidden-project" : ""}`} >
								<Card>
									<Card.Img variant="top" className="card-img-top" width="250px" height="250px" src={project.img} onClick={() => window.open(project.link, "_blank")} />
									<Card.Body>
										<Card.Title>{project.title}</Card.Title>

										<Card.Text className={`${!project.showMore ? "text-truncate2" : ""}`}>
											{project.text}
										</Card.Text>
										<Button className="mx-2" onClick={() => {
											setPastProjects((pastProjects) => { return [...pastProjects.filter((_, index) => i !== index), { ...pastProjects[i], showMore: !pastProjects[i].showMore }] })
										}} variant={!project.showMore ? "primary" : "success"}>{!project.showMore ? "More" : "Less"}</Button>
										<Button className="mx-2" variant="warning" onClick={() => window.open(project.link, "_blank")}>
											{project.linkTitle}
										</Button>
									</Card.Body>
								</Card>
								{/* <div onMouseEnter={(e) => {
									if (!project.isHovered) setPastProjects(pastProjects => { return [...pastProjects.filter((_, index) => i !== index).map((_) => { return { ..._, isHovered: false } }), { ...project, isHovered: true, flipDir: getHoverDirection(e) }] })
									// alert(i)
									// console.log(project.img);
								}} onMouseLeave={(e) => {
									setPastProjects(pastProjects => { return [...pastProjects.map((_) => { return { ..._, isHovered: false } })] })
								}} className={`flip-card ${project.isHovered ? "hovered" : ""}`} >
								</div> */}
							</Col>
						)
					})}
				</Row>
			</div>
		</section>
	)
}

export default PastProjects
