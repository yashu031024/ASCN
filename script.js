const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

function addToCart(name) {
  const toast = document.getElementById("toast");
  toast.textContent = `${name} added to your enquiry list 🌱`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const status = document.getElementById("form-status");
  status.textContent = `Thank you, ${name}! Your message has been received.`;
  event.target.reset();
}
