import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/main" element={<></>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
