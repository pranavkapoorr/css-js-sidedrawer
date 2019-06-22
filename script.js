function openDrawer() {
   //document.getElementById("myDrawer").style.width = '70%';
   document.getElementById("content").style.marginLeft = '70%';
   document.getElementById("myBackdrop").classList.add('backdrop');
   document.getElementById("myDrawer").classList.add('animate-open');
}
function closeDrawer() {
   document.getElementById("content").style.marginLeft = '0px';
   document.getElementById("myBackdrop").classList.remove('backdrop');
   document.getElementById("myDrawer").classList.remove('animate-open');
   //document.getElementById("myDrawer").style.width = '0px';
}