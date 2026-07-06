'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// ============================================================
// CONTACT FORM — async submit to backend API
// ============================================================

// ⬇ Change this to your deployed backend URL when hosting online
// e.g. "https://your-backend.onrender.com/api/contact"
const BACKEND_URL = "http://localhost:3001/api/contact";

// Toast notification helper
function showToast(message, type) {
  // Remove existing toast if any
  const existing = document.querySelector(".contact-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "contact-toast contact-toast--" + type;
  toast.innerHTML = `
    <span class="contact-toast__icon">${type === "success" ? "✅" : "❌"}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  });

  // Remove after 5s
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

// Handle form submit
if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Button loading state
    formBtn.setAttribute("disabled", "");
    formBtn.innerHTML = `<ion-icon name="reload-outline" style="animation:spin 0.8s linear infinite"></ion-icon> <span>Sending…</span>`;

    // Collect form data
    const data = {
      fullname: form.querySelector("[name='fullname']")?.value || form.querySelector("input[type='text']")?.value || "",
      email:    form.querySelector("[name='email']")?.value    || form.querySelector("input[type='email']")?.value || "",
      message:  form.querySelector("[name='message']")?.value  || form.querySelector("textarea")?.value || "",
    };

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        showToast(result.message || "Message sent! I'll reply within 24 hours.", "success");
        form.reset();
        // Disable button again after reset
        formBtn.setAttribute("disabled", "");
        formBtn.innerHTML = `<ion-icon name="paper-plane"></ion-icon> <span>Message Sent!</span>`;
        setTimeout(() => {
          formBtn.innerHTML = `<ion-icon name="paper-plane"></ion-icon> <span>Send Message</span>`;
        }, 3000);
      } else {
        showToast(result.message || "Something went wrong. Please try again.", "error");
        formBtn.removeAttribute("disabled");
        formBtn.innerHTML = `<ion-icon name="paper-plane"></ion-icon> <span>Send Message</span>`;
      }
    } catch (err) {
      console.error("Form submit error:", err);
      showToast("Network error. Please email me directly at harrshjain25@gmail.com", "error");
      formBtn.removeAttribute("disabled");
      formBtn.innerHTML = `<ion-icon name="paper-plane"></ion-icon> <span>Send Message</span>`;
    }
  });
}
