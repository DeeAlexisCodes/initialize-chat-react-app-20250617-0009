import React from 'react';

const ProductGrid = ({ products, onCreateNewProduct, onOpenProduct, onNewVersion }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Create New Product Card */}
      <button
        className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg hover:bg-gray-50 transition-all duration-200 flex flex-col items-center justify-center h-full"
        onClick={onCreateNewProduct}
      >
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Create New Product</h3>
        <p className="text-gray-600">Start a new AI product scoping session</p>
      </button>

      {/* Dynamic cards will be inserted here */}
      {products && products.map(product => (
        // This is a placeholder for the ProductCard component.
        // In a real application, you would import and use the ProductCard component here.
        <div key={product.id} className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center justify-between h-full">
            <div className="flex-grow flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name || 'Unnamed Product'}</h3>
                <p className="text-sm text-gray-600">{product.description || 'No description available.'}</p>
            </div>
            <div className="mt-4 flex space-x-2">
                <button
                    onClick={() => onOpenProduct(product.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 text-sm"
                >
                    Open
                </button>
                <button
                    onClick={() => onNewVersion(product.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 text-sm"
                >
                    New Version
                </button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;