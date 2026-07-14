import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddVolunteer from "./components/AddVolunteer"
import ViewVolunteer from "./components/ViewVolunteer"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-volunteer" element={<AddVolunteer/>}/>
      <Route path="/view-volunteer" element={<ViewVolunteer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App