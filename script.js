// fix lỗi tự scroll lúc refresh

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
let lastScrollY = 0;
// ẩn hiện navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  // Kiểm tra vị trí cuộn
  if (window.scrollY > lastScrollY) {
    //  cuộn xuống -> Ẩn navbar
    navbar.classList.add("hidden");
  } else {
    //  cuộn lên -> Hiện navbar
    navbar.classList.remove("hidden");
  }
  // Cập nhật vị trí cuộn
  lastScrollY = window.scrollY;
});
