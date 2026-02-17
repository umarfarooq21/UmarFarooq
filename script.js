function toggleTheme() {
  document.body.classList.toggle("dark");
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -120px 0px"
  }
);

document
  .querySelectorAll(".slide-up")
  .forEach(el => observer.observe(el));
