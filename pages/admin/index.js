// pages/admin/index.js
import { useState, useEffect } from "react";
// import { db } from "../../firebaseConfig"; // Import Firestore configuration
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { db } from '../../lib/firebaseConfig';


const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    stock: 0,
  });

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "products"), newProduct);
      setNewProduct({
        name: "",
        price: 0,
        description: "",
        image: "",
        stock: 0,
      });
      alert("Product added successfully.");
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Error adding product.");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter((product) => product.id !== id));
      alert("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product: ", error);
      alert("Error deleting product.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>

      {/* Add Product Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Add New Product</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="border p-2 w-full mb-2"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          placeholder="Stock Quantity"
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="border-b py-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="text-red-500"
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>

      {/* Link to the main store */}
      <Link href="/shop">
        <span className="mt-6 text-blue-500 hover:underline">Back to Store</span>
      </Link>
    </div>
  );
};

export default AdminPanel;
