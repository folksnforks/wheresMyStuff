const userItem = document.getElementById('user-item');
const submitBtn = document.getElementById('submit');
const listDiv = document.getElementById('list-div');
// const itemList = document.createElement('ul'); // creates unordered list (not yet appended)
let idNum = 0;

function RoomSection(sectionNum) {
   this.sectionArticle = document.createElement('article');
   this.header = document.createElement('h3');
   this.itemList = document.createElement('ul');

   this.sectionArticle.setAttribute('id', `section-${sectionNum}-article`);
   this.header.setAttribute('id', `header-section-${sectionNum}`);
   this.itemList.setAttribute('id', `list-section-${sectionNum}`);

   this.header.textContent = `Section ${sectionNum}`;
}
// console.log('itemList', itemList);

// console.log('listDiv', listDiv);
// const roomSection_1 = {};



function handleSubmit(event) { // when submit button is clicked
   event.preventDefault(event); // prevent app from reloading
   
   const optionNum = document.getElementById('room-sec').value;
   const doesSectionExist = document.getElementById(`section-${optionNum}-article`);
   const eachItem = document.createElement('li');

   eachItem.setAttribute('id', `each-item_${idNum}`);
   idNum += 1;
   
   if (!doesSectionExist) { // does selected section exist on the DOM?
      const newRoomSection = new RoomSection(optionNum);

      listDiv.appendChild(newRoomSection.sectionArticle);
      newRoomSection.sectionArticle.appendChild(newRoomSection.header);
      newRoomSection.sectionArticle.appendChild(newRoomSection.itemList);
   }
   
   const currentItemList = document.getElementById(`list-section-${optionNum}`);

   currentItemList.appendChild(eachItem);
   eachItem.textContent = userItem.value; //puts user's textbox input into <li>
   console.log('listDivChildNodes', listDiv.childNodes[0]);
}


submitBtn.addEventListener('click', handleSubmit);
// console.log('listDiv.childNodes', listDiv.childNodes[0]);
// console.log('itemList', itemList);

/*
<div id='listDiv'>
<ul id='user-item-list'>
<li> appended item after clicking submit </li>
</ul>
</div>
*/

// roomSection_1[`${userItem.value}_${roomSection_1.idCounter}`] = {

// desk_1 = {
   //    id: 1,
   //    roomSection: 1,
   //    storedInSomething: true,
   //    somethingStoredInIt: false,
   // }