function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({
        left: direction * 400,
        behavior: "smooth"
    });
}