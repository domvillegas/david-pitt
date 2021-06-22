
window.addEventListener('load', () => {
    homepage()
})

const homepage = () => {

    const navbar = document.createElement('nav');
    navbar.setAttribute('class', 'navbar fixed-top navbar-expand-md');

    //navbar brand
    const navbarBrand = document.createElement('a');
    navbarBrand.setAttribute('class', 'navbar-brand');
    navbarBrand.setAttribute('id', 'navbar-brand')
    navbarBrand.innerHTML = 'david pitt';

    //navbar toggler
    const navbarToggler = document.createElement('button');
    navbarToggler.setAttribute('class', 'navbar-toggler');
    navbarToggler.setAttribute('type', 'button');
    navbarToggler.setAttribute('data-toggle', 'collapse');
    navbarToggler.setAttribute('data-target', '#navbarNav');
    navbarToggler.setAttribute('aria-controls', 'navbarNav');
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarToggler.setAttribute('aria-label', 'Toggle-navigation');
    const togglerIcon = document.createElement('span');
    togglerIcon.setAttribute('class', 'navbar-toggler-icon text-primary');
    togglerIcon.setAttribute('id', 'toggler-icon')

    navbarToggler.appendChild(togglerIcon);

    //navbar items
    const navbarItemsContainer = document.createElement('div');
    navbarItemsContainer.setAttribute('class', 'collapse navbar-collapse');
    navbarItemsContainer.setAttribute('id', 'navbarNav');

    const navbarItemsList = document.createElement('ul');
    navbarItemsList.setAttribute('class', 'navbar-nav ml-auto');

    // const itemHome = document.createElement('li');
    // itemHome.setAttribute('class', 'nav-item');
    // const itemHomeLink = document.createElement('a');
    // itemHomeLink.setAttribute('class', 'nav-link active');
    // itemHomeLink.innerHTML = 'home'

    const itemAboutMe = document.createElement('li');
    itemAboutMe.setAttribute('class', 'nav-item');
    const itemAboutMeLink = document.createElement('a');
    itemAboutMeLink.setAttribute('class', 'nav-link');
    itemAboutMeLink.innerHTML = 'about me'

    const itemCV = document.createElement('li');
    itemCV.setAttribute('class', 'nav-item');
    const itemCVLink = document.createElement('a');
    itemCVLink.setAttribute('class', 'nav-link');
    itemCVLink.innerHTML = 'cv'

    const itemWork = document.createElement('li');
    itemWork.setAttribute('class', 'nav-item');
    const itemWorkLink = document.createElement('a');
    itemWorkLink.setAttribute('class', 'nav-link');
    itemWorkLink.innerHTML = 'work'

    const itemContactMe = document.createElement('li');
    itemContactMe.setAttribute('class', 'nav-item');
    const itemContactMeLink = document.createElement('a');
    itemContactMeLink.setAttribute('class', 'nav-link');
    itemContactMeLink.innerHTML = 'contact me'

    // itemHome.appendChild(itemHomeLink)
    // navbarItemsList.appendChild(itemHome)
    itemAboutMe.appendChild(itemAboutMeLink)
    navbarItemsList.appendChild(itemAboutMe)
    itemCV.appendChild(itemCVLink)
    navbarItemsList.appendChild(itemCV)
    itemWork.appendChild(itemWorkLink)
    navbarItemsList.appendChild(itemWork)
    itemContactMe.appendChild(itemContactMeLink)
    navbarItemsList.appendChild(itemContactMe)
    navbarItemsContainer.appendChild(navbarItemsList)

    navbar.appendChild(navbarBrand)
    navbar.appendChild(navbarToggler)
    navbar.appendChild(navbarItemsContainer)

    const homepageContentRow = document.createElement('div');
    homepageContentRow.classlist = 'row';
    homepageContentRow.style = 'max-width: 900px;'


    const homepageImageContainer = document.createElement('div');
    homepageImageContainer.setAttribute('style', 'min-height: fit-content !important;')
    homepageImageContainer.setAttribute('class', 'col-xm-12 d-flex flex-column justify-content-center')

    const homepageImage = document.createElement('img');
    homepageImage.setAttribute('src', 'images/pitt-3.jpg');
    homepageImage.setAttribute('alt', 'Black Cows by Jane Fisher')
    homepageImage.setAttribute('id', 'homepage-image')
    homepageImage.setAttribute('style', 'width: 650px;')
    homepageImage.setAttribute('class', 'img-fluid center-block')

    const paintingCredit = document.createElement('p');
    paintingCredit.setAttribute('id', 'painting-credit')
    paintingCredit.setAttribute('class', 'text-secondary d-flex justify-content-end')
    paintingCredit.innerHTML = '<em>Black Cows</em> &nbsp; Jane Fisher&nbsp;2014'

    homepageImageContainer.appendChild(homepageImage)
    homepageImageContainer.appendChild(paintingCredit)
    homepageContentRow.appendChild(homepageImageContainer)
    
    const container = document.createElement('div');
    container.setAttribute('class', 'container-fluid d-flex justify-content-center')

    container.appendChild(homepageContentRow)
    container.appendChild(navbar)

    document.body.style = 'display: flex; align-items: center; height: 100%; padding-top: 90px !important; background-color: black !important;'
    document.body.appendChild(container)

    // menu to new page functionality

    //navbar brand
    navbarBrand.addEventListener('click', () => {
        window.location.pathname = 'index'
    })

    //home
    // itemHome.addEventListener('click', () => {
    //     window.location.pathname = 'index'
    // })

    //about me
    itemAboutMe.addEventListener('click', () => {
        window.location.pathname = 'about'
    })

    //cv
    itemCV.addEventListener('click', () => {
        window.location.pathname = 'cv'
    })

    //work
    itemWork.addEventListener('click', () => {
        window.location.pathname = 'work'
    })

    //contact me
    itemContactMe.addEventListener('click', () => {
        window.location.pathname = 'contact'
    })
}