import Homepage from "./componnet/HomePage";
import Notfound from "./componnet/NotFound";
import { Route, Routes } from "react-router-dom";
import { Header } from "./componnet/Header";
import { CountryDtals } from "./componnet/CountryDtals";
function App() {
  return (
<>
<Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/country/:r" element={<CountryDtals/>}/>
      <Route path="*" element={<Notfound />} />
    </Routes>
</>
  );
}

export default App ;
