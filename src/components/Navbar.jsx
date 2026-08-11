import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                ProductHub
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/products/create">Add Product</Link>
            </div>
        </nav>
    );
}

export default Navbar;