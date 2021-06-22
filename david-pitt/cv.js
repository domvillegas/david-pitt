window.addEventListener('load', () => {
    CV()
})

const CV = () => {
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

    const container = document.createElement('div');
    container.setAttribute('class', 'container-fluid h-100 pb-5')

    //download cv

    const downloadCVRow = document.createElement('div');
    downloadCVRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')

    const downloadCVColumn = document.createElement('div');
    downloadCVColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    downloadCVColumn.style = 'width: 900px'

    const downloadCVContent = document.createElement('a');
    downloadCVContent.setAttribute('id', 'download-cv-link')
    downloadCVContent.setAttribute('href', 'PDFs/CV.pdf')
    downloadCVContent.setAttribute('target', '_blank')
    downloadCVContent.innerHTML = 'DOWNLOAD CV &nbsp; <i class="fas fa-file-download"> </i>'

    downloadCVColumn.appendChild(downloadCVContent)
    downloadCVRow.appendChild(downloadCVColumn);

    //employment
    const employmentRow = document.createElement('div')
    employmentRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    employmentRow.style = 'border-top: 2px solid white; border-bottom: 2px solid white;'

    const employmentColumn = document.createElement('div');
    employmentColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    employmentColumn.style = 'width: 900px'

    const employmentTitle = document.createElement('h4');
    employmentTitle.innerHTML = '</br>Employment';

    const employmentContent = document.createElement('p');
    employmentContent.innerHTML = '</br>Director, Central European University, Summer University, <em>Cognitive Phenomenology</em>, Central European University, Budapest, July 2019 </br></br> Director, Central European University, Summer University, <i>Matter, Mind and Consciousness</i>, Central European University, Budapest, July 2016</br></br> Visiting Professor, Department of Philosophy, Central European University, Budapest, Fall 2014</br></br>California State University, Los Angeles, Full Professor, from Fall 2012</br></br>California State University, Los Angeles, Associate Professor (with tenure), Fall 2007-Summer 2012</br></br>California State University, Los Angeles, Assistant Professor, Fall 2003-Summer 2007</br></br>University of Nebraska, Lincoln, Visiting Assistant Professor, Spring 2003, 1996-1999</br></br>Brooklyn College of the City University of New York, Visiting Assistant Professor, 2000-2002</br></br>Iowa State University, Visiting Assistant Professor, 1999-2000</br></br>Hunter College of the City University of New York, Adjunct Assistant Professor, 1995-1996</br></br>Swarthmore College, Visiting Instructor, 1993-1994</br>'

    employmentColumn.appendChild(employmentTitle)
    employmentColumn.appendChild(employmentContent)
    employmentRow.appendChild(employmentColumn)

    //education

    const educationRow = document.createElement('div')
    educationRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    educationRow.style = ' border-bottom: 2px solid white;'

    const educationColumn = document.createElement('div');
    educationColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    educationColumn.style = 'width: 900px; '

    const educationTitle = document.createElement('h4');
    educationTitle.innerHTML = '</br>Education';

    const educationContent = document.createElement('p');
    educationContent.innerHTML = '</br>PhD, Philosophy: Graduate Center of the City University of New York, 1994</br></br> MA, Musical Composition: Queens College of the City University New York, 1985</br></br> BA, Musical Composition: Haverford College, 1981</br>'

    const areasOfSpecializationTitle = document.createElement('h4');
    areasOfSpecializationTitle.innerHTML = 'Areas of Specialization';

    const areasOfSpecializationContent = document.createElement('p');
    areasOfSpecializationContent.setAttribute('class', 'align-self-start')
    areasOfSpecializationContent.innerHTML = '</br>Philosophy of Mind, Philosophy of Language, Metaphysics'

    const areasOfCompetenceTitle = document.createElement('h4');
    areasOfCompetenceTitle.innerHTML = 'Areas of Competence';

    const areasOfCompetenceContent = document.createElement('p');
    areasOfCompetenceContent.setAttribute('class', 'align-self-start')
    areasOfCompetenceContent.innerHTML = '</br>Philosophy of Music, Philosophy of Linguistics'

    educationColumn.appendChild(educationTitle)
    educationColumn.appendChild(educationContent)
    educationColumn.appendChild(areasOfSpecializationTitle)
    educationColumn.appendChild(areasOfSpecializationContent)
    educationColumn.appendChild(areasOfCompetenceTitle)
    educationColumn.appendChild(areasOfCompetenceContent)
    educationRow.appendChild(educationColumn)

    //fellowships and scholarships
    const FaSRow = document.createElement('div')
    FaSRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    FaSRow.style = ' border-bottom: 2px solid white;'

    const FaSColumn = document.createElement('div');
    FaSColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    FaSColumn.style = 'width: 900px; '

    const FaSTitle = document.createElement('h4');
    FaSTitle.innerHTML = '</br>Fellowships and Scholarships';

    const FaSContent = document.createElement('p');
    FaSContent.innerHTML = '</br>Visiting Scholar, Faculty of Philosophy, Cambridge University, May-June 2016 (under the auspices of Tim Crane’s <em>New Directions in The Study of the Mind</em> Templeton Foundation funded project)</br></br>Fulbright Scholar, Hungary, 2014-2015</br></br>Research Fellow, Institute for Advanced Study, Central European University, 2014-2015</br></br>Australian National University, Visiting Fellow, Department of Philosophy, July 2013</br>University of Nebraska, Lincoln, Robert Chambers Research Fellow, Department of Philosophy, Fall 2002</br></br>University of California, Santa Cruz, Visiting Fellow, Department of Philosophy, Summer 2002 (NEH Institute, “Consciousness and Intentionality,” David Chalmers and David Hoy, Directors)</br></br>Cornell University, Visiting Fellow, Department of Philosophy, Summer 1996 (NEH Seminar, “Metaphysics of Mind,” John Heil, Director)'

    FaSColumn.appendChild(FaSTitle)
    FaSColumn.appendChild(FaSContent)
    FaSRow.appendChild(FaSColumn)

    //publications

    const publicationsRow = document.createElement('div')
    publicationsRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    publicationsRow.style = ' border-bottom: 2px solid white;'

    const publicationsColumn = document.createElement('div');
    publicationsColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    publicationsColumn.style = 'width: 900px; '

    const publicationsTitle = document.createElement('h4');
    publicationsTitle.innerHTML = '</br>Publications';

    const underContractTitle = document.createElement('h5');
    underContractTitle.style = 'font-weight: 300;'
    underContractTitle.innerHTML = '</br>Under Contract';

    const underContractContent = document.createElement('p');
    underContractContent.innerHTML = '</br><em>The Quality of Thought</em>, Oxford University Press'

    const publishedTitle = document.createElement('h5');
    publishedTitle.style = 'font-weight: 300;'
    publishedTitle.innerHTML = '</br>Published';

    const publishedContent = document.createElement('p');
    publishedContent.innerHTML = '</br>ARTICLES</br></br>“A Return to Simple Sentences,” <em>Routledge Handbook of Linguistic Reference</em>, S. Biggs and H. Geirsson, eds., New York: Routledge, 2020: 145-52</br></br>“Loar’s Compromised Internalism,” in A. Sullivan, ed., <em>Sensations, Thoughts, Language: Essays in Honor of Brian Loar</em>, Arthur Sullivan, ed., New York: Routledge, 2019: 203-224</br></br> “Acquaintance and Phenomenal Concepts,” in S. Coleman, ed., <em>Cambridge Classic Arguments Series: the Knowledge Argument</em>, Cambridge: Cambridge University Press, 2019: 87-101</br></br>“Consciousness and Intentionality,” in R. Gennaro, ed., <em>The Routledge Handbook of Consciousness</em>, New York: Routledge, 2018: 260-270</br></br>“What Kind of Science is Linguistics?” in C. Behme and M. Neef, eds., <em>Essays on Linguistic Realism</em>, John Benjamins, 2018: 7-20</br></br>“The Paraphenomenal Hypothesis,” <em>Analysis</em> 77, October 2017: 735–741</br></br>“Phenomenal Compositionality and Context Effects,” <em>Inquiry</em> 61, September 2017: 494-498</br></br>“Conscious Belief,” Book forum on Tim Crane’s <em>Aspects of Psychologism, Rivista Internazionale di Filosofia e Pscologia</em> Vol 7, N° 1, 2016: 121-126</br></br>“Indexical Thought,” in U. Kriegel, ed., <em>Phenomenal Intentionality: New Essays</em>, Oxford University Press, 2013: 49-70</br></br>“Conscious Thinking,” in H. Pashler, ed., <em>Encyclopedia of the Mind</em>, Thousand Oaks: Sage Publications, 2013: 186-189</br></br>“Introspection, Phenomenality and the Availability of Intentional Content,” in T. Bayne and M. Montague, eds., <em>Cognitive Phenomenology</em>, Oxford University Press, 2011: 141-173</br></br>“Intentional Psychologism,” <em>Philosophical Studies</em> 146, October 2009: 117-138</br></br>“The Phenomenology of Cognition, or, <em>What Is It Like to Think That P?”, Philosophy and Phenomenological Research</em> LXIX, July 2004: 1-36</br></br>“On Markerese,” <em>Philosophical Forum</em> 34, Nos 3&4, Special Issue: <em>The Philosophical Ideas of Jerrold J. Katz</em>, D. Pitt, guest ed., Fall/Winter 2003: 267-300</br></br>“Reply to Kac,” <em>Language</em> 79, March 2003: 197-201</br></br>“Alter Egos and Their Names,” <em>The Journal of Philosophy</em> XCVIII, October 2001: 531-552</br></br>“Nativism and the Theory of Content,” <em>ProtoSociology</em> 14, 2000: 222-239</br></br>“Compositional Idioms” (with Jerrold J. Katz), <em>Language</em> 76, June 2000: 409-432</br></br>“In Defense of Definitions,” <em>Philosophical Psychology</em> 12, June 1999: 139-156</br></br>“What is Tonality?”, <em>International Journal of Musicology</em> IV, 1995: 291-300</br></br>ENCYCLOPEDIA ENTRIES</br></br>“Conscious Thinking,” H. Pashler, ed., <em>Encyclopedia of the Mind</em>, Sage Publications, 2013</br></br>“Mental Representation,” <em>Stanford Internet Encyclopedia of Philosophy</em>, March 2000; Major Revisions 2004, 2008, 2012, 2020 (http://plato.stanford.edu/entries/mental-representation) (Italian translation, “La rappresentazione mentale,” G. Galloni and E. Vizzinisi, eds., <em>Identità e Rapprasentazione</em>, Stamen, 2006)</br></br>“Jerrold J Katz,” H. Stammerjohann, ed., <em>Lexicon Grammaticorum</em>, 2nd edition, Max Niemeyer Verlag, 2009'

    publicationsColumn.appendChild(publicationsTitle)
    publicationsColumn.appendChild(underContractTitle)
    publicationsColumn.appendChild(underContractContent)
    publicationsColumn.appendChild(publishedTitle)
    publicationsColumn.appendChild(publishedContent)

    publicationsRow.appendChild(publicationsColumn)

    const bookReviewsRow = document.createElement('div')
    bookReviewsRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    bookReviewsRow.style = ' border-bottom: 2px solid white;'

    const bookReviewsColumn = document.createElement('div');
    bookReviewsColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    bookReviewsColumn.style = 'width: 900px; '

    const bookReviewsContent = document.createElement('p');
    bookReviewsContent.innerHTML = '</br>BOOK REVIEWS</br></br>Peter Kivy, <em>Introduction to a Philosophy of Music</em>, and <em>New Essays on Musical Understanding</em>, <em>The Sunday Times of London Literary Supplement</em>, April 2004</br></br>Mark Norris Lance and John O’Leary-Hawthorne, <em>The Grammar of Meaning</em>, <em>Philosophical Books</em> 41, April 2000 (With authors’ reply.)</br></br>Review of Lynne Rudder Baker, <em>Explaining Attitudes</em>, <em>Philosophical Psychology</em>, 11, March 1998: 99-104'

    bookReviewsColumn.appendChild(bookReviewsContent)
    bookReviewsRow.appendChild(bookReviewsColumn)

    const miscellanyRow = document.createElement('div')
    miscellanyRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    miscellanyRow.style = ' border-bottom: 2px solid white;'

    const miscellanyColumn = document.createElement('div');
    miscellanyColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    miscellanyColumn.style = 'width: 900px; '

    const miscellanyContent = document.createElement('p');
    miscellanyContent.innerHTML = '</br>Miscellany</br></br>“George Perle: An Appreciation,” <em>Theory and Practice</em> 33, 2008 (volume dedicated to composer/theorist George Perle, 1915-2009)'

    miscellanyColumn.appendChild(miscellanyContent)
    miscellanyRow.appendChild(miscellanyColumn)

    //presentations

    const presentationsRow = document.createElement('div')
    presentationsRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    presentationsRow.style = ' border-bottom: 2px solid white;'

    const presentationsColumn = document.createElement('div');
    presentationsColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    presentationsColumn.style = 'width: 900px; '

    const presentationsTitle = document.createElement('h4');
    presentationsTitle.innerHTML = '</br>Presentations'

    const presentationsContent = document.createElement('p');
    presentationsContent.innerHTML = '</br>“Analytic Phenomenology”</br></br><li><span>John Tienson Memorial Conference, University of Memphis (online), November 2020</span></li></br>“Objects and Their Phases”</br></br><li><span>Inland Northwest Philosophy Conference: Metaphysics on the Mountain 3 (online), July 2020</span></li><li><span>Metaphysics Conference, Inter-University Center, Dubrovnik, Croatia, June 2019</span></li><li><span>Moral Sciences Club, Cambridge University, May 2016</span></li><li><span>Central European University, Budapest, November 2014</span></li><li><span>University of Pécs, Hungary, November 2014</span></li><li><span>Australian National University, July 2013</span></li><li><span>California State University Northridge, May 2013</span></li><li><span>Northwest Philosophy Conference, Portland, Oregon, November 2011</span></li><li><span>California State University, Chico, November 2010</span></li></br>“Singular Thought”</br></br><li><span>Workshop: Phenomenal intentionality, Ruhr University, Bochum, Germany, June 2019</span></li><li><span>Jean Nicod Institute, Paris, June 2018</span></li></br>“What Kind of Science Is Linguistics?”</br></br><li><span>Workshop on “Essays on Linguistic Realism,” Canadian Philosophical Association Annual Congress, Vancouver, British Columbia, June 2019</span></li><li><span>Workshop: Realist Linguistics, University of Braunschweig, Germany, June 2015</li></br>“A Plea for Agnosticism”</br></br><li><span>Dualism in the Twenty-First Century, Central European University, Budapest, December 2018</span></li></br>“Two Arguments Against Two Arguments Against Internalism, and Two Arguments for Internalism”</br></br><li><span>Metaphysics Conference, Inter-University Center, Dubrovnik, Croatia, June 2018</span></li></br>“How Do Thoughts Find Their Objects?”</br></br><li><span>University of Milan, May 2018</span></li><li><span>Central European University, January 2018</span></li></br>“Phenomenal Sorites and Unconscious Qualia”</br></br><li><span>Ruhr University, Bochum, Germany, June 2018</span></li><li><span>City College, CUNY, October 2017</span></li><li><span>Metaphysics Conference, Inter-University Center, Dubrovnik, Croatia, June 2017</span></li><li><span>The Science of Consciousness, Tucson, March 2016</span></li><li><span>Hungarian Academy of Sciences, April 2015</span></li></br>“The Paraphenomenal Hypothesis”</br></br><li><span>Joint Session of the Aristotelian Society and the Mind Association, University of Edinburgh, July 2017</span></li><li><span>Australasian Association of Philosophy Annual Conference, University of Queensland, Brisbane, Australia, July 2013</span></li><li><span>Toward a Science of Consciousness 2010, Tucson, April 2010</span></li></br>“Acquaintance and Phenomenal Concepts”</br></br><li><span>University of Barcelona, June 2017</span></li><li><span>University of Fribourg, May 2016</span></li><li><span>Conference: Non-physicalist Views of Consciousness, Cambridge University, May 2016</span></li></br>“Thinking with Names”</br></br><li><span>University of Miami, March 2017</span></li><li><span>Workshop: <em>Perceptual and Non-perceptual Phenomenology</em>, Centre for Philosophical Psychology, University of Antwerp, Belgium, December 2014</span></li><li><span>Workshop: <em>Dimensions of Intentionality</em>, Institut für Philosophie II, Ruhr University Bochum, Germany, September 2014</span></li><li><span>Conference: <em>Consciousness, Intentionality and Phenomenality</em>, Rice University, October 2011</span></li></br>“Indexical Thought”</br></br>Keynote, University of Fribourg Summer School: <em>Intentionality, Rationality, and the Subject</em>, June 2016</br>“Compositionality and Phenomenal Contrast Effects”</br></br><li><span>University of Milan, May 2016</span></li></br>“What Is Tonality?”</br></br><li><span>Hungarian Academy of Sciences, July 2015</span></li></br>“Unconscious Thought”</br></br><li><span>Workshop: <em>Phenomenal Intentionality</em>, philosophy department, Central European University (co-organized with Katalin Farkas, CEU), November 2014</span></li><li><span>Fourth Tucson Conference on Consciousness, April 2000</span></li><li><span>Tokyo Conference on Consciousness, United Nations University, May 1999</span></li><li><span>Pacific Division APA meetings, March 1999</span></li><li><span>Conference of the Alabama Philosophical Society, Auburn University, November 1997</span></li></br> “Thought and Consciousness”</br></br><li><span>Fellows Seminar, Institute for Advanced Study, Central European University, November 2014</span></li></br>“The Quality of Thought”</br></br><li><span>Hungarian Academy of Sciences, October 2014</span></li></br>“Knowledge by Acquaintance and Acquaintance as Knowledge”</br></br><li><span>University of Graz, Austria, October 2014</span></li><li><span>Workshop: <em>Intentionality at the Beach</em>, Australian National University, Kioloa Beach Campus, July 2013</span></li></br>“The Opacity of Mind”</br></br><li><span>SPAWN Conference: Transparency of Mind, Syracuse University, August 2013</span></li></br>“There is No Such Thing as Derived Intentionality”</br></br><li><span>Toward a Science of Consciousness 2014, Tucson, April 2014</span></li><li><span>Workshop: Interfaces of the Mind, Ruhr-Universität, Bochum, Germany, July 2012</span></li></br>“Phenomenal Demonstratives”</br></br><li><span>Toward a Science of Consciousness, Tucson, AZ, April 2012</span></li></br>“The Phenomenology of Thought”</br></br><li><span>Invited Symposium on the Phenomenology of Thought, American Philosophical Association Eastern Division Meetings, Boston, December 2010 (with Joseph Levine and Michael Tye)</span></li></br>“Demonstrative Thoughts”</br></br><li><span>University of Miami, March 2011</span></li><li><span>University of Nevada, Las Vegas, October 2010</span></li><li><span>CUNY Graduate Center (eighth annual Jerrold J Katz Lecture), February 3, 2010</span></li><li><span>12th Southern California Philosophy Conference, Pitzer College, November 2009</span></li><li><span>Workshop: Consciousness and Thought, Dubrovnik Inter-University Center, Croatia, August 2008</span></li><li><span>Meeting of the Phenomenal Intentionality Research Group, University of Arizona, Tucson, October 2008</span></li></br>“The Introspective Availability of Intentional Content”</br></br><li><span>California Phenomenology Circle, Los Angeles, December 2008</span></li><li><span>Toward a Science of Consciousness, Tucson, April 2008</span></li><li><span>Conference: The Phenomenology of Cognition, Cal Poly San Luis Obispo, June 2007</span></li></br>“Cognitive Acuity”</br></br><li><span>Toward a Science of Consciousness, Budapest, July 2007</span></li></br>“Intentional Psychologism”</br></br><li><span>Toward a Science of Consciousness, Tucson, April 2006</span></li><li><span>UC Irvine, December 2005</span></li><li><span>Association for the Scientific Study of Consciousness, Cal Tech, June 2005</span></li></br>“The Burgean Intuitions”</br></br><li><span>Southern California Philosophy Conference, UC Irvine, October 2004</span></li><li><span>CUNY Graduate Center, February 2004 (second annual Jerrold J. Katz Lecture)</span></li><li><span>University of Nebraska-Lincoln, October 2002</span></li><li><span>Texas Tech University, November 1996 (early version)</span></li></br>“Mental Sense”</br></br><li><span>University of Nebraska-Lincoln, December 2002</span></li></br>“Psychologism in Linguistics”<li><span>University of Nebraska-Lincoln, September 2002</span></li><li><span>University of Miami, April 2002</span></li><li><span>Cognitive Science Symposium and Discussion Group, CUNY Graduate Center, November 2001</span></li></br>“Alter Egos and Their Names”</br></br><li><span>Pacific Division APA Meetings, March 2001</span></li><li><span>New Jersey Regional Philosophical Association Meetings, November 2000</span></li><li><span>CUNY Graduate Center, March 2000</span></li><li><span>University of Colorado, Boulder, April 1999</span></li><li><span>Conference of the Alabama Philosophical Society, November 1998</span></li></br>“The Phenomenology of Cognition, Or, What Is It Like to Think That P?”</br></br><li><span>Third Tucson Conference on Consciousness, April 1998</span></li><li><span>Pacific Division APA meetings, March 1998</span></li><li><span>CUNY Graduate Center, March 1998</span></li><li><span>Auburn University, April 1997</li><li>California State University, Los Angeles, February 1997 (very early version</span></li></br>“Nativism and the Theory of Content”</br></br><li><span>Society for Philosophy and Psychology, New York City, June 1997 (Poster)</span></li><li><span>University of Colorado, Boulder, March 1997</span></li><li><span>Texas Tech University, November 1996</span></li><li><span>Harvard/MIT Graduate Students’ Conference, March 1995</span></li>'

    presentationsColumn.appendChild(presentationsTitle)
    presentationsColumn.appendChild(presentationsContent)

    presentationsRow.appendChild(presentationsColumn)

    //teaching experience

    const teachingExperienceRow = document.createElement('div')
    teachingExperienceRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    teachingExperienceRow.style = ' border-bottom: 2px solid white;'

    const teachingExperienceColumn = document.createElement('div');
    teachingExperienceColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    teachingExperienceColumn.style = 'width: 900px; '

    const teachingExperienceTitle = document.createElement('h4');
    teachingExperienceTitle.innerHTML = '</br>Teaching Experience'

    const teachingExperienceContent = document.createElement('p');
    teachingExperienceContent.innerHTML = '</br>Central European University, Budapest</br></br><li class="minus-bullet">Director, <em>Cognitive Phenomenology</em>, Summer University, July 2019</li></br><li class="minus-bullet">Director, <em>Matter, Mind and Consciousness</em>, Summer University, July 2016</li></br><li class="minus-bullet">PhD/MA seminar, Phenomenal Intentionality, Fall 2014</li></br>California State University, Los Angeles</br></br><li class="minus-bullet">MA Seminars</li></br><li class="minus-bullet">The Quality of Thought (2017); Philosophy of Mind (Phenomenal Intentionality (2013)); Cognitive Phenomenology (2012, 2005); Panpsychism (2011); Emergentism (2010); Demonstrative Thought (2009); Recent Work on Consciousness (2008, 2004)); Metaphysics; Philosophy of Music</li></br><li class="minus-bullet">Undergraduate Courses (continuing)</li></br><li class="minus-bullet">Philosophical Ideas: Knowledge and Reality; The Nature of Consciousness; Philosophy of Mind; Philosophy of Language; Metaphysic; Introduction to Symbolic Logic</li></br></br>University of Nebraska-Lincoln</br></br><li class="minus-bullet">PhD seminars</li></br><li class="minus-bullet">Consciousness and Intentionality; Direct Reference</li></br><li class="minus-bullet">Undergraduate Courses</li></br><li class="minus-bullet">Philosophy of Mind, Epistemology, Philosophy of Law, Medical Ethics, Introduction to Philosophy, Applied Ethics</li></br></br>Brooklyn College, CUNY</br></br><li class="minus-bullet">Philosophy of Mind, Philosophy of Language, Metaphysics, Philosophy of Psychology, Philosophy of Artificial Intelligence, Epistemology, Introduction to Philosophy</li></br></br>Iowa State University</br></br><li class="minus-bullet">Minds, Brains and Computers, 20th Century Anglo-American Philosophy, Introduction to Philosophy</li></br></br>Swarthmore College</br></br><li class="minus-bullet">Language and Meaning (Philosophy/Linguistics Senior Honors Seminar), Introduction to Philosophy of Language, Introduction to Formal Logic and Philosophy</li></br></br>Hunter College</br></br><li class="minus-bullet">Introduction to Philosophy, Introduction to Moral Philosophy, Introduction to Formal Logic and Scientific Method, Critical Thinking</li>'

    teachingExperienceColumn.appendChild(teachingExperienceTitle)
    teachingExperienceColumn.appendChild(teachingExperienceContent)

    teachingExperienceRow.appendChild(teachingExperienceColumn)

    //service to the profession

    const serviceToTheProfessionRow = document.createElement('div')
    serviceToTheProfessionRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')
    serviceToTheProfessionRow.style = ' border-bottom: 2px solid white;'

    const serviceToTheProfessionColumn = document.createElement('div');
    serviceToTheProfessionColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    serviceToTheProfessionColumn.style = 'width: 900px; '

    const serviceToTheProfessionTitle = document.createElement('h4');
    serviceToTheProfessionTitle.innerHTML = '</br>Service to the Profession'

    const serviceToTheProfessionContent = document.createElement('p');
    serviceToTheProfessionContent.innerHTML = '</br><h5>Referee</h5></br><em>American Philosophical Quarterly, Australasian Journal of Philosophy, Dialogue, Erkenntnis, Grazer Philosophische Studien, Journal of Consciousness Studies, Language, Mind, Noûs, Pacific Philosophical Quarterly, Philosophical Psychology, Philosophical Quarterly, Philosophical Studies, Philosophy and Phenomenological Research</em></br></br>Cambridge University Press, Oxford University Press, The MIT Press</br></br><b>Peer Review Committee Member</b>, Fulbright U.S. Scholar Program, 2016, 2017</br></br><b>Program Committee Member</b>, American Philosophical Association, Pacific Division, 2012-2015'

    serviceToTheProfessionColumn.appendChild(serviceToTheProfessionTitle)
    serviceToTheProfessionColumn.appendChild(serviceToTheProfessionContent)

    serviceToTheProfessionRow.appendChild(serviceToTheProfessionColumn)

    //references

    const referencesRow = document.createElement('div')
    referencesRow.setAttribute('class', 'cv-rows row d-flex justify-content-center pb-3')

    const referencesColumn = document.createElement('div');
    referencesColumn.setAttribute('class', 'd-flex flex-column align-items-start px-3');
    referencesColumn.style = 'width: 900px'

    const referencesTitle = document.createElement('h4');
    referencesTitle.innerHTML = '</br>References'

    const referencesContent = document.createElement('p');
    referencesContent.innerHTML = '</br>Ned Block, Department of Philosophy, New York University</br></br>David Chalmers, Department of Philosophy, New York University</br></br>Tim Crane, Central European University, Vienna</br></br>Katalin Farkas, Department of Philosophy, Central European University, Vienna</br></br>Terry Horgan, Department of Philosophy, University of Arizona</br></br>Joe Levine, Department of Philosophy, University of Massachusetts, Amherst</br></br>Charles Siewert, Department of Philosophy, Rice University</br></br>Galen Strawson, Department of Philosophy, University of Texas, Austin'

    referencesColumn.appendChild(referencesTitle)
    referencesColumn.appendChild(referencesContent)

    referencesRow.appendChild(referencesColumn)

    container.appendChild(downloadCVRow)
    container.appendChild(employmentRow)
    container.appendChild(educationRow)
    container.appendChild(FaSRow)
    container.appendChild(publicationsRow)
    container.appendChild(bookReviewsRow)
    container.appendChild(miscellanyRow)
    container.appendChild(presentationsRow)
    container.appendChild(teachingExperienceRow)
    container.appendChild(serviceToTheProfessionRow)
    container.appendChild(referencesRow)
    container.appendChild(navbar)
    document.body.style = 'height: 100%; padding-top: 90px; background-color: black !important; overflow: auto !important;'
    document.body.appendChild(container)

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