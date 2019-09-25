$(document).ready(function(){
	let list = $('#resList');
	let bar = $('.fa-bars');
	list.hide();
	bar.click(function(){
		list.slideToggle();
	});
	$('body').hide();
	$('body').fadeIn(1000);
});
let tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

const showPanel = panelIndex => {
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
showPanel(0);