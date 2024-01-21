import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./assets/css_themes/default.css"
import "./assets/css_themes/blue.css"
import "./assets/css_themes/red.css"
import "./assets/css_themes/purple.css"
import "./assets/css_themes/digitalart.css"
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	//<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	//</React.StrictMode>
)
