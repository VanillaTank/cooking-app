import data from './data.js'

const btnShowAll = $('#btnShowAll');
const outMenu = $('.outMenu');
const outRecipe = $('.outRecipe');
const searchInput = $('#searchInput');
const navBtns = [...document.querySelectorAll('.nav-btn-filter')]
const DEBOUNCE_INTERVAL = 300;
const keyupHandler = debounce(() => { onInputSearchInput() })
const btnInputReset = $('.filter-side-reset');
const btnToggleShowFilters = $('#btnToggleFilters');
const arrowUp = $('.arrow-up');
let isNotEmpty = '';
const ONE_COLUMN_WIDTH = 1000;

const nothingFounded = document.createElement('li');
nothingFounded.className = 'outMenuItemLiNone';
nothingFounded.innerText = 'Ничего не найдено'

btnToggleShowFilters.addEventListener('click', onClickFilterToggle)
searchInput.addEventListener('keyup', (evt) => {
    if (evt.code === 'Enter') {
        onInputSearchInput()
    } else { keyupHandler() }
})
btnShowAll.addEventListener('click', (evt) => onClickAllRecipes(evt.currentTarget))

btnInputReset.addEventListener('click', () => {
    searchInput.value = '';
    renderData();
})

window.onload = () => {
    let randomIndex = Math.floor(Math.random() * data.length - 1);

    const width = window.innerWidth;
    let isOneColWidth = false;
    if (width <= ONE_COLUMN_WIDTH) {
        isOneColWidth = true;
        btnToggleShowFilters.classList.remove('active');
        btnShowAll.classList.remove('active');
    }

    if (window.location.hash === '') {
        showRandomRecipe(randomIndex)
    } else {
        let recipeInd = window.location.hash.slice(5);
        if (recipeInd > data.length - 1 || recipeInd < 0) {
            showRandomRecipe(randomIndex);
            if (!isOneColWidth) {
                onClickAllRecipes(btnShowAll);
            }
        }
        showRandomRecipe(recipeInd)
    }
    if (!isOneColWidth) {
        onClickAllRecipes(btnShowAll);
    }
}

arrowUp.addEventListener('click', onClickArrowUp)

//----------------------------------------------
function onClickArrowUp() { window.scrollTo(0, 0) }

function revokeFiltration(filterBtn) {
    filterBtn.classList.remove('chosen')
    renderData()
}

function onClickFilterToggle() {
    if (!btnToggleShowFilters.classList.contains('active')) {
        //фильтры показаны
        btnToggleShowFilters.classList.add('active')
        btnToggleShowFilters.innerText = 'Скрыть фильтры'
        navBtns.forEach(item => { item.style.display = 'block' })
    } else {
        //фильтры скрыты
        btnToggleShowFilters.classList.remove('active')
        btnToggleShowFilters.innerText = 'Показать фильтры'
        navBtns.forEach(item => { item.style.display = 'none' })
    }
}

function updateURL(recId) {
    if (history.pushState) {
        let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        let newUrl = baseUrl + "#rec_" + recId;
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
    <div class="outRecipe-inner" id="res_${targetRecipe.id}">
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
    btnShowAll.innerText = 'Скрыть рецепты'

    //баг с удалением ссылок и раскрытием ничего не найдено
    outMenu.classList.remove('hide');
}

function onClickAllRecipes(targetBtn) {

    if (targetBtn.classList.contains('active')) {
        //свернуть
        outMenu.classList.add('hide');
        $('.btn-wrap').classList.add('m0');
        targetBtn.classList.remove('active');
        targetBtn.innerText = 'Показать рецепты'
        searchInput.value = '';
        navBtns.forEach(item => { item.classList.remove('chosen') })
    } else {
        //развернуть
        renderData();
    }
}

function onInputSearchInput() {
    onCliclShowToggle()
    let val = searchInput.value.toLowerCase();
    let elasticItems = [...document.querySelectorAll('.outMenuItemLi')];
    if (val != '') {
        elasticItems.forEach(elem => {
            if (elem.innerText.toLowerCase().indexOf(val) == -1) {
                elem.classList.add('hide')
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
        nothingFounded.remove();
        if (navBtns.some((el) => el.classList.contains('chosen'))) {
            const activeFilterBtn = navBtns.find((el) => el.classList.contains('chosen'))
            sortingRecipes(activeFilterBtn, false)
        }
        else {
            renderData();
        }

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
            <a href="#res_${item.id}">${item.title}</a>
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
    <div class="outRecipe-inner" id="res_${targetRecipe.id}">
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

    if (filterBtn.classList.contains('chosen') && isNeedRevoke) {
        revokeFiltration(filterBtn);
        return
    }

    searchInput.value = '';
    navBtns.forEach(item => { item.classList.remove('chosen') })
    filterBtn.classList.add("chosen");
    const targetGroup = filterBtn.textContent; //не очень здоровая штука
    if (data.length != 0) {
        let foundedRecipes = [];
        data.forEach(item => {
            for (let i = 0; i < item.groups.length; i++) {
                if (item.groups[i] == targetGroup) foundedRecipes.push(item)
            }
        })
        if (foundedRecipes.length === 0) {
            outMenu.innerHTML = '';
            outMenu.append(nothingFounded)
            return
        }
        outMenu.innerHTML = '';
        foundedRecipes.forEach(item => { showRecipes(item) })
    } else {
        outMenu.innerHTML = '';
        outMenu.append(nothingFounded)
    }
}
