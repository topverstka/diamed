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
    intro.play()
        .catch(e => {
            intro.remove();
            let src = introBG.getAttribute('data-src-end');
            introBG.setAttribute('src', src);
            console.log('Ошибка воспроизведения видео');
        })
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

// Отправить заявку на прием врача
submitAppointment()

function submitAppointment() {
    const form = document.getElementById('make_appointment')
    const textfieldElems = form.querySelectorAll('input._req')

    for (let i = 0; i < textfieldElems.length; i++) {
        const textfield = textfieldElems[i]
        const parent = textfield.parentElement

        textfield.addEventListener('input', e => {
            parent.classList.remove('error')
        })
    }

    form.addEventListener('submit', async e => {
        e.preventDefault()

        if (validForm(form)) {
            const formData = new FormData()
            const action = form.getAttribute('action')

            let response = await fetch(action, {
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                alert('Заявка отправлена!')
            } else {
                alert('Ошибка с сервером! Заявка не отправлена!')
            }
        }
    })
}

// Отправить заявку на консультацию
submitConsultation()

function submitConsultation() {
    const form = document.getElementById('form_consultation')

    if (form) {
        const textfieldElems = form.querySelectorAll('input._req')

        for (let i = 0; i < textfieldElems.length; i++) {
            const textfield = textfieldElems[i]
            const parent = textfield.parentElement

            textfield.addEventListener('input', e => {
                parent.classList.remove('error')
            })
        }

        form.addEventListener('submit', async e => {
            e.preventDefault()

            if (validForm(form)) {
                const formData = new FormData()
                const action = form.getAttribute('action')

                let response = await fetch(action, {
                    method: 'POST',
                    body: formData
                })

                if (response.ok) {
                    alert('Заявка отправлена!')
                } else {
                    alert('Ошибка с сервером! Заявка не отправлена!')
                }
            }
        })
    }
}

function validForm(form) {
    const textfieldElems = form.querySelectorAll('input._req')
    let con = true

    for (let i = 0; i < textfieldElems.length; i++) {
        const textfield = textfieldElems[i]

        if (textfield.value.trim() === '') {
            showError(textfield, 'Поле не должно быть пустым')
            con = false
        } else {
            hideError(textfield)

            // Поле email
            if (textfield.name === 'email') {
                if (!validateEmail(textfield.value)) {
                    showError(textfield, 'Введен некорректный email')
                    con = false
                }
            }

            // Телефон
            if (textfield.name === 'phone') {
                if (textfield.value.replace('+', '').length != 11) {
                    showError(textfield, 'Телефонный номер должен состоять из 11-ти цифр')
                    con = false
                } else {
                    hideError(textfield)
                }
            }
        }
    }

    return con
}

function validateEmail(email) {
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

function showError(textfield, textError) {
    const parent = textfield.parentElement
    let error = parent.querySelector('.form-elem__error')

    if (!error) {
        error = document.createElement('p')

        error.classList.add('form-elem__error')
        parent.append(error)
    }

    parent.classList.add('error')
    error.innerHTML = textError
}

function hideError(textfield) {
    const parent = textfield.parentElement
    const error = parent.querySelector('.form-elem__error')

    if (error) {
        error.remove()
        parent.classList.remove('error')
    }
}

// В инпуте могут быть только цифры если у textfield есть класс only-digit
onlyDigit()

function onlyDigit() {
    const textfieldElems = document.querySelectorAll('.only-digit')

    for (let i = 0; i < textfieldElems.length; i++) {
        const input = textfieldElems[i].querySelector('input')

        input.addEventListener('keypress', function(e) {
            const inputValue = e.charCode;

            if (!(inputValue >= 48 && inputValue <= 57) && (inputValue != 43 && inputValue != 0 && inputValue != 40 && inputValue != 41 && inputValue != 45)) {
                e.preventDefault();
            }
        });
    }
}

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
        }
    },
});


const swiper_articles = new Swiper('.service_articles__slider', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 2,


    breakpoints: {
        1200: {
            slidesPerView: 2
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
        }
    },

    navigation: {
        nextEl: '.service_articles__arrow-next',
        prevEl: '.service_articles__arrow-prev',
    },
});

// const swiper_doctors = new Swiper(".tabs__block[data-tab-body='our_features'] .our_doctors__slider-main", {
//     direction: "vertical",
//     loop: true,
//     slidesPerView: 1,
//     allowTouchMove: false,
//     observer: true,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     // freeMode: true,
//     watchSlidesProgress: true,
// });


// swiper_doctors.on('slideChange', e => {
//     const slider = e.wrapperEl
//     const slideActive = slider.querySelector('.swiper-slide-next')
//     const elemName = document.getElementById('doctor-name')
//     const elemPost = document.getElementById('doctor-post')

//     elemName.innerText = slideActive.dataset.doctorName
//     elemPost.innerText = slideActive.dataset.doctorPost
// })

// const swiper_doctors__1 = new Swiper(".tabs__block[data-tab-body='our_indications'] .our_doctors__slider-main", {
//     direction: "vertical",
//     loop: true,
//     slidesPerView: 1,
//     observer: true,
//     allowTouchMove: false,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     // freeMode: true,
//     watchSlidesProgress: true,
// });

// swiper_doctors__1.on('slideChange', e => {
//     const slider = e.wrapperEl
//     const slideActive = slider.querySelector('.swiper-slide-next')
//     const elemName = document.getElementById('doctor-name')
//     const elemPost = document.getElementById('doctor-post')

//     elemName.innerText = slideActive.dataset.doctorName
//     elemPost.innerText = slideActive.dataset.doctorPost
// })

// const swiper_doctors__2 = new Swiper(".tabs__block[data-tab-body='our_cost'] .our_doctors__slider-main", {
//     direction: "vertical",
//     loop: true,
//     slidesPerView: 1,
//     observer: true,
//     allowTouchMove: false,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     // freeMode: true,
//     watchSlidesProgress: true,
// });

// swiper_doctors__2.on('slideChange', e => {
//     const slider = e.wrapperEl
//     const slideActive = slider.querySelector('.swiper-slide-next')
//     const elemName = document.getElementById('doctor-name')
//     const elemPost = document.getElementById('doctor-post')

//     elemName.innerText = slideActive.dataset.doctorName
//     elemPost.innerText = slideActive.dataset.doctorPost
// })

// const swiper_doctors2 = new Swiper(".tabs__block[data-tab-body='our_features'] .our_doctors__slider-all", {
//     observeParents: true,
//     breakpoints: {
//         930: {
//             direction: "vertical",
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 'auto',
//             slideToClickedSlide: true,
//         },
//         769: {
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 5,
//             slideToClickedSlide: true,
//             slidesPerView: 'auto',
//         },
//         500: {
//             loop: true,
//             spaceBetween: 20,
//             slidesPerView: 4.7,
//             slideToClickedSlide: true,
//         },
//         0: {
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 4.6,
//             slideToClickedSlide: true,
//         }
//     },
//     navigation: {
//         nextEl: ".tabs__block[data-tab-body='our_features'] .our_doctors__arrow-next",
//         prevEl: ".tabs__block[data-tab-body='our_features'] .our_doctors__arrow-prev",
//     },
//     thumbs: {
//         swiper: swiper_doctors,
//     },
// });


// if (swiper_doctors2.$el) {
//     setTimeout(() => swiper_doctors2.update(), 9);
// }


// const swiper_doctors2__1 = new Swiper(".tabs__block[data-tab-body='our_indications'] .our_doctors__slider-all", {
//     observeParents: true,
//     breakpoints: {
//         930: {
//             direction: "vertical",
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 'auto',
//             slideToClickedSlide: true,
//         },
//         769: {
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 5,
//             slideToClickedSlide: true,
//             slidesPerView: 'auto',
//         },
//         500: {
//             loop: true,
//             spaceBetween: 20,
//             slidesPerView: 4.7,
//             slideToClickedSlide: true,
//         },
//         0: {
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 4.6,
//             slideToClickedSlide: true,
//         }
//     },
//     navigation: {
//         nextEl: ".tabs__block[data-tab-body='our_indications'] .our_doctors__arrow-next",
//         prevEl: ".tabs__block[data-tab-body='our_indications'] .our_doctors__arrow-prev",
//     },
//     thumbs: {
//         swiper: swiper_doctors__1,
//     },
// });

// const swiper_doctors2__2 = new Swiper(".tabs__block[data-tab-body='our_cost'] .our_doctors__slider-all", {
//     observeParents: true,
//     breakpoints: {
//         930: {
//             direction: "vertical",
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 'auto',
//             slideToClickedSlide: true,
//         },
//         769: {
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 5,
//             slideToClickedSlide: true,
//             slidesPerView: 'auto',
//         },
//         500: {
//             loop: true,
//             spaceBetween: 20,
//             slidesPerView: 4.7,
//             slideToClickedSlide: true,
//         },
//         0: {
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 4.6,
//             slideToClickedSlide: true,
//         }
//     },
//     navigation: {
//         nextEl: ".tabs__block[data-tab-body='our_cost'] .our_doctors__arrow-next",
//         prevEl: ".tabs__block[data-tab-body='our_cost'] .our_doctors__arrow-prev",
//     },
//     thumbs: {
//         swiper: swiper_doctors__2,
//     },
// });

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
                tab.classList.add('_active');
                tabBlockActive(tab);
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

tabBlockActive();

function tabBlockActive(data) {
    if (data) {
        if (data.closest('.our_doctors')) {
            data.closest('.our_doctors').querySelectorAll('.tabs__block').forEach(i => i.classList.remove('_active'));
        }
    }
    let tabActive = document.querySelectorAll('.tab._active'),
        blockElems = document.querySelectorAll('.tabs__block');

    removeAll(blockElems, '_show');

    [...tabActive].filter(i => {
        if (document.querySelector(`[data-tab-body=${i.getAttribute('data-tab')}]`)) {
            //    console.log(document.querySelector(`[data-tab-body=${i.getAttribute('data-tab')}]`));
            document.querySelectorAll(`[data-tab-body=${i.getAttribute('data-tab')}]`).forEach(i => i.classList.add('_show'));
        }
    });
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
            if ((window.innerWidth > 920 && !target.classList.contains('sub-menu__link')) || window.innerWidth <= 920) {
                const container = (!target.closest('.acc-body')) ? target.parentElement.parentElement : target.closest('.acc-body')
                const parent = target.closest('.acc')
                const accBody = parent.querySelector('.acc-body')
                const menuLeft = container.closest('.menu-left-mobile')

                parent.classList.toggle('_show')
                target.classList.toggle('_show')

                if (accBody.style.maxHeight) {
                    accBody.style.maxHeight = null
                    container.style.maxHeight = parseInt(container.scrollHeight) + accBody.scrollHeight + 'px'
                    parent.classList.remove('_show')
                    target.classList.remove('_show')
                } else {

                    if (
                        parent.classList.contains('accordion_container-list') ||
                        parent.parentElement.parentElement.classList.contains('menu-left-mobile')
                    ) {
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

                    if (parent.closest('.menu-left__item')) {
                        parent.closest('.menu-left__item').style.maxHeight = 'none'
                    }
                    if (container.classList.contains('menu-left__item-list')) {
                        container.style.maxHeight = 'none'
                    }
                }
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

// Показать подменю
showSubMenu()

function showSubMenu() {

    if (innerWidth < 920) {
        const itemElems = findAll('[data-sub-menu]')

        for (let i = 0; i < itemElems.length; i++) {
            const item = itemElems[i];

            item.addEventListener('click', e => {
                const dataMenu = item.dataset.subMenu
                const subMenu = find(`[data-menu=${dataMenu}]`)

                removeAll('.d-sub-menu__block', '_show')
                removeAll('.sub-menu__link', '_show')
                removeAll('[data-menu]', '_show')
                subMenu.classList.add('_show')
            })
        }
    } else {
        const menu = find('.menu')
        menu.addEventListener('mousemove', e => {
            const target = e.target

            if (target.getAttribute('data-sub-menu')) {
                const targetData = target.dataset.subMenu
                const subMenu = find(`[data-menu=${targetData}]`)

                if (!subMenu.classList.contains('_show')) {
                    removeAll('.d-sub-menu__block', '_show')
                    removeAll('.sub-menu__link', '_show')
                    removeAll('[data-menu]', '_show')
                    subMenu.classList.add('_show')
                }
            }
        })
    }
}

// Открытие d-sub-menu
if (window.innerWidth > 920) showDSubMenu()

function showDSubMenu() {
    const menu = find('.menu')

    menu.addEventListener('mousemove', e => {
        const target = e.target

        if (target.getAttribute('data-d-sub-menu') && target.classList.contains('sub-menu__link')) {
            const targetData = target.dataset.dSubMenu
            const dSubMenu = find(`.d-sub-menu__block[data-d-sub-menu=${targetData}]`)

            if (!dSubMenu.classList.contains('_show')) {
                removeAll('.d-sub-menu__block', '_show')
                dSubMenu.classList.add('_show')
            }
        }
    })
}



let arr_variable = [];
document.querySelectorAll('.our_doctors__right-slider .tabs__block').forEach(i => {
    arr_variable.push('.tabs__block[data-tab-body=' + i.dataset.tabBody + ']');
});
$(arr_variable).each((i, el) => {
    let $carousel = $(el).find('.carousel').flickity();

    $(el).find('.our_doctors__arrow-next').on('click', function(e) {
        flkty.next();
    });

    $(el).find('.our_doctors__arrow-prev').on('click', function(e) {
        flkty.previous();
    });

    let $carouselNav = $(el).find('.carousel-nav');
    let $carouselNavCells = $carouselNav.find('.carousel-cell');

    $carouselNav.on('click', '.carousel-cell', function(event) {
        let index = $(event.currentTarget).index();
        $carousel.flickity('select', index);
    });

    let flkty = $carousel.data('flickity');
    let navTop = $carouselNav.position().top;
    let navCellHeight = $carouselNavCells.height();
    let navHeight = $carouselNav.height();


    if (window.innerWidth < 768) {
        $(el).find('.carousel-nav').attr('data-flickity', `{"asNavFor": "${el + ' .carousel-main' }", "pageDots": false, "imagesLoaded": true, "contain": true,  "draggable": true}`);
    }

    $carousel.on('select.flickity', function() {

        $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
        let $selected = $carouselNavCells.eq(flkty.selectedIndex)
            .addClass('is-nav-selected');


        let scrollY = $selected.position().top +
            $carouselNav.scrollTop() - (navHeight + navCellHeight) / 1.5;
        $carouselNav.animate({
            scrollTop: scrollY
        });

    });


    $carousel.on('change.flickity', function(event, index) {
        const elemName = document.getElementById('doctor-name');
        const elemPost = document.getElementById('doctor-post');

        elemName.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-name');
        elemPost.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-post');
    });

    document.querySelectorAll('.our_doctors__right-slider .tabs__block:not(._show)').forEach(i => {
        i.classList.add('_active');
    });


    setTimeout(function() { flkty.resize(); }, 100);
});