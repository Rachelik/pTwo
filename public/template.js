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
          url = "/cats"
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
      // req.send(JSON.stringify(this.responseText));
        req.send();

    } else {
      navLinks[i].classList.remove('active');
    };
  };

  if (clickLink === "category") {
    const newCatBtn = document.querySelector('.new-cat-btn');
    const allList = document.querySelector('.all-list');
    const addNew = document.querySelector('.add-new');
    const catFormSection = document.querySelector('.cat-form-section');
    const inputGroup = document.querySelector('.input-group');


    const newCatBtnHandler = (event) => {
      console.log(this)
      allList.classList.add("hidden");
      newCatBtn.classList.add("hidden");
      inputGroup.classList.add("hidden");

      let request = new XMLHttpRequest();
      let responseHandler = function() {
        catFormSection.innerHTML = this.responseText;
      };

      request.addEventListener('load', responseHandler);

      let url = "/categories/new";
      request.open("GET", url);
      request.send();
    };
    newCatBtn.addEventListener('click', newCatBtnHandler);
  }


// const navClickHandler = (event) => {
//   console.log(event.target);

//   let req = new XMLHttpRequest();
//   let resCategoryHandler = function() {
//     contents.innerHTML = this.responseText;
//   };

//   req.addEventListener('load', resCategoryHandler);

//   let url;

//   switch(event.target.innerText) {
//     case "Home":
//       url = "/welcome"
//       break;
//     case "Category":
//       url = "/cats"
//       break;
//     case "Bookmarks":
//       url = "/bookmarkLists"
//       break;
//     case "Highlights":
//       // code block
//       url = "/highlightLists"
//       break;
//     default:
//       url = "/welcome"
//   };

//   req.open("GET", url);
//   // req.send(JSON.stringify(this.responseText));
//   req.send();

// };

// for (var i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener('click', navClickHandler);
// }