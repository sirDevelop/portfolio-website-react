import React from "react"

export const Music = () => {
	return (
		<section id="music" className="sections">
			<div className="main-container music my-3">
				<div className="slight-expand-on-hover">
					<h4>Music for Your Enjoyment</h4>
				</div>
				<div className="intro-wrapper bg2 mt-3">
					<div className="left-column">
						<iframe
							style={{ borderRadius: 12 }}
							src="https://open.spotify.com/embed/playlist/7ma9JNkfy35Pa00tVcGYo7?utm_source=generator"
							width="70%"
							height={352}
							frameBorder={0}
							allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						/>
					</div>
					<div className="right-column">
						<iframe
							style={{ borderRadius: 12 }}
							src="https://open.spotify.com/embed/playlist/3DTzgeNFvfHiefFnY3bzjL?utm_source=generator"
							width="70%"
							height={352}
							frameBorder={0}
							allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
