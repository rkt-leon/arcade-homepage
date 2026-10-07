document.addEventListener("DOMContentLoaded", () => {
  // Branch filter functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const branchCards = document.querySelectorAll(".branch-card");

  // Initialize: show all branches
  updateBranchDisplay("all");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter branches
      const region = btn.dataset.region;
      updateBranchDisplay(region);
    });
  });

  function updateBranchDisplay(region) {
    branchCards.forEach((card) => {
      if (region === "all" || card.dataset.region === region) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

  // Pricing tabs functionality
  const tabBtns = document.querySelectorAll(".tab-btn");
  const pricingGrids = document.querySelectorAll(".pricing-grid");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active tab
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show/hide pricing grids
      const type = btn.dataset.type;
      pricingGrids.forEach((grid) => {
        if (grid.classList.contains(type)) {
          grid.classList.add("active");
        } else {
          grid.classList.remove("active");
        }
      });
    });
  });

  // Smooth scroll for menu links
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      if (target && target !== "#") {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  console.log("NEON ARCADE NETWORK loaded");
});
