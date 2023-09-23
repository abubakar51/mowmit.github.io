const friends_data = [
  {
    name: "Muhammad Abu Bakar",
    pic: "Sagar",
    address: {
      village: "Hotapara",
      district: "Gazipur Sadar",
      city: "Gazipur",
    },
    social: {
      facebook: "https://facebook.com/muhammad.abubakar.salafi/",
      whatsapp: "01772661151",
    },
  },
  {
    name: "Sujon Sheikh",
    pic: "sujon",
    address: {
      village: "Satir Bazar",
      district: "Srepur",
      city: "Gazipur",
    },
    social: {
      facebook: "https://facebook.com/muhammad.abubakar.salafi/",
      whatsapp: "01772661151",
    },
  },
  {
    name: "Atiqul Islam",
    pic: "atiqul",
    address: {
      village: "Satir Bazar",
      district: "Srepur",
      city: "Gazipur",
    },
    social: {
      facebook: "https://facebook.com/muhammad.abubakar.salafi/",
      whatsapp: "01772661151",
    },
  },
  {
    name: "Shorif Khan",
    pic: "shorif",
    address: {
      village: "Saitalia",
      district: "Srepur",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/sdking.shorifkhan",
      whatsapp: "01772661151",
    },
  },
  {
    name: "Md Jony Khan",
    pic: "jony",
    address: {
      village: "Dhunua",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100064866978092/",
      whatsapp: "01988126552",
    },
  },

  {
    name: "Rakibul Islam",
    pic: "rakib",
    address: {
      village: "Satirbazar ",
      district: "sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100038075990969/",
      whatsapp: "01818951563",
    },
  },

  {
    name: "Farabi NafianSunvi ",
    pic: "farabi",
    address: {
      village: "Satirbazar ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/farabinafian.sunvi/",
      whatsapp: "01719955767",
    },
  },

  {
    name: "Md Tanzid ",
    pic: "tanzid",
    address: {
      village: "Satirbazar ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/rk.tanzid.3/",
      whatsapp: "01631549103",
    },
  },

  {
    name: "Md Naiyeem Islam",
    pic: "nayeam",
    address: {
      village: "Satirbazar ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/md.naiyeemkhan.5/",
      whatsapp: "+8801831254525",
    },
  },

  {
    name: "Emran Khan",
    pic: "emran",
    address: {
      village: "Satirbazar ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/ekemran.khan.758/",
      whatsapp: "01779487811",
    },
  },

  {
    name: "Mehadi Hasan Dipu",
    pic: "dipu",
    address: {
      village: "Satirbazar ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/mehedi.hasandipo.904/",
      whatsapp: "01322676610",
    },
  },

  {
    name: "Khan Hemal",
    pic: "himel",
    address: {
      village: "Shaitalia ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/khan.hemal.3726/",
      whatsapp: "01627588486",
    },
  },

  {
    name: "Khan Shakib",
    pic: "shakib",
    address: {
      village: "Shaitalia ",
      district: "sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100034688721306/",
      whatsapp: "01842630480",
    },
  },

  {
    name: "Neeam khan",
    pic: "nayeem",
    address: {
      village: "Satirbazar ",
      district: "sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100041370104615/",
      whatsapp: "01605707152",
    },
  },

  {
    name: "Anonto Sheikh Nahid ",
    pic: "nahid",
    address: {
      village: "Satirbazar ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100083331845389/",
      whatsapp: "01755853166",
    },
  },

  {
    name: "Md Kurshed Sheikh ",
    pic: "khorshed",
    address: {
      village: "Goder chala ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100037557126081/",
      whatsapp: "01814431364",
    },
  },
  {
    name: "Md Nihad Mirdha ",
    pic: "nihad",
    address: {
      village: "Shaitalia ",
      district: "Sreepur ",
      city: "Gazipur",
    },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100093172505254/",
      whatsapp: "01876423525",
    },
  },
];

const friends = () => {
  friends_data.forEach((friend) => {
    const html = `
                <div class="friend swiper-slide">
                <div class="img">
                <img src="assets/img/friends/${friend.pic}.webp" alt="Friend">
                </div>
                  <div class="f_details">
                  <h2 class="f_name">${friend.name}</h2>
                  <p class="paragraph">
                    ${friend.address.village}, ${friend.address.district} <br> ${friend.address.city}
                  </p>
                  <div class="social_links f_social">
                  <a href="${friend.social.facebook}" target="_blank" area-label="Social"><i class="fa-brands fa-facebook" style="--hover_bg: #0E93F3"></i></a>
                  <a href="https://wa.me/${friend.social.whatsapp}" target="_blank" area-label="Social"><i class="fa-brands fa-whatsapp" style="--hover_bg: #4ECA5C"></i></a>
                  </div>
                  </div>
                </div>
            `;
    const friends_wrapper = document.querySelector("#friends_wrapper");
    friends_wrapper.insertAdjacentHTML("beforeend", html);
  });
  new Swiper(".friends_section", {
    slidesPerView: 4,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    rewind: true,
  });
};
friends();
