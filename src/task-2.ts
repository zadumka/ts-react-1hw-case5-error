const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

interface Product {
  id: number;
  title: string;
  description?: string;
}

console.log(`Product: ${JSON.stringify(product)}`);
