import Homepage from "./componnet/HomePage";
import Notfound from "./componnet/NotFound";
import { Route, Routes } from "react-router-dom";
import { Header } from "./componnet/Header";
function App() {
  return (
<>
<Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
</>
  );
}

export default App;
