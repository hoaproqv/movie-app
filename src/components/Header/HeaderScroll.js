import { useEffect } from "react";

export function HeaderScroll() {
  useEffect(() => {
    const header = document.querySelector(".container");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 120 && header) {
        header.classList.add("container--scroll");
      } else {
        header.classList.remove("container--scroll");
      }
    });
  });
}
