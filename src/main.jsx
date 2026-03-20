import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { ModuleRegistry, AllCommunityModule } from "ag-charts-community"

// Înregistrarea modulelor AG Charts permite folosirea graficului donut din dashboard,
// adică una dintre părțile extra prin care aplicația trece de la o listă simplă la un produs mai complet.
ModuleRegistry.registerModules([AllCommunityModule])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
