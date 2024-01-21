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

const DigitalArt = () => {
	const imgPath = [
		{src: require("../assets/image/divine-noise-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/chaos-flower-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/turquoise-cymbals-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/yellow-feng-shui-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/cellular-origins-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/astro-observer-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-emergence-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/pink-orb-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/illustrious-magician-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/burst-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/puzzled-fire-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/spiral-chaos-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/jade-phoenix-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/resonant-fireworks-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/vortex-light-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/emerald-jade-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/lava-inferno-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/bleeding-star-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-rose-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/neural-network-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/curious-amoeba-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/morning-eagle-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-vortex-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/eye-burst-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/artery-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/phoenix-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/neutron-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/chrysalis-flower-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/icy-mint-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/worlds-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/rose-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/disco-spiral-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-velvet-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/neuron-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/poseidon-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/golden-phoenix-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/color-wheel-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/sun-rose-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/starlight-butterfly-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/icicle-lights-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/space-rubiks-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/philosopher-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/nebulous-planet-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/lost-heart-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/magma-jellyfish-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/emerald-matrix-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/vitruvian-flower-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/autograph-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/valentines-vortex-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/glowing-orbit-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/rainbow-coral-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/electric-phoenix-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/beating-heart-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/rose-pendant-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/exotic-silk-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/bone-fracture-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/dark-matter-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/emerging-flame-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/perfect-rose-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/broken-phoenix-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/blue-sprite-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/infinite-coral-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/window-sprite-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/matrix-coin-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/lava-drip-fractal.png"), width: 1200, height: 1200},
		{src: require("../assets/image/infinite-circle-fractal.png"), width: 1200, height: 1200},
	]
	const [photos, setPhotos] = useState(imgPath.slice(0, 9))
	const [index, setIndex] = useState(-1)


	return (
		<section id="digital_art" className="sections">
			<div className="main-container text-center">
				<div className="greeting-wrapper center">
					<h1 style={{ marginBottom: 10 }}>Digital Art Gallery</h1>
					<p>Created using Chaotica, click on each image to expand.</p>
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
