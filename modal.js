const allHideBtn = Array.from(document.querySelectorAll('button#hide-modal'))
const allCodesBtn = Array.from(document.querySelectorAll('button.code'))
console.log(allCodesBtn)
//check which code button is clicked
//shows the code for the clicked button
allCodesBtn.forEach((button) => { //attach an event listener on each button
  // for each button, add event listener to show code 
  button.addEventListener('click', showCode)
})

// attach event listener for all hide buttons
allHideBtn.forEach((button) => {
  button.addEventListener('click', hideCode)
})

function showCode(e) {
  //look for a class named modal, 
  //get the parent node of the button
  // let parentDiv = pDoc.parentNode;
  //remove hide from that class
  let button = e.currentTarget //get the current target button
  let parent = button.parentNode//get the parent of the button
  let modal = parent.querySelector('#modal')//look for a div with class/id modal
  modal.classList.remove("hide"); //remove the hide class
}

function hideCode(e) {
  let button = e.currentTarget //get the current target button
  let parent = button.parentNode.parentNode//get the div with class name modal
  parent.classList.add("hide"); 
  console.log(parent)
  // let modal = parent.querySelector('#modal')//look for a div with class/id modal
  // modal.classList.add("hide"); //remove the hide class
}

