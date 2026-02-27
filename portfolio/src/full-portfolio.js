import { detailsPages } from "./details-pages";

const fullPortfolio = [{
        img: "site-12",
        title: "Blaues Gut",
        titel_DE: "Blaues Gut",
        technologies: "ReactJS, Vanilla JavaScript, FTL, HTML, ClayUI, SCSS, Liferay, Git",
        websiteURL: "https://blauesgut.de/"
    },
    
    {
        img: "site-16",
        title: "Knowledge Platform (Test page, as the production system is private)",
        titel_DE: "Wissensplattform (Testseite, da das Produktivsystem privat ist)",
        technologies: "ReactJS, vanilla JavaScript, FTL, HTML, ClayUI, SCSS, Liferay, Git",
        detailsPage: "/Portfolio/details/2"
    },
    {
        img: "site-19",
        title: "Energieatlas",
        titel_DE: "Energieatlas",
        technologies: "Highcharts, FTL, HTML, ClayUI, SCSS, Liferay, Git",
        websiteURL: "https://www.energieatlas-bw.de/start"
    },
    {
        img: "site-13",
        title: "Environmental Portal North Rhine-Westphalia",
        titel_DE: "Umweltport Nordrhein-Westfalen",
        technologies: "Vanilla JavaScript, FTL, HTML, ClayUI, SCSS, Liferay, Git",
        websiteURL: "https://www.umweltportal.nrw.de/"
    },
    {
        img: "site-14",
        title: "Environmental Portal Saxony-Anhalt",
        titel_DE: "Umweltportal Sachsen-Anhalt",
        technologies: "Vanilla JavaScript, FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://umwelt.sachsen-anhalt.de/"
    },
    {
        img: "site-20",
        title: "Environmental Portal Bavaria",
        titel_DE: "Umweltportal Bayern",
        technologies: "FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://www.umweltnavigator.bayern.de"
    },
    {
        img: "site-15",
        title: "Low Water Information Centre Baden-Württemberg",
        titel_DE: "Niedrigwasser-Informationszentrum Baden-Württemberg",
        technologies: "FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://niz.baden-wuerttemberg.de/"
    },
    {
        img: "site-24",
        title: "Atmo-Rhena",
        titel_DE: "Atmo-Rhena",
        technologies: "FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://atmo-rhena.eu/"
    },
    {
        img: "site-21",
        title: "Environmental Portal Thuringia",
        titel_DE: "Umweltportal Thüringen",
        technologies: "FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://www.umweltnavigator.bayern.de"
    },
    {
        img: "site-23",
        title: "Baden-Württemberg State Institute for the Environment",
        titel_DE: "Baden-Württemberg Landesanstalt für Umwelt",
        technologies: "Vanilla JavaScript, FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://www.lubw.baden-wuerttemberg.de/startseite"
    },
    {
        img: "site-22",
        title: "Competence Center for Climate Change",
        titel_DE: "Kompetenzzentrum Klimawandel",
        technologies: "FTL, HTML, SCSS, Liferay, Git",
        websiteURL: "https://www.klimaatlas-bw.de/"
    },
    {
        img: "site-18",
        title: "The.Kilma.Länd",
        titel_DE: "The.Kilma.Länd",
        technologies: "FTL, HTML, ClayUI, SCSS, Liferay, Git",
        websiteURL: "https://klimalaend.de/"
    },
    {
        img: "site-17",
        title: "YouMeO",
        titel_DE: "YouMeO",
        technologies: "HTML, SCSS, vanilla JavaScript, Ecoma (CMS)",
        websiteURL: "https://www.youmeo.fr/en/"
    },
    {
        img: "site-5",
        title: "Boutique Ado",
        titel_DE: "Boutique Ado",
        technologies: "Python, Django, PostgresSQL, stripe API, JavaScript, jQuery, CSS, Bootstrap, HTML, Github, Heroku",
        sourceCode: "https://github.com/Rian1010/boutique_ado",
        websiteURL: "https://rian-boutique-ado.herokuapp.com/"
    },
    {
        img: "site-25",
        title: "BearingPoint",
        titel_DE: "BearingPoint",
        technologies: "HTML, SCSS, Ecoma (CMS)",
        websiteURL: "https://www.bearingpoint.com/de-de/"
    },
    {
        img: "site-1",
        title: "TravelGoal",
        titel_DE: "TravelGoal",
        technologies: "Vanilla JavaScript, Google Maps API, HTML, CSS, Git, Github",
        sourceCode: "https://github.com/Rian1010/Travel-Website",
        websiteURL: "https://rian1010.github.io/Travel-Website/"
    },
    {
        img: "site-2",
        title: "E-Commerce Website - Phone Shop (Fourth Milestone Project)",
        titel_DE: "E-Commerce-Website - Phone Shop (Viertes Meilenstein Projekt)",
        technologies: "Django, Python, PostgresSQL, JavaScript, jQuery, stripe API, Bootstrap, CSS, HTML, Github, Heroku",
        sourceCode: "https://github.com/Rian1010/Milestone4",
        websiteURL: "https://milestone4-django-phone-shop.herokuapp.com/"
    },
    {
        img: "site-3",
        title: "Mainhatten Skywheelers (Still in Progress)",
        titel_DE: "Mainhatten Skywheelers (Noch in Bearbeitung)",
        technologies: "Django, Python, PostgresSQL, JavaScript, jQuery, Bootstrap, CSS, HTML, Email.js, YouTube Live Stream API, Github, Heroku",
        sourceCode: "https://github.com/Rian1010/Mainhatten-Skywheelers",
    },
    {
        img: "site-4",
        title: "Amazon Clone",
        titel_DE: "Amazon Klon",
        technologies: "ReactJS, stripe API, CSS, HTML, Redux, Express, Firebase, Github",
        sourceCode: "https://github.com/Rian1010/Amazon-Clone",
        websiteURL: "https://clone-568b3.web.app/"
    },
    {
        img: "site-6",
        title: "Language Learner's App / JavaScript Learning App (Third Milestone Project)",
        titel_DE: "Sprachlerner App / JavaScript-Lern-App (Drittes Meilenstein Projekt)",
        technologies: "Flask, Python, MongoDB, JavaScript, jQuery, Email.js API, Bootstrap, CSS, HTML, Github, Heroku",
        sourceCode: "https://github.com/Rian1010/Language-Learners-App",
        websiteURL: "https://language-learners-app.herokuapp.com/"
    },
    {
        img: "site-7",
        title: "Shopping-List",
        titel_DE: "Einkaufsliste",
        technologies: "Flask, Python, MongoDB, JavaScript, jQuery, Bootstrap, CSS, HTML, Github, Heroku",
        sourceCode: "https://github.com/Rian1010/Shopping-List",
        websiteURL: "https://shopping-list-google.herokuapp.com/"
    },
    {
        img: "site-8",
        title: "Charity Base (Second Milestone Project)",
        titel_DE: "Wohltätigkeiten Website",
        technologies: "HTML, CSS, JavaScript, DC.js API, D3.js API, Email.js API, Google Maps API, Github",
        sourceCode: "https://github.com/Rian1010/Charity-Website",
        websiteURL: "https://rian1010.github.io/Charity-Website/"
    },
    // {
    //     img: "site-9",
    //     title: "Portfolio",
    //     titel_DE: "Portfolio",
    //     technologies: "ReactJS, JavaScript, Bootstrap, Responsive Web Design, HTML, CSS, Github",
    //     sourceCode: "https://github.com/Rian1010/Portfolio",
    //     websiteURL: "https://rian1010.github.io/Portfolio/"
    // },
    {
        img: "site-10",
        title: "Thorin & Company",
        titel_DE: "Thorin & Die Truppe",
        technologies: "Flask, Python, AJAX, jQuery, JavaScript, Bootstrap, HTML, CSS, SASS, Github, Heroku",
        sourceCode: "https://github.com/Rian1010/Flask",
        websiteURL: "https://thorin-and-company-4.herokuapp.com/"
    },
    {
        img: "site-11",
        title: "Germany Online Guide (First Milestone Project)",
        titel_DE: "Deutschland Online-Guide (Erstes Meilenstein Projekt)",
        technologies: "HTML, CSS, Bootstrap, JavaScripts, Github",
        sourceCode: "https://github.com/Rian1010/Germany-Online-Guide",
        websiteURL: "https://rian1010.github.io/Germany-Online-Guide/index.html"
    }
];


export default fullPortfolio;