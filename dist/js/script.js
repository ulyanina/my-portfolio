//previous menu with veil
// window.addEventListener('DOMContentLoaded', () => {
// 	const hamburger = document.querySelector('.hamburger'),
// 		menu = document.querySelector('.menu'),
// 		menuItem = document.querySelectorAll('.menu__links-link'),
// 		veil = document.querySelector('.veil'),
// 		closeBtn = document.querySelector('.menu__close');

// 	hamburger.addEventListener('click', () => {
// 		menu.classList.toggle('menu-active');
// 		veil.classList.toggle('presentation-veil');
// 	});
// 	closeBtn.addEventListener('click', () => {
// 		menu.classList.toggle('menu-active');
// 		veil.classList.toggle('presentation-veil');
// 	});
// 	menuItem.forEach(item => {
//       item.addEventListener('click', () => {
// 			menu.classList.toggle('menu-active');
// 			veil.classList.toggle('presentation-veil');
//       });
//    });
// })

//recent menu
const humburger = document.querySelector('.humburger'),
	menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu__link'),
   closeBtn = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});
closeBtn.addEventListener('click', () => {
   menu.classList.remove('active');
});
menuItem.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove('active');
	});
});

const percent = document.querySelectorAll('.percentage__sup-percent'),
   coloredLine = document.querySelectorAll('.percentage__sub-color');

percent.forEach((item, i) => {
   coloredLine[i].style.width = item.innerHTML;
});

//validation
function validateForms(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
         },
         message: {
            required: true
         },
         policy: {
            required: true
         }
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format('Минимальное количество символов: {0}')
			},
			email: {
				required: 'Пожалуйста, введите свой почтовый адрес',
				email: 'Неправильно введен адрес почты'
         },
         message: {
				required: 'Пожалуйста, опишите задачу'
         },
         policy: {
            required: 'Чтобы отправить сообщение Вы должны согласиться с политикой конфиденциальности'
         }
		}
	});
}
validateForms('#contacts__forms-row');

//Smooth scroll and pageup
$(window).scroll(function () {
	if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

$("a[href='#up']").click(function () {
	const _href = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(_href).offset().up + 'px' });
	return false;
});

//using GSAP, to add event listener
// function aboutAnimation() {
// 	gsap.from('.about__img', {opacity: 0, duration: 2, delay: 1, y: 100});
// 	gsap.from('.about__horizontal', {opacity: 0, duration: 2, delay: 1.5, y: 100});
// 	gsap.from('.column1', {opacity: 0, duration: 2, delay: 2, y: 100});
// 	gsap.from('.column2', {opacity: 0, duration: 2, delay: 2.5, y: 100});
// }		
// aboutAnimation();

// function skillsAnimation() {
// 	gsap.from('.html', {opacity: 0, duration: 1, delay: .5, y: 50});
// 	gsap.from('.css', {opacity: 0, duration: 1, delay: .8, y: 50});
// 	gsap.from('.js', {opacity: 0, duration: 1, delay: 1.1, y: 50});
// 	gsap.from('.sass', {opacity: 0, duration: 1, delay: 1.4, y: 50});
// 	gsap.from('.bem', {opacity: 0, duration: 1, delay: 1.7, y: 50});
// 	gsap.from('.gsap', {opacity: 0, duration: 1, delay: 2, y: 50});
// 	gsap.from('.jquery', {opacity: 0, duration: 1, delay: 2.3, y: 50});
// 	gsap.from('.bootstrap', {opacity: 0, duration: 1, delay: 2.6, y: 50});
// 	gsap.from('.gulp', {opacity: 0, duration: 1, delay: 2.9, y: 50});
// 	gsap.from('.git', {opacity: 0, duration: 1, delay: 3.2, y: 50});
// 	gsap.to('.git', {duration: .5, delay: 4.2,rotate: 0});
// }
// skillsAnimation();

new WOW().init();

const policyAlarm = document.querySelector('.policy');

policyAlarm.addEventListener('click', () => {
	alert('На сегодняшний день данные не собираются!');
});