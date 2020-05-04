let allItemList = document.querySelectorAll('.all-items-list li');

const dblClickHandler = (event) => {
  console.log("double Clicked")
  if(event.target.classList.contains('border-red')){
    event.target.classList.remove('border-red');
  } else {
    event.target.classList.add('border-red');
  };
};

for (let i=0; i<allItemList.length; i++) {
  let ItemList = allItemList[i];
  ItemList.addEventListener('dblclick', dblClickHandler);
};