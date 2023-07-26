'use strict';

const html = document.getElementById('slider');
const imagesHtml = html.querySelectorAll('img');
const imagesPath = new Array();
for (const key of imagesHtml) {
	imagesPath.push(key.src);
}

function render(el) {
	html.innerHTML = '';
	html.innerHTML += `
		<ul class="slider__list" style="height: ${Math.round(document.getElementById('slider').parentNode.clientWidth / 1.3333)}px;">
			<li class="slider__item">
				<img class="slider__img" src="${imagesPath[el]}" alt="">
			</li>
		</ul>
		<div class="slider__navigator">
			<div class="slider__button slider__button--prev" onclick="prev(${el})"></div>
			<div class="slider__button slider__button--next" onclick="next(${el})"></div>
		</div>
		<ul class="slider__pagination">
		</ul>
	`;

	for (const key in imagesPath) {
		document.querySelector('.slider__pagination').innerHTML += `
			<li class="slider__pagination-item" onclick="outputsTheTransmitted(${key});"></li>
		`;
	}
}

function prev(el) {
	if (el == 0) {
		render(imagesPath.length - 1);
	} else {
		render(el - 1);
	}
}

function next(el) {
	if (el == imagesPath.length - 1) {
		render(0);
	} else {
		render(el + 1);
	}
}

function outputsTheTransmitted(num) {
	document.querySelector('.slider__item').innerHTML = `<img class="slider__img" src="${imagesPath[num]}" alt="">`;
	
	const el = document.querySelectorAll('.slider__pagination-item');
	el.forEach((element) => {
		if (element.classList.contains('slider__pagination-item--active')) {
			element.classList.remove('slider__pagination-item--active');
		}
	});
	document.querySelectorAll('.slider__pagination-item')[num].classList.add('slider__pagination-item--active');
}

render(0);

// передавать желаемое соотношение высоты к ширине
