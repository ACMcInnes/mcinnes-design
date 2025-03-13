document.querySelectorAll(".mobile-menu-toggle")?.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    document.querySelector(".mobile-menu")?.classList.toggle("hidden");
  });
});
