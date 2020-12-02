import React  from "react";
import Searchbox from "./searchbox";
import Content from "./content";
import Footer from "./footer";
import './App.css';
function App() {
  return (
    <div className="">
    <nav class="navbar fixed-top navbar-light">
<span class="navbar-brand mb-0 h1"><h1 className="brand-name">Asquero</h1></span>
</nav>
<Searchbox />
<Content />
<Footer />
    </div>
  );
}

export default App;
