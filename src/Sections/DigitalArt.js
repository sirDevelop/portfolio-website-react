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
	const [photos, setPhotos] = useState(imgPath.slice(0, 6)) // Start with fewer images for faster load
	const [index, setIndex] = useState(-1)
	const [isLoading, setIsLoading] = useState(false)


	return (
		<section id="digital_art" className="sections">
			<div className="main-container text-center">
				<div className="greeting-wrapper center">
					<h1 style={{ marginBottom: 10 }}>Digital Art Gallery</h1>
					<p>Created using Chaotica, click on each image to expand.</p>
					<p style={{ fontSize: '14px', color: '#9b8fbf' }}>Loading {photos.length} of {imgPath.length} artworks</p>
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
					className={`btn btn-primary my-3 ${photos.length >= imgPath.length ? "d-none":""}`}
					style={{
						background: 'linear-gradient(135deg, #6b5b95 0%, #9b8fbf 100%)',
						border: 'none',
						padding: '12px 30px',
						fontWeight: '600',
						transition: 'all 0.3s ease'
					}}
					onClick={() => {
						setIsLoading(true);
						setTimeout(() => {
							setPhotos(photos => [...photos, ...imgPath.slice(photos.length, photos.length+6)]);
							setIsLoading(false);
						}, 300);
					}}
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'Load More'}
				</button>

				{/* About the Art Section */}
				<div style={{
					marginTop: '80px',
					marginBottom: '60px',
					padding: '50px 30px',
					background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(10, 10, 10, 0.9))',
					borderRadius: '15px',
					border: '2px solid rgba(255, 255, 255, 0.3)',
					boxShadow: '0 10px 40px rgba(255, 255, 255, 0.1), 0 5px 20px rgba(255, 215, 0, 0.2)'
				}}>
					<h2 style={{
						color: '#ffffff',
						marginBottom: '25px',
						textAlign: 'center',
						textShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
					}}>
						About the Art
					</h2>
					<div style={{
						maxWidth: '800px',
						margin: '0 auto',
						lineHeight: '1.8'
					}}>
						<div style={{
							textAlign: 'left',
							color: '#d4af37',
							fontSize: '15px'
						}}>
							<p style={{ marginBottom: '18px', lineHeight: '1.8' }}>
								<span style={{ color: '#ffd700', fontWeight: 'bold' }}>Fractals</span> are self-similar patterns that repeat at different scales.
								You can find them throughout nature in snowflakes, coastlines, and tree branches.
							</p>

							<p style={{ marginBottom: '0', lineHeight: '1.8' }}>
								These artworks were created using <span style={{ color: '#ffd700', fontWeight: 'bold' }}>Chaotica</span>,
								which uses flame fractal algorithms to transform mathematical equations into visual patterns. Small changes to the parameters
								can produce completely different results.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DigitalArt
