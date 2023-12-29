/*const web = document.getElementsByClassName('web')[0]; // 보일 영역
const container = document.getElementsByClassName('container');
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지

window.addEventListener('wheel',(e)=>{
e.preventDefault();
if(e.deltaY > 0){
page++;
document.body.style.overscrollBehaviorY = 1;
}else if(e.deltaY < 0){
page--;
};
if(page < 0){
page=0;
}else if(page > lastPage){
page = lastPage;
};
console.log(e.deltaY)
web.style.top = page * -100 + 'vh';
},{passive:false}); // 디폴트 기능 제거 - 스크롤

function test(){  
    $("#about").load(window.location.href + "#about");
}*/

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});
var $html = $("html");
 
var page = 1;
 
var lastPage = $(".container").length;
 
$html.animate({scrollTop:0},10);
$(window).on("wheel", function(e){
 

 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});