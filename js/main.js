// Служебные переменные
const d = document;
const body = d.querySelector("body");

// Служебные функции

function find(selector) {
  return document.querySelector(selector);
}

function findAll(selectors) {
  return document.querySelectorAll(selectors);
}

// Удаляет у всех элементов items класс itemClass
function removeAll(items, itemClass) {
  if (typeof items == "string") {
    items = document.querySelectorAll(items);
  }
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.classList.remove(itemClass);
  }
}

// Получаем все соседние элементы
function getSiblings(elem) {
  var siblings = [];
  var sibling = elem;
  while (sibling.previousSibling) {
    sibling = sibling.previousSibling;
    sibling.nodeType == 1 && siblings.push(sibling);
  }

  sibling = elem;
  while (sibling.nextSibling) {
    sibling = sibling.nextSibling;
    sibling.nodeType == 1 && siblings.push(sibling);
  }

  return siblings;
}

function bodyLock(con) {
  if (con === true) {
    body.classList.add("_lock");
  } else if (con === false) {
    body.classList.remove("_lock");
  } else if (con === undefined) {
    if (!body.classList.contains("_lock")) {
      body.classList.add("_lock");
    } else {
      body.classList.remove("_lock");
    }
  } else {
    console.error("Неопределенный аргумент у функции bodyLock()");
  }
}

// Отступ главного экрана на главной странице
paddingTopMainSection();

function paddingTopMainSection() {
  const main = find(".main_top__wrapper") || find(".wrapper");
  const header = find(".header");

  main.style.paddingTop = header.scrollHeight + "px";
}

// Интро
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let intro;
let introBG;

if (windowWidth > 767) {
  intro = find(".intro__media--pc");
  introBG = find(".intro__img--pc");
  intro ? intro.setAttribute("src", intro.dataset.src) : "";
} else if (windowWidth <= 767) {
  if (windowWidth > windowHeight) {
    intro = find(".intro__media--h");
    introBG = find(".intro__img--h");
    intro ? intro.setAttribute("src", intro.dataset.src) : "";
  } else {
    intro = find(".intro__media--v");
    introBG = find(".intro__img--v");
    intro ? intro.setAttribute("src", intro.dataset.src) : "";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (intro) {
    introBG.classList.add("active");
    let src = introBG.getAttribute("data-src-end");
    intro.addEventListener("canplaythrough", function (e) {
      intro
        .play()
        .then(function () {
          intro.play();
        })
        .catch(function (err) {
          intro.remove();
          introBG.setAttribute("src", src);
          console.log("Ошибка воспроизведения видео");
        });

      // intro.play().catch((err) => {
      //     intro.remove();
      //     introBG.setAttribute('src', src);
      // });
      intro.classList.add("active");
    });

    // intro.addEventListener('emptied', function(e) {
    //     intro.remove();
    //     introBG.setAttribute('src', src);
    // });

    // intro.play().then(function() {
    //     console.log('play');
    // }).catch(function(err) {
    //     intro.remove();
    //     let src = introBG.getAttribute('data-src-end');
    //     introBG.setAttribute('src', src);
    //     console.log('Ошибка воспроизведения видео');
    // })

    // intro.classList.add('active');
    // introBG.classList.add('active')

    // intro.play()
    //     .catch(e => {
    //         intro.remove();
    //         let src = introBG.getAttribute('data-src-end');
    //         introBG.setAttribute('src', src);
    //         console.log('Ошибка воспроизведения видео');
    //     })
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".intro__media").forEach((i) => i.play());
});

if (customSelect) {
  customSelect("select");
  setTimeout(() => {
    const customSelects = document.querySelectorAll(".customSelect");
    customSelects.forEach((select) => {
      const options = select.querySelectorAll(".custom-select-option");
      const panel = select.querySelector(".custom-select-panel");
      const dropdownInner = document.createElement("div");
      dropdownInner.classList.add("b_dropdown__inner");
      panel.append(dropdownInner);
      options.forEach((option) => {
        dropdownInner.append(option);
      });
    });
  }, 900);
}

// Валидация формы
function validationForm() {
  const name = find("#user_name");
  const phone = find("#user_phone");
  const email = find("#user_email");

  let con = true;

  for (let i = 0; i < [name, phone, email].length; i++) {
    const elem = [name, phone, email][i];
    const elemValue = elem.value.trim();

    if (elemValue === "") {
      elem.classList.add("_error");
      con = false;
    } else {
      elem.classList.remove("_error");
      con = true;
    }
  }

  return con;
}

// Отправка формы
// submitForm()
function submitForm() {
  const form = find(".modal__form");

  form.addEventListener("submit", async (e) => {
    const modal = find(".modal._show");
    const btnSend = form.querySelector("[type=submit]");
    btnSend.classList.add("send-preloader");

    e.preventDefault();

    let con = validationForm();

    if (con === true) {
      const formData = new FormData();
      const action = form.getAttribute("action");

      let response = await fetch(action, {
        method: "POST",
        body: formData,
      });

      // settimeout здесь для того, чтобы показать работу отправки формы. В дальнейшем это нужно убрать
      setTimeout(() => {
        if (response.ok) {
          console.log("Successful");
          form.reset();

          modal.classList.remove("_show");
          find("#send-done").classList.add("_show");
          btnSend.classList.remove("send-preloader");
        } else {
          console.log("Error");
          form.reset();

          modal.classList.remove("_show");
          find("#send-error").classList.add("_show");
          btnSend.classList.remove("send-preloader");
        }
      }, 2000);
    }
  });
}

// Мобильное меню
menu();

function menu() {
  const burger = find(".burger");
  const menu = find(".menu");
  const header = find(".header");

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("burger_close");
    menu.classList.toggle("_show");
    menu.style.height = `calc(100vh - ${find(".header").offsetHeight}px)`;
    bodyLock();
    body.classList.toggle("_lock-menu");
  });

  window.addEventListener("click", (e) => {
    const target = e.target;

    if (
      find(".menu._show") &&
      !target.classList.contains("menu__wrap") &&
      !target.closest(".menu__wrap") &&
      !target.classList.contains("menu__header") &&
      !target.closest(".menu__header") &&
      !target.classList.contains("burger") &&
      !target.closest(".burger")
    ) {
      menu.classList.remove("_show");
      burger.classList.remove("burger_close");
      bodyLock(false);
      body.classList.remove("_lock-menu");
    }
  });
}

// Отправить заявку на прием врача
submitAppointment();

let isAppointmentListenerSet = false;
function submitAppointment() {
  document.addEventListener("click", function (e) {
    if (e.target.closest(".make_appointment")) {
      const form = e.target.closest(".make_appointment");
      const textfieldElems = form.querySelectorAll("input[required]");

      for (let i = 0; i < textfieldElems.length; i++) {
        const textfield = textfieldElems[i];
        const parent = textfield.parentElement;

        textfield.addEventListener("input", (e) => {
          parent.classList.remove("error");
        });
      }
    }
  });
}
document
  .querySelector(".make_appointment")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;

    if (validForm(form)) {
      const formData = new FormData(form);
      console.log(formData);
      const action = form.getAttribute("action");

      let response = await fetch(action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Заявка отправлена!");
      } else {
        alert("Ошибка с сервером! Заявка не отправлена!");
      }
    }
  });

// Отправить заявку на консультацию
submitConsultation();

function submitConsultation() {
  const form = document.getElementById("form_consultation");

  if (form) {
    const textfieldElems = form.querySelectorAll("input[required]");

    for (let i = 0; i < textfieldElems.length; i++) {
      const textfield = textfieldElems[i];
      const parent = textfield.parentElement;

      textfield.addEventListener("input", (e) => {
        parent.classList.remove("error");
      });
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (validForm(form)) {
        const formData = new FormData();
        const action = form.getAttribute("action");

        let response = await fetch(action, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Заявка отправлена!");
        } else {
          alert("Ошибка с сервером! Заявка не отправлена!");
        }
      }
    });
  }
}

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
      e.target.focus();
      const form = e.target.closest("form");
      validForm(form);
    };
  })(),
  true
);
function validForm(form) {
  const textfieldElems = form.querySelectorAll("input[required]");
  let con = true;
  for (let i = 0; i < textfieldElems.length; i++) {
    const textfield = textfieldElems[i];

    if (textfield.value.trim() === "") {
      showError(textfield, "Поле не должно быть пустым");
      con = false;
    } else {
      hideError(textfield);

      // Поле email
      if (textfield.name === "email") {
        if (!validateEmail(textfield.value)) {
          showError(textfield, "Введен некорректный email");
          con = false;
        }
      }

      // Телефон
      if (textfield.name === "phone") {
        if (textfield.value.replace("+", "").length != 11) {
          showError(
            textfield,
            "Телефонный номер должен состоять из 11-ти цифр"
          );
          con = false;
        } else {
          hideError(textfield);
        }
      }
    }
  }

  return con;
}

function validateEmail(email) {
  var pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}

function showError(textfield, textError) {
  const parent = textfield.parentElement;
  let error = parent.querySelector(".form-elem__error");

  if (!error) {
    error = document.createElement("p");

    error.classList.add("form-elem__error");
    parent.append(error);
  }

  parent.classList.add("error");
  error.innerHTML = textError;
}

function hideError(textfield) {
  const parent = textfield.parentElement;
  const error = parent.querySelector(".form-elem__error");

  if (error) {
    error.remove();
    parent.classList.remove("error");
  }
}

// В инпуте могут быть только цифры если у textfield есть класс only-digit
onlyDigit();

function onlyDigit() {
  const textfieldElems = document.querySelectorAll(".only-digit");

  for (let i = 0; i < textfieldElems.length; i++) {
    const input = textfieldElems[i].querySelector("input");

    input.addEventListener("keypress", function (e) {
      const inputValue = e.charCode;

      if (
        !(inputValue >= 48 && inputValue <= 57) &&
        inputValue != 43 &&
        inputValue != 0 &&
        inputValue != 40 &&
        inputValue != 41 &&
        inputValue != 45
      ) {
        e.preventDefault();
      }
    });
  }
}

// Функции для модальных окон
// Открытие модальных окон при клике по кнопке
openModalWhenClickingOnBtn();

function openModalWhenClickingOnBtn() {
  const btnsOpenModal = document.querySelectorAll("[data-modal-open]");

  for (let i = 0; i < btnsOpenModal.length; i++) {
    const btn = btnsOpenModal[i];

    btn.addEventListener("click", (e) => {
      const dataBtn = btn.dataset.modalOpen;
      const modal = document.querySelector(`#${dataBtn}`);

      if (find(".modal._show")) {
        closeModal();
      }
      openModal(modal);
      window.location.hash = dataBtn;
    });
  }
}

// Открытие модального окна, если в url указан его id
openModalHash();

function openModalHash() {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const modal = document.querySelector(`.modal#${hash}`);

    if (modal) openModal(modal);
  }
}

// Показываем/убираем модальное окно при изменения хеша в адресной строке
checkHash();

function checkHash() {
  window.addEventListener("hashchange", (e) => {
    const hash = window.location.hash;
    const modal = document.querySelector(`.modal${hash}`);

    if (find(".modal._show")) find(".modal._show").classList.remove("_show");
    if (modal && hash != "") openModal(modal);
  });
}

// Закрытие модального окна при клике по заднему фону
closeModalWhenClickingOnBg();

function closeModalWhenClickingOnBg() {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const modal = document.querySelector(".modal._show");

    if (
      modal &&
      !modal.classList.contains("modal-auth") &&
      target.classList.contains("modal__wrap")
    )
      closeModal();
  });
}

// Закрытие модальных окон при клике по крестику
closeModalWhenClickingOnCross();

function closeModalWhenClickingOnCross() {
  const modalElems = document.querySelectorAll(".modal");
  for (let i = 0; i < modalElems.length; i++) {
    const modal = modalElems[i];
    const closeThisModal = modal.querySelector(".modal__close");

    if (closeThisModal) {
      closeThisModal.addEventListener("click", () => {
        closeModal(modal);
      });
    }
  }
}

// Закрытие модальных окон при нажатии по клавише ESC
closeModalWhenClickingOnESC();

function closeModalWhenClickingOnESC() {
  const modalElems = document.querySelectorAll(".modal");
  for (let i = 0; i < modalElems.length; i++) {
    const modal = modalElems[i];

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal(modal);
    });
  }
}

// Сброс id модального окна в url
function resetHash() {
  const windowTop = window.pageYOffset;
  window.location.hash = "";
  window.scrollTo(0, windowTop);
}

// Открытие модального окна
function openModal(modal) {
  modal.classList.add("_show");
  bodyLock(true);
  console.log(modal, "Open");
}

// Закрытие модального окна
function closeModal(modal) {
  if (modal == undefined) {
    modal = find(".modal._show");

    if (!modal) return;
  }
  modal.classList.remove("_show");
  bodyLock(false);
  resetHash();
  console.log(modal, "Close");
}

// sticky header

// window.onload = function() {
//     var stickyHeader = d.querySelector('.sticky');
//     var headerOffset = 100;
//     let flage = false;

//     // if (find('.header_page_index')) {
//     //     find('.header_page_index').classList.remove('header_page_index')
//     //     stickyHeader.classList.add('header_main_all')
//     // }

//     window.onscroll = function() {
//         // body.scrollTop is deprecated and no longer available on Firefox
//         var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//         if (bodyScrollTop > 100) {
//             // stickyHeader.classList.add('fixed');
//             if (!flage) {
//                 stickyHeader.classList.add('fixed-animation');
//                 //!stickyHeader.classList.contains('header_index') ? stickyHeader.classList.add('animation') : '';

//                 setTimeout(() => {
//                     stickyHeader.classList.remove('fixed-animation')
//                     stickyHeader.classList.add('fixed');
//                     if (!stickyHeader.classList.contains('header_index')) {
//                         document.querySelector('main').style.marginTop = stickyHeader.scrollHeight + 'px';
//                     }
//                 }, 200)
//                 flage = true;
//             }
//         } else {
//             // stickyHeader.classList.remove('fixed');
//             if (flage) {
//                 stickyHeader.classList.add('fixed-animation');
//                 // stickyHeader.classList.contains('animation') ? stickyHeader.classList.remove('animation') : '';
//                 setTimeout(() => {
//                     stickyHeader.classList.remove('fixed-animation');
//                     stickyHeader.classList.remove('fixed');

//                     if (!stickyHeader.classList.contains('header_index')) {
//                         document.querySelector('main').style.marginTop = null;
//                     }
//                 }, 200)
//                 flage = false;

//             }
//         }
//     };
// };

//sliders

const swiper_slider = new Swiper(".actual_offer__slider", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 2,

  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1.15,
    },
    0: {
      slidesPerView: 1.06,
      spaceBetween: 16,
    },
  },

  navigation: {
    nextEl: ".actual_offer__arrow-next",
    prevEl: ".actual_offer__arrow-prev",
  },
});

const swiper_news = new Swiper(".news-slider", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3,
  allowTouchMove: true,

  breakpoints: {
    769: {
      slidesPerView: 3,
      allowTouchMove: false,
    },
    500: {
      slidesPerView: 1.33,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1.06,
      spaceBetween: 16,
    },
  },
});

const swiper_articles = new Swiper(".service_articles__slider", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 2,

  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 1.14,

      allowTouchMove: false,
    },
    500: {
      slidesPerView: 1.06,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1.06,
      spaceBetween: 16,
    },
  },

  navigation: {
    nextEl: ".service_articles__arrow-next",
    prevEl: ".service_articles__arrow-prev",
  },
});

const swiper_review = new Swiper(".review_wrapp__slider", {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: false,

  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 1.6,
    },
    769: {
      slidesPerView: 2,
      allowTouchMove: false,
    },
    500: {
      slidesPerView: 1.7,
      allowTouchMove: false,
    },
    0: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
  },

  navigation: {
    nextEl: ".review__arrow-next",
    prevEl: ".review__arrow-prev",
  },
});

// Первый таб является активным
firstTabIsActive();

function firstTabIsActive() {
  const tabList = document.querySelectorAll(".tab__list");

  for (let i = 0; i < tabList.length; i++) {
    const tab = tabList[i];
    const tabElems = tab.querySelectorAll(".tab");

    tabElems[0].classList.add("_active");
  }
}

tabs();

function tabs() {
  const tabListElems = document.querySelectorAll(".tab__list");

  for (let i = 0; i < tabListElems.length; i++) {
    const tabList = tabListElems[i];
    const tabElems = tabList.querySelectorAll(".tab");

    for (let i = 0; i < tabElems.length; i++) {
      const tab = tabElems[i];
      tab.addEventListener("click", (e) => {
        const tabList = tab.parentElement;
        removeAll(tabElems, "_active");
        tab.classList.add("_active");
        tabBlockActive(tab);
        swipeRoller(tabList);
        if (tab.closest(".form-class")) {
          tab
            .closest(".form-class")
            .querySelectorAll("input[required]")
            .forEach((el) => {
              hideError(el);
            });
        }
      });
    }
  }
}

tabRollers();

function tabRollers() {
  const tabListElems = findAll(".tab__list");

  for (let i = 0; i < tabListElems.length; i++) {
    const tabList = tabListElems[i];

    window.addEventListener("load", (e) => {
      swipeRoller(tabList);
    });
  }
}

function get_name_browser() {
  let ua = navigator.userAgent;

  if (ua.match(/Opera|OPR\//)) {
    return "Opera";
  } else {
    if (ua.search(/Chrome/) > 0) return "Chrome";
    if (ua.search(/Firefox/) > 0) return "Firefox";
    if (ua.search(/Safari/) > 0) return "Safari";
    if (ua.search(/MSIE/) > 0) return "Internet Explorer";
  }

  return "Не определен";
}

let browser = get_name_browser();

// swipeRoller()
function swipeRoller(tabList) {
  const roller = tabList.querySelector(".tab__roller");
  const tabActive = tabList.querySelector(".tab._active");

  roller.style.width = tabActive.offsetWidth + "px"; // Определяем ширину ползунка
  roller.style.left = tabActive.offsetLeft + "px"; // Определяем отступ слева у ползунка
}

tabBlockActive();

function tabBlockActive(data) {
  if (data) {
    if (data.closest(".our_doctors")) {
      data
        .closest(".our_doctors")
        .querySelectorAll(".tabs__block")
        .forEach((i) => i.classList.remove("_active"));
    }
  }
  let tabActive = document.querySelectorAll(".tab._active"),
    blockElems = document.querySelectorAll(".tabs__block");

  removeAll(blockElems, "_show");

  [...tabActive].filter((i) => {
    if (
      document.querySelector(`[data-tab-body=${i.getAttribute("data-tab")}]`)
    ) {
      document
        .querySelectorAll(`[data-tab-body=${i.getAttribute("data-tab")}]`)
        .forEach((i) => i.classList.add("_show"));
    }
  });
}

// Анимация пересчета цифр
appearAnimationNumber();

function appearAnimationNumber() {
  const appearElems = findAll("[data-animation=number]");

  for (let i = 0; i < appearElems.length; i++) {
    const elem = appearElems[i];
    const number = elem.innerText;
    const nums = generatorFreeNum(number);

    elem.innerHTML = generatorHTMLFromNum(number);
  }

  // Сгенерировать 3 цифры, идущие за аргументом
  function generatorFreeNum(num) {
    num = parseInt(num);
    let arr = [];

    for (let i = 1; i < 3; i++) {
      arr.push(num--);
    }

    return arr;
  }

  // Собирает массив из строки и генерирует html
  function generatorHTMLFromNum(value) {
    return value
      .split("")
      .map((e) => `<span>${e}</span>`)
      .join("");
  }
}

window.addEventListener("scroll", animation);
window.addEventListener("load", animation);

// Анимация
animation();

function animation() {
  const elems = document.querySelectorAll("[data-animation]");

  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    const elemTop = elem.getBoundingClientRect().top;

    if (elemTop < window.innerHeight && elemTop >= 0) {
      if (
        elem.dataset.animation === "number" &&
        !elem.classList.contains("_visible")
      ) {
        const numElems = elem.querySelectorAll("span");

        doAnimWithDelay(numElems, "_visible", 150);
        elem.classList.add("_visible");
      }

      if (
        elem.dataset.animation === "acc" &&
        !elem.classList.contains("_visible")
      ) {
        elem.classList.add("_visible");
      }

      if (
        elem.dataset.animation === "menu-item" &&
        !elem.classList.contains("_visible")
      ) {
        const itemElems = elem.querySelectorAll("li");

        doAnimWithDelay(itemElems, "_visible", 150);
        elem.classList.add("_visible");
      }
    }
  }
}

// Выполнение анимации элементов массива с задержкой
function doAnimWithDelay(array, _class, transition) {
  let i = 0;
  const interval = setInterval((e) => {
    array[i].classList.add(_class);
    i++;

    if (i >= array.length) {
      clearInterval(interval);
    }
  }, transition);
}

window.addEventListener("load", () => {
  // Аккордеоны
  accordions();
});

function accordions() {
  if (find(".acc._show")) {
    const accBody = find(".acc._show").querySelector(".acc-body");
    find(".acc._show").querySelector(".acc-open").classList.add("_show");
    accBody.style.maxHeight = accBody.scrollHeight + "px";
    if (find(".acc._show").hasAttribute("data-tag")) {
      find(".acc-open._show .accordion-btn").innerText = "Свернуть";
    }
  }

  window.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("acc-open") || target.closest(".acc-open")) {
      if (
        (window.innerWidth > 920 &&
          !target.classList.contains("sub-menu__link")) ||
        window.innerWidth <= 920
      ) {
        const container = !target.closest(".acc-body")
          ? target.closest(".accordion_container-list-header")
          : target.closest(".acc-body");
        const parent = target.closest(".acc");
        const accBody = parent.querySelector(".acc-body");
        // const menuLeft = container.closest('.menu-left-mobile')
        const valueTimeout = parent.dataset.timeout;
        let oldYPage = window.pageYOffset;
        let newYPage = 0;

        parent.classList.toggle("_show");

        if (target.closest('[data-tag="price"]')) {
          if (
            target
              .closest('[data-tag="price"]')
              .querySelector(".acc-open .accordion-btn").innerText ===
            "Подробнее"
          ) {
            target
              .closest('[data-tag="price"]')
              .querySelector(".acc-open .accordion-btn").innerText = "Свернуть";
          } else {
            target
              .closest('[data-tag="price"]')
              .querySelector(".acc-open .accordion-btn").innerText =
              "Подробнее";
          }
          target.closest(".acc-open").classList.toggle("_show");
          target.closest(".acc-open").classList.remove("_add-animation");
          setTimeout(() => {
            target
              .closest('[data-tag="price"]')
              .querySelector(".acc-body")
              .classList.add("padding-16");
          }, 0);
        } else {
          target.classList.toggle("_show");
        }

        if (accBody.style.maxHeight) {
          if (target.closest('[data-tag="price"]')) {
            setTimeout(() => {
              target
                .closest('[data-tag="price"]')
                .querySelector(".acc-body")
                .classList.remove("padding-16");
              target.closest(".acc-open").classList.remove("_add-animation");
            }, valueTimeout);
            target.closest(".acc-open").classList.add("_add-animation");
          }

          target.closest(".acc").style.pointerEvents = "none";

          setTimeout(() => {
            parent.classList.remove("_show");
            target.classList.remove("_show");
            target.closest(".acc").style = null;
          }, 500);

          if (accBody.closest(".menu")) {
            accBody.style.maxHeight = null;
            container.style.maxHeight =
              parseInt(container.scrollHeight) + accBody.scrollHeight + "px";
          } else {
            setTimeout(function () {
              accBody.style.maxHeight = null;
              container.style.maxHeight =
                parseInt(container.scrollHeight) + accBody.scrollHeight + "px";
            }, 250);
          }
        } else {
          if (
            parent.classList.contains("accordion_container-list") ||
            parent.parentElement.parentElement.classList.contains(
              "menu-left-mobile"
            )
          ) {
            const adjacentElems = getSiblings(parent);
            for (let i = 0; i < adjacentElems.length; i++) {
              const elem = adjacentElems[i];
              const elemHeader = elem.querySelector(".acc-open");
              const elemBody = elem.querySelector(".acc-body");

              if (target.closest('[data-tag="price"]')) {
                elemHeader.querySelector(".accordion-btn").innerText =
                  "Подробнее";
              }

              elem.classList.remove("_show");
              elemHeader.classList.remove("_show");
              setTimeout(function () {
                elemBody.style.maxHeight = null;
              }, 250);
            }
          }

          if (target.closest('[data-tag="price"]')) {
            [
              ...parent.parentElement.querySelectorAll(
                ".accordion_container-list"
              ),
            ].filter((i) => {
              if (!i.classList.contains("_show")) {
                setTimeout(() => {
                  i.querySelector(".acc-body").classList.remove("padding-16");
                }, valueTimeout);
              }
            });
          }

          if (target.closest("[data-tag")) {
            // if (target.closest('[data-tag]').getBoundingClientRect().top < 400) {

            setTimeout(() => {
              window.scrollTo({
                top: document.querySelector(".acc._show").offsetTop - 170,
                behavior: "smooth",
              });
            }, 700);
            // }
          }

          accBody.style.maxHeight = accBody.scrollHeight + "px";
          container.style.maxHeight =
            parseInt(container.scrollHeight) + accBody.scrollHeight + "px";

          if (parent.closest(".menu-left__item")) {
            parent.closest(".menu-left__item").style.maxHeight = "none";
          }
          if (container.classList.contains("menu-left__item-list")) {
            container.style.maxHeight = "none";
          }
        }
      }
    }
  });
}

// Плейсхолдер текстовых полей
labelTextfield();

function labelTextfield() {
  const textfieldElems = document.querySelectorAll(".form-elem");

  for (let i = 0; i < textfieldElems.length; i++) {
    const parent = textfieldElems[i];
    const input = parent.querySelector("input, textarea");
    const label = parent.querySelector("label");

    if (!input || !label) continue;

    input.addEventListener("focus", (e) => {
      label.classList.add("_change-label");
      if (
        e.target.id === "datetimepicker2" ||
        e.target.id === "datetimepicker1"
      ) {
        if (input.value === "") {
          input.value = " ";
        }
      }

      if (e.target.id === "datetimepicker2") {
        input.classList.add("_focus_input");
      }
    });

    input.addEventListener("blur", (e) => {
      if (input.value === "") {
        label.classList.remove("_change-label");
        input.classList.remove("_focus_input");
      }
    });
  }
}

// Показать подменю
showSubMenu();

function showSubMenu() {
  if (innerWidth < 920) {
    const itemElems = findAll("[data-sub-menu]");

    for (let i = 0; i < itemElems.length; i++) {
      const item = itemElems[i];

      item.addEventListener("click", (e) => {
        const dataMenu = item.dataset.subMenu;
        const subMenu = find(`[data-menu=${dataMenu}]`);

        removeAll(".d-sub-menu__block", "_show");
        removeAll(".sub-menu__link", "_show");
        removeAll("[data-menu]", "_show");
        removeAll(".menu__link", "_active");
        item.classList.add("_active");
        subMenu.classList.add("_show");
      });
    }

    findAll("[data-d-sub-menu]").forEach((i) => {
      i.addEventListener("click", function (e) {
        if (
          i.closest(".sub-menu__item").querySelector(".sub-menu__item-list")
        ) {
          if (
            i.closest(".sub-menu__item").querySelector(".sub-menu__item-list")
              .style.maxHeight
          ) {
            i
              .closest(".sub-menu__item")
              .querySelector(".sub-menu__item-list").style.maxHeight = null;
            i.classList.remove("_show");
            i.closest(".show-menu-item").classList.remove("_show");
          } else {
            findAll(".sub-menu__item-list").forEach(
              (i) => (i.style.maxHeight = null)
            );
            removeAll("[data-d-sub-menu]", "_show");
            removeAll(".show-menu-item", "_show");
            i.classList.add("_show");
            i.closest(".show-menu-item").classList.add("_show");
            i
              .closest(".sub-menu__item")
              .querySelector(".sub-menu__item-list").style.maxHeight =
              i.closest(".sub-menu__item").querySelector(".sub-menu__item-list")
                .scrollHeight + "px";
          }
        } else {
          findAll(".sub-menu__item-list").forEach(
            (el) => (el.style.maxHeight = null)
          );
          removeAll("[data-d-sub-menu]", "_show");
          removeAll(".show-menu-item", "_show");
          removeAll(".sub-menu__link", "_show");
        }
      });
    });
  } else {
    const menu = find(".menu");
    menu.addEventListener("mousemove", (e) => {
      const target = e.target;

      if (target.getAttribute("data-sub-menu")) {
        const targetData = target.dataset.subMenu;
        const subMenu = find(`[data-menu=${targetData}]`);

        if (!subMenu.classList.contains("_show")) {
          removeAll(".d-sub-menu__block", "_show");
          removeAll(".sub-menu__link", "_show");
          removeAll("[data-menu]", "_show");
          removeAll("[data-sub-menu]", "_active");
          removeAll(".menu__link", "_active");
          removeAll(".sub-menu__link", "_active");
          subMenu.classList.add("_show");
          target.classList.add("_active");
        }
      }

      if (
        !target.getAttribute("data-sub-menu") &&
        target.classList.contains("menu__link")
      ) {
        removeAll("[data-menu]", "_show");
      }

      if (
        !target.getAttribute("data-d-sub-menu") &&
        target.classList.contains("sub-menu__link")
      ) {
        removeAll("[data-d-sub-menu]", "_show");
      }

      if (
        !target.classList.contains("_active") &&
        e.target.classList.contains("menu__link")
      ) {
        removeAll(".menu__link", "_active");
        target.classList.add("_active");
      }

      if (
        target.getAttribute("data-d-sub-menu") &&
        !e.target.classList.contains("d-sub-menu__block")
      ) {
        removeAll(".sub-menu__link", "_active");
        target.classList.add("_active");
      }

      // if (target.dataset.dSubMenu) {
      if (
        !target.classList.contains("_active") &&
        e.target.classList.contains("sub-menu__link")
      ) {
        removeAll(".sub-menu__link", "_active");
        target.classList.add("_active");
      }
      //}
    });
  }
}

// Открытие d-sub-menu
if (window.innerWidth > 920) showDSubMenu();

function showDSubMenu() {
  const menu = find(".menu");

  menu.addEventListener("mousemove", (e) => {
    const target = e.target;

    if (
      target.getAttribute("data-d-sub-menu") &&
      target.classList.contains("sub-menu__link")
    ) {
      const targetData = target.dataset.dSubMenu;
      const dSubMenu = find(
        `.d-sub-menu__block[data-d-sub-menu=${targetData}]`
      );

      if (!dSubMenu.classList.contains("_show")) {
        removeAll(".d-sub-menu__block", "_show");
        dSubMenu.classList.add("_show");
      }
    }
  });
}

/* Слайдер в секции врачей */
function size_window() {
  if (window.innerWidth < 1250) {
    return true;
  } else {
    return false;
  }
}
let arr_variable = [];
document
  .querySelectorAll(".our_doctors__right-slider .tabs__block")
  .forEach((i) => {
    arr_variable.push(".tabs__block[data-tab-body=" + i.dataset.tabBody + "]");
  });
$(arr_variable).each((i, el) => {
  let $carousel = $(el).find(".carousel").flickity({ fade: true });

  $(el)
    .find(".our_doctors__arrow-next")
    .on("click", function (e) {
      flkty.next();
    });

  $(el)
    .find(".our_doctors__arrow-prev")
    .on("click", function (e) {
      flkty.previous();
    });

  let $carouselNav = $(el).find(".carousel-nav");
  let $carouselNavCells = $carouselNav.find(".carousel-cell");

  $carouselNav.on("click", ".carousel-cell", function (event) {
    let index = $(event.currentTarget).index();
    $carousel.flickity("select", index);
  });

  let flkty = $carousel.data("flickity");
  let navTop = $carouselNav.position().top;
  let navCellHeight = $carouselNavCells.height();
  let navHeight = $carouselNav.height();
  let scrollY = 0;

  if (window.innerWidth < 993) {
    $(el)
      .find(".carousel-nav")
      .attr(
        "data-flickity",
        `{"asNavFor": "${
          el + " .carousel-main"
        }", "pageDots": false, "imagesLoaded": true, "contain": true, "draggable": true}`
      );
  }

  $carousel.on("select.flickity", function () {
    $carouselNav.find(".is-nav-selected").removeClass("is-nav-selected");
    let $selected = $carouselNavCells
      .eq(flkty.selectedIndex)
      .addClass("is-nav-selected");

    if (size_window()) {
      if (navHeight - navCellHeight < $selected.position().top) {
        scrollY += navCellHeight + 20;
        $carouselNav.animate({
          scrollTop: scrollY,
        });
      } else if (
        Math.sign($selected.position().top) === -1 ||
        $selected.position().top <= 20
      ) {
        scrollY -= navCellHeight;
        $carouselNav.animate({
          scrollTop: scrollY,
        });
      }
    } else {
      if (navHeight - navCellHeight + 16 < $selected.position().top) {
        scrollY += navCellHeight;
        $carouselNav.animate({
          scrollTop: scrollY,
        });
      } else if (Math.sign($selected.position().top) === -1) {
        scrollY -= navCellHeight;
        $carouselNav.animate({
          scrollTop: scrollY,
        });
      }
    }
  });

  $carousel.on("change.flickity", function (event, index) {
    const elemName = document.getElementById("doctor-name");
    const elemPost = document.getElementById("doctor-post");
    const stag = document.querySelector("#doctor-stag span");
    const graduate = document.getElementById("doctor-graduate");
    const diplom = document.getElementById("doctor-diplom");

    elemName.innerText = $carouselNavCells
      .eq(flkty.selectedIndex)
      .data("doctor-name");
    elemPost.innerText = $carouselNavCells
      .eq(flkty.selectedIndex)
      .data("doctor-post");

    if (stag) {
      stag.innerText = $carouselNavCells
        .eq(flkty.selectedIndex)
        .data("doctor-work");
      graduate.innerText = $carouselNavCells
        .eq(flkty.selectedIndex)
        .data("doctor-graduate");
      diplom.innerText = $carouselNavCells
        .eq(flkty.selectedIndex)
        .data("doctor-diplom");
    }

    if (flkty.selectedIndex === flkty.cells.length - 1) {
      $(el).find(".our_doctors__arrow-next").attr("disabled", "disabled");
    } else {
      $(el).find(".our_doctors__arrow-next").removeAttr("disabled");
    }
    if (flkty.selectedIndex === 0) {
      $(el).find(".our_doctors__arrow-prev").attr("disabled", "disabled");
    } else {
      $(el).find(".our_doctors__arrow-prev").removeAttr("disabled");
    }
  });

  document
    .querySelectorAll(".our_doctors__right-slider .tabs__block:not(._show)")
    .forEach((i) => {
      i.classList.add("_active");
    });

  setTimeout(function () {
    flkty.resize();
  }, 100);
});

const datePicker = new AirDatepicker("#datetimepicker1 ", {
  minDate: new Date(),
  onSelect({ date, cellType, datepicker }) {
    removeError(datepicker);
  },
  onHide() {
    if (
      document.querySelector("#datetimepicker1").value === "" ||
      document.querySelector("#datetimepicker1").value === " "
    ) {
      document
        .querySelector("#datetimepicker1")
        .classList.remove("_focus_input");
      document
        .querySelector("#datetimepicker1 + label")
        .classList.remove("_change-label");
    }
  },
});
const timePicker = new AirDatepicker("#datetimepicker2 ", {
  timepicker: true,
  onlyTimepicker: true,
  minutesStep: 5,
  onSelect({ date, cellType, datepicker }) {
    removeError(timePicker);
  },
  onHide() {
    if (
      document.querySelector("#datetimepicker2").value === "" ||
      document.querySelector("#datetimepicker2").value === " "
    ) {
      document
        .querySelector("#datetimepicker2")
        .classList.remove("_focus_input");
      document
        .querySelector("#datetimepicker2 + label")
        .classList.remove("_change-label");
    }
  },
});

function removeError(datepicker) {
  const textfield = datepicker.$el;
  const parent = textfield.parentElement;

  parent.classList.remove("error");
}

if (document.querySelector(".form-elem-date")) {
  document.querySelector(".form-elem-date").addEventListener("click", () => {
    datePicker.show();
  });
}

// let flickitiVariable;
// let sliderView = {

//         targetArrow: [],
//         arrVariableDynamic: [],

//         init(value) {
//             document.querySelectorAll('[data-init-slider]').forEach(i => {
//                 let arrowLink = document.querySelector(`[data-init-arrow="${i.dataset.initSlider}"]`);
//                 this.action(i.dataset.initSlider, i, arrowLink ? arrowLink : false);
//                 this.targetArrow.push(document.querySelector(`[data-init-arrow="${i.dataset.initSlider}"]`));
//             });
//         },

//         getRandomInt(max) {
//             return Math.floor(Math.random() * max);
//         },

//         action: function(value, element, arrow) {
//             this.arrVariableDynamic.push("flickitiVariable" + this.getRandomInt(50));
//             this.arrVariableDynamic[this.arrVariableDynamic.length - 1] = new Flickity(`${value} .carousel`, {
//                 on: {
//                     ready: function() {
//                         this.element.style.height = this.element.querySelector('.carousel-box').offsetHeight + 'px'
//                     },
//                     // select: function(e, i) {
//                     //     console.log(e.selectedIndex)
//                     // },

//                     change: (index, d) => {
//                         console.log(this)
//                         let section = this.arrVariableDynamic[this.arrVariableDynamic.length - 1].$element[0].closest('section');
//                         if (this.arrVariableDynamic[this.arrVariableDynamic.length - 1].selectedIndex === this.arrVariableDynamic[this.arrVariableDynamic.length - 1].cells.length - 1) {
//                             $(`.${section.getAttribute('class')} .slider__arrow-next`).attr('disabled', 'disabled');
//                         } else {
//                             $(`.${section.getAttribute('class')} .slider__arrow-next`).removeAttr('disabled');
//                         }
//                         if (this.arrVariableDynamic[this.arrVariableDynamic.length - 1].selectedIndex === 0) {
//                             $(`.${section.getAttribute('class')} .slider__arrow-prev`).attr('disabled', 'disabled');
//                         } else {
//                             $(`.${section.getAttribute('class')} .slider__arrow-prev`).removeAttr('disabled');
//                         }
//                         element.style.height = element.querySelector('.is-selected .carousel-box').offsetHeight + 'px'
//                     }
//                 }
//             });

//             if (arrow) {
//                 this.arrow(arrow, this.arrVariableDynamic[this.arrVariableDynamic.length - 1]);
//             }
//         },

//         arrow(element, el) {
//             //console.log(this.arrVariableDynamic[this.arrVariableDynamic.length - 1])
//             $(`[data-init-arrow="${element.dataset.initArrow}"] .slider__arrow-next`).on('click', (e) => {
//                 el.next();
//             });

//             $(`[data-init-arrow="${element.dataset.initArrow}"] .slider__arrow-prev`).on('click', (e) => {
//                 el.previous();
//             });
//         }
//     }
// if (document.querySelector('[data-init-slider]')) {
//     sliderView.init();
// }

if (document.querySelector(".timetable_table__tables")) {
  let flktyTimeTable = new Flickity(".timetable_table__tables .carousel", {
    draggable: false,
    on: {
      ready: function () {
        this.element.style.height =
          this.element.querySelector("table").offsetHeight + "px";
      },
      change: function (index) {
        if (flktyTimeTable.selectedIndex === flktyTimeTable.cells.length - 1) {
          $(".slider__arrow-next").attr("disabled", "disabled");
        } else {
          $(".slider__arrow-next").removeAttr("disabled");
        }
        if (flktyTimeTable.selectedIndex === 0) {
          $(".slider__arrow-prev").attr("disabled", "disabled");
        } else {
          $(".slider__arrow-prev").removeAttr("disabled");
        }
        this.element.style.height =
          this.element.querySelector(".is-selected table").offsetHeight + "px";
      },
    },
  });

  $(".slider__arrow-next").on("click", function (e) {
    flktyTimeTable.next();
  });

  $(".slider__arrow-prev").on("click", function (e) {
    flktyTimeTable.previous();
  });
}

if (document.querySelector(".facts-clinics__slider")) {
  let flktyTimeTable = new Flickity(".facts-clinics__slider .carousel", {
    on: {
      ready: function () {
        this.element.style.height =
          this.element.querySelector(".carousel-box").offsetHeight + "px";
      },
      change: function (index) {
        if (flktyTimeTable.selectedIndex === flktyTimeTable.cells.length - 1) {
          $(".facts-clinics .slider__arrow-next").attr("disabled", "disabled");
        } else {
          $(".facts-clinics .slider__arrow-next").removeAttr("disabled");
        }
        if (flktyTimeTable.selectedIndex === 0) {
          $(".facts-clinics .slider__arrow-prev").attr("disabled", "disabled");
        } else {
          $(".facts-clinics .slider__arrow-prev").removeAttr("disabled");
        }
        this.element.style.height =
          this.element.querySelector(".is-selected .carousel-box")
            .offsetHeight + "px";
      },
    },
  });

  $(".facts-clinics .slider__arrow-next").on("click", function (e) {
    flktyTimeTable.next();
  });

  $(".facts-clinics .slider__arrow-prev").on("click", function (e) {
    flktyTimeTable.previous();
  });

  let flktyTimeTablePhoto = new Flickity(".photo-clinics .carousel", {
    on: {
      ready: function () {
        this.element.style.height =
          this.element.querySelector(".carousel-box").offsetHeight + "px";
      },
      change: function (index) {
        if (
          flktyTimeTablePhoto.selectedIndex ===
          flktyTimeTablePhoto.cells.length - 1
        ) {
          $(".photo-clinics .slider__arrow-next").attr("disabled", "disabled");
        } else {
          $(".photo-clinics .slider__arrow-next").removeAttr("disabled");
        }
        if (flktyTimeTablePhoto.selectedIndex === 0) {
          $(".photo-clinics .slider__arrow-prev").attr("disabled", "disabled");
        } else {
          $(".photo-clinics .slider__arrow-prev").removeAttr("disabled");
        }
        this.element.style.height =
          this.element.querySelector(".is-selected .carousel-box")
            .offsetHeight + "px";
      },
    },
  });

  $(".photo-clinics .slider__arrow-next").on("click", function (e) {
    flktyTimeTablePhoto.next();
  });

  $(".photo-clinics .slider__arrow-prev").on("click", function (e) {
    flktyTimeTablePhoto.previous();
  });
}

if (document.querySelector(".dropdown-list-header")) {
  document
    .querySelector(".dropdown-list-header")
    .addEventListener("click", function (e) {
      if (!this.closest(".dropdown-list").classList.contains("_show")) {
        this.closest(".dropdown-list").classList.add("_show");
        this.closest(".dropdown-list")
          .querySelector(".dropdown-list-ul")
          .classList.add("_add-padding");
      } else {
        this.closest(".dropdown-list").classList.remove("_show");
        setTimeout(
          () =>
            this.closest(".dropdown-list")
              .querySelector(".dropdown-list-ul")
              .classList.remove("_add-padding"),
          300
        );
      }
    });
}

window.addEventListener("click", function (e) {
  if (find(".dropdown-list")) {
    if (!e.target.closest(".dropdown-list")) {
      find(".dropdown-list").classList.remove("_show");
    }
  }

  if (e.target.classList.contains("dropdown-list-line")) {
    find(".dropdown-list-line._active").classList.remove("_active");
    e.target.classList.add("_active");
    find(".dropdown-list-header-text").innerText = e.target.innerText;
    find(".dropdown-list").classList.remove("_show");
  }
});

if (document.querySelector(".otzyv-visit__grade-list")) {
  document
    .querySelector(".otzyv-visit__grade-list")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("otzyv-visit__grade-list-element")) {
        if (!e.target.classList.contains("_active")) {
          this.querySelectorAll(".otzyv-visit__grade-list-element").forEach(
            (i) => i.classList.remove("_active")
          );
          e.target.classList.add("_active");
        } else {
          e.target.classList.remove("_active");
        }
      }
    });
}

if (typeof ymaps === "object") {
  ymaps.ready(init);
}

function init() {
  function adress_out(element, adress) {
    let myMap;
    myMap = new ymaps.Map(element, {
      center: [56.49771, 84.97437],
      zoom: 15,
    });
    ymaps
      .geocode(adress, {
        /**
         * Опции запроса
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
         */
        // Сортировка результатов от центра окна карты.
        // boundedBy: myMap.getBounds(),
        // strictBounds: true,
        // Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
        // Если нужен только один результат, экономим трафик пользователей.
        results: 1,
      })
      .then(function (res) {
        let firstGeoObject = res.geoObjects.get(0),
          // Координаты геообъекта.
          coords = firstGeoObject.geometry.getCoordinates(),
          // Область видимости геообъекта.
          bounds = firstGeoObject.properties.get("boundedBy");

        firstGeoObject.options.set(
          "preset",
          "islands#darkBlueDotIconWithCaption"
        );
        // Получаем строку с адресом и выводим в иконке геообъекта.
        firstGeoObject.properties.set(
          "iconCaption",
          firstGeoObject.getAddressLine()
        );

        // Добавляем первый найденный геообъект на карту.
        myMap.geoObjects.add(firstGeoObject);
        // Масштабируем карту на область видимости геообъекта.
        myMap.setCenter(coords, 17, {
          // Проверяем наличие тайлов на данном масштабе.
          checkZoomRange: true,
        });
        // let myPlacemark = new ymaps.Placemark(coords, {
        //     iconContent: 'моя метка',
        //     balloonContent: 'Содержимое балуна <strong>моей метки</strong>'
        // }, {
        //     preset: 'islands#violetStretchyIcon'
        // });

        // myMap.geoObjects.add(myPlacemark);
      });
  }

  findAll(".contacts-page__maps").forEach((i) => {
    let adress = i.closest(".tabs__block").dataset.adress;
    adress_out(i.id, adress);
  });
}
