import { PRODUCTS_ENDPOINT } from "@/app/libs/constants";
import Product from "@/app/libs/types/product.type";

const fetchCakes = async () => {
  const response = await fetch(PRODUCTS_ENDPOINT);
  return await response.json();
};

const CakesCarousel = async () => {
  const cakes = await fetchCakes();
  return (
    <Carousel>
      {cakes.map((cake: Product) => (
        <CarouselItem key={cake.productId}>
          <img
            src={cake.imageUrl}
            className="d-block w-100"
            alt={cake.productName}
          />
          <CarouselCaption
            title={cake.productName}
            description={cake.description}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default CakesCarousel;

const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">{children}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="carousel-item">{children}</div>;
};

const CarouselCaption = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="carousel-caption d-none d-md-block">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
