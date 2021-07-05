import data from './data.js'

window.onload = () => {
  showRandomRecipe()
  onClickAllRecipes()
}

const btnShowAll = $('#btnShowAll');
const btnHideAll = $('#btnHideAll');
const outMenu = $('.outMenu');
const outRecipe = $('.outRecipe');
const searchInput = $('#searchInput');
const navBtns = [...document.querySelectorAll('.nav-btn-filter')]
const DEBOUNCE_INTERVAL = 300;
const keyupHandler = debounce(() => { onInputSaerchInput() })


searchInput.addEventListener('keyup', keyupHandler)
navBtns.forEach(item => { item.addEventListener('click', (evt) => sortingRecipes(evt)) })
btnShowAll.addEventListener('click', onClickAllRecipes)
btnHideAll.addEventListener('click', onClickHideBtn)

//----------------------------------------------
function onClickHideBtn() {
  outMenu.innerHTML = '';
  $('.btn-wrap').classList.add('m0');
}

function showRandomRecipe() {
  if (data.length != 0) {
    const randomIndex = Math.floor(Math.random() * data.length)
    const targetRecipe = data[randomIndex];

    const liSteps = () => {
      const outRecipesSteps = document.createElement('ol')
      outRecipesSteps.className = "outRecipe-steps"
      for (let i = 0; i < targetRecipe.steps.length; i++) {
        outRecipesSteps.innerHTML += `<li>${targetRecipe.steps[i]}</li>`
      }
      return outRecipesSteps
    }

    let comment = '';
    if (targetRecipe.comments != '') {
      comment = `<div class="outRecipe-comments">${targetRecipe.comments}</div>`
    }

    const targetRecipeBlock = `
    <div>
        <h3 class="outRecipe-title">${targetRecipe.title}</h3>
        <div class="outRecipe-needs">${targetRecipe.needs.join('<br>')}</div>
        ${comment}
        ${liSteps().outerHTML}
    </div>`
    outRecipe.innerHTML = targetRecipeBlock;
  } else outRecipe.innerHTML = "Cписок рецептов пуст"
}

function $(el) {
  return document.querySelector(el);
}

function onClickAllRecipes() {
  $('.btn-wrap').classList.remove('m0');
  if (data.length != 0) {
    outMenu.innerHTML = '';
    data.forEach(item => { showRecipes(item) })
  } else outMenu.innerHTML = '<li class="outMenuItemLiNone">Ничего не найдено</li>'
}

function onInputSaerchInput() {

  let val = searchInput.value.toLowerCase();
  let elasticItems = [...document.querySelectorAll('.outMenuItemLi')];
  if (val != '') {
    elasticItems.forEach(elem => {
      if (elem.innerText.toLowerCase().search(val) == -1) {
        elem.classList.add('hide')
        elem.innerHTML = elem.innerText
      }
      else {
        elem.classList.remove('hide')
    
      }
    })
  } else {
    elasticItems.forEach(elem => {
      elem.classList.remove('hide')
      elem.innerHTML = elem.innerText
    })

  }
}

function debounce(fun) {
  let lastTimeout = null;

  return function () {
    const args = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout)
    }
    lastTimeout = window.setTimeout(function () {
      lastTimeout = null;
      fun.apply(null, args)
    }, DEBOUNCE_INTERVAL)
  }
}

function showRecipes(item) {
  const outMenuItem = `
        <li id='${item.id}' class="outMenuItemLi">
            <h3>${item.title}</h3>
        </li>`;

  outMenu.innerHTML += outMenuItem;

  const outMenuItemLi = [...document.querySelectorAll('.outMenuItemLi')] || null;
  outMenuItemLi.forEach(item => {

    item.addEventListener('click', (evt) => {
      outMenuItemLi.forEach(it => { it.classList.remove("active") })
      onClickMenuItem(evt)
    })
  })
}

function onClickMenuItem(evt) {
  evt.currentTarget.classList.add("active");
  const index = evt.currentTarget.id;
  const targetRecipe = data[index];


  const liSteps = () => {
    const outRecipesSteps = document.createElement('ol')
    outRecipesSteps.className = "outRecipe-steps"
    for (let i = 0; i < targetRecipe.steps.length; i++) {
      outRecipesSteps.innerHTML += `<li>${targetRecipe.steps[i]}</li>`
    }
    return outRecipesSteps
  }

  let comment = '';
  if (targetRecipe.comments != '') {
    comment = `<div class="outRecipe-comments">${targetRecipe.comments}</div>`
  }

  const targetRecipeBlock = `
    <div>
        <h3 class="outRecipe-title">${targetRecipe.title}</h3>
        <div class="outRecipe-needs">${targetRecipe.needs.join('<br>')}</div>
        ${comment}
        ${liSteps().outerHTML}
    </div>`
  outRecipe.innerHTML = targetRecipeBlock;
}

function sortingRecipes(evt) {
  $('.btn-wrap').classList.remove('m0');
  navBtns.forEach(item => { item.classList.remove('chosen') })
  evt.currentTarget.classList.add("chosen");
  const targetGroup = evt.currentTarget.textContent; //не очень здоровая штука
  if (data.length != 0) {
    let foundedRecipes = [];
    data.forEach(item => {
      for (let i = 0; i < item.groups.length; i++) {
        if (item.groups[i] == targetGroup) foundedRecipes.push(item)
      }
    })
    if (foundedRecipes.length === 0) {
      outMenu.innerHTML = '<li class="outMenuItemLiNone">Ничего не найдено</li>'
      return
    }
    outMenu.innerHTML = '';
    foundedRecipes.forEach(item => { showRecipes(item) })
  } else outMenu.innerHTML = '<li class="outMenuItemLiNone">Ничего не найдено</li>'
}
