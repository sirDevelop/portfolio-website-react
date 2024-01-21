import React, { useEffect } from "react"
import {useMain} from "./useMain"
const PersonalizeTheme = () => {
	const {setTheme} = useMain()
	return (
		<>
			{/* textAlign: "center",  */}
			<h5 className="text-center slight-expand-on-hover lh-1 pt-0">
				Personalize Theme{" "}
			</h5>
			<div className="slight-expand-on-hover pb-2" id="theme-options-wrapper">
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
			<p id="settings-note" className="slight-expand-on-hover">
				*Theme settings will be saved for your next visit
			</p>
		</>
	)
}

export default PersonalizeTheme
