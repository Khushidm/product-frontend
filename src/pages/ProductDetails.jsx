import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import Loading from "../components/Loading";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProduct = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getProduct(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="page">
                <div className="error">{error}</div>
                <Link to="/products" className="primary-btn">
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="details-container">
                <div className="details-header">
                    <div>
                        <p className="category">{product.category}</p>
                        <h1>{product.name}</h1>
                    </div>

                    <span
                        className={
                            product.inStock
                                ? "stock in"
                                : "stock out"
                        }
                    >
                        {product.inStock
                            ? "In Stock"
                            : "Out of Stock"}
                    </span>
                </div>

                <div className="details-price">
                    ₹{product.price}
                </div>

                <p className="details-description">
                    {product.description}
                </p>

                <div className="details-info">
                    <p>
                        <strong>Product ID:</strong>{" "}
                        {product._id}
                    </p>

                    <p>
                        <strong>Created:</strong>{" "}
                        {new Date(
                            product.createdAt
                        ).toLocaleString()}
                    </p>

                    <p>
                        <strong>Last Updated:</strong>{" "}
                        {new Date(
                            product.updatedAt
                        ).toLocaleString()}
                    </p>
                </div>

                <div className="details-actions">
                    <Link
                        to={`/products/${product._id}/edit`}
                        className="primary-btn"
                    >
                        Edit Product
                    </Link>

                    <Link
                        to="/products"
                        className="secondary-btn"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;