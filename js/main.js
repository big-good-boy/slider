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
			<li class='slider__item'>
				<img class="slider__img" src='${imagesPath[el]}' alt=''>
			</li>
		</ul>
		<div class="slider__navigator">
			<div class="slider__button slider__button--prev" onclick="prev(${el})"></div>
			<div class="slider__button slider__button--next" onclick="next(${el})"></div>
		</div>
		<div class="slider__pagination"></div>
	`;
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

render(0);

// console.log(document.querySelector('div').clientWidth);
console.log(document.getElementById('slider').parentNode.clientWidth);
console.log(800 / 1.3333);