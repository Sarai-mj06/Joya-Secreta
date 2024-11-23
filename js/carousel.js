document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-wrapper');
    
    carousels.forEach(carouselWrapper => {
      setInterval(() => {
        const scrollLeft = carouselWrapper.scrollLeft;
        const scrollWidth = carouselWrapper.scrollWidth;
        const clientWidth = carouselWrapper.clientWidth;
        
        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselWrapper.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          carouselWrapper.scrollTo({
            left: carouselWrapper.scrollLeft + 100,
            behavior: 'smooth'
          });
        }
      }, 3000);
  
      const domProducts = carouselWrapper.querySelectorAll(".carousel-item");
      domProducts.forEach(product => {
        const button = product.querySelector("button");
        button.addEventListener("click", () => {
          selectProduct(product.innerHTML);
        });
      });
    });
  });
  
  function selectProduct(product) {
    const products = JSON.parse(localStorage.getItem("PRODUCTS")) || [];
    products.push(product);
    localStorage.setItem("PRODUCTS", JSON.stringify(products));
  }  