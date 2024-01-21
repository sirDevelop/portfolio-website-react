import React, { useEffect } from "react"

const PersonalizeTheme = () => {
	function setTheme(mode) {
		document.getElementById("root").classList.remove("light")
		document.getElementById("root").classList.remove("red")
		document.getElementById("root").classList.remove("blue")
		document.getElementById("root").classList.remove("purple")
		if (mode === "light") {
			document.getElementById("root").classList.add("light")
		} else if (mode === "blue") {
			document.getElementById("root").classList.add("blue")
		} else if (mode === "red") {
			document.getElementById("root").classList.add("red")
		} else if (mode === "purple") {
			document.getElementById("root").classList.add("purple")
		}
		localStorage.setItem("theme", mode)
	}
	useEffect(() => {
		setTheme(
			localStorage.getItem("theme")
				? localStorage.getItem("theme")
				: "light"
		)
	}, [])
	return (
		<>
			<h5 style={{ textAlign: "center", lineHeight: 0 }}>
				Personalize Theme{" "}
			</h5>
			<div className="slight-expand-on-hover" id="theme-options-wrapper">
				<div
					onClick={() => setTheme("light")}
					id="light-mode"
					className="theme-dot"
				/>
				<div
					onClick={() => setTheme("blue")}
					id="blue-mode"
					className="theme-dot"
				/>
				<div
					onClick={() => setTheme("red")}
					id="red-mode"
					className="theme-dot"
				/>
				<div
					onClick={() => setTheme("purple")}
					id="purple-mode"
					className="theme-dot sl"
				/>
			</div>
			<p id="settings-note">
				*Theme settings will be saved for your next visit
			</p>
		</>
	)
}

export default PersonalizeTheme
