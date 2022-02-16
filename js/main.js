// Служебные переменные
const d = document;
const body = d.querySelector('body');

// Служебные функции

function find(selector) {
    return document.querySelector(selector)
}

function findAll(selectors) {
    return document.querySelectorAll(selectors)
}

// Удаляет у всех элементов items класс itemClass
function removeAll(items, itemClass) {
    if (typeof items == 'string') {
        items = document.querySelectorAll(items)
    }
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        item.classList.remove(itemClass)
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
        body.classList.add('_lock');
    } else if (con === false) {
        body.classList.remove('_lock');
    } else if (con === undefined) {
        if (!body.classList.contains('_lock')) {
            body.classList.add('_lock');
        } else {
            body.classList.remove('_lock')
        }
    } else {
        console.error('Неопределенный аргумент у функции bodyLock()')
    }
}

// Отступ главного экрана на главной странице
if (find('.header_index')) paddingTopMainSection()
function paddingTopMainSection() {
    const main = find('.main_top__wrapper')
    const header = find('.header_index')

    main.style.paddingTop = header.scrollHeight + 'px'
}


find('.header').classList.remove('hide');

// Интро

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let intro;
let introBG;

if (windowWidth > 767) {
    intro = find('.intro__media--pc');
    introBG = find('.intro__img--pc');
} else if (windowWidth <= 767) {
    if (windowWidth > windowHeight) {
        intro = find('.intro__media--h');
        introBG = find('.intro__img--h');
    } else {
        intro = find('.intro__media--v');
        introBG = find('.intro__img--v');
    }
}

if (intro) {
    intro.classList.add('active');
    introBG.classList.add('active')
    intro.play();
}


// Валидация формы
function validationForm() {
    const name = find('#user_name')
    const phone = find('#user_phone')
    const email = find('#user_email')

    let con = true

    for (let i = 0; i < [name, phone, email].length; i++) {
        const elem = [name, phone, email][i];
        const elemValue = elem.value.trim()

        if (elemValue === '') {
            elem.classList.add('_error')
            con = false
        } else {
            elem.classList.remove('_error')
            con = true
        }
    }

    return con
}

// Отправка формы
// sumbitForm()
function sumbitForm() {
    const form = find('.modal__form')

    form.addEventListener('submit', async e => {
        const modal = find('.modal._show')
        const btnSend = form.querySelector('[type=submit]')
        btnSend.classList.add('send-preloader')

        e.preventDefault()

        let con = validationForm()

        if (con === true) {
            const formData = new FormData()
            const action = form.getAttribute('action')

            let response = await fetch(action, {
                method: 'POST',
                body: formData
            })

            // settimeout здесь для того, чтобы показать работу отправки формы. В дальнейшем это нужно убрать
            setTimeout(() => {
                if (response.ok) {
                    console.log('Successful')
                    form.reset()

                    modal.classList.remove('_show')
                    find('#send-done').classList.add('_show')
                    btnSend.classList.remove('send-preloader')
                } else {
                    console.log('Error')
                    form.reset()

                    modal.classList.remove('_show')
                    find('#send-error').classList.add('_show')
                    btnSend.classList.remove('send-preloader')
                }
            }, 2000)

        }
    })
}

// Мобильное меню
menu()

function menu() {
    const burger = find('.burger')
    const menu = find('.menu');
    const header = find('.header')

    burger.addEventListener('click', (e) => {
        burger.classList.toggle('burger_close')
        menu.classList.toggle('_show')
        menu.style.height = `calc(100vh - ${find('.header').offsetHeight}px)`
        bodyLock()
    })

    window.addEventListener('click', e => {
        const target = e.target

        if (find('.menu._show') && !target.classList.contains('menu__wrap') && !target.closest('.menu__wrap') && !target.classList.contains('menu__header') && !target.closest('.menu__header') && !target.classList.contains('burger') && !target.closest('.burger')) {
            menu.classList.remove('_show')
            burger.classList.remove('burger_close')
            bodyLock(false)
        }
    })
}

// const advantagesSlider = new Swiper('.advantages__slider', {
// 	spaceBetween: 16,
// 	centeredSlides: true,
// 	// slidesPerView: 1.33, // Кол-во показываемых слайдов
// 	// autoHeight: true,
// 	// slidesPerView: 'auto',
// 	// loop: true, // Бесконечный слайдер
// 	// freeMode: true, // Слайдеры не зафиксированны

// 	breakpoints: {
// 		1200: {
// 			slidesPerView: 'auto',
// 		},
// 		700: {
// 			slidesPerView: 1.1,
// 		},
// 		0: {
// 			slidesPerView: 1.08,
// 			spaceBetween: 8,
// 			centeredSlides: false,
// 		}
// 	},

// 	// navigation: {
// 	// 	nextEl: '.swiper__arrow-next',
// 	// 	prevEl: '.swiper__arrow-prev',
// 	// }
// });

// Функции для модальных окон
// Открытие модальных окон при клике по кнопке
openModalWhenClickingOnBtn()

function openModalWhenClickingOnBtn() {
    const btnsOpenModal = document.querySelectorAll('[data-modal-open]');

    for (let i = 0; i < btnsOpenModal.length; i++) {
        const btn = btnsOpenModal[i];

        btn.addEventListener('click', (e) => {
            const dataBtn = btn.dataset.modalOpen;
            const modal = document.querySelector(`#${dataBtn}`)

            if (find('.modal._show')) {
                closeModal()
            }
            openModal(modal)
            window.location.hash = dataBtn
        });
    }
}

// Открытие модального окна, если в url указан его id
openModalHash()

function openModalHash() {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        const modal = document.querySelector(`.modal#${hash}`)

        if (modal) openModal(modal)
    }
}

// Показываем/убираем модальное окно при изменения хеша в адресной строке
checkHash()

function checkHash() {
    window.addEventListener('hashchange', e => {
        const hash = window.location.hash
        const modal = document.querySelector(`.modal${hash}`)

        if (find('.modal._show')) find('.modal._show').classList.remove('_show')
        if (modal && hash != '') openModal(modal)
    })
}

// Закрытие модального окна при клике по заднему фону
closeModalWhenClickingOnBg()

function closeModalWhenClickingOnBg() {
    document.addEventListener('click', (e) => {
        const target = e.target
        const modal = document.querySelector('.modal._show')

        if (modal && !modal.classList.contains('modal-auth') && target.classList.contains('modal__wrap')) closeModal()
    })
}

// Закрытие модальных окон при клике по крестику
closeModalWhenClickingOnCross()

function closeModalWhenClickingOnCross() {
    const modalElems = document.querySelectorAll('.modal')
    for (let i = 0; i < modalElems.length; i++) {
        const modal = modalElems[i];
        const closeThisModal = modal.querySelector('.modal__close')

        if (closeThisModal) {
            closeThisModal.addEventListener('click', () => {
                closeModal(modal)
            })
        }
    }
}

// Закрытие модальных окон при нажатии по клавише ESC
closeModalWhenClickingOnESC()

function closeModalWhenClickingOnESC() {
    const modalElems = document.querySelectorAll('.modal')
    for (let i = 0; i < modalElems.length; i++) {
        const modal = modalElems[i];

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeModal(modal)
        })
    }
}

// Сброс id модального окна в url
function resetHash() {
    const windowTop = window.pageYOffset
    window.location.hash = ''
    window.scrollTo(0, windowTop)
}

// Открытие модального окна
function openModal(modal) {
    // if (find('.modal._show')) {
    //     find('.modal._show').classList.remove('_show')
    // }

    modal.classList.add('_show')
    bodyLock(true)
    console.log(modal, 'Open')
}

// Закрытие модального окна
function closeModal(modal) {
    if (modal == undefined) {
        modal = find('.modal._show')

        if (!modal) return
    }
    modal.classList.remove('_show')
    bodyLock(false)
    resetHash()
    console.log(modal, 'Close')
}


const swiper_slider = new Swiper('.actual_offer__slider', {
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
        }
    },

    navigation: {
        nextEl: '.actual_offer__arrow-next',
        prevEl: '.actual_offer__arrow-prev',
    },
});

const swiper_news = new Swiper('.news-slider', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3,
    allowTouchMove: false,

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
        }
    },
});

// const swiper = new Swiper('.swiper-container', {

//   slidesPerView: 1, // Кол-во показываемых слайдов
//   spaceBetween: 0, // Расстояние между слайдами
//   loop: true, // Бесконечный слайдер
//   freeMode: true, // Слайдеры не зафиксированны

//   breakpoints: {
//     1200: {

//     },
//     700: {

//     },
//     400: {

//     }
//   },

//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.swiper__arrow-next',
//     prevEl: '.swiper__arrow-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiper_doctors = new Swiper(".our_doctors__slider-main", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // freeMode: true,
    watchSlidesProgress: true,
});

swiper_doctors.on('slideChange', e => {
    const slider = e.wrapperEl
    const slideActive = slider.querySelector('.swiper-slide-next')
    const elemName = document.getElementById('doctor-name')
    const elemPost = document.getElementById('doctor-post')

    elemName.innerText = slideActive.dataset.doctorName
    elemPost.innerText = slideActive.dataset.doctorPost

    // console.log(dName, dPost)
})

const swiper_doctors2 = new Swiper(".our_doctors__slider-all", {

    breakpoints: {
        930: {
            direction: "vertical",
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
            slideToClickedSlide: true,
        },
        769: {
            loop: true,
            spaceBetween: 16,
            slidesPerView: 5,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
        },
        500: {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 4.7,
            slideToClickedSlide: true,
        },
        0: {
            loop: true,
            spaceBetween: 16,
            slidesPerView: 4.6,
            slideToClickedSlide: true,
        }
    },
    navigation: {
        nextEl: ".our_doctors__arrow-next",
        prevEl: ".our_doctors__arrow-prev",
    },
    thumbs: {
        swiper: swiper_doctors,
    },
});

const swiper_review = new Swiper('.review_wrapp__slider', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

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
        }
    },

    navigation: {
        nextEl: ".review__arrow-next",
        prevEl: ".review__arrow-prev",
    }
});

// Первый таб является активным
firstTabIsActive()

function firstTabIsActive() {
    const tabList = document.querySelectorAll('.tab__list')

    for (let i = 0; i < tabList.length; i++) {
        const tab = tabList[i];
        const tabElems = tab.querySelectorAll('.tab')

        tabElems[0].classList.add('_active')
    }
}

tabs()

function tabs() {
    const tabListElems = document.querySelectorAll('.tab__list')

    for (let i = 0; i < tabListElems.length; i++) {
        const tabList = tabListElems[i];
        const tabElems = tabList.querySelectorAll('.tab')

        for (let i = 0; i < tabElems.length; i++) {
            const tab = tabElems[i]
            tab.addEventListener('click', e => {
                const tabList = tab.parentElement
                removeAll(tabElems, '_active')
                tab.classList.add('_active')

                swipeRoller(tabList)
            })
        }
    }
}

tabRollers()

function tabRollers() {
    const tabListElems = findAll('.tab__list')

    for (let i = 0; i < tabListElems.length; i++) {
        const tabList = tabListElems[i];

        window.addEventListener('load', e => {
            swipeRoller(tabList)
        })
    }
}

// swipeRoller()
function swipeRoller(tabList) {
    const roller = tabList.querySelector('.tab__roller')
    const tabActive = tabList.querySelector('.tab._active')

    roller.style.width = tabActive.offsetWidth + 'px' // Определяем ширину ползунка
    roller.style.left = tabActive.offsetLeft + 'px' // Определяем отступ слева у ползунка
}

// tabBlockActive()
function tabBlockActive() {
    const tabActive = document.querySelector('.tab._active'),
        dataTab = tabActive.dataset.tab,
        blockElems = document.querySelectorAll('.tabs__block'),
        blockShowElems = document.querySelectorAll(`[data-tab-body=${dataTab}]`)

    removeAll(blockElems, '_show')
    for (let i = 0; i < blockShowElems.length; i++) {
        blockShowElems[i].classList.add('_show')
    }
}

// Анимация пересчета цифр
appearAnimationNumber()

function appearAnimationNumber() {
    const appearElems = findAll('[data-animation=number]')

    for (let i = 0; i < appearElems.length; i++) {
        const elem = appearElems[i];
        const number = elem.innerText
        const nums = generatorFreeNum(number)

        elem.innerHTML = generatorHTMLFromNum(number)
    }

    // Сгенерировать 3 цифры, идущие за аргументом
    function generatorFreeNum(num) {
        num = parseInt(num)
        let arr = []

        for (let i = 1; i < 3; i++) {
            arr.push(num--)
        }

        return arr
    }

    // Собирает массив из строки и генерирует html
    function generatorHTMLFromNum(value) {
        return value.split('').map(e => `<span>${e}</span>`).join('')
    }
}


window.addEventListener('scroll', animation)
window.addEventListener('load', animation)

// Анимация
animation()

function animation() {
    const elems = document.querySelectorAll('[data-animation]')

    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        const elemTop = elem.getBoundingClientRect().top

        if (elemTop < window.innerHeight && elemTop >= 0) {

            if (elem.dataset.animation === 'number' && !elem.classList.contains('_visible')) {
                const numElems = elem.querySelectorAll('span')

                doAnimWithDelay(numElems, '_visible', 150)
                elem.classList.add('_visible')
            }

            if (elem.dataset.animation === 'acc' && !elem.classList.contains('_visible')) {
                elem.classList.add('_visible')
            }

            if (elem.dataset.animation === 'menu-item' && !elem.classList.contains('_visible')) {
                const itemElems = elem.querySelectorAll('li')

                doAnimWithDelay(itemElems, '_visible', 150)
                elem.classList.add('_visible')
            }
        }
    }
}

// Выполнение анимации элементов массива с задержкой
function doAnimWithDelay(array, _class, transition) {
    let i = 0
    const interval = setInterval(e => {
        array[i].classList.add(_class)
        i++

        if (i >= array.length) {
            clearInterval(interval)
        }
    }, transition)
}

// Показываем пункты меню на планшете
if (window.innerWidth <= 500) {
    showSubMenuMobile()
}

function showSubMenuMobile() {
    const itemElems = findAll('[data-sub-menu]')

    for (let i = 0; i < itemElems.length; i++) {
        const item = itemElems[i];
        const subMenu = item.dataset.subMenu
        const listSubMenu = item.parentElement.nextElementSibling

        fetch('../sub-menu-db.json')
            .then(res => res.json())
            .then(json => {
                let arr = []

                for (let i = 0; i < json.length; i++) {
                    const elem = json[i];

                    if (elem.category === subMenu) {
                        arr.push(elem)
                    }
                }
                return arr
            })
            .then(arr => {
                setSubMenuMobile(arr, listSubMenu)
            })
            .then(e => {
                const dItemElems = item.parentElement.nextElementSibling.querySelectorAll('[data-d-sub-menu]')

                for (let i = 0; i < dItemElems.length; i++) {
                    const dItem = dItemElems[i];
                    const dItemData = dItem.dataset.dSubMenu
                    const dItemList = dItem.parentElement.nextElementSibling
                    console.log(dItem)

                    getDataDSubMenuForMobile(dItemData)
                        .then(arr => {
                            if (arr.length != 0) {

                                for (let i = 0; i < arr.length; i++) {
                                    const elem = arr[i];

                                    // console.log(elem)
                                    const elemLI = document.createElement('li')

                                    elemLI.classList.add('d-sub-menu__item', 'show-menu-item')
                                    elemLI.innerHTML = `<a href="#" class="link d-sub-menu__link">${elem.title}</a>`

                                    // console.log(elemLI)
                                    dItemList.append(elemLI)
                                }

                                console.log(dItem.parentElement.parentElement.parentElement)
                                    // accordions(dItem.parentElement.parentElement.parentElement)
                            }
                        })

                }
            })
            .then(e => {
                accordions(listSubMenu)
            })

    }

    function setSubMenuMobile(arr, list) {

        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i];
            const item = document.createElement('li')
            const childTitle = elem.child != false ? elem.child : ''

            if (elem.child === false) {
                item.classList.add('sub-menu__item', 'show-menu-item')
                item.innerHTML = `
                    <a href="#" class="link_arrow link_arrow-sub sub-menu__link">${elem.title}</a>
                `
            } else {
                item.classList.add('acc', 'sub-menu__item', 'show-menu-item')
                item.innerHTML = `
                    <div class="acc-header sub-menu__item-header">
                        <a href="javascript:void(0)" class="acc-open link_arrow link_arrow-sub sub-menu__link" data-d-sub-menu=${childTitle}>${elem.title}</a>
                    </div>
                    <ul class="acc-body sub-menu__item-list"></ul>
                `
            }

            // console.log(item)
            list.append(item)
        }
    }
}

// Подгрузка данных в меню при наведении на пункты
if (window.innerWidth >= 920) {
    showSubMenuDesktop()
}

function showSubMenuDesktop() {
    const menu = find('.menu')

    menu.addEventListener('mousemove', e => {
        let target = e.target

        if (target.classList.contains('menu__link') || target.classList.contains('sub-menu__link')) {
            const item = target
            const subMenu = item.dataset.subMenu
            const dSubMenu = item.dataset.dSubMenu
            const listSubMenu = document.getElementById('sub-menu')
            const listDSubMenu = document.getElementById('d-sub-menu')

            if (!item.classList.contains('_active')) {

                if (subMenu) {
                    removeAll('.menu__link', '_active')
                    item.classList.add('_active')

                    fetch('../sub-menu-db.json')
                        .then(res => res.json())
                        .then(json => {
                            let arr = []

                            for (let i = 0; i < json.length; i++) {
                                const elem = json[i];

                                if (elem.category === subMenu) {
                                    arr.push(elem)
                                }
                            }
                            return arr
                        })
                        .then(arr => {
                            setLinksToSubMenu(arr, listSubMenu)
                        })
                } else if (subMenu === '') {
                    removeAll('.menu__link', '_active')
                    clearSubMenu()
                    clearDSubMenu()
                }

                if (dSubMenu) {
                    removeAll('.sub-menu__link', '_active')
                    item.classList.add('_active')

                    fetch('../d-sub-menu-db.json')
                        .then(res => res.json())
                        .then(json => {
                            let arr = []

                            for (let i = 0; i < json.length; i++) {
                                const elem = json[i];

                                if (elem.category === dSubMenu) {
                                    arr.push(elem)
                                }
                            }
                            return arr
                        })
                        .then(arr => {
                            setLinksToSubMenu(arr, listDSubMenu, item)
                        })

                } else if (dSubMenu === '') {
                    removeAll('.sub-menu__link', '_active')
                    clearDSubMenu()
                }
            }
        }
    })
}

// Показываем пункты меню на планшете
if (window.innerWidth < 920 && window.innerWidth > 500) {
    showSubMenuTablet()
}

function showSubMenuTablet() {
    const itemElems = findAll('.menu__link')

    for (let i = 0; i < itemElems.length; i++) {
        const item = itemElems[i]
        const subMenu = item.dataset.subMenu
        const listSubMenu = document.getElementById('sub-menu')

        item.addEventListener('click', e => {
            if (!item.classList.contains('_active')) {

                if (subMenu) {
                    removeAll('.menu__link', '_active')
                    item.classList.add('_active')

                    fetch('../sub-menu-db.json')
                        .then(res => res.json())
                        .then(json => {
                            let arr = []

                            for (let i = 0; i < json.length; i++) {
                                const elem = json[i];

                                if (elem.category === subMenu) {
                                    arr.push(elem)
                                }
                            }
                            return arr
                        })
                        .then(arr => {
                            setBlocksToSubMenu(arr, listSubMenu)
                        })
                } else if (subMenu === '') {
                    removeAll('.menu__link', '_active')
                    clearSubMenu()
                    clearDSubMenu()
                }
            }
        })
    }
}

// Получаем данные исходя из активного элемента для создания подменю
// getDataMenu()
// function getDataMenu(item) {
// }

// Вставить полученные данные из БД в подменю
function setLinksToSubMenu(arr, list, selectedItem) {
    list.innerHTML = ''
    clearDSubMenu()

    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        const item = document.createElement('li')
        const delay = 20

        if (list.dataset.menu === 'sub-menu') {
            const childTitle = elem.child != false ? elem.child : ''

            if (elem.child === false) {
                item.classList.add('sub-menu__item', 'show-menu-item')
                item.innerHTML = `
                    <a href="#" class="link_arrow link_arrow-sub sub-menu__link" data-d-sub-menu>${elem.title}</a>
                `
            } else {
                item.classList.add('acc', 'sub-menu__item', 'show-menu-item')
                item.innerHTML = `
                    <div class="acc-header sub-menu__item-header">
                        <a href="javascript:void(0)" class="acc-open link_arrow link_arrow-sub sub-menu__link" data-d-sub-menu=${childTitle}>${elem.title}</a>
                    </div>
                    <ul class="acc-body sub-menu__item-list"></ul>
                `
            }
        }
        if (list.dataset.menu === 'd-sub-menu') {
            const dSubMenuTitle = document.getElementById('d-sub-menu-title')
            dSubMenuTitle.innerText = selectedItem.innerText

            item.classList.add('d-sub-menu__item', 'show-menu-item')
            item.innerHTML = `<a href="#" class="link d-sub-menu__link">${elem.title}</a>`
        }

        item.style.animationDelay = (i + 1) * delay + 'ms'
        list.append(item)
    }
}

// Вставить полученные данные из БД в меню сразу с подменю для мобильной версии и планшета
function setBlocksToSubMenu(arr, list) {
    list.innerHTML = ''
    clearDSubMenu()

    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        const item = document.createElement('li')
        const delay = 20

        if (list.dataset.menu === 'sub-menu') {
            const childTitle = elem.child != false ? elem.child : ''

            getDataDSubMenuForMobile(childTitle)
                .then(arr => {
                    const html = dataToHTML(arr)

                    item.classList.add('sub-menu__item', 'show-menu-item')

                    if (html != '') {
                        item.classList.add('acc')
                        item.innerHTML = `
                            <div class="acc-header sub-menu__item-header">
                                <a href="javascript:void(0)" class="acc-open link_arrow link_arrow-sub sub-menu__link"  data-d-sub-menu=${childTitle}>${elem.title}</a>
                            </div>
                            <ul class="acc-body sub-menu__item-list">${html}</ul>
                        `
                    } else {
                        item.innerHTML = `<a href="#" class="link_arrow link_arrow-sub sub-menu__link"  data-d-sub-menu>${elem.title}</a>`
                    }

                })
                .then(e => {
                    item.style.animationDelay = (i + 1) * delay + 'ms'
                    list.append(item)
                })
                // .then(e => {
                //     accordions()
                // })
        }
    }
}

// function 

// Получить данные d-sub-menu для планшета и мобилы
function getDataDSubMenuForMobile(cat) {
    return fetch('../d-sub-menu-db.json')
        .then(data => data.json())
        .then(json => {
            let arr = []

            for (let i = 0; i < json.length; i++) {
                const elem = json[i];

                if (elem.category === cat) {
                    arr.push(elem)
                }
            }

            return arr
        })
}

// Из полученных данных составляем html
function dataToHTML(arr) {
    return arr.map(elem => {
        return `<li class="d-sub-menu__item"><a href="#" class="link d-sub-menu__link">${elem.title}</a></li>`
    }).join('')
}

// Отчистить sub-menu
function clearSubMenu() {
    const subMenu = document.getElementById('sub-menu')
    subMenu.innerHTML = ''
}

// Отчистить d-sub-menu
function clearDSubMenu() {
    const dSubMenu = document.getElementById('d-sub-menu')
    const dSubMenuTitle = document.getElementById('d-sub-menu-title')
    dSubMenu.innerHTML = ''
    dSubMenuTitle.innerText = ''
}

// Аккордеоны
accordions()

function accordions() {

    if (find('.acc._show')) {
        const accBody = find('.acc._show').querySelector('.acc-body')
        find('.acc._show').querySelector('.acc-open').classList.add('_show')
        accBody.style.maxHeight = accBody.scrollHeight + 'px'
    }

    window.addEventListener('click', e => {
        const target = e.target

        if (target.classList.contains('acc-open') || target.closest('.acc-open')) {
            const container = (!target.closest('.acc-body')) ? target.parentElement.parentElement : target.closest('.acc-body')
            const parent = target.closest('.acc')
            const accBody = parent.querySelector('.acc-body')

            parent.classList.toggle('_show')
            target.classList.toggle('_show')

            if (accBody.style.maxHeight) {
                accBody.style.maxHeight = null
                parent.classList.remove('_show')
                target.classList.remove('_show')
            } else {

                if (parent.classList.contains('accordion_container-list')) {
                    const adjacentElems = getSiblings(parent)
                    for (let i = 0; i < adjacentElems.length; i++) {
                        const elem = adjacentElems[i]
                        const elemHeader = elem.querySelector('.acc-open')
                        const elemBody = elem.querySelector('.acc-body')

                        elem.classList.remove('_show')
                        elemHeader.classList.remove('_show')
                        elemBody.style.maxHeight = null
                    }
                }

                accBody.style.maxHeight = accBody.scrollHeight + 'px'
                container.style.maxHeight = parseInt(container.scrollHeight) + accBody.scrollHeight + 'px'
            }
        }
    })
}



// Плейсхолдер текстовых полей
labelTextfield()

function labelTextfield() {
    const textfieldElems = document.querySelectorAll('.form-elem')

    for (let i = 0; i < textfieldElems.length; i++) {
        const parent = textfieldElems[i];
        const input = parent.querySelector('input, textarea')
        const label = parent.querySelector('label')

        input.addEventListener('focus', e => {
            label.classList.add('_change-label')
        })

        input.addEventListener('blur', e => {
            if (input.value === '') {
                label.classList.remove('_change-label')
            }
        })
    }
}