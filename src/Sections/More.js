import React, { useState } from "react"
import parse from 'html-react-parser';
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const More = () => {
	const certificates = [
		{ title: "Google Data Analytics", src: "https://www.coursera.org/account/accomplishments/professional-cert/8J35TQN8QSR6" },
		{ title: "Meta Frontend Developer", src: "https://www.coursera.org/account/accomplishments/professional-cert/2DYC2QTC9CRA" },
		{ title: "Meta Backend Developer", src: "https://www.coursera.org/account/accomplishments/professional-cert/ZNRVZ4EFKVHB" },
	]

	const facts = [
		`I ride an electric unicycle, a 24" unicycle, a 29" mountain unicycle', and 36" unicycle`,
		`I am a licensed paraglider`,
		`I am a licensed skydiver with over 200 skydives`,
		`I have 2 cream Shiba Inus named Marco and Indra`,
		`I grew up working at <a target="_blank" href="http://www.benichopsticks.us/">my family restaurant</a>`,
		`I am a Go / Baduk player. <a target="_blank" href="https://online-go.com/user/view/1397763">Challenge me</a>`,
		`I am working on my associate's degree in Music`,
		`I sell my own product on <a target="_blank" href="https://www.amazon.com/Artistic-Large-Mouse-Artwork-Name/dp/B0BYPW8X18">Amazon</a>`,
		`I am an online tutor on <a target="_blank" href="https://www.wyzant.com/Tutors/cw95">Wyzant</a>`
	]

	const skills = ["React", "HTML/(S)CSS", "Javascript/Typescript", "Node.js", "Java", "Python", "MongoDB", "SQL", "R"]

	const coursework = [{ title: "Linear Algebra" }, { title: "Automata,Computability, & Complexity" }, { title: "Probability & Random Variables" }, { title: "Intro to Machine Learning" }, { title: "Design & Analysis of Algorithms" }, { title: "Computation Structures" }, { title: "Real Analysis" }, { title: "Advances in Computer Vision" }, { title: "Elements of Software Construction" }, { title: "Discrete Mathematics" }];


	return (
		<section id="more" className="sections">
			<div className="main-container">
				<div className="about-wrapper">
					<div className="about-me">
						<div className="slight-expand-on-hover">
							<h4>More</h4>
						</div>
						<div >
							<p>
								I am a full stack developer, data analyst, and artist.
								I am interested in big data problems, machine learning, and using code as a creative medium.
							</p>
						</div>

						<div id="certs" className="facts p-2">
							<ul className="list-style-none">
								<li><a target="_blank" href="https://github.com/sirDevelop">My Github</a></li>
								<li><Link to="/digital_art">Digital Artwork</Link> / <Link to="/generative_art">Generative Artwork</Link></li>
								<li className="text-bold">Professional Certificates</li>
								<ul>
									{certificates.map((certs, i) => {
										return <li className="my-1" key={i}><a target="_blank"
											href={`${certs.src}`}>
											{certs.title}
										</a>
										</li>
									})}
								</ul>
							</ul>
						</div>
<hr/>

						<div className="slight-expand-on-hover mb-3">
							<h4>Facts About Me</h4>
						</div>
						<div id="facts" className="facts p-2 pe-5">
							<ul className="list-style-none">
								{facts.map((fact, i) => {
									return (
										<li key={i} className={`${i !== facts.length - 1 ? "border-bottom" : ""} border-dark py-1 border-2 text-shadow`}>
											{parse(fact)}
										</li>
									)
								})}
							</ul>
						</div>
					</div>

					<div>

						<div className="slight-expand-on-hover mb-3">
							<h4>Relevant Coursework</h4>
						</div>
						<div id="courses" className="facts p-2 pe-5">
							<Row>
								<Col sm={6}>
									<ul className="list-style-none">
										{coursework.slice(0, Math.floor(skills.length / 2)+1).map((course, i, allOfElements) => {
											return (
												<li key={i} className={`${i !== allOfElements.length - 1 ? "border-bottom" : ""} border-dark py-1 border-2 text-shadow `}>
													{course.title}
												</li>
											)
										})}
									</ul>
								</Col>
								<Col sm={6}>
									<ul className="list-style-none">
										{coursework.slice(Math.floor(skills.length / 2)+1, skills.length).map((course, i, allOfElements) => {
											return (
												<li key={i} className={`${i !== allOfElements.length - 1 ? "border-bottom" : ""} border-dark py-1 border-2 text-shadow`}>
													{course.title}
												</li>
											)
										})}
									</ul>
								</Col>
							</Row>

						</div>
						<hr />
						<div className="slight-expand-on-hover">
							<h4>Qualifications</h4>
						</div>
						<div className="text-bold">
							<p>
								Previous Experience:

								<a
									className="ms-2"
									target="_blank"
									href="https://chenw.net/public/resume.pdf"
								>
									Resume
								</a>
							</p>
						</div>
						<div id="courses" className="d-block facts p-2 pe-5">
							<Row>
								<Col sm={6}>
									<ul className="my-2 list-style-none">
										{skills.slice(0, Math.floor(skills.length / 2) + 1).map((skill, i) => {
											return <li key={i} className="text-bold pb-1">{skill}</li>
										})}
									</ul>
								</Col>
								<Col sm={6}>
									<ul className="mt-2 list-style-none">
										{skills.slice(Math.floor((skills.length / 2) + 1), skills.length).map((skill, i) => {
											return <li key={i} className="text-bold pb-1">{skill}</li>
										})}
									</ul>
								</Col>
							</Row>
						</div>
					</div>

				</div>
			</div>
		</section >
	)
}

export default More
