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

// Поля форм

// let allinputs = findAll('.form-elem');

// for (let i = 0; i < allinputs.length; i++){
//     allinputs[i].addEventListener('click', function(){
//         this.classList.add('active');
//     });
// }

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
// menu()
function menu() {
    const burger = find('.burger')
    const menu = find('.menu');

    // Высота меню
    window.addEventListener('resize', () => {
        const headerHeight = find('.header').clientHeight

        if (window.innerWidth <= 768) {
            menu.style.paddingTop = headerHeight + 'px'
        } else {
            menu.style.paddingTop = 0
        }
    })

    burger.addEventListener('click', (e) => {
        burger.classList.toggle('burger_close')
        menu.classList.toggle('_show')
        bodyLock()
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
            else {
                openModal(modal)
                window.location.hash = dataBtn
            }
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
    if (find('.modal._show')) {
        find('.modal._show').classList.remove('_show')
    }
    
    modal.classList.add('_show')
    bodyLock(true)
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
}


const swiper_slider = new Swiper('.actual_offer__slider', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 20,
});


const swiper_doctors = new Swiper(".our_doctors__slider-main", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    // freeMode: true,
    watchSlidesProgress: true,
});
const swiper_doctors2 = new Swiper(".our_doctors__slider-all", {
    direction: "vertical",
    loop: true,
    spaceBetween: 16,
    slidesPerView: 5,
    slideToClickedSlide: true,
    navigation: {
        nextEl: ".our_doctors__arrow-next",
        prevEl: ".our_doctors__arrow-prev",
    },
    thumbs: {
        swiper: swiper_doctors,
    },
});

const swiper_otzivy = new Swiper('.otzivy_wrapp__slider', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".otzivy__arrow-next",
        prevEl: ".otzivy__arrow-prev",
    }
});


// Аккордеон 
function accord(element) {
    if (element.closest('.accordion_container-list').classList.contains('active')) {
        element.closest('.accordion_container-list').classList.remove('active');
        element.closest('.accordion_container-list').querySelector('.accordion_container-list-content').style.height = 0;
    } else {
        removeAll('.accordion_container-list', 'active');
        document.querySelectorAll('.accordion_container-list-content').forEach(el => el.style = null);
        element.closest('.accordion_container-list').classList.add('active');
        let height = element.closest('.accordion_container-list').querySelector('.accordion_container-list-content__container').offsetHeight;
        element.closest('.accordion_container-list').querySelector('.accordion_container-list-content').style.height = height + 'px';
    }
}
document.querySelectorAll('.accordion_container-list-icons').forEach(i => {
    i.addEventListener('click', e => accord(i));
});