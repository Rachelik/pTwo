// //new-cat.jsx form submission
// const upCatBtn = document.querySelector('.up-cat-btn');

// const upCatBtnClick = function(event) {
//   allList.classList.remove("hidden");
//   newCatBtn.classList.remove("hidden");
//   inputGroup.classList.remove("hidden");
//   console.log("event.target.innerText")
//   console.log(event.target.innerText);
//   let request = new XMLHttpRequest();
//   let responseHandler = function() {
//     console.log("responseText");
//     console.log(this.responseText);
//   };

//   let data = {
//     category : document.querySelector('.form-control').value
//   };
//   request.addEventListener("load", responseHandler);

//   request.open("POST", '/category');
//   request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//   request.send(JSON.stringify.data);
// };

// upCatBtn.addEventListener('click', upCatBtnClick);