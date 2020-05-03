const homePage = document.querySelector('.homepage');
const navLinks = document.querySelectorAll('.nav-link');
const contents = document.querySelector('.contents');

console.log(clickLink);
  for (var i = 0; i < navLinks.length; i++) {
    if(navLinks[i].innerText.toLowerCase() === clickLink) {
      navLinks[i].classList.add('active');

      let req = new XMLHttpRequest();
      let url;
      switch(clickLink) {
        case "home":
          url = "/welcome"
          break;
        case "category":
          url = "/category/new"
          break;
        case "bookmarks":
          url = "/bookmarkLists"
          break;
        case "highlights":
          // code block
          url = "/highlightLists"
          break;
      };

      let resCategoryHandler = function() {
        console.log("responseText");
        console.log(this.responseText)
        contents.innerHTML = this.responseText;
      };

      req.addEventListener('load', resCategoryHandler);
      req.open("GET", url);
      console.log(url);
      req.send();
    } else {
      navLinks[i].classList.remove('active');
    };
  };
