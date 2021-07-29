import "./header.css";
import logo from "../logo.svg";

function Header() {
    return (
        <header className="Header-container">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Fitness McFitFace</h1>
        <div>User feature coming soon</div>
      </header>
    )
}

export default Header;
