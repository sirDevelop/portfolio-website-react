import { Link } from "react-router-dom"

const Navigation = () => {
	return (
		<ul id="navigation">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/digital_art">Digital Art</Link>
			</li>
			{/* <li>
				<Link to="/generative_art">Generative Art</Link>
			</li> */}
			{/* <li>
				<Link to="/contact">Contact</Link>
			</li> */}
		</ul>
	)
}

export default Navigation
