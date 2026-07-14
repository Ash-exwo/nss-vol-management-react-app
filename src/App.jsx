import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddVolunteer from "./components/AddVolunteer"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-volunteer" element={<AddVolunteer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App