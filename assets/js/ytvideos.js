const channel_details = {
  link: "https://www.youtube.com/channel/UC9hXcblP0L9aNndC1x3dmLQ",
  logo: "assets/img/channel_logo.jpg",
};
const ytvideo = [
  {
    link: "https://youtube.com",
    title: "মানুষের আত্বসম্মান অনেক বড়",
    thumbnail: "thumb1.JPG",
  },
  {
    link: "https://youtube.com",
    title: "মানুষের আত্বসম্মান অনেক বড় পার্ট ২",
    thumbnail: "thumb2.PNG",
  },
  {
    link: "https://youtube.com",
    title: "মিলাতে পারলেই ১ হাজার টাকা পুরুষ্কার",
    thumbnail: "thumb3.PNG",
  },
];
const channel = () => {
  const channel_logo = document.querySelector("#channel_logo");
  const channel_link = document.querySelector("#channel_link");
  channel_logo.src = channel_details.logo;
  channel_link.href = `${channel_details.link}?sub_confirmation=1`;
};
channel();
ytvideo.forEach((video) => {
  const html = `
      <div class="video">
        <img src="assets/img/thumbs/${video.thumbnail}" alt="" class="thumbnail">
        <div class="video_overlay">
          <p class="paragraph">${video.title}</p>
          <a href="${video.link}" class="btn">Play</a>
        </div>
      </div>
      `;
  const ytvideo = document.querySelector(".videos");
  ytvideo.insertAdjacentHTML("beforeend", html);
});
