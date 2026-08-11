import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/api";
import Loading from "../components/Loading";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        inStock: true,
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const product = await getProduct(id);

                setFormData({
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    description: product.description,
                    inStock: product.inStock,
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);
            setError("");

            await updateProduct(id, {
                ...formData,
                price: Number(formData.price),
            });

            navigate(`/products/${id}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="page">
            <div className="form-container">
                <h1>Edit Product</h1>
                <p>Update product information.</p>

                {error && (
                    <div className="error">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <label>Product Name</label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Price</label>

                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min="0"
                        required
                    />

                    <label>Category</label>

                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />

                    <label>Description</label>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                    />

                    <label className="checkbox">
                        <input
                            type="checkbox"
                            name="inStock"
                            checked={formData.inStock}
                            onChange={handleChange}
                        />

                        Product is in stock
                    </label>

                    <button
                        type="submit"
                        className="primary-btn"
                        disabled={saving}
                    >
                        {saving
                            ? "Updating..."
                            : "Update Product"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;