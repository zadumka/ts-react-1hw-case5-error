const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

type Product = {
  readonly id: number;
  title: string;
  description?: string;
};

console.log(`Product: ${JSON.stringify(product)}`);


