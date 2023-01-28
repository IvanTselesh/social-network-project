import { Route, Routes } from "react-router-dom"
import { Dialogs } from "../components/Dialogs/Dialogs"
import { Content } from "../components/Content/Content"

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/dialogs" element={<Dialogs />} />
      <Route path="/profile" element={<Content />} />
      <Route path="/news" element={<></>} />
      <Route path="/music" element={<></>} />
      <Route path="/settings" element={<></>} />
    </Routes>
  )
}