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

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.intro__media--pc').forEach(i => i.play());
});

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


window.addEventListener('DOMContentLoaded', () => {
    if (intro) {
        introBG.classList.add('active');
        let src = introBG.getAttribute('data-src-end');
        intro.addEventListener('canplaythrough', function(e) {
            intro.play().then(function() {
                intro.play();
            }).catch(function(err) {
                intro.remove();
                introBG.setAttribute('src', src);
                console.log('Ошибка воспроизведения видео');
            })

            // intro.play().catch((err) => {
            //     intro.remove();
            //     introBG.setAttribute('src', src);
            // });
            intro.classList.add('active');
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
        body.classList.toggle('_lock-menu');
    })

    window.addEventListener('click', e => {
        const target = e.target

        if (find('.menu._show') && !target.classList.contains('menu__wrap') && !target.closest('.menu__wrap') && !target.classList.contains('menu__header') && !target.closest('.menu__header') && !target.classList.contains('burger') && !target.closest('.burger')) {
            menu.classList.remove('_show')
            burger.classList.remove('burger_close')
            bodyLock(false)
            body.classList.remove('_lock-menu');
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



// sticky header


window.onload = function() {
    var stickyHeader = d.querySelector('.sticky');
    var headerOffset = 100;

    window.onscroll = function() {
        // body.scrollTop is deprecated and no longer available on Firefox
        var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (bodyScrollTop > 100) {
            stickyHeader.classList.add('fixed');
        } else {
            stickyHeader.classList.remove('fixed');
        }
    };
};





//sliders

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


const swiper_review = new Swiper('.review_wrapp__slider', {
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
                swipeRoller(tabList);
                if (tab.closest('.form-class')) {
                    tab.closest('.form-class').querySelectorAll('input._req').forEach(el => {
                        console.log(el)
                        hideError(el)
                    });
                }
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

function get_name_browser() {

    let ua = navigator.userAgent;

    if (ua.match(/Opera|OPR\//)) {
        return 'Opera';
    } else {
        if (ua.search(/Chrome/) > 0) return 'Chrome';
        if (ua.search(/Firefox/) > 0) return 'Firefox';
        if (ua.search(/Safari/) > 0) return 'Safari';
        if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    }


    return 'Не определен';
}

// пример использования
let browser = get_name_browser();


// swipeRoller()
// function swipeRoller(tabList) {
//     const roller = tabList.querySelector('.tab__roller')
//     const tabActive = tabList.querySelector('.tab._active')

//     roller.style.width = tabActive.offsetWidth + 'px' // Определяем ширину ползунка
//     roller.style.transform = `translateX(${tabActive.offsetLeft}px)` // Определяем отступ слева у ползунка


//     // console.log(tabActive.getBoundingClientRect().left, tabActive.offsetLeft)

//     if (browser === 'Safari') {
//         roller.classList.add('roller-safari');
//         if (tabActive.offsetLeft === 0) {
//             roller.style.transform = `translateX(0)`
//         } else {
//             roller.style.transform = `translateX(${tabActive.offsetLeft}px)` // Определяем отступ слева у ползунка
//         }
//     } else {
//         if (tabActive.offsetLeft === 0) {
//             roller.style.transform = `translateX(0)`
//         } else {
//             roller.style.transform = `translateX(${tabActive.offsetLeft}px)` // Определяем отступ слева у ползунка
//         }
//     }


// }

function swipeRoller(tabList) {
    const roller = tabList.querySelector('.tab__roller')
    const tabActive = tabList.querySelector('.tab._active')

    roller.style.width = tabActive.offsetWidth + 'px' // Определяем ширину ползунка
        //roller.style.left = tabActive.offsetLeft + 'px' // Определяем отступ слева у ползунка


    switch (browser) {
        case 'Chrome':
            // if (roller.closest('.first-time')) {
            //     roller.closest('.first-time').classList.add('safari-class')
            // }
            if (tabActive.offsetLeft === 0) {
                roller.style.transform = 'translateX(1px)'
            } else {
                roller.style.transform = `translateX(${tabActive.offsetLeft}px)` // Определяем отступ слева у ползунка
            }
            break;
        case 'Safari':
            // if (roller.closest('.first-time')) {
            //     roller.closest('.first-time').classList.add('safari-class')
            // }
            if (roller.closest('.section_information_services')) {
                if (tabActive.offsetLeft === 0) {
                    roller.style.transform = 'translateX(0)'
                } else {
                    roller.style.transform = `translateX(${tabActive.offsetLeft}px)` // Определяем отступ слева у ползунка
                }
            } else {
                if (tabActive.offsetLeft === 0) {
                    roller.style.transform = 'translateX(1px)'
                } else {
                    roller.style.transform = `translateX(${tabActive.offsetLeft}px)` // Определяем отступ слева у ползунка
                }
            }
            break;
        case 'Firefox':
            if (roller.closest('.section_information_services')) {
                if (tabActive.offsetLeft === 0) {
                    roller.style.left = '1px'
                } else {
                    roller.style.left = tabActive.offsetLeft + 'px' // Определяем отступ слева у ползунка
                }
            } else {
                if (tabActive.offsetLeft === 0) {
                    roller.style.left = '1px'
                } else {
                    roller.style.left = tabActive.offsetLeft + 1 + 'px' // Определяем отступ слева у ползунка
                }
            }
            break;
        default:
            if (tabActive.offsetLeft === 0) {
                roller.style.left = 0
            } else {
                roller.style.left = tabActive.offsetLeft + 'px' // Определяем отступ слева у ползунка
            }
            break;

    }

    // if (browser === 'Safari') {
    //     roller.classList.add('roller-safari');
    //     if (tabActive.offsetLeft === 0) {
    //         roller.style.left = '1px'
    //     } else {
    //         roller.style.left = tabActive.offsetLeft + 'px' // Определяем отступ слева у ползунка
    //     }
    // } else {
    //     if (tabActive.offsetLeft === 0) {
    //         roller.style.left = 0
    //     } else {
    //         roller.style.left = tabActive.offsetLeft + 'px' // Определяем отступ слева у ползунка
    //     }
    // }


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


                    setTimeout(() => {
                        parent.classList.remove('_show');
                        target.classList.remove('_show');
                    }, 500);

                    if (accBody.closest('.menu')) {
                        accBody.style.maxHeight = null;
                        container.style.maxHeight = parseInt(container.scrollHeight) + accBody.scrollHeight + 'px';
                    } else {
                        setTimeout(function() {
                            accBody.style.maxHeight = null;
                            container.style.maxHeight = parseInt(container.scrollHeight) + accBody.scrollHeight + 'px';
                        }, 250);
                    }

                } else {

                    if (parent.classList.contains('accordion_container-list') || parent.parentElement.parentElement.classList.contains('menu-left-mobile')) {
                        const adjacentElems = getSiblings(parent)
                        for (let i = 0; i < adjacentElems.length; i++) {
                            const elem = adjacentElems[i]
                            const elemHeader = elem.querySelector('.acc-open')
                            const elemBody = elem.querySelector('.acc-body')


                            elem.classList.remove('_show')
                            elemHeader.classList.remove('_show')
                            setTimeout(function() {
                                elemBody.style.maxHeight = null
                            }, 250)
                        }
                    }


                    accBody.style.maxHeight = accBody.scrollHeight + 'px';
                    container.style.maxHeight = parseInt(container.scrollHeight) + accBody.scrollHeight + 'px';



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
            label.classList.add('_change-label');
            if (e.target.id === 'datetimepicker2' || e.target.id === 'datetimepicker1') {
                if (input.value === '') {
                    input.value = ' ';
                }
            }

            if (e.target.id === 'datetimepicker2') {
                input.classList.add('_focus_input');
            }
        })


        input.addEventListener('blur', e => {
            if (input.value === '') {
                label.classList.remove('_change-label');
                input.classList.remove('_focus_input');
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
                    removeAll('[data-sub-menu]', '_active')
                    removeAll('.menu__link', '_active')
                    removeAll('.sub-menu__link', '_active')
                    subMenu.classList.add('_show')
                    target.classList.add('_active')
                }
            }


            if (!target.getAttribute('data-sub-menu') && target.classList.contains('menu__link')) {
                removeAll('[data-menu]', '_show')
            }

            if (!target.getAttribute('data-d-sub-menu') && target.classList.contains('sub-menu__link')) {
                removeAll('[data-d-sub-menu]', '_show')
            }

            if (!target.classList.contains('_active') && e.target.classList.contains('menu__link')) {
                removeAll('.menu__link', '_active')
                target.classList.add('_active')
            }


            if (target.getAttribute('data-d-sub-menu') && !e.target.classList.contains('d-sub-menu__block')) {
                removeAll('.sub-menu__link', '_active')
                target.classList.add('_active')

            }

            // if (target.dataset.dSubMenu) {
            if (!target.classList.contains('_active') && e.target.classList.contains('sub-menu__link')) {
                removeAll('.sub-menu__link', '_active')
                target.classList.add('_active')
            }
            //}
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


/* Слайдер в секции врачей */
function size_window() {
    if (window.innerWidth < 1250) {
        return true;
    } else {
        return false
    }
}
let arr_variable = [];
document.querySelectorAll('.our_doctors__right-slider .tabs__block').forEach(i => {
    arr_variable.push('.tabs__block[data-tab-body=' + i.dataset.tabBody + ']');
});
$(arr_variable).each((i, el) => {
    let $carousel = $(el).find('.carousel').flickity({ fade: true });

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
    let scrollY = 0;

    if (window.innerWidth < 993) {
        $(el).find('.carousel-nav').attr('data-flickity', `{"asNavFor": "${el + ' .carousel-main' }", "pageDots": false, "imagesLoaded": true, "contain": true, "draggable": true}`);
    }

    $carousel.on('select.flickity', function() {

        $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
        let $selected = $carouselNavCells.eq(flkty.selectedIndex)
            .addClass('is-nav-selected');





        if (size_window()) {
            if (((navHeight - navCellHeight)) < $selected.position().top) {
                scrollY += navCellHeight + 20;
                $carouselNav.animate({
                    scrollTop: scrollY
                });
            } else if (Math.sign($selected.position().top) === -1 || $selected.position().top <= 20) {
                scrollY -= navCellHeight;
                $carouselNav.animate({
                    scrollTop: scrollY
                });
            }

        } else {
            if (((navHeight - navCellHeight + 16)) < $selected.position().top) {
                scrollY += navCellHeight;
                $carouselNav.animate({
                    scrollTop: scrollY
                });
            } else if (Math.sign($selected.position().top) === -1) {
                scrollY -= navCellHeight;
                $carouselNav.animate({
                    scrollTop: scrollY
                });
            }

        }



        // if (flkty.selectedIndex < Math.ceil(flkty.cells.length)) {
        //     let scrollY = $selected.position().top +
        //         $carouselNav.scrollTop() - (navHeight - navCellHeight);
        //     $carouselNav.animate({
        //         scrollTop: scrollY
        //     });
        // } else {
        //     let scrollY = $selected.position().top -
        //         $carouselNav.scrollTop() + (navHeight - navCellHeight);
        //     $carouselNav.animate({
        //         scrollTop: scrollY
        //     });
        //     console.log($selected, 'small')
        // }

        //   console.log(flkty.selectedIndex, flkty.cells.length, flkty.selectedElements)

    });


    $carousel.on('change.flickity', function(event, index) {
        const elemName = document.getElementById('doctor-name');
        const elemPost = document.getElementById('doctor-post');
        const stag = document.querySelector('#doctor-stag span');
        const graduate = document.getElementById('doctor-graduate');
        const diplom = document.getElementById('doctor-diplom');


        elemName.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-name');
        elemPost.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-post');

        if (stag) {
            stag.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-work');
            graduate.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-graduate');
            diplom.innerText = $carouselNavCells.eq(flkty.selectedIndex).data('doctor-diplom');
        }


        if (flkty.selectedIndex === flkty.cells.length - 1) {
            $(el).find('.our_doctors__arrow-next').attr('disabled', 'disabled');
        } else {
            $(el).find('.our_doctors__arrow-next').removeAttr('disabled');
        }
        if (flkty.selectedIndex === 0) {
            $(el).find('.our_doctors__arrow-prev').attr('disabled', 'disabled');
        } else {
            $(el).find('.our_doctors__arrow-prev').removeAttr('disabled');
        }


    });



    document.querySelectorAll('.our_doctors__right-slider .tabs__block:not(._show)').forEach(i => {
        i.classList.add('_active');
    });


    setTimeout(function() { flkty.resize(); }, 100);
});

document.querySelector('.form-elem-date').addEventListener('click', () => {
    datePicker.show();
});

document.querySelector('.form-elem-time').addEventListener('click', () => {
    timePicker.show();
});