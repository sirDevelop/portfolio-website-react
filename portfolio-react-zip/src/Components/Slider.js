import { Link } from "react-router-dom"
import { useState } from "react"

const Slider = () => {
	const [slideShowImages, setSlideShowImages] = useState([
		{
			title: "Skydive Landing",
			src: require("../assets/image/skydive-landing-2.jpg"),
			active: true,
		},
		{
			title: "Skydive 1",
			src: require("../assets/image/skydive1.jpg"),
			active: false,
		},
		{
			title: "Skydive 2",
			src: require("../assets/image/skydive2.jpg"),
			active: false,
		},
		{
			title: "Skydive 3",
			src: require("../assets/image/skydive3.jpg"),
			active: false,
		},
		{
			title: "Skydive 4",
			src: require("../assets/image/skydive4.jpg"),
			active: false,
		},
		{
			title: "Indra 1",
			src: require("../assets/image/Indra1.jpg"),
			active: false,
		},
		{
			title: "Indra 2",
			src: require("../assets/image/Indra2.jpg"),
			active: false,
		},
		{
			title: "Marco 1",
			src: require("../assets/image/Marco1.jpg"),
			active: false,
		},
		{
			title: "Marco 2",
			src: require("../assets/image/Marco2.jpg"),
			active: false,
		},
	])

	const changeSlide = (active) => {
		console.log(active)
		setSlideShowImages([
			...slideShowImages.map((val, i) => {
				if (i === active) return { ...val, active: true }
				else return { ...val, active: false }
			}),
		])
	}

	return (
		<>
			<div className="slideshow-container slight-expand-on-hover">
				{slideShowImages.map((image, i) => {
					return (
						<div
							className={`mySlides ${
								image.active ? "d-block" : "d-none"
							}`}
							key={i}
						>
							<img id="profile_pic" src={image.src} alt="" />
						</div>
					)
				})}
				<Link
					className="prev"
					onClick={() => {
						let prev = 0
						slideShowImages.filter((val, i) => {
							val.active === true && i > 0 ? (
								(prev = i - 1)
							) : val.active === true ? (
								(prev = slideShowImages.length - 1)
							) : (
								<></>
							)
							return false
						})
						changeSlide(prev)
					}}
				>
					&#10094;
				</Link>
				<Link
					className="next"
					onClick={() => {
						let next = 0
						slideShowImages.filter((val, i) => {
							val.active === true &&
							i < slideShowImages.length - 1 ? (
								(next = i + 1)
							) : val.active === true ? (
								(next = 0)
							) : (
								<></>
							)
							return false
						})
						changeSlide(next)
					}}
				>
					&#10095;
				</Link>
			</div>
			<div className="dot-container">
				{slideShowImages.map((val, i) => {
					return (
						<span
							key={i}
							className={`dot ${val.active ? "active" : ""}`}
							onClick={() => changeSlide(i)}
						></span>
					)
				})}
			</div>
		</>
	)
}

export default Slider
