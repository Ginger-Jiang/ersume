// loding
setTimeout(() => {
  var loding = document.getElementById('loding')
  loding.classList.remove('active')
}, 1000);

// topNavBar
window.onscroll = function (e) {
  let element = document.getElementById('topNavBar')
  let scrollY = window.scrollY
  if (scrollY > 0) {
    element.classList.add('sticky')
  } else {
    element.classList.remove('sticky')
  }
}

// submenu
let aTags = document.querySelectorAll('nav > ul > li')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onmouseenter = function (e) {
    e.currentTarget.classList.add('active')
  }
  aTags[i].onmouseleave = function (e) {
    e.currentTarget.classList.remove('active')
  }
}