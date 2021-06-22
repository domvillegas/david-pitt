window.addEventListener('load', () => {
    contactMe()
})

const contactMe = () => {
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar-contact-me')
    navbar.setAttribute('class', 'navbar fixed-top navbar-expand-md');
    navbar.style = 'justify-self: center !important;'

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

    const itemHome = document.createElement('li');
    itemHome.setAttribute('class', 'nav-item');
    const itemHomeLink = document.createElement('a');
    itemHomeLink.setAttribute('class', 'nav-link active');
    itemHomeLink.innerHTML = 'home'

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

    itemHome.appendChild(itemHomeLink)
    navbarItemsList.appendChild(itemHome)
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

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content')
    contactContent.classList = 'd-flex align-items-center container h-100';

    const contentRow = document.createElement('div');
    contentRow.classList = 'row my-auto mx-auto'

    const addressContainer = document.createElement('div');
    addressContainer.classList = "col-sm-12 col-md-5 col-lg-5 d-flex flex-column justify-content-center";
    const address = document.createElement('p');
    address.style.textAlign = 'center';
    address.innerHTML = "<h3 style='color: white;'>Contact</h3><u>Mailing Address:</u></br>Department of Philosophy</br>California State University</br>5151 State University Drive</br>Los Angeles, CA 90032</br></br><span style='padding-bottom: 2px'><u>Email:</u></span></br>dpitt@calstatela.edu";
    addressContainer.appendChild(address);

    const imageContainer = document.createElement('div');
    imageContainer.classList = 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center';
    const image = document.createElement('img');
    image.setAttribute('src', 'images/pitt-4.jpg');
    image.setAttribute('alt', "Otis and Larry");
    image.style = "height: auto !important;"
    image.classList = 'img-fluid align-self-center';
    imageContainer.appendChild(image);

    const extraSpace = document.createElement('div');
    extraSpace.style.height = '0px'
    extraSpace.setAttribute('class', 'h-0 col-xs-0 col-sm-0 col-md-1 col-lg-1')

    contentRow.appendChild(addressContainer)
    contentRow.appendChild(extraSpace)
    contentRow.appendChild(imageContainer)

    contactContent.appendChild(contentRow)
    contactContent.appendChild(navbar)

    document.body.style = 'height: 100%; padding-top: 90px !important; background-color: black !important;'
    document.body.appendChild(contactContent)

    //navbar brand
    navbarBrand.addEventListener('click', () => {
        window.location.pathname = 'index'
    })

    //home
    itemHome.addEventListener('click', () => {
        window.location.pathname = 'index'
    })

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