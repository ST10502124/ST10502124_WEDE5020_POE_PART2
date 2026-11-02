document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current.
  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  // Accessible mobile navigation.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !isOpen);
    });
  }

  // Expandable FAQ answers.
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.nextElementSibling;
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
      const symbol = trigger.querySelector("span");
      if (symbol) symbol.textContent = expanded ? "＋" : "−";
    });
  });

  // Product search and category filtering.
  const search = document.querySelector("#product-search");
  const category = document.querySelector("#category-filter");
  const cards = [...document.querySelectorAll(".product-card")];
  const count = document.querySelector("#product-count");
  const empty = document.querySelector("#no-products");
  const filterProducts = () => {
    if (!cards.length) return;
    const term = (search?.value || "").trim().toLowerCase();
    const selected = category?.value || "all";
    let visible = 0;
    cards.forEach((card) => {
      const matchesText = (card.dataset.name || card.textContent).toLowerCase().includes(term);
      const matchesCategory = selected === "all" || card.dataset.category === selected;
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (count) count.textContent = `Showing ${visible} of ${cards.length} products`;
    if (empty) empty.hidden = visible !== 0;
  };
  search?.addEventListener("input", filterProducts);
  category?.addEventListener("change", filterProducts);

  // Pre-fill the enquiry product when a product link is selected.
  const requestedItem = new URLSearchParams(window.location.search).get("item");
  const productField = document.querySelector("#enq-product");
  if (requestedItem && productField) productField.value = requestedItem;

  // Client-side validation only. A real receiving endpoint must be configured
  // before these forms can deliver messages to the business.
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (!form.reportValidity()) {
        if (status) status.textContent = "Please check the required fields and try again.";
        return;
      }
      if (status) {
        status.textContent = "Your details passed the form checks. This demo is not connected to email yet, so your message has not been sent.";
      }
      form.reset();
    });
  });
});