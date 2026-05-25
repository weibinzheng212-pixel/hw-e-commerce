import React from 'react';

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const activeCategories: Category[] = [
  { id: 'cat-1', name: 'Apparel', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500' },
  { id: 'cat-2', name: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500' },
  { id: 'cat-3', name: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500' },
  { id: 'cat-4', name: 'Tech & Gadgets', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500' },
];

export const CategoryCards = () => {
  const handleCategorySelect = (categoryName: string) => {
    console.log(`Filtering catalogue by: ${categoryName}`);
  };

  return (
    <section>
      <h2>
        Shop Collections
      </h2>
      
      <div>
        {activeCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.name)}
          >
            <img 
              src={category.image} 
              alt={category.name}
            />
            <div/>
            
            <div>
              <h3>
                {category.name}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};