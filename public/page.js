const allListLi = document.querySelectorAll('.all-list-li');
const message = document.querySelector('.message');

  const clickEventHandler = () => {
    allList.style.display = "none";

    let request = new XMLHttpRequest();
    let responseHandler = function() {
      message.innerHTML = this.responseText;
    };

    request.addEventListener('load', responseHandler);

    let url = "/page";
    request.open("GET", url);
    request.send();
  }

  allListLi.forEach((list) => {
     list.addEventListener('click', clickEventHandler);
  })
