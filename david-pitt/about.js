window.addEventListener('load', () => {
    aboutMe()
})

const aboutMe = () => {
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

    const aboutContent = document.createElement('div');
    aboutContent.setAttribute('id', 'about-content')
    aboutContent.classList = 'd-flex align-self-end align-items-center container-fluid pl-5 pr-5 h-100';

    const contentRow = document.createElement('div');
    contentRow.classList = 'row d-flex align-items-center justify-content-center align-self-center my-auto mx-auto'

    const shortBioContainer = document.createElement('div');
    shortBioContainer.classList = "col-sm-12 col-md-7 d-flex justify-content-center px-3 py-2";
    const shortBio = document.createElement('p');
    shortBio.innerHTML = "<h3 style='color: white;'>About</h3>I'm a philosopher working on issues in philosophy of mind (consciousness and intentionality), philosophy of language and linguistics, and metaphysics (material constitution). I got my PhD in 1994 from the Graduate Center of CUNY, where I wrote a dissertation on decompositional semantics with Jerry Katz, and studied with Jerry Fodor, David Rosenthal, Stephen Schiffer and Bob Fiengo (linguistics). I also have an MA in composition from Queens College, CUNY (1985), where I worked with the composer <a onClick = 'toGeorgePerlesWebsite()' class='link-hover' style='color: #ffffffb5 !important' target='_blank'>George Perle</a>.  I'm currently finishing a monograph, called The Quality of Thought, for Oxford University Press, on the experience and content of conceptual thinking. I live in Los Angeles with my husband, Fred, and our two labs, Otis and Larry.";
    shortBioContainer.appendChild(shortBio);

    headshotContainer = document.createElement('div');
    headshotContainer.classList = 'col-sm-12 col-md-5 d-flex justify-content-center px-3 py-2 d-flex';
    const headshot = document.createElement('img');
    headshot.setAttribute('src', 'images/pitt-2.jpg');
    headshot.setAttribute('alt', "David Pitt's Headshot");
    headshot.style = "height: auto !important; width: 400px;"
    headshot.classList = 'img-fluid align-self-center';
    headshotContainer.appendChild(headshot);

    contentRow.appendChild(shortBioContainer)
    contentRow.appendChild(headshotContainer)

    aboutContent.appendChild(contentRow)
    aboutContent.appendChild(navbar)

    document.body.style = 'height: 100%; padding-top: 90px; background-color: black !important;'
    document.body.appendChild(aboutContent)

    toGeorgePerlesWebsite = () => {
        window.open('https://georgeperle.net/', '_blank')
    }

    // menu to new page functionality

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