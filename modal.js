const headingBtn = document.getElementById('headingBtn') //btn that will display heading code
const heading = document.getElementById('heading') //div that holds the modal(code) for the heading
headingBtn.addEventListener('click', showCode)
const hideBtn = document.getElementById('hide-modal') //button to hide modal
hideBtn.addEventListener('click', hideCode)

function showCode() {
 heading.classList.remove("hide"); //remove the hide class
}

function hideCode() {
  heading.classList.add("hide"); //add the hide class
}
