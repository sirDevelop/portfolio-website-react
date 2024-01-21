import React from "react"

const Contact = () => {
	return (
		<section id="contact" className="sections">
			<div className="main-container" id="about_section2">
				<h3 style={{ textAlign: "center" }}>
					<div className="slight-expand-on-hover my-4">
						Get In Touch
					</div>
				</h3>
				{/* visits URL /send in index.js */}
				<form id="contact-form" method="POST" action="send">
					<label>Name</label>
					<input
						className="input-field"
						type="text"
						name="name"
						required=""
					/>
					<label>Subject</label>
					<input
						className="input-field"
						type="text"
						name="subject"
						required=""
					/>
					<label>Email</label>
					<input
						className="input-field"
						type="email"
						name="email"
						required=""
					/>
					<label>Message</label>
					<textarea
						className="input-field"
						type="text"
						name="message"
						required=""
						defaultValue={""}
					/>
					<input id="submit-btn" type="submit" value={"Send"} />
				</form>
			</div>
		</section>
	)
}

export default Contact
