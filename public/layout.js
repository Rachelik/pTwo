const newCatBtn = document.querySelector('.new-cat-btn');
const allList = document.querySelector('.all-list');
const addNew = document.querySelector('.add-new');
const catFormSection = document.querySelector('.cat-form-section');
const inputGroup = document.querySelector('.input-group');

const newCatBtnClick = (event) => {
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

newCatBtn.addEventListener('click', newCatBtnClick);





