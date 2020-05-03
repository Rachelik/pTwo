// const homePage = document.querySelector('.homepage');
// const navLinks = document.querySelectorAll('.nav-link');
// const contents = document.querySelector('.contents');

// console.log(clickLink);
// // console.log(secondClickLink);
//   for (var i = 0; i < navLinks.length; i++) {
//     if(navLinks[i].innerText.toLowerCase() === clickLink) {
//       navLinks[i].classList.add('active');

//       let req = new XMLHttpRequest();
//       let url;
//       if(clickLink === "home") {
//         url = "/welcome";
//       } else if (clickLink === "category") {
//         url = "/category/new"
//       } else if (clickLink === "bookmarks") {
//         url = "/bookmarkLists"
//       } else if (clickLink === "highlights") {
//         url = "/highlightLists"
//       };

//       let resCategoryHandler = function() {
//         contents.innerHTML = this.responseText;
//       };
//       req.addEventListener('load', resCategoryHandler);
//       req.open("GET", url);
//       req.send();
//     } else {
//       navLinks[i].classList.remove('active');
//     };
//   };



