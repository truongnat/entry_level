const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

(function () {
  const app = document.getElementById("app");
  const slides = document.createElement("div");
  const arrowLeft = document.createElement("div");
  const arrowRight = document.createElement("div");
  let indexed = 0;

  function createdArrow() {
    arrowLeft.className = "slider-arrow left";
    arrowRight.className = "slider-arrow right";
    arrowLeft.appendChild(document.createElement("div"));
    arrowRight.appendChild(document.createElement("div"));

    arrowLeft.onclick = prevImage;
    arrowRight.onclick = nextImage;

    slides.appendChild(arrowLeft);
    slides.appendChild(arrowRight);
  }
  function nextImage() {
    ++indexed;
    if (indexed > products.length - 1) {
      indexed = 0;
    }
    picImage(indexed, "slide-out");
  }
  function prevImage() {
    --indexed;
    if (indexed < 0) {
      indexed = products.length - 1;
    }
    picImage(indexed, "slide-in");
  }
  function createInstanceImage() {
    const imgTag = new Image();
    imgTag.alt = products[indexed].imageAlt;
    imgTag.src = products[indexed].imageSrc;
    imgTag.className = "slider-img slide-out";
    return imgTag;
  }

  function picImage(index, classes) {
    const imgTag = document.querySelector(".slider-img");
    imgTag.className = "slider-img slider-hidden";
    imgTag.alt = products[index].imageAlt;
    imgTag.src = products[index].imageSrc;
    setTimeout(() => {
      imgTag.className = "slider-img " + classes;
    }, 300);
  }

  function onInit() {
    slides.className = "slider";
    app.appendChild(slides);
    slides.appendChild(createInstanceImage());
    createdArrow();
  }
  onInit();
})();
