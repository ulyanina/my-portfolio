//menu
window.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu__links-link'),
		veil = document.querySelector('.veil'),
		closeBtn = document.querySelector('.menu__close');

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('menu-active');
		veil.classList.toggle('presentation-veil');
	});
	closeBtn.addEventListener('click', () => {
		menu.classList.toggle('menu-active');
		veil.classList.toggle('presentation-veil');
	});
	menuItem.forEach(item => {
      item.addEventListener('click', () => {
			menu.classList.toggle('menu-active');
			veil.classList.toggle('presentation-veil');
      });
   });
})

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