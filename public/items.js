let highlightBtns = document.querySelectorAll('.highlight-btn');

const clickHandler = (event) => {
  console.log("clicked")
  let highlightStatus;
  let request = new XMLHttpRequest();
  let responseHandler = function() {
    console.log(this.responseText);
  }

  request.addEventListener("load", responseHandler)
    if(event.target.innerText === "📌"){
      event.target.innerText = "🔴"
      highlightStatus = true;

    } else {
      event.target.innerText = "📌"
      highlightStatus = false;
    };

  let itemId = event.target.value;

  let data = {
    item_id : itemId,
    highlight : highlightStatus
  };

  console.log("item.js");

  request.open('PUT', '/category/'+categoryId+'/title/'+titleId+'/item/'+itemId+'/highlights');
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify(data));
};


for (let i=0; i<highlightBtns.length; i++) {
  let highlightBtn = highlightBtns[i];
  highlightBtn.addEventListener('click', clickHandler);
};

