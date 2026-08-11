import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/api";

function CreateProduct() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        inStock: true,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
            setLoading(true);
            setError("");

            await createProduct({
                ...formData,
                price: Number(formData.price),
            });

            navigate("/products");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page">
            <div className="form-container">
                <h1>Add New Product</h1>
                <p>Create a new product using the REST API.</p>

                {error && (
                    <div className="error">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <label>
                        Product Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                    />

                    <label>
                        Price
                    </label>

                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        min="0"
                        required
                    />

                    <label>
                        Category
                    </label>

                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Enter category"
                        required
                    />

                    <label>
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
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
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create Product"}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default CreateProduct;