export type ID = string | number;
export type Category = {
  id: ID;
  name: string;
};
export type Product = {
  id: ID;
  name: string;
  stock: number;
  price: number;
  category: Category;
};
