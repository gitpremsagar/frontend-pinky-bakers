import { PRODUCTS_ENDPOINT } from "../../libs/constants";

const fetchFlavoursWithCakes = async () => {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT);
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories with cakes", error);
  }
};

const CakesPage = () => {
  return (
    <div>
      <h1>Cakes</h1>
    </div>
  );
};

export default CakesPage;
