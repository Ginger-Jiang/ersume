// loding
setTimeout(() => {
  var loding = document.getElementById('loding')
  loding.classList.remove('active')
}, 1000);


window.onscroll = function (e) {
  let element = document.getElementById('topNavBar')
  let scrollY = window.scrollY
  if (scrollY > 0) {
    element.classList.add('sticky')
  } else {
    element.classList.remove('sticky')
  }
}