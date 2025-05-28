import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./pages/sharedComponents/navBar";
import { LandingPage } from "./pages/landingPage/landingPage";
import { ArticlesPage } from "./pages/articlesPage/articlesPage";
import { ArticleDetailPage } from "./pages/articlesPage/articleDetailPage"; 
import { StorePage } from "./pages/storePage/storePage";
import { AboutPage } from "./pages/aboutPage/aboutPage";

function App() {
  return (
    <Router>
      <NavBar />
      <div id="top-spacer"></div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetailPage />} /> 
        <Route path="/store" element={<StorePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;