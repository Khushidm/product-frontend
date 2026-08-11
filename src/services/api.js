VITE_API_URL=http://localhost:5000/api/products

export const getProducts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const result = await response.json();
    return result.data;
};

export const getProduct = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    const result = await response.json();
    return result.data;
};

export const createProduct = async (product) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create product");
    }

    const result = await response.json();
    return result.data;
};

export const updateProduct = async (id, product) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update product");
    }

    const result = await response.json();
    return result.data;
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete product");
    }

    return response.json();
};
