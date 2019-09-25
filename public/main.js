$(document).ready(function(){
	let list = $('#resList');
	let bar = $('.fa-bars');
	list.hide();
	bar.click(function(){
		list.slideToggle();
	});
	$('body').hide();
	$('body').fadeIn(1000);

	('.btn-primary').click(() => {
			alert('Sucess!');
			const name = $('.name').val();
			const email = 'playbox8g@gmail.com';
			let emailText = $('textarea').val();
			let varData = 'name=' + name + ' email=' + email;
			console.log(varData);
			$.ajax({
				type: 'POST',
				url: 'php.php',
				data: varData,
				sucess: () => {
					alert('It was a success!');
				}
			});
		});
});
let count = 1;
const slideshow = () => {
	let img1 = document.querySelector('.img1');
	let img2 = document.querySelector('.img2');
	let img3 = document.querySelector('.img3');

	if (count == 1) {
		img1.style.display = 'block';
		img2.style.display = 'none';
		img3.style.display = 'none';
		count++;
	}
	else if (count == 2) {
		img2.style.display = 'block';
		img1.style.display = 'none';
		img3.style.display = 'none';
		count++;
	}
	else if (count == 3) {
		img3.style.display = 'block';
		img2.style.display = 'none';
		img1.style.display = 'none';
		count = 1;
	}
	var T = setTimeout(slideshow, 3000);
}
slideshow();