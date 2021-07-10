import data from './data.js'

const btnShowAll = $('#btnShowAll');
const outMenu = $('.outMenu');
const outRecipe = $('.outRecipe');
const searchInput = $('#searchInput');
const navBtns = [...document.querySelectorAll('.nav-btn-filter')]
const DEBOUNCE_INTERVAL = 300;
const keyupHandler = debounce(() => { onInputSaerchInput() })
const btnInputReset = $('.filter-side-reset');
let isNotEmpty = '';

const nothingFounded = document.createElement('li');
nothingFounded.className = 'outMenuItemLiNone';
nothingFounded.innerText = 'Ничего не найдено'


searchInput.addEventListener('keyup', (evt) => {
  if (evt.code === 'Enter') {
    onInputSaerchInput()
  } else { keyupHandler() }
})
navBtns.forEach(item => { item.addEventListener('click', (evt) => sortingRecipes(evt)) })
btnShowAll.addEventListener('click', (evt) => onClickAllRecipes(evt.currentTarget))

btnInputReset.addEventListener('click', () => {
  searchInput.value = '';
  renderData();
})

window.onload = () => {
  if (window.location.search === '?id=' || window.location.search === '') {
    let randomIndex = Math.floor(Math.random() * data.length)
    showRandomRecipe(randomIndex)
  } else {
    let recipeInd = window.location.search.slice(4);
    showRandomRecipe(recipeInd)
  }
  onClickAllRecipes(btnShowAll)
}


//----------------------------------------------
function updateURL(recId) {
  if (history.pushState) {
    let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    let newUrl = baseUrl + "?id=" + recId;
    history.pushState(null, null, newUrl);
  }
  else {
    console.warn('History API не поддерживается');
  }
}

function showRandomRecipe(randomIndex) {
  if (data.length != 0) {
    updateURL(randomIndex)

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

function renderData() {
  if (data.length != 0) {
    onCliclShowToggle()
    outMenu.innerHTML = '';
    data.forEach(item => { showRecipes(item) })
  } else outMenu.innerHTML = '<li class="outMenuItemLiNone">Ничего не найдено</li>'
}

function $(el) {
  return document.querySelector(el);
}

function onCliclShowToggle() {
  btnShowAll.classList.add('active');
  $('.btn-wrap').classList.remove('m0');
  btnShowAll.innerText = 'Скрыть все'
  outMenu.classList.remove('hide');
}

function onClickAllRecipes(targetBtn) {

  if (targetBtn.classList.contains('active')) {
    outMenu.classList.add('hide');
    $('.btn-wrap').classList.add('m0');
    targetBtn.classList.remove('active');
    targetBtn.innerText = 'Показать все'
    searchInput.value = '';
    navBtns.forEach(item => { item.classList.remove('chosen') })
  } else {
    renderData();
  }
}

function onInputSaerchInput() {
  onCliclShowToggle()
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

    isNotEmpty = elasticItems.some(item => {
      return !item.classList.contains('hide')
    })
    if (!isNotEmpty) { outMenu.append(nothingFounded) }
    else { nothingFounded.remove() }

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

  updateURL(index)

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

  if (!btnShowAll.classList.contains('active')) {
    onCliclShowToggle()
  }

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
      outMenu.innerHTML = '<li class="outMenuItemLiNone">Ничего не найдено</li>' //тоже не очень здорово, тк выше есть nothingFounded
      return
    }
    outMenu.innerHTML = '';
    foundedRecipes.forEach(item => { showRecipes(item) })
  } else outMenu.innerHTML = '<li class="outMenuItemLiNone">Ничего не найдено</li>'
}
