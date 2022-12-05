
import {Route, Routes} from "react-router-dom"
import Domov from "./pages/Domov";
import Registracia_site from "./pages/Registracia_site";
import Main from "./pages/Main"
import Profil from "./pages/Profil";
import Chat from "./pages/Chat";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Domov />} />
      <Route path="/registracia" element={<Registracia_site />} />
      <Route path="/main" element={<Main/>} />
      <Route path="/profil" element={<Profil/>} />
      <Route path="/chat" element={<Chat/>} />
    </Routes>
  );
}

export default App;
