import {useState} from "react"
import Navigation from "../Components/Navigation"
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const DigitalArt = () => {
	const imgPath = [
		{src: require("../assets/image/divine-noise-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/chaos-flower-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/turquoise-cymbals-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/yellow-feng-shui-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/cellular-origins-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/astro-observer-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-emergence-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/pink-orb-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/illustrious-magician-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/burst-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/puzzled-fire-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/spiral-chaos-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/jade-phoenix-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/resonant-fireworks-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/vortex-light-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/emerald-jade-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/lava-inferno-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/bleeding-star-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-rose-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/neural-network-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/curious-amoeba-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/morning-eagle-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-vortex-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/eye-burst-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/artery-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/phoenix-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/neutron-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/chrysalis-flower-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/icy-mint-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/worlds-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/rose-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/disco-spiral-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-velvet-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/neuron-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/poseidon-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/golden-phoenix-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/color-wheel-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/sun-rose-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/starlight-butterfly-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/icicle-lights-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/space-rubiks-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/philosopher-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/nebulous-planet-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/lost-heart-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/magma-jellyfish-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/emerald-matrix-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/vitruvian-flower-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/autograph-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/valentines-vortex-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/glowing-orbit-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/rainbow-coral-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/electric-phoenix-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/beating-heart-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/rose-pendant-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/exotic-silk-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/bone-fracture-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/dark-matter-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/emerging-flame-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/perfect-rose-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/broken-phoenix-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-sprite-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/infinite-coral-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/window-sprite-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/matrix-coin-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/lava-drip-fractal-min.png"), width: 1200, height: 1200},
		{src: require("../assets/image/infinite-circle-fractal-min.png"), width: 1200, height: 1200},
	]
	const [photos, setPhotos] = useState(imgPath.slice(0, 9))
	const [index, setIndex] = useState(-1)


	return (
		<section id="digital_art" className="sections">
			<div className="main-container text-center">
				<div className="greeting-wrapper center">
					<h1 style={{ marginBottom: 10 }}>Digital Art Gallery</h1>
					<p>Created using Chaotica, click on each image to expand.</p>
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
				<div id="gallery">
					<PhotoAlbum photos={photos} layout="rows" targetRowHeight={450} onClick={({ index }) => setIndex(index)} />
					<Lightbox
						index={index}
						open={index >= 0}
						close={() => setIndex(-1)}
						slides={photos}
						plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
					/>
				</div>
				<button
					id="load-more"
					type="button"
					className={`btn btn-outline-dark my-3 ${photos.length >= imgPath.length ? "d-none":""}`}
					onClick={() => {
						setPhotos(photos => [...photos, ...imgPath.slice(photos.length - 1, photos.length+8)])
					}}
				>
					Load more
				</button>
			</div>
		</section>
	)
}

export default DigitalArt
