 // luu 3 button vao buyBtns 
 const buyBtns = document.querySelectorAll('.js-buy-ticket')
 // lay the div container modal
 const modal = document.querySelector('.js-modal');
 // lay the div chua icon X 
 const modalClose = document.querySelector('.js-modal-close');
 const modalContainer = document.querySelector('.js-modal-container')
 // ham hien thi modal mua ve
 function ShowBuyTickets() {
   // classList -> library : add,remove,... 
   modal.classList.add('open');
 }
 // ham an modal 
 function hideBuyTickets() {
   modal.classList.remove('open');
 }
 // lap qua tung the button 
 for (const buyBtn of buyBtns) {
   // khi click vao button 
   buyBtn.addEventListener('click', ShowBuyTickets)
 }
 // bam vao X -> remove modal 
 modalClose.addEventListener('click', hideBuyTickets)
 //bam vao khoang khong -> dong modal
 modal.addEventListener('click', hideBuyTickets);
 // ba vao modal se ko bi dong modal 
 modalContainer.addEventListener('click', function (event) {
   event.stopPropagation();
 })

// dong mo menu tren mobile
 var header = document.getElementById("header");
 var mobileMenu = document.querySelector(".mobile-menu-btn");
 headerHight = header.clientHeight
 mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHight;
    if (isClose) {
      header.style.height = "auto"; //  mo menu
    } else {
      header.style.height = "46px";
 }
}

// dong menu khi click vao cac the a co href
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i]; // lay ra tung the a
  menuItem.onclick = function (event) {
    // kiem tra xem the dang click co phai la the a co subnav hay khong{a co the subnav lien ke}
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('Subnav'); 
    if (isParentMenu) {
      event.preventDefault(); // chan su kien mac dinh cua the a
    } else {    
      header.style.height = "46px"; // dong menu
    }
  } 
}