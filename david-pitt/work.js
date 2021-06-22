window.addEventListener('load', () => {
    work()
})

const work = () => {
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

    const workContent = document.createElement('div')
    workContent.classList = 'container-fluid';
    workContent.style = 'overflow-x: hidden;'

    const contentRow = document.createElement('div')
    contentRow.classList = 'row d-flex flex-column align-items-center';

    const publicationsContainer = document.createElement('div')
    publicationsContainer.classList = 'col-sm-12';
    publicationsContainer.style = 'max-width: 900px;'
    const publicationsContent = document.createElement('p');
    publicationsContent.innerHTML = '<h4 style="color: white; margin-top: 8px;">Work</h4></br>ARTICLES</br></br><a class="work-link-hover" href="PDFs/A Return to Simple Sentences.pdf" target="_blank">“A Return to Simple Sentences,”</a> <em>Routledge Handbook of Linguistic Reference</em>, S. Biggs and H. Geirsson, eds., New York: Routledge, 2020: 145-52</br></br><a class="work-link-hover" href="PDFs/Loars Compromised Internalism.pdf" target="_blank">“Loar’s Compromised Internalism,”</a> in A. Sullivan, ed., <em>Sensations, Thoughts, Language: Essays in Honor of Brian Loar</em>, Arthur Sullivan, ed., New York: Routledge, 2019: 203-224</br></br> <a class="work-link-hover" href="PDFs/Acquaintance and Phenomenal Concepts.pdf" target="_blank">“Acquaintance and Phenomenal Concepts,”</a> in S. Coleman, ed., <em>Cambridge Classic Arguments Series: the Knowledge Argument</em>, Cambridge: Cambridge University Press, 2019: 87-101</br></br><a class="work-link-hover" href="PDFs/Consciousness and Intentionality.pdf" target="_blank">“Consciousness and Intentionality,”</a> in R. Gennaro, ed., <em>The Routledge Handbook of Consciousness</em>, New York: Routledge, 2018: 260-270</br></br><a class="work-link-hover" href="PDFs/What Kind of Science is Linguistics.pdf" target="_blank">“What Kind of Science is Linguistics?”</a> in C. Behme and M. Neef, eds., <em>Essays on Linguistic Realism</em>, John Benjamins, 2018: 7-20</br></br><a class="work-link-hover" href="PDFs/The Paraphenomenal Hypothesis.pdf" target="_blank">“The Paraphenomenal Hypothesis,”</a> <em>Analysis</em> 77, October 2017: 735–741</br></br><a class="work-link-hover" href="PDFs/Phenomenal Composition and Context Effects.pdf" target="_blank">“Phenomenal Compositionality and Context Effects,”</a> <em>Inquiry</em> 61, September 2017: 494-498</br></br><a class="work-link-hover" href="PDFs/Conscious Belief.pdf" target="_blank">“Conscious Belief,”</a> Book forum on Tim Crane’s <em>Aspects of Psychologism, Rivista Internazionale di Filosofia e Pscologia</em> Vol 7, N° 1, 2016: 121-126</br></br><a class="work-link-hover" href="PDFs/Indexical Thought.pdf" target="_blank">“Indexical Thought,”</a> in U. Kriegel, ed., <em>Phenomenal Intentionality: New Essays</em>, Oxford University Press, 2013: 49-70</br></br><a class="work-link-hover" href="PDFs/Conscious Thinking.pdf" target="_blank">“Conscious Thinking,”</a> in H. Pashler, ed., <em>Encyclopedia of the Mind</em>, Thousand Oaks: Sage Publications, 2013: 186-189</br></br><a class="work-link-hover" href="PDFs/Introspection, Phenomenality and the Availablity of Intentional Content.pdf" target="_blank">“Introspection, Phenomenality and the Availability of Intentional Content,”</a> in T. Bayne and M. Montague, eds., <em>Cognitive Phenomenology</em>, Oxford University Press, 2011: 141-173</br></br><a class="work-link-hover" href="PDFs/Intentional Psychologism.pdf" target="_blank">“Intentional Psychologism,”</a> <em>Philosophical Studies</em> 146, October 2009: 117-138</br></br><a class="work-link-hover" href="PDFs/The Phenomenology of Cognition, Or, What Is It Like to Think That P.pdf" target="_blank">“The Phenomenology of Cognition, or, <em>What Is It Like to Think That P?”</a>, Philosophy and Phenomenological Research</em> LXIX, July 2004: 1-36</br></br><a class="work-link-hover" href="PDFs/On Markerese.pdf" target="_blank">“On Markerese,”</a> <em>Philosophical Forum</em> 34, Nos 3&4, Special Issue: <em>The Philosophical Ideas of Jerrold J. Katz</em>, D. Pitt, guest ed., Fall/Winter 2003: 267-300</br></br><a class="work-link-hover" href="PDFs/reply_to_kac.pdf" target="_blank">“Reply to Kac,”</a> <em>Language</em> 79, March 2003: 197-201</br></br><a class="work-link-hover" href="PDFs/Alter Egos and Their Names.pdf" target="_blank">“Alter Egos and Their Names,”</a> <em>The Journal of Philosophy</em> XCVIII, October 2001: 531-552</br></br><a class="work-link-hover" href="PDFs/Nativism and the Theory of Content.pdf" target="_blank">“Nativism and the Theory of Content,”</a> <em>ProtoSociology</em> 14, 2000: 222-239</br></br><a class="work-link-hover" href="PDFs/Compositional Idioms.pdf" target="_blank">“Compositional Idioms”</a> (with Jerrold J. Katz), <em>Language</em> 76, June 2000: 409-432</br></br><a class="work-link-hover" href="PDFs/In Defense of Definitions.pdf" target="_blank">“In Defense of Definitions,”</a> <em>Philosophical Psychology</em> 12, June 1999: 139-156</br></br><a class="work-link-hover" href="PDFs/What Is Tonality.pdf" target="_blank">“What is Tonality?”</a>, <em>International Journal of Musicology</em> IV, 1995: 291-300</br></br>ENCYCLOPEDIA ENTRIES</br></br><a class="work-link-hover" href="">“Conscious Thinking,”</a> H. Pashler, ed., <em>Encyclopedia of the Mind</em>, Sage Publications, 2013</br></br><a class="work-link-hover" href="">“Mental Representation,”</a> <em>Stanford Internet Encyclopedia of Philosophy</em>, March 2000; Major Revisions 2004, 2008, 2012, 2020 (http://plato.stanford.edu/entries/mental-representation) (Italian translation, “La rappresentazione mentale,” G. Galloni and E. Vizzinisi, eds., <em>Identità e Rapprasentazione</em>, Stamen, 2006)</br></br><a class="work-link-hover" href="">“Jerrold J Katz,”</a> H. Stammerjohann, ed., <em>Lexicon Grammaticorum</em>, 2nd edition, Max Niemeyer Verlag, 2009';

    publicationsContainer.appendChild(publicationsContent);

    contentRow.appendChild(publicationsContainer)

    workContent.appendChild(contentRow)
    workContent.appendChild(navbar)

    document.body.appendChild(workContent)
    document.body.style = 'height: 100%; padding-top: 90px; background-color: black !important;'

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