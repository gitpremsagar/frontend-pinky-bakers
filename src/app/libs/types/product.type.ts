type Product = {
  productId: string;
  categoryId: string;
  subCategoryId: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export default Product;
