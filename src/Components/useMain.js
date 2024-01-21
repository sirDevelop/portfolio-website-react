import { createContext, useContext, useEffect } from "react"

const MainContent = createContext()

export function useMain() {
	return useContext(MainContent)
}

const MainComponent = ({ children }) => {
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
		<MainContent.Provider
			value={{
				setTheme
			}}
		>
			{children}
		</MainContent.Provider>
	)
}

export default MainComponent
