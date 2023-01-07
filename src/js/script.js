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

//buttons
// const button = document.querySelectorAll('.presentation__button');

// button.addEventListener('click', () => {
//    button.classList.toggle('active');
// });

// button.forEach(item => {
// 	item.addEventListener('click', () => {
// 		button.classList.toggle('active');
// 	});
// });