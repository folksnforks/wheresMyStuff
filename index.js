const userItem = document.getElementById('user-item');
const submitBtn = document.getElementById('submit');
const listDiv = document.getElementById('list-div');
const itemList = document.createElement('ul'); // creates unordered list (not yet appended)
itemList.setAttribute('id', 'user-item-list');
let idNum = 0;

function handleSubmit(event) { // when submit button is clicked (Mario assumes)
  event.preventDefault(event); // prevent app from reloading
  const userInputText = userItem.value;
  const eachItem = document.createElement('li');
  eachItem.setAttribute('id', `each-item${idNum}`);
  eachItem.textContent = userInputText;
  idNum += 1;

  if (itemList.isConnected === false) { // itemList is connected to a DOM
    listDiv.appendChild(itemList); // makes the list (<ul>) (happens once)
  }
  itemList.appendChild(eachItem);
}

submitBtn.addEventListener('click', handleSubmit);

// console.log('itemList', itemList);

/*
  <div id='listDiv'>
    <ul id='user-item-list'>
      <li> appended item after clicking submit </li>
    </ul>
  </div>
*/