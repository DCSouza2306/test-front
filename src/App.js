import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import GlobalStyle from "./components/GlobalStyle";
import { Main } from "./pages/MainScreen";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
