const photos_gallery = [
  "img_1.jpg",
  "img_2.jpg",
  "img_3.jpg",
  "img_4.jpg",
  "img_5.jpg",
  "img_6.jpg",
  "img_7.jpg",
  "img_8.jpg",
  "img_9.jpg",
];
const photo_gallery = document.querySelector(".photo_gallery_wrapper");
const photos = () => {
  photos_gallery.forEach((photo) => {
    const html = `
            <div class="swiper-slide item">
              <img src="assets/img/photo_gallery/${photo}" alt="Gallery" loading="lazy">
            </div>
            `;

    photo_gallery.insertAdjacentHTML("beforeend", html);
  });
  new Swiper(".photo_gallery", {
    rewind: true,
    autoplay: true,
    pagination: {
      el: ".swiperfraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
photos();
