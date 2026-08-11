import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
    return (
        <div className="product-card">
            <div className="product-header">
                <h3>{product.name}</h3>

                <span className={product.inStock ? "stock in" : "stock out"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
            </div>

            <p className="category">{product.category}</p>

            <p>{product.description}</p>

            <h2>₹{product.price}</h2>

            <div className="card-actions">
                <Link to={`/products/${product._id}`}>
                    View
                </Link>

                <Link to={`/products/${product._id}/edit`}>
                    Edit
                </Link>

                <button onClick={() => onDelete(product._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ProductCard;