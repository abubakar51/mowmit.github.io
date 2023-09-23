const photos_gallery = [
  "img_1",
  "img_2",
  "img_3",
  "img_4",
  "img_5",
  "img_6",
  "img_7",
  "img_8",
  "img_9",
  "image_1",
  "image_2",
  "image_3",
  "image_4",
];
const photo_gallery = document.querySelector(".photo_gallery_wrapper");
const photos = () => {
  photos_gallery.forEach((photo) => {
    const html = `
            <div class="swiper-slide item">
              <img src="assets/img/photo_gallery/${photo}.webp" alt="Gallery" loading="lazy">
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
