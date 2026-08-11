import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>Product Management System</h1>

            <p>
                A React single-page application connected to a
                RESTful API using fetch and React Router.
            </p>

            <Link to="/products" className="primary-btn">
                View Products
            </Link>
        </div>
    );
}

export default Home;