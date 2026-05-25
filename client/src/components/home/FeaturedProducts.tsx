import React from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  label?: string;
}

const mockFeaturedItems: Product[] = [
  {
    id: "prod-1",
    name: "Leather Chronograph Watch",
    price: 189.0,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=500",
    label: "Trending",
  },
  {
    id: "prod-2",
    name: "Commuter Tech Backpack",
    price: 95.0,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500",
  },
  {
    id: "prod-3",
    name: "ANC Over-Ear Headphones",
    price: 299.0,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=500",
    label: "New",
  },
  {
    id: "prod-4",
    name: "Anodized Desk Organizer Trio",
    price: 48.0,
    image:
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=500",
  },
];

export const FeaturedProducts = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Featured Spotlights</h2>
          <span>View All items &rarr;</span>
        </div>

        <div>
          {mockFeaturedItems.map((product) => (
            <div key={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
                {product.label && <span>{product.label}</span>}
              </div>

              <div>
                <h3>
                  <span />
                  {product.name}
                </h3>
                <div>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => console.log(`Quick add item: ${product.id}`)}
                  ></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
