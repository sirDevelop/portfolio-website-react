import { useState, useRef } from "react"
import axios from "axios"
import { Alert } from "react-bootstrap"
const Contact = () => {
	const [formData, setFormData] = useState({ name: '', subject: '', email: '', message: '' })
	const [showMessage, setShowMessage] = useState(false)
	const [message, setMessage] = useState("")
	const [heading, setHeading] = useState("")
	const [status, setStatus] = useState("")
	const nameRef = useRef()
	const subjectRef = useRef()
	const emailRef = useRef()
	const messageRef = useRef()
	
	const handleFormData = (e) => {
		setFormData((formData) => { return { ...formData, [e.target.name]: e.target.value } })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		let error = true
		!formData?.name
			? nameRef.current.focus()
			:
			!formData?.subject
				? subjectRef.current.focus()
				:
				!formData?.email
					? emailRef.current.focus()
					:
					!formData?.message
						? messageRef.current.focus()
						: (error = false)


		if (!error) { // verify if fields are filled out properly
			axios.post(process.env.REACT_APP_SERVER_URL + "/send", formData).then((response) => {
				// axios.post("/send/", formData).then((response) => {
				if (response?.data.message && response?.data.status) {
					setShowMessage(true)
					setHeading(response.data.heading)
					setMessage(response.data.message)
					setStatus(response.data.status)
				}
				setFormData({ name: '', subject: '', email: '', message: '' })
			}).catch((error) => {
				setShowMessage(true)
				setHeading("Something's Wrong")
				setMessage("I will take a look")
				setStatus("danger")
			})
		} else {
			setShowMessage(true)
			setHeading("Invalid Form")
			setMessage("Please fill out all of the fields.")
			setStatus("warning")
		}
	}
	return (
		<section id="contact" className="sections">
			<div className="main-container" id="about_section2">
				<h3 style={{ textAlign: "center" }}>
					<div className="slight-expand-on-hover my-4">
						Get In Touch
					</div>
				</h3>
				{/* visits URL /send in index.js */}
				<form id="contact-form" onSubmit={onSubmit}>
					{message.length || heading.length ? <Alert variant={status} onClose={() => setShowMessage(false)} show={showMessage} dismissible>
						{heading.length ? <Alert.Heading>{heading}</Alert.Heading> : <></>}
						{message.length ? <p>
							{message}
						</p> : <></>}

					</Alert> : <></>}
					<label>Name</label>
					<input
						ref={nameRef}
						className="input-field"
						type="text"
						name="name"
						onChange={handleFormData}
						value={formData.name}
					/>
					<label>Subject</label>
					<input
						ref={subjectRef}
						className="input-field"
						type="text"
						name="subject"
						onChange={handleFormData}
						value={formData.subject}
					/>
					<label>Email</label>
					<input
						ref={emailRef}
						className="input-field"
						type="email"
						name="email"
						onChange={handleFormData}
						value={formData.email}
					/>
					<label>Message</label>
					<textarea
						ref={messageRef}
						className="input-field"
						type="text"
						name="message"
						onChange={handleFormData}
						value={formData.message}
					/>
					<input id="submit-btn" type="submit" value={"Send"} />
				</form>
			</div>
		</section>
	)
}

export default Contact
