import React from "react"
import Dots from "../Components/Dots"
import Navigation from "../Components/Navigation"
import Slider from "../Components/Slider"
import PersonalizeTheme from "../Components/PersonalizeTheme"
import LinkedIn from "../assets/image/linkedin.svg"

const Intro = () => {
	return (
		<section id="intro" className="sections">
			<div className="main-container intro">
				<div className="greeting-wrapper">
					<div className="slight-expand-on-hover">
						<h1>Cheng Wang</h1>
					</div>
				</div>
				<div className="intro-wrapper bg1">
					<div className="nav-wrapper border border-secondary border-bottom-0">
						<Dots />
						<Navigation />
					</div>
					<div className="left-column">
						<Slider />
						<PersonalizeTheme />
					</div>
					<div className="right-column d-none d-md-block">
						<div id="preview-shadow">
							<div id="preview">
								<div id="corner-tl" className="corner" />
								<div id="corner-tr" className="corner" />
								<div className="bio-div">
									<div className="slight-expand-on-hover">
										<h3 className="my-4">Introduction</h3>
									</div>
									<div className="linkedin">
										<a
											target="_blank"
											href="https://www.linkedin.com/in/cwcw11//"
										>
											<img
												src={LinkedIn}
												alt=""
												height="40px"
												width="40px"
											/>
										</a>
									</div>
								</div>
								<div className="text-bold">
									<p>
										I graduated MIT in 2018 with a major in
										Computer Science and minor in Math.
									</p>
								</div>
								<div id="corner-bl" className="corner" />
								<div id="corner-br" className="corner" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Intro
