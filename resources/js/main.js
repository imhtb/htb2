//smooth scroll
$('.navbar__menu--link,.navbar__logo--link,#menubar ul li a').on('click', function(){
    $('html,body').animate({
        scrollTop:$($.attr(this,'href')).offset().top
    },1000);
    return false
});
// aos
AOS.init();
// MenuBar
function openMenu(){
    document.getElementById('menubar').style.width="100%";
}
function closeMenu(){
    document.getElementById('menubar').style.width="0";
}