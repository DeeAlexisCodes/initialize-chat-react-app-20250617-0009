import React, { useState, useEffect } from 'react';
import AppHeader from '../components/productDashboard/AppHeader';
import EmptyState from '../components/productDashboard/EmptyState';
import ProductGrid from '../components/productDashboard/ProductGrid';
import CreateNewProductCard from '../components/productDashboard/CreateNewProductCard';
import ProductCard from '../components/productDashboard/ProductCard';
import ProductIcon from '../components/productDashboard/ProductIcon';
import StatusBadge from '../components/productDashboard/StatusBadge';
import CircularProgressBar from '../components/productDashboard/CircularProgressBar';
import CardActionButtons from '../components/productDashboard/CardActionButtons';
import * as api from '../logic/productDashboard/productDashboardLogic';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [hasProductsLoaded, setHasProductsLoaded] = useState(false);
  const [isProductCreationModalOpen, setIsProductCreationModalOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        const data = await api.getProducts(); // Assuming getProducts is in productDashboardLogic
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setHasProductsLoaded(true);
      }
    };

    fetchProducts();
  }, []);

  const handleCreateNewProduct = () => {
    setIsProductCreationModalOpen(true);
    // In a real app, this would trigger opening a modal or navigating
    console.log("Create new product initiated.");
  };

  const handleOpenProduct = (productId) => {
    // Navigate to product detail page or open product view
    console.log(`Opening product: ${productId}`);
  };

  const handleNewVersion = (productId) => {
    // Initiate creation of a new version for the product
    console.log(`Creating new version for product: ${productId}`);
  };

  // Placeholder for a potential modal close
  const handleCloseProductCreationModal = () => {
    setIsProductCreationModalOpen(false);
  };

  if (error) {
    return (
      <div className="product-dashboard-container">
        <AppHeader />
        <div className="error-message" style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="product-dashboard-container">
      <AppHeader />
      <main className="product-dashboard-main-content" style={{ padding: '20px' }}>
        {!hasProductsLoaded ? (
          <div className="loading-state" style={{ textAlign: 'center', marginTop: '50px' }}>
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <EmptyState onCreateNewProduct={handleCreateNewProduct} />
        ) : (
          <ProductGrid
            products={products}
            onCreateNewProduct={handleCreateNewProduct}
            onOpenProduct={handleOpenProduct}
            onNewVersion={handleNewVersion}
          />
        )}

        {/* This would be where a modal component would be rendered */}
        {isProductCreationModalOpen && (
          <div className="product-creation-modal-placeholder" style={{
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h2>Create New Product Modal</h2>
              <p>Form to create a new product would go here.</p>
              <button onClick={handleCloseProductCreationModal}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDashboard;