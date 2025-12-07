// hamburger menu展開
const hamburgerMenu = document.querySelector(".l-header-hamburger-menu");
const headerNav = document.querySelector(".l-header-nav");
const navItems = document.querySelectorAll("l-header-nav-item");
const menuOverlay = document.querySelector(".l-header-bgpannel");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("is-active");
  headerNav.classList.toggle("is-active");
  menuOverlay.classList.toggle("is-active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerMenu.classList.remove("is-active");
    headerNav.classList.remove("is-active");
    menuOverlay.classList.remove("is-active");
  });
});

// 筋肉セクション
const muscleSection = document.querySelector(".top-muscle");
const muscleTitle = document.querySelector(".top-muscle-title");
const muscleDesc = document.querySelector(".top-muscle-desc");
const showMuscleTitle = () => {
  muscleTitle.animate(
    {
      opacity: [0, 1],
      transform: ["translateY(60px)", "translateY(0)"],
    },
    {
      duration: 2000,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
};
const showMuscleDesc = () => {
  muscleDesc.animate(
    {
      opacity: [0, 1],
      transform: ["translateY(60px)", "translateY(0)"],
    },
    {
      duration: 2000,
      fill: "forwards",
      easing: "ease-in-out",
      delay: 500,
    }
  );
};
const muscleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showMuscleTitle();
        showMuscleDesc();
        muscleObserver.unobserve(muscleSection);
      }
    });
  },
  { threshold: 0.5 }
);

muscleObserver.observe(muscleSection);

// headerの消去
const headerLogo = document.querySelector(".l-header-logo");
const muscleContainer = document.querySelector(".top-muscle-container");
const footerArea = document.querySelector(".l-footer");
const fadeOutHeaderLogo = () => {
  headerLogo.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
}
const showHeaderLogo = () => {
  headerLogo.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 1000,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
}

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeOutHeaderLogo();
        headerObserver.unobserve(headerLogo);
      } else {
        showHeaderLogo();
      }
    });
  }
);

headerObserver.observe(muscleContainer);
headerObserver.observe(footerArea);