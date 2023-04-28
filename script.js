// CAROUSEL - DESKTOP VERSION

const rightButton = document.querySelector(".recommended__button-right");

const leftButton = document.querySelector(".recommended__button-left");

const allCards = document.querySelectorAll(".recommended__carousel-card");

let currentSlide = 1;

const leftButtonAction = () => {
  if (currentSlide === 1) {
    return;
  } else {
    allCards.forEach((card, index) => {
      if (index === currentSlide - 2) {
        card.style.transform = "translateX(0%)";
        return card.classList.toggle("hidden");
      }

      if (index === currentSlide + 1) {
        card.classList.toggle("hidden");
        card.style.transform = `translateX(0%)`;
      }
    });
  }
  currentSlide--;
};

const rightButtonAction = () => {
  if (currentSlide === 4) {
    return;
  } else {
    allCards.forEach((card, index) => {
      if (index === currentSlide - 1) {
        card.style.transform = "translateX(-100%)";
        card.classList.toggle("hidden");
      }

      if (index === currentSlide + 2) {
        card.classList.toggle("hidden");
      }
    });
  }
  currentSlide++;
};

rightButton.addEventListener("click", rightButtonAction);
leftButton.addEventListener("click", leftButtonAction);

// CAROUSEL MOBILE VERSION

let mobileCurrentSlide = 1;

const allCardsMobile = document.querySelectorAll(
  ".recommended__carousel-card-mobile"
);

const buttonLeftMobile = document.querySelector(
  ".recommended__button-left-mobile"
);

const buttonRightMobile = document.querySelector(
  ".recommended__button-right-mobile"
);

const buttonRightMobileAction = () => {
  if (mobileCurrentSlide < 2) {
    mobileCurrentSlide++;
  } else {
    return (mobileCurrentSlide = 2);
  }

  allCardsMobile.forEach((card, index) => {
    if (index === mobileCurrentSlide) {
      return card.classList.toggle("hidden");
    }

    if (index === mobileCurrentSlide - 1) {
      return card.classList.toggle("hidden");
    }
  });
};

const buttonLeftMobileAction = () => {
  if (mobileCurrentSlide > 0) {
    mobileCurrentSlide--;
  } else {
    return (mobileCurrentSlide = 0);
  }

  allCardsMobile.forEach((card, index) => {
    if (index === mobileCurrentSlide) {
      return card.classList.toggle("hidden");
    }

    if (index === mobileCurrentSlide + 1) {
      card.style.transform = "translateX(0%)";
      return card.classList.toggle("hidden");
    }
  });
};

buttonLeftMobile.addEventListener(`click`, buttonLeftMobileAction);
buttonRightMobile.addEventListener("click", buttonRightMobileAction);

// MOBILE NAVIGATION MENU

const mobileNavButton = document.querySelector(".header__links-mobile-icon");

const mobileNavMenu = document.querySelector(".header__navigation-mobile");

const mobileNavLinks = document.querySelectorAll(".header__navigation-links");

let menuOpen = false;

mobileNavButton.addEventListener("click", function (e) {
  if (!menuOpen) {
    mobileNavMenu.style.transform = "translateX(0%)";
    document.documentElement.style.overflowY = "hidden";
    return (menuOpen = !menuOpen);
  }

  if (menuOpen) {
    mobileNavMenu.style.transform = "translateX(100%)";
    document.documentElement.style.overflowY = "auto";
    return (menuOpen = !menuOpen);
  }
});

mobileNavLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    mobileNavMenu.style.transform = "translateX(100%)";
    document.documentElement.style.overflowY = "auto";
    return (menuOpen = !menuOpen);
  })
);
