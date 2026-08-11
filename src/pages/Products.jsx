import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { getProducts, deleteProduct } from "../services/api";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadProducts = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getProducts();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) return;

        try {
            await deleteProduct(id);

            setProducts((currentProducts) =>
                currentProducts.filter((product) => product._id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Products</h1>
                    <p>Manage products through the REST API.</p>
                </div>

                <Link to="/products/create" className="primary-btn">
                    + Add Product
                </Link>
            </div>

            {error && (
                <div className="error">
                    {error}
                </div>
            )}

            {products.length === 0 ? (
                <div className="empty">
                    <h2>No products found</h2>
                    <p>Create your first product.</p>
                </div>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;