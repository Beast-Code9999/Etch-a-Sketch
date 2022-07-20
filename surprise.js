const surpriseCheck = document.getElementById('check');
const heading = document.getElementById('heading');
const mainBod = document.getElementById('main');
const sectionEmpty = document.querySelector('.empty');
const rainbow = document.getElementById('rainbow');
const footer = document.getElementById('foot');
const outerCont = document.querySelector('.outer-container');
const titleCont = document.querySelector('.title-container');

console.log(surpriseCheck)

surpriseCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
      heading.classList.add('surprise');
      mainBod.classList.add('surprise');
      sectionEmpty.classList.add('surprise');
      rainbow.classList.add('surprise');
      footer.classList.add('surprise');
      outerCont.classList.add('surprise');
      titleCont.classList.add('surprise');
    } else {
      heading.classList.remove('surprise');
      mainBod.classList.remove('surprise');
      sectionEmpty.classList.remove('surprise');
      rainbow.classList.remove('surprise');
      footer.classList.remove('surprise');
      outerCont.classList.remove('surprise')
      titleCont.classList.remove('surprise');
    }
  })
