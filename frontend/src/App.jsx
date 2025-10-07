import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/CreatePost" element={<CreatePost/>} />
        </Route>
      </Routes>
    </Router>
  )
}
