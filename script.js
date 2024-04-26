new Swiper('.swiper-container',{
	slidesPerView: 1,
	spaceBetween: 20,
	//Стрелки
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//Навигация
	//Буллетыб текущее положениеб прогрессбар
	pagination:{
		el: '.swiper-pagination',
		//Буллеты
		clickable: true,
	},
});
