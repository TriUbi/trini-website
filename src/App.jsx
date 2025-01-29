import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import MagicCursor from "./components/MagicCursor";
import { createGlobalStyle } from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none !important;
  }
`;

const App = () => {
  return (
    <Router basename="/minportfolio.github.io">
      <GlobalStyle />
      <GlobalStyles />
      <MagicCursor />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/projekt" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
