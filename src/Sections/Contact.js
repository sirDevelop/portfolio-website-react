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
				{/* Temporarily disabled due to spam */}
				<div id="contact-form" style={{ textAlign: 'center', padding: '60px 30px' }}>
					<div style={{
						background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(212, 175, 55, 0.1))',
						border: '2px solid #ffd700',
						borderRadius: '15px',
						padding: '40px',
						maxWidth: '500px',
						margin: '0 auto'
					}}>
						<h4 style={{ color: '#ffd700', marginBottom: '20px' }}>
							🔒 Contact Form Temporarily Disabled
						</h4>
						<p style={{ color: '#d4af37', fontSize: '16px', marginBottom: '25px' }}>
							Due to recent spam attacks, the contact form has been temporarily disabled.
							We apologize for any inconvenience.
						</p>
						<p style={{ color: '#ffffff', fontSize: '18px', marginBottom: '20px' }}>
							Please reach out via:
						</p>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
							<a
								href="https://www.linkedin.com/in/chen-liu-developer/"
								target="_blank"
								rel="noreferrer"
								style={{
									background: 'linear-gradient(135deg, #ffd700, #d4af37)',
									color: '#000',
									padding: '12px 25px',
									borderRadius: '25px',
									textDecoration: 'none',
									fontWeight: '600',
									transition: 'all 0.3s ease',
									display: 'inline-block'
								}}
								onMouseEnter={(e) => {
									e.target.style.transform = 'translateY(-2px)';
									e.target.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.4)';
								}}
								onMouseLeave={(e) => {
									e.target.style.transform = 'translateY(0)';
									e.target.style.boxShadow = 'none';
								}}
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/sirDevelop"
								target="_blank"
								rel="noreferrer"
								style={{
									background: 'transparent',
									border: '2px solid #ffd700',
									color: '#ffd700',
									padding: '12px 25px',
									borderRadius: '25px',
									textDecoration: 'none',
									fontWeight: '600',
									transition: 'all 0.3s ease',
									display: 'inline-block'
								}}
								onMouseEnter={(e) => {
									e.target.style.background = 'linear-gradient(135deg, #ffd700, #d4af37)';
									e.target.style.color = '#000';
									e.target.style.transform = 'translateY(-2px)';
									e.target.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.4)';
								}}
								onMouseLeave={(e) => {
									e.target.style.background = 'transparent';
									e.target.style.color = '#ffd700';
									e.target.style.transform = 'translateY(0)';
									e.target.style.boxShadow = 'none';
								}}
							>
								GitHub
							</a>
						</div>
						<p style={{ color: '#b8b8d1', fontSize: '14px', marginTop: '30px', marginBottom: '0' }}>
							The form will be restored once security measures are in place.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
