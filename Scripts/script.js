document.addEventListener('DOMContentLoaded', () => {

    // --- UTILITY FUNCTIONS ---
    const getElem = (selector) => document.querySelector(selector);
    const getAllElems = (selector) => document.querySelectorAll(selector);

    // --- DOM ELEMENT SELECTORS ---
    const htmlElement = document.documentElement;
    const loader = getElem('#loader');
    const langToggle = getElem('#lang-toggle');
    const navButtons = getAllElems('.nav-btn');
    const sections = getAllElems('main section');
    const typingTextElement = getElem('#typing-text');
    const mobileMenuToggle = getElem('#mobile-menu-toggle');
    const sidebar = getElem('#sidebar');
    const sidebarBackdrop = getElem('#sidebar-backdrop');
    const contactForm = getElem('#contact-form');
    const skillsContainer = getElem('#skills-categories');
    const certGrid = getElem('.cert-grid');
    const certFilters = getElem('.cert-filters');
    const certsCountNumber = getElem('#certs-count-number');
    const portfolioGrid = getElem('.portfolio-grid');
    const portfolioFilters = getElem('.portfolio-filters');
    const projectsCountNumber = getElem('#projects-count-number');
    const projectSearchInput = getElem('#project-search');
    const projectSearchClear = getElem('#project-search-clear');
    const portfolioEmptyMsg = getElem('#portfolio-empty-msg');

    // Protected Certificate Viewer selectors (view-only, original resolution, no zoom/download/PDF)
    const viewerModal = getElem('#viewer-modal');
    const closeModalBtn = getElem('#modal-closer');
    const certViewerLoader = getElem('#cert-viewer-loader');
    const certViewerImage = getElem('#cert-viewer-image');

    // Image Gallery selectors (for design items if present)
    const imageGalleryModal = getElem('#image-gallery-modal');
    const closeGalleryBtn = getElem('#gallery-modal-closer');
    const galleryImage = getElem('#gallery-image');
    const galleryPrevBtn = getElem('#gallery-prev-btn');
    const galleryNextBtn = getElem('#gallery-next-btn');
    const galleryCounter = getElem('#gallery-counter');

    // --- DEVICON OFFICIAL SVG BASE URL ---
    const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

    // --- SKILLS DATA (Official technology logos + reusable structured categories) ---
    const skillsData = [
        {
            categoryKey: 'skills-cat-frontend',
            items: [
                { key: 'skill-html', iconUrl: `${DEVICON}/html5/html5-original.svg` },
                { key: 'skill-css', iconUrl: `${DEVICON}/css3/css3-original.svg` },
                { key: 'skill-js', iconUrl: `${DEVICON}/javascript/javascript-original.svg` },
                { key: 'skill-ts', iconUrl: `${DEVICON}/typescript/typescript-original.svg` },
                { key: 'skill-react', iconUrl: `${DEVICON}/react/react-original.svg` },
                { key: 'skill-bootstrap', iconUrl: `${DEVICON}/bootstrap/bootstrap-original.svg` },
                { key: 'skill-tailwind', iconUrl: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
                { key: 'skill-responsive', faIcon: 'fas fa-mobile-alt' },
                { key: 'skill-uiux', faIcon: 'fas fa-layer-group' }
            ]
        },
        {
            categoryKey: 'skills-cat-backend',
            items: [
                { key: 'skill-nodejs', iconUrl: `${DEVICON}/nodejs/nodejs-original.svg` },
                { key: 'skill-express', iconUrl: `${DEVICON}/express/express-original.svg`, invert: true },
                { key: 'skill-php', iconUrl: `${DEVICON}/php/php-original.svg` },
                { key: 'skill-laravel', iconUrl: `${DEVICON}/laravel/laravel-original.svg` },
                { key: 'skill-csharp', iconUrl: `${DEVICON}/csharp/csharp-original.svg` },
                { key: 'skill-dotnet', iconUrl: `${DEVICON}/dot-net/dot-net-original.svg` },
                { key: 'skill-aspnet', iconUrl: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
                { key: 'skill-restapi', faIcon: 'fas fa-plug' },
                { key: 'skill-apidev', faIcon: 'fas fa-code-branch' },
                { key: 'skill-auth', faIcon: 'fas fa-user-shield' },
                { key: 'skill-efcore', faIcon: 'fas fa-cubes' }
            ]
        },
        {
            categoryKey: 'skills-cat-databases',
            items: [
                { key: 'skill-mysql', iconUrl: `${DEVICON}/mysql/mysql-original.svg` },
                { key: 'skill-mssql', iconUrl: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
                { key: 'skill-postgresql', iconUrl: `${DEVICON}/postgresql/postgresql-original.svg` },
                { key: 'skill-dbdesign', faIcon: 'fas fa-project-diagram' },
                { key: 'skill-dbmgmt', faIcon: 'fas fa-database' }
            ]
        },
        {
            categoryKey: 'skills-cat-devops',
            items: [
                { key: 'skill-git', iconUrl: `${DEVICON}/git/git-original.svg` },
                { key: 'skill-github', iconUrl: `${DEVICON}/github/github-original.svg`, invert: true },
                { key: 'skill-ghactions', iconUrl: `${DEVICON}/githubactions/githubactions-original.svg` },
                { key: 'skill-apitesting', faIcon: 'fas fa-vial' },
                { key: 'skill-postman', iconUrl: `${DEVICON}/postman/postman-original.svg` }
            ]
        },
        {
            categoryKey: 'skills-cat-cloud',
            items: [
                { key: 'skill-azure', iconUrl: `${DEVICON}/azure/azure-original.svg` },
                { key: 'skill-aws', iconUrl: 'images/skills/aws.svg' },
                { key: 'skill-gcloud', iconUrl: `${DEVICON}/googlecloud/googlecloud-original.svg` },
                { key: 'skill-docker', iconUrl: `${DEVICON}/docker/docker-original.svg` }
            ]
        },
        {
            categoryKey: 'skills-cat-design',
            items: [
                { key: 'skill-figma', iconUrl: `${DEVICON}/figma/figma-original.svg` },
                { key: 'skill-photoshop', iconUrl: `${DEVICON}/photoshop/photoshop-original.svg` },
                { key: 'skill-canva', iconUrl: `${DEVICON}/canva/canva-original.svg` },
                { key: 'skill-uiux', faIcon: 'fas fa-pencil-ruler' },
                { key: 'skill-graphic', faIcon: 'fas fa-palette' }
            ]
        },
        {
            categoryKey: 'skills-cat-office',
            items: [
                { key: 'skill-word', faIcon: 'fas fa-file-word' },
                { key: 'skill-excel', faIcon: 'fas fa-file-excel' },
                { key: 'skill-ppt', faIcon: 'fas fa-file-powerpoint' },
                { key: 'skill-access', faIcon: 'fas fa-database' },
                { key: 'skill-outlook', faIcon: 'fas fa-envelope' },
                { key: 'skill-onenote', faIcon: 'fas fa-sticky-note' }
            ]
        },
        {
            categoryKey: 'skills-cat-soft',
            items: [
                { key: 'skill-teamlead', faIcon: 'fas fa-users' },
                { key: 'skill-volunteer', faIcon: 'fas fa-hands-helping' },
                { key: 'skill-communication', faIcon: 'fas fa-comments' },
                { key: 'skill-problem', faIcon: 'fas fa-lightbulb' },
                { key: 'skill-creativity', faIcon: 'fas fa-paint-brush' },
                { key: 'skill-adaptability', faIcon: 'fas fa-sync-alt' },
                { key: 'skill-time', faIcon: 'fas fa-clock' },
                { key: 'skill-critical', faIcon: 'fas fa-brain' }
            ]
        }
    ];

    // --- CERTIFICATIONS DATA ---
    // Reusable array: add future certificates here with id, titleKey, organizationKey,
    // categoryKey, filterGroup, optional dateKey, logo/logos, thumbnail, and image (original asset).
    const certifications = [
        // Featured & Newly Added Certificates (using authentic institution logos)
        {
            id: 'cert-oxford-bss',
            titleKey: 'cert-oxford-bss-title',
            organizationKey: 'org-oxford-bss',
            categoryKey: 'cat-fullstack',
            filterGroup: 'dev',
            dateKey: '',
            logos: [
                { src: '/assets/aistudio/image_7828f304.png', alt: 'British Software Solutions', wide: true },
                { src: '/assets/aistudio/image_3db50758.png', alt: 'University of Oxford' }
            ],
            thumbnail: 'Certificates/thumbs/OXFORD_BSS.jpg',
            image: '/assets/aistudio/2_c0241267.jpg'
        },
        {
            id: 'cert-depi',
            titleKey: 'cert21-title',
            organizationKey: 'org-depi',
            categoryKey: 'cat-frontend-react',
            filterGroup: 'dev',
            dateKey: 'date-depi',
            logo: 'LOGO/DEPI.png',
            thumbnail: 'Certificates/thumbs/DEPI.jpg',
            image: 'Certificates/images/DEPI.png'
        },
        {
            id: 'cert-harvard',
            titleKey: 'cert19-title',
            organizationKey: 'org-harvard',
            categoryKey: 'cat-cs',
            filterGroup: 'dev',
            dateKey: 'date-harvard',
            logo: 'LOGO/HARVARD.png',
            thumbnail: 'Certificates/thumbs/HARVARD.jpg',
            image: 'Certificates/images/HARVARD.png'
        },
        {
            id: 'cert-aits',
            titleKey: 'cert-aits-title',
            organizationKey: 'org-aits',
            categoryKey: 'cat-software-dev',
            filterGroup: 'dev',
            dateKey: '',
            logo: '/assets/aistudio/image_cc11f630.png',
            thumbnail: 'Certificates/thumbs/AITS.jpg',
            image: '/assets/aistudio/0_016be6dd.png'
        },
        {
            id: 'cert-cambridge',
            titleKey: 'cert-cambridge-title',
            organizationKey: 'org-cambridge',
            categoryKey: 'cat-programming',
            filterGroup: 'dev',
            dateKey: '',
            logo: '/assets/aistudio/image_6e552ee3.png',
            thumbnail: 'Certificates/thumbs/CAMBRIDGE.jpg',
            image: '/assets/aistudio/1_fbed6934.jpg'
        },
        {
            id: 'cert-vodafone',
            titleKey: 'cert-vodafone-title',
            organizationKey: 'org-vodafone',
            categoryKey: 'cat-award-db-web',
            filterGroup: 'cloud-data',
            dateKey: '',
            logo: '/assets/aistudio/image_13e7b422.png',
            thumbnail: 'Certificates/thumbs/VODAFONE.jpg',
            image: '/assets/aistudio/___________________________f462b552.png'
        },
        {
            id: 'cert-auc',
            titleKey: 'cert18-title',
            organizationKey: 'org-auc',
            categoryKey: 'cat-english',
            filterGroup: 'lang-soft',
            dateKey: '',
            logo: 'LOGO/AUC.png',
            thumbnail: 'Certificates/thumbs/AUC.jpg',
            image: 'Certificates/images/AUC.png'
        },
        {
            id: 'cert-meu',
            titleKey: 'cert20-title',
            organizationKey: 'org-meu',
            categoryKey: 'cat-english',
            filterGroup: 'lang-soft',
            dateKey: 'date-meu',
            logo: 'LOGO/MEU.png',
            thumbnail: 'Certificates/thumbs/MEU.jpg',
            image: '/assets/aistudio/__________a55d7061.png'
        },

        // Existing Certificates (Preserved)
        {
            id: 'cert-coursera',
            titleKey: 'cert22-title',
            organizationKey: 'org-coursera',
            categoryKey: 'cat-python',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/COURSERA.png',
            thumbnail: 'Certificates/thumbs/COURSERA.jpg',
            image: 'Certificates/images/COURSERA.png'
        },
        {
            id: 'cert1',
            titleKey: 'cert1-title',
            organizationKey: 'org-google',
            categoryKey: 'cat-mobile',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/GOOGLE.png',
            thumbnail: 'Certificates/thumbs/GOOGLE1.jpg',
            image: 'Certificates/images/GOOGLE1.png'
        },
        {
            id: 'cert2',
            titleKey: 'cert2-title',
            organizationKey: 'org-google',
            categoryKey: 'cat-it',
            filterGroup: 'security-it',
            dateKey: 'date-2024',
            logo: 'LOGO/GOOGLE.png',
            thumbnail: 'Certificates/thumbs/GOOGLE2.jpg',
            image: 'Certificates/images/GOOGLE2.png'
        },
        {
            id: 'cert3',
            titleKey: 'cert3-title',
            organizationKey: 'org-google',
            categoryKey: 'cat-marketing',
            filterGroup: 'lang-soft',
            dateKey: 'date-2024',
            logo: 'LOGO/GOOGLE.png',
            thumbnail: 'Certificates/thumbs/GOOGLE3.jpg',
            image: 'Certificates/images/GOOGLE3.png'
        },
        {
            id: 'cert4',
            titleKey: 'cert4-title',
            organizationKey: 'org-google',
            categoryKey: 'cat-cloud',
            filterGroup: 'cloud-data',
            dateKey: '',
            logo: 'LOGO/GOOGLE.png',
            thumbnail: 'Certificates/thumbs/GOOGLE4.jpg',
            image: 'Certificates/images/GOOGLE4.png'
        },
        {
            id: 'cert17',
            titleKey: 'cert17-title',
            organizationKey: 'org-gdg',
            categoryKey: 'cat-webdev',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/GDG.png',
            thumbnail: 'Certificates/thumbs/GDG.jpg',
            image: 'Certificates/images/GDG.png'
        },
        {
            id: 'cert5',
            titleKey: 'cert5-title',
            organizationKey: 'org-microsoft',
            categoryKey: 'cat-databases',
            filterGroup: 'cloud-data',
            dateKey: '',
            logo: 'LOGO/MICROSOFT.png',
            thumbnail: 'Certificates/thumbs/MICROSOFT1.jpg',
            image: 'Certificates/images/MICROSOFT1.png'
        },
        {
            id: 'cert6',
            titleKey: 'cert6-title',
            organizationKey: 'org-microsoft',
            categoryKey: 'cat-python',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/MICROSOFT.png',
            thumbnail: 'Certificates/thumbs/MICROSOFT2.jpg',
            image: 'Certificates/images/MICROSOFT2.png'
        },
        {
            id: 'cert7',
            titleKey: 'cert7-title',
            organizationKey: 'org-microsoft',
            categoryKey: 'cat-cybersecurity',
            filterGroup: 'security-it',
            dateKey: '',
            logo: 'LOGO/MICROSOFT.png',
            thumbnail: 'Certificates/thumbs/MICROSOFT3.jpg',
            image: 'Certificates/images/MICROSOFT3.png'
        },
        {
            id: 'cert8',
            titleKey: 'cert8-title',
            organizationKey: 'org-cisco',
            categoryKey: 'cat-python',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/CISCO.png',
            thumbnail: 'Certificates/thumbs/CISCO1.jpg',
            image: 'Certificates/images/CISCO1.png'
        },
        {
            id: 'cert9',
            titleKey: 'cert9-title',
            organizationKey: 'org-cisco',
            categoryKey: 'cat-cybersecurity',
            filterGroup: 'security-it',
            dateKey: '',
            logo: 'LOGO/CISCO.png',
            thumbnail: 'Certificates/thumbs/CISCO2.jpg',
            image: 'Certificates/images/CISCO2.png'
        },
        {
            id: 'cert10',
            titleKey: 'cert10-title',
            organizationKey: 'org-udemy',
            categoryKey: 'cat-backend',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/UDEMY.png',
            thumbnail: 'Certificates/thumbs/UDEMY1.jpg',
            image: 'Certificates/images/UDEMY1.png'
        },
        {
            id: 'cert11',
            titleKey: 'cert11-title',
            organizationKey: 'org-udemy',
            categoryKey: 'cat-cybersecurity',
            filterGroup: 'security-it',
            dateKey: '',
            logo: 'LOGO/UDEMY.png',
            thumbnail: 'Certificates/thumbs/UDEMY2.jpg',
            image: 'Certificates/images/UDEMY2.png'
        },
        {
            id: 'cert12',
            titleKey: 'cert12-title',
            organizationKey: 'org-udemy',
            categoryKey: 'cat-mobile',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/UDEMY.png',
            thumbnail: 'Certificates/thumbs/UDEMY3.jpg',
            image: 'Certificates/images/UDEMY3.png'
        },
        {
            id: 'cert13',
            titleKey: 'cert13-title',
            organizationKey: 'org-udemy',
            categoryKey: 'cat-design',
            filterGroup: 'lang-soft',
            dateKey: '',
            logo: 'LOGO/UDEMY.png',
            thumbnail: 'Certificates/thumbs/UDEMY4.jpg',
            image: 'Certificates/images/UDEMY4.png'
        },
        {
            id: 'cert14',
            titleKey: 'cert14-title',
            organizationKey: 'org-icdl',
            categoryKey: 'cat-it',
            filterGroup: 'security-it',
            dateKey: '',
            logo: 'LOGO/ICDL.png',
            thumbnail: 'Certificates/thumbs/ICDL.jpg',
            image: 'Certificates/images/ICDL.png'
        },
        {
            id: 'cert15',
            titleKey: 'cert15-title',
            organizationKey: 'org-mindluster',
            categoryKey: 'cat-frontend',
            filterGroup: 'dev',
            dateKey: '',
            logo: 'LOGO/MINDLUSTER.png',
            thumbnail: 'Certificates/thumbs/MINDLUSTER2.jpg',
            image: 'Certificates/images/MINDLUSTER2.png'
        },
        {
            id: 'cert16',
            titleKey: 'cert16-title',
            organizationKey: 'org-mindluster',
            categoryKey: 'cat-soft',
            filterGroup: 'lang-soft',
            dateKey: '',
            logo: 'LOGO/MINDLUSTER.png',
            thumbnail: 'Certificates/thumbs/MINDLUSTER1.jpg',
            image: 'Certificates/images/MINDLUSTER1.png'
        }
    ];

    // --- PORTFOLIO PROJECTS DATA (All existing 86 projects preserved intact) ---
    const portfolioData = [
        // Featured Projects
        { category: 'websites', titleKey: 'p1-title', image: 'images/Websites/metmind.png', liveUrl: 'https://project-graduation.ai.studio/', repoUrl: 'https://github.com/hamouda-10/meetmind-atlas' },
        { category: 'websites', titleKey: 'p2-title', image: 'images/Websites/ESTEKRAR-RE.png', liveUrl: 'https://hamouda-10.github.io/ESTEKRAR-RE/index.html', repoUrl: 'https://github.com/hamouda-10/ESTEKRAR-RE' },
        { category: 'websites', titleKey: 'p3-title', image: 'images/Websites/ALSHIFAA CLINIC.png', liveUrl: 'https://medi-book.ai.studio', repoUrl: 'https://github.com/khaledyasser2005/Doctor-Website' },
        { category: 'websites', titleKey: 'p4-title', image: 'images/Websites/ELMAWADDA.png', liveUrl: 'https://elmawadda.ai.studio/', repoUrl: 'https://elmawadda.ai.studio/' },
        { category: 'websites', titleKey: 'p5-title', image: 'images/Websites/KETABY.png', liveUrl: 'https://ketaby.ai.studio/', repoUrl: 'https://github.com/hamouda-10/KETABY' },
        { category: 'websites', titleKey: 'p6-title', image: 'images/Websites/WHITE HONEY.png', liveUrl: 'https://white-honey.ai.studio', repoUrl: 'https://github.com/hamouda-10/WHITE-HONEY' },
        { category: 'websites', titleKey: 'p7-title', image: 'images/Websites/Gelato Lab.png', liveUrl: 'https://gelato-lab.ai.studio', repoUrl: 'https://github.com/hamouda-10/Gelato-Lab' },
        { category: 'websites', titleKey: 'p8-title', image: 'images/Websites/fish-cont.png', liveUrl: 'https://fish-cont.ai.studio', repoUrl: 'https://github.com/hamouda-10/Fish-Cont' },
        { category: 'websites', titleKey: 'p9-title', image: 'images/Websites/cordex-scroll.png', liveUrl: 'https://cordex-scroll.ai.studio', repoUrl: 'https://github.com/hamouda-10/Cordex-Scroll' },
        { category: 'websites', titleKey: 'p85-title', image: 'images/Websites/haldenn.png', liveUrl: 'https://haldenn.ai.studio', repoUrl: 'https://github.com/hamouda-10/haldenn' },
        { category: 'websites', titleKey: 'p86-title', image: 'images/Websites/fable-five.png', liveUrl: 'https://fable-five.ai.studio', repoUrl: 'https://github.com/hamouda-10/fable-five' },
        { category: 'websites', titleKey: 'p10-title', image: 'images/Websites/bokhor.png', liveUrl: 'https://bokhor.ai.studio', repoUrl: 'https://github.com/hamouda-10/bokhor' },
        { category: 'websites', titleKey: 'p11-title', image: 'images/Websites/Frostgate Russia.png', liveUrl: 'https://frostgate-russia.ai.studio', repoUrl: 'https://github.com/hamouda-10/Frostgate-Russia' },
        { category: 'websites', titleKey: 'p12-title', image: 'images/Websites/noche-viva.png', liveUrl: 'https://noche-viva.ai.studio', repoUrl: 'https://github.com/hamouda-10/noche-viva' },
        { category: 'websites', titleKey: 'p80-title', image: 'images/Websites/aeris-sky.png', liveUrl: 'https://aeris-sky.ai.studio', repoUrl: 'https://github.com/hamouda-10/aeris-sky' },
        { category: 'websites', titleKey: 'p81-title', image: 'images/Websites/safaari.png', liveUrl: 'https://safaari.ai.studio', repoUrl: 'https://github.com/hamouda-10/safaari' },
        { category: 'websites', titleKey: 'p82-title', image: 'images/Websites/seven-wonders.png', liveUrl: 'https://seven-wonders.ai.studio', repoUrl: 'https://github.com/hamouda-10/Seven-Wonders' },
        { category: 'websites', titleKey: 'p84-title', image: 'images/Websites/berrywell.png', liveUrl: 'https://berrywell.ai.studio', repoUrl: 'https://github.com/hamouda-10/berrywell' },
        { category: 'websites', titleKey: 'p13-title', image: 'images/Websites/Offcut.png', liveUrl: 'https://offcut-10.ai.studio', repoUrl: 'https://github.com/hamouda-10/Offcut' },
        { category: 'websites', titleKey: 'p14-title', image: 'images/Websites/dresses.png', liveUrl: 'https://dresses.ai.studio', repoUrl: 'https://github.com/hamouda-10/dresses' },
        { category: 'websites', titleKey: 'p15-title', image: 'images/Websites/nazaar.png', liveUrl: 'https://nazaar.ai.studio', repoUrl: 'https://github.com/hamouda-10/nazaar' },
        { category: 'websites', titleKey: 'p16-title', image: 'images/Websites/broova.png', liveUrl: 'https://broova.ai.studio', repoUrl: 'https://github.com/hamouda-10/broova' },
        { category: 'websites', titleKey: 'p79-title', image: 'images/Websites/hala-lab.png', liveUrl: 'https://hala-lab.ai.studio', repoUrl: 'https://github.com/hamouda-10/hala-lab' },
        { category: 'websites', titleKey: 'p83-title', image: 'images/Websites/litho-build.png', liveUrl: 'https://litho-build.ai.studio', repoUrl: 'https://github.com/hamouda-10/litho-build' },
        { category: 'websites', titleKey: 'p17-title', image: 'images/Websites/BLENDY.png', liveUrl: 'https://blendy.ai.studio', repoUrl: 'https://github.com/hamouda-10/BLENDY' },
        { category: 'websites', titleKey: 'p18-title', image: 'images/Websites/harborlux.png', liveUrl: 'https://harborlux.ai.studio', repoUrl: 'https://github.com/hamouda-10/harborlux' },
        { category: 'websites', titleKey: 'p19-title', image: 'images/Websites/Krung Travel.png', liveUrl: 'https://krung-travel.ai.studio', repoUrl: 'https://github.com/hamouda-10/krung-travel' },
        { category: 'websites', titleKey: 'p20-title', image: 'images/Websites/ride-out.png', liveUrl: 'https://ride-out.ai.studio', repoUrl: 'https://github.com/hamouda-10/ride-out' },
        { category: 'websites', titleKey: 'p21-title', image: 'images/Websites/sun-roof.png', liveUrl: 'https://sun-roof.ai.studio', repoUrl: 'https://github.com/hamouda-10/sun-roof' },
        { category: 'websites', titleKey: 'p22-title', image: 'images/Websites/Saltwake.png', liveUrl: 'https://saltwake.ai.studio', repoUrl: 'https://github.com/hamouda-10/saltwake' },
        { category: 'websites', titleKey: 'p23-title', image: 'images/Websites/AIRPLANE.png', liveUrl: 'https://AIRPLANE.ai.studio', repoUrl: 'https://github.com/hamouda-10/saltwake' },
        { category: 'websites', titleKey: 'p24-title', image: 'images/Websites/POKE PAL.png', liveUrl: 'https://poke-pal.ai.studio/', repoUrl: 'https://github.com/hamouda-10/POKE-PAL' },
        { category: 'websites', titleKey: 'p25-title', image: 'images/Websites/the-weather.png', liveUrl: 'https://the-weather.ai.studio', repoUrl: 'https://github.com/hamouda-10/the-weather' },
        { category: 'websites', titleKey: 'p26-title', image: 'images/Websites/hiven-honey.png', liveUrl: 'https://hiven-honey.ai.studio', repoUrl: 'https://github.com/hamouda-10/hiven-honey' },
        { category: 'websites', titleKey: 'p27-title', image: 'images/Websites/CAMERA PRO.png', liveUrl: 'https://camera-proo.ai.studio', repoUrl: 'https://github.com/hamouda-10/CAMERA-PRO' },
        { category: 'websites', titleKey: 'p28-title', image: 'images/Websites/ANIMALS ZOO.png', liveUrl: 'https://animals-zoo.ai.studio', repoUrl: 'https://github.com/hamouda-10/ANIMALS-ZOO' },
        { category: 'websites', titleKey: 'p29-title', image: 'images/Websites/MONS.png', liveUrl: 'https://hamouda-10.github.io/MONS/', repoUrl: 'https://github.com/hamouda-10/MONS' },
        { category: 'websites', titleKey: 'p30-title', image: 'images/Websites/KYNE-AERO.png', liveUrl: 'https://hamouda-10.github.io/KYNE-AERO/', repoUrl: 'https://github.com/hamouda-10/KYNE-AERO' },
        { category: 'websites', titleKey: 'p31-title', image: 'images/Websites/VANTE.png', liveUrl: 'https://airplane-0.ai.studio', repoUrl: 'https://github.com/hamouda-10/AIRPLANE' },
        { category: 'websites', titleKey: 'p32-title', image: 'images/Websites/Kolibrie.png', liveUrl: 'https://kolibrie.ai.studio', repoUrl: 'https://github.com/hamouda-10/Kolibrie-' },
        { category: 'websites', titleKey: 'p33-title', image: 'images/Websites/VEYRA.png', liveUrl: 'https://veyraaa.ai.studio', repoUrl: 'https://github.com/hamouda-10/VEYRA' },
        { category: 'websites', titleKey: 'p34-title', image: 'images/Websites/Aegis Augment.png', liveUrl: 'https://aegis-augment.ai.studio', repoUrl: 'https://github.com/hamouda-10/Aegis-Augment-' },
        { category: 'websites', titleKey: 'p35-title', image: 'images/Websites/STRIDE 3D.png', liveUrl: 'https://stride-3d.ai.studio', repoUrl: 'https://github.com/hamouda-10/STRIDE-3D' },
        { category: 'websites', titleKey: 'p36-title', image: 'images/Websites/JAC 3D.png', liveUrl: 'https://jack-3d.ai.studio', repoUrl: 'https://github.com/hamouda-10/JAC-3D' },
        { category: 'websites', titleKey: 'p37-title', image: 'images/Websites/THE SEA.png', liveUrl: 'https://el-mokna.ai.studio/', repoUrl: 'https://github.com/hamouda-10/THE-SEA' },
        { category: 'websites', titleKey: 'p38-title', image: 'images/Websites/CAMERA.png', liveUrl: 'https://hamouda-10.github.io/camera/', repoUrl: 'https://github.com/hamouda-10/camera' },
        { category: 'websites', titleKey: 'p39-title', image: 'images/Websites/PEXELZO.png', liveUrl: 'https://pixelzo.ai.studio/', repoUrl: 'https://github.com/hamouda-10/PEXELZO' },
        { category: 'websites', titleKey: 'p40-title', image: 'images/Websites/CV.png', liveUrl: 'https://hamouda-10.github.io/CV-CHECKER/', repoUrl: 'https://github.com/hamouda-10/CV-CHECKER' },
        { category: 'websites', titleKey: 'p41-title', image: 'images/Websites/GYMFLOW.png', liveUrl: 'https://asset-manager--sallahhoda662.replit.app/', repoUrl: 'https://github.com/hamouda-10/GymFlow-Pro' },
        { category: 'websites', titleKey: 'p42-title', image: 'images/Websites/VIRAL CONTENT.png', liveUrl: 'https://hamouda-10.github.io/Estate-Lens/', repoUrl: 'https://github.com/hamouda-10/Estate-Lens' },
        { category: 'websites', titleKey: 'p43-title', image: 'images/Websites/Fruit.png', liveUrl: 'https://hamouda-10.github.io/TRANING-PROJECT/', repoUrl: 'https://github.com/hamouda-10/TRANING-PROJECT' },
        { category: 'websites', titleKey: 'p44-title', image: 'images/Websites/MADINATY.png', liveUrl: 'https://hamouda-10.github.io/1/', repoUrl: 'https://github.com/hamouda-10/1' },
        { category: 'websites', titleKey: 'p45-title', image: 'images/Websites/PORTFOLIO.png', liveUrl: 'https://hamouda-10.github.io/ORANGE-PORTFOLIO/', repoUrl: 'https://github.com/hamouda-10/ORANGE-PORTFOLIO-' },

        // Professional Websites
        { category: 'websites', titleKey: 'p46-title', image: 'images/Websites/PRO COURSES.png', liveUrl: 'https://hamouda-10.github.io/PRO-COURSES/', repoUrl: 'https://github.com/hamouda-10/PRO-COURSES' },
        { category: 'websites', titleKey: 'p47-title', image: 'images/Websites/AMAZONE CLONE.png', liveUrl: 'https://hamouda-10.github.io/STORE-AMAZON-/', repoUrl: 'https://github.com/hamouda-10/STORE-AMAZON-' },
        { category: 'websites', titleKey: 'p48-title', image: 'images/Websites/HEADPHONE.png', liveUrl: 'https://hamouda-10.github.io/HEADPHONES/', repoUrl: 'https://github.com/hamouda-10/HEADPHONES' },
        { category: 'websites', titleKey: 'p49-title', image: 'images/Websites/EDUCATION PLATFORM.png', liveUrl: 'https://hamouda-10.github.io/edu-platform-elshoura/#', repoUrl: 'https://github.com/hamouda-10/edu-platform-elshoura' },
        { category: 'websites', titleKey: 'p50-title', image: 'images/Websites/YOUTUBE CLONE.png', liveUrl: 'https://hamouda-10.github.io/YOUTUBE-CLONE/', repoUrl: 'https://github.com/hamouda-10/YOUTUBE-CLONE' },

        // Interactive Projects
        { category: 'websites', titleKey: 'p51-title', image: 'images/Websites/COINSHIFT.png', liveUrl: 'https://hamouda-10.github.io/COINSHIFT/', repoUrl: 'https://github.com/hamouda-10/COINSHIFT' },
        { category: 'websites', titleKey: 'p52-title', image: 'images/Websites/MANAGE COINS.png', liveUrl: 'https://hamouda-10.github.io/MANAGE-COINS/', repoUrl: 'https://github.com/hamouda-10/MANAGE-COINS' },
        { category: 'websites', titleKey: 'p53-title', image: 'images/Websites/FITNESS.png', liveUrl: 'https://hamouda-10.github.io/FITNESS/', repoUrl: 'https://github.com/hamouda-10/FITNESS' },
        { category: 'websites', titleKey: 'p54-title', image: 'images/Websites/MATENSASH.png', liveUrl: 'https://hamouda-10.github.io/MATENSASH//', repoUrl: 'https://github.com/hamouda-10/MATENSASH' },
        { category: 'websites', titleKey: 'p55-title', image: 'images/Websites/EH ELMOSHKELAH.png', liveUrl: 'https://what-s-wrong.ai.studio/', repoUrl: 'https://github.com/hamouda-10/EH-ELMOSHKELAH' },
        { category: 'websites', titleKey: 'p56-title', image: 'images/Websites/what-should-i-say.png', liveUrl: 'https://what-should-i-say.ai.studio/', repoUrl: 'https://github.com/hamouda-10/what-should-i-say' },

        // New Projects
        { category: 'websites', titleKey: 'p57-title', image: 'images/Websites/AMANAK.png', liveUrl: 'https://my-library0.ai.studio/', repoUrl: 'https://github.com/hamouda-10/AMANAK' },
        { category: 'websites', titleKey: 'p58-title', image: 'images/Websites/MY LIBRARY.png', liveUrl: 'https://my-library0.ai.studio/', repoUrl: 'https://github.com/hamouda-10/My-Library' },
        { category: 'websites', titleKey: 'p59-title', image: 'images/Websites/TIME PRAYER.png', liveUrl: 'https://hamouda-10.github.io/TIME-OF-PRAYER/', repoUrl: 'https://github.com/hamouda-10/TIME-OF-PRAYER' },
        { category: 'websites', titleKey: 'p60-title', image: 'images/Websites/ANALYSIS.png', liveUrl: 'https://hamouda-10.github.io/ANALYSIS/', repoUrl: 'https://github.com/hamouda-10/ANALYSIS' },
        { category: 'websites', titleKey: 'p61-title', image: 'images/Websites/GUESS FOOD.png', liveUrl: 'https://hamouda-10.github.io/GUESS-FOOD/', repoUrl: 'https://github.com/hamouda-10/GUESS-FOOD' },
        { category: 'websites', titleKey: 'p62-title', image: 'images/Websites/TAGWEED.png', liveUrl: 'https://hamouda-10.github.io/TAGWEED/', repoUrl: 'https://github.com/hamouda-10/TAGWEED' },
        { category: 'websites', titleKey: 'p63-title', image: 'images/Websites/IZAA.png', liveUrl: 'https://hamouda-10.github.io/IZAA/', repoUrl: 'https://github.com/hamouda-10/IZAA' },
        { category: 'websites', titleKey: 'p64-title', image: 'images/Websites/WHITE BOARD.png', liveUrl: 'https://hamouda-10.github.io/White-Board/', repoUrl: 'https://github.com/hamouda-10/White-Board' },
        { category: 'websites', titleKey: 'p65-title', image: 'images/Websites/XO GAME.png', liveUrl: 'https://hamouda-10.github.io/PRO-XO-GAME/', repoUrl: 'https://github.com/hamouda-10/PRO-XO-GAME' },

        // UI / Frontend
        { category: 'websites', titleKey: 'p66-title', image: 'images/Websites/IMAGES.png', liveUrl: 'https://hamouda-10.github.io/IMAGES/', repoUrl: 'https://github.com/hamouda-10/IMAGES' },
        { category: 'websites', titleKey: 'p67-title', image: 'images/Websites/PLANETS.png', liveUrl: 'https://hamouda-10.github.io/PLANETS/', repoUrl: 'https://github.com/hamouda-10/PLANETS' },
        { category: 'websites', titleKey: 'p68-title', image: 'images/Websites/SPIRO.png', liveUrl: 'https://hamouda-10.github.io/Spiro-Spatnis-Card/', repoUrl: 'https://github.com/hamouda-10/Spiro-Spatnis-Card' },
        { category: 'websites', titleKey: 'p69-title', image: 'images/Websites/CANS.png', liveUrl: 'https://hamouda-10.github.io/CANS/', repoUrl: 'https://github.com/hamouda-10/CANS' },
        { category: 'websites', titleKey: 'p70-title', image: 'images/Websites/MOON.png', liveUrl: 'https://hamouda-10.github.io/MOON/', repoUrl: 'https://github.com/hamouda-10/MOON' },
        { category: 'websites', titleKey: 'p71-title', image: 'images/Websites/GLASSES LIST.png', liveUrl: 'https://hamouda-10.github.io/GLASSES-MENU/', repoUrl: 'https://github.com/hamouda-10/GLASSES-MENU' },
        { category: 'websites', titleKey: 'p72-title', image: 'images/Websites/SOCIAL BUTTONS.png', liveUrl: 'https://hamouda-10.github.io/SOCIAL-ICON-BUTTONS/', repoUrl: 'https://github.com/hamouda-10/SOCIAL-ICON-BUTTONS' },

        // Login Designs
        { category: 'websites', titleKey: 'p73-title', image: 'images/Websites/COLOR LOGIN.png', liveUrl: 'https://hamouda-10.github.io/BLUR-LOGIN/', repoUrl: 'https://github.com/hamouda-10/BLUR-LOGIN/settings/pages' },
        { category: 'websites', titleKey: 'p74-title', image: 'images/Websites/RED LOGIN.png', liveUrl: 'https://hamouda-10.github.io/RED-LOGIN/', repoUrl: 'https://github.com/hamouda-10/RED-LOGIN' },
        { category: 'websites', titleKey: 'p75-title', image: 'images/Websites/BLACK LOGIN.png', liveUrl: 'https://hamouda-10.github.io/BLACK-LOGIN/', repoUrl: 'https://github.com/hamouda-10/BLACK-LOGIN' },
        { category: 'websites', titleKey: 'p76-title', image: 'images/Websites/MAN LOGIN.png', liveUrl: 'https://hamouda-10.github.io/MAN-LOGIN/', repoUrl: 'https://github.com/hamouda-10/MAN-LOGIN' },
        { category: 'websites', titleKey: 'p77-title', image: 'images/Websites/IOS LOGIN.png', liveUrl: 'https://hamouda-10.github.io/LOGIN-IPHONE/', repoUrl: 'https://github.com/hamouda-10/LOGIN-IPHONE' },

        // Small Projects
        { category: 'websites', titleKey: 'p78-title', image: 'images/Websites/ZOOM.png', liveUrl: 'https://hamouda-10.github.io/ZOOM-WEBSITE/', repoUrl: 'https://github.com/hamouda-10/ZOOM-WEBSITE' }
    ];

    // Shared project titles used cleanly in both languages (proper names stay consistent across EN/AR)
    const projectTitles = {
        'p1-title': 'MEETMIND AI',
        'p2-title': 'ESTEKRAR-RE',
        'p3-title': 'ALSHIFAA CLINIC',
        'p4-title': 'ELMAWADDA',
        'p5-title': 'KETABY',
        'p6-title': 'WHITE HONEY',
        'p7-title': 'Gelato Lab',
        'p8-title': 'Fish Cont',
        'p9-title': 'Cordex Scroll',
        'p10-title': 'Bokhor',
        'p11-title': 'Frostgate Russia',
        'p12-title': 'Noche Viva',
        'p13-title': 'Offcut',
        'p14-title': 'Dresses',
        'p15-title': 'Nazaar',
        'p16-title': 'Broova',
        'p17-title': 'BLENDY',
        'p18-title': 'HARBORLUX',
        'p19-title': 'KRUNG TRAVEL',
        'p20-title': 'RIDE-OUT',
        'p21-title': 'SUN-ROOF',
        'p22-title': 'SALTWAKE',
        'p23-title': 'AIRPLANE',
        'p24-title': 'POKE PAL',
        'p25-title': 'The Weather',
        'p26-title': 'HIVEN-HONEY',
        'p27-title': 'CAMERA PRO',
        'p28-title': 'ANIMALS ZOO',
        'p29-title': 'MONS',
        'p30-title': 'KYNE-AERO',
        'p31-title': 'VANTE',
        'p32-title': 'KOLIBRIE',
        'p33-title': 'VEYRA',
        'p34-title': 'Aegis Augment',
        'p35-title': 'STRIDE 3D',
        'p36-title': 'JAC 3D',
        'p37-title': 'THE SEA',
        'p38-title': 'AI CAMERA',
        'p39-title': 'PEXELZO AI',
        'p40-title': 'CV CHECKER',
        'p41-title': 'GYMFLOW PRO',
        'p42-title': 'ESTATE LENS',
        'p43-title': 'FRUIT DELIVERY',
        'p44-title': 'MADINATY REAL ESTATE',
        'p45-title': 'PERSONAL PORTFOLIO',
        'p46-title': 'PRO COURSES',
        'p47-title': 'AMAZON CLONE',
        'p48-title': 'HEADPHONES STORE',
        'p49-title': 'EDUCATION PLATFORM',
        'p50-title': 'YOUTUBE CLONE',
        'p51-title': 'COINSHIFT',
        'p52-title': 'MANAGE COINS',
        'p53-title': 'FITNESS',
        'p54-title': 'MATENSASH',
        'p55-title': 'EH ELMOSHKELAH',
        'p56-title': 'WHAT SHOULD I SAY',
        'p57-title': 'AMANAK',
        'p58-title': 'MY LIBRARY',
        'p59-title': 'TIME OF PRAYER',
        'p60-title': 'ANALYSIS',
        'p61-title': 'GUESS FOOD',
        'p62-title': 'TAGWEED',
        'p63-title': 'IZAA OF QURAN',
        'p64-title': 'WHITE BOARD',
        'p65-title': 'XO GAME',
        'p66-title': 'IMAGES SLIDES',
        'p67-title': 'PLANETS WEBSITE',
        'p68-title': 'SPIRO SPATIS DESIGN',
        'p69-title': 'ANIMATION CANS',
        'p70-title': 'MOON ANIMATION',
        'p71-title': 'GLASSES LIST',
        'p72-title': 'SOCIAL MEDIA BUTTONS',
        'p73-title': 'COLOR LOGIN',
        'p74-title': 'RED LOGIN',
        'p75-title': 'BLACK LOGIN',
        'p76-title': 'MAN LOGIN',
        'p77-title': 'IOS LOGIN',
        'p78-title': 'ZOOM WEBSITE',
        'p79-title': 'HALA LAB',
        'p80-title': 'AERIS SKY',
        'p81-title': 'SAFAARI',
        'p82-title': 'SEVEN WONDERS',
        'p83-title': 'LITHO BUILD',
        'p84-title': 'BERRYWELL',
        'p85-title': 'HALDENN',
        'p86-title': 'FABLE FIVE'
    };

    // --- TRANSLATIONS (EN & AR) ---
    const translations = {
        en: {
            ...projectTitles,
            pageTitle: 'ABDELRAHMAN HAMOUDA - Full-Stack Developer & UI/UX Designer',
            myName: 'ABDELRAHMAN HAMOUDA',
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-certifications': 'Certifications',
            'nav-portfolio': 'Projects',
            'nav-cvs': 'Resume',
            'nav-contact': 'Contact',
            'lang-toggle-text': 'AR',
            'home-prefix': '',
            'typing-words': [
                'Full-Stack Developer | Frontend | Backend | UI/UX',
                'React · Node.js · PHP (Laravel) · .NET (C#)',
                'RESTful APIs · Databases · Auth · Deployment',
                '30+ Websites & Web Solutions for Real Clients'
            ],
            'home-tagline': 'I build complete web solutions from UI/UX and frontend to backend, APIs, databases, authentication, and deployment.',

            // About Me
            'about-heading': 'About Me',
            'about-subtitle': 'Full-Stack Developer | Frontend Developer | Backend Developer | UI/UX Designer',
            'about-desc': `
                <p>I’m a Full-Stack Web Developer and UI/UX Designer passionate about building complete, scalable, and user-focused digital experiences. I work across both frontend and backend development, transforming ideas into fully functional web applications from concept and interface design to APIs, databases, authentication, deployment, and optimization.</p>
                <p>My experience includes building responsive and modern interfaces using HTML5, CSS3, JavaScript, TypeScript, React, Bootstrap, and Tailwind CSS, while developing powerful backend systems using Node.js, Express.js, PHP, Laravel, C#, and .NET technologies.</p>
                <p>I also have hands-on experience with database design and management, RESTful APIs, Git/GitHub, cloud technologies, system integration, testing, debugging, and software architecture. I focus on writing clean, maintainable code and creating reliable applications with intuitive user experiences.</p>
                <p>I have worked on real-world projects and delivered <strong>30+ websites and web solutions for real clients</strong>, combining technical development with UI/UX thinking to deliver complete solutions rather than isolated frontend or backend components.</p>
            `,
            'about-role-label': 'Role:',
            'about-role': 'Full-Stack Web Developer & UI/UX Designer',
            'about-clients-label': 'Client Delivery:',
            'about-clients': '30+ Real Client Websites & Web Solutions',
            'about-city-label': 'City:',
            'about-city': 'Banha, Egypt',
            'about-email-label': 'Email:',
            'email-address': 'hamoudaabdo689@gmail.com',
            'about-phone-label': 'Phone:',
            'phone-number': '+201201898518',
            'about-military-label': 'Military Service:',
            'military-status': 'Exempted',

            // Skills Categories
            'skills-heading': 'My Skills',
            'skills-cat-frontend': 'Frontend Development',
            'skills-cat-backend': 'Backend Development',
            'skills-cat-databases': 'Databases',
            'skills-cat-devops': 'Development & Version Control',
            'skills-cat-cloud': 'Cloud & Deployment',
            'skills-cat-design': 'Design',
            'skills-cat-office': 'Office Suite',
            'skills-cat-soft': 'Soft Skills',

            // Skill Names
            'skill-html': 'HTML5',
            'skill-css': 'CSS3',
            'skill-js': 'JavaScript',
            'skill-ts': 'TypeScript',
            'skill-react': 'React',
            'skill-bootstrap': 'Bootstrap',
            'skill-tailwind': 'Tailwind CSS',
            'skill-responsive': 'Responsive Web Design',
            'skill-uiux': 'UI/UX Design',
            'skill-nodejs': 'Node.js',
            'skill-express': 'Express.js',
            'skill-php': 'PHP',
            'skill-laravel': 'Laravel',
            'skill-csharp': 'C#',
            'skill-dotnet': '.NET',
            'skill-aspnet': 'ASP.NET Core',
            'skill-restapi': 'RESTful APIs',
            'skill-apidev': 'API Development',
            'skill-auth': 'Authentication & Authorization',
            'skill-efcore': 'Entity Framework Core',
            'skill-mysql': 'MySQL',
            'skill-mssql': 'Microsoft SQL Server',
            'skill-postgresql': 'PostgreSQL',
            'skill-dbdesign': 'Database Design',
            'skill-dbmgmt': 'Database Management',
            'skill-git': 'Git',
            'skill-github': 'GitHub',
            'skill-ghactions': 'GitHub Actions',
            'skill-apitesting': 'API Testing',
            'skill-postman': 'Postman',
            'skill-azure': 'Microsoft Azure',
            'skill-aws': 'AWS',
            'skill-gcloud': 'Google Cloud',
            'skill-docker': 'Docker',
            'skill-figma': 'Figma',
            'skill-photoshop': 'Adobe Photoshop',
            'skill-canva': 'Canva',
            'skill-graphic': 'Graphic Design',
            'skill-word': 'Microsoft Word',
            'skill-excel': 'Microsoft Excel',
            'skill-ppt': 'Microsoft PowerPoint',
            'skill-access': 'Microsoft Access',
            'skill-outlook': 'Microsoft Outlook',
            'skill-onenote': 'Microsoft OneNote',
            'skill-teamlead': 'Team Leadership',
            'skill-volunteer': 'Volunteering',
            'skill-communication': 'Communication',
            'skill-problem': 'Problem Solving',
            'skill-creativity': 'Creativity',
            'skill-adaptability': 'Adaptability',
            'skill-time': 'Time Management',
            'skill-critical': 'Critical Thinking',

            // Certifications UI, Organizations, Categories & Titles
            'cert-verify': 'View Certificate',
            'org-oxford-bss': 'British Software Solutions · University of Oxford',
            'org-depi': 'Digital Egypt Pioneers Program (DEPI)',
            'org-harvard': 'Harvard University (CS50)',
            'org-aits': 'American Institute of Technology & Software',
            'org-cambridge': 'University of Cambridge',
            'org-vodafone': 'Vodafone Egypt',
            'org-auc': 'The American University in Cairo (AUC)',
            'org-meu': 'Middle East University',
            'org-coursera': 'University of Michigan · Coursera',
            'org-google': 'Google',
            'org-gdg': 'Google Developer Groups (GDG)',
            'org-microsoft': 'Microsoft',
            'org-cisco': 'Cisco',
            'org-udemy': 'Udemy',
            'org-icdl': 'ICDL',
            'org-mindluster': 'Mind Luster',

            'cat-fullstack': 'Full-Stack Development',
            'cat-frontend-react': 'Frontend · React',
            'cat-cs': 'Computer Science',
            'cat-software-dev': 'Software Development',
            'cat-programming': 'Programming',
            'cat-award-db-web': 'Award · Databases & Web',
            'cat-english': 'English (CEFR B2)',
            'cat-python': 'Python',
            'cat-mobile': 'Mobile Development',
            'cat-it': 'IT & Systems',
            'cat-marketing': 'Digital Marketing',
            'cat-cloud': 'Cloud Engineering',
            'cat-webdev': 'Web Development',
            'cat-databases': 'Databases & SQL',
            'cat-cybersecurity': 'Cybersecurity',
            'cat-backend': 'Backend & Security',
            'cat-design': 'Design',
            'cat-frontend': 'Frontend',
            'cat-soft': 'Soft Skills',

            'date-depi': 'Nov 2025 – Jun 2026',
            'date-harvard': '2023',
            'date-meu': 'Nov 2025',
            'date-2024': '2024',

            'cert-oxford-bss-title': 'Full-Stack Developer — Certificate of Appreciation & Accomplishment',
            'cert-aits-title': 'Programming & Software Development',
            'cert-cambridge-title': 'Fundamentals of Programming',
            'cert-vodafone-title': 'Vodafone Egypt Appreciation Award (Database Development & Web Design Technologies)',
            'cert18-title': 'Survival English — B2 on the Common European Framework of Reference (CEFR)',
            'cert19-title': 'CS50 Certificate — CS50x (Problem Sets, Labs & Final Project)',
            'cert20-title': 'English Language Level B2',
            'cert21-title': 'Software Development – React Frontend Web Developer',
            'cert22-title': 'Programming for Everybody (Getting Started with Python)',
            'cert1-title': 'Associate Android Developer',
            'cert2-title': 'Google IT Support',
            'cert3-title': 'Fundamentals of Digital Marketing',
            'cert4-title': 'Associate Cloud Engineer',
            'cert5-title': 'Querying Data with Transact-SQL',
            'cert6-title': 'Python Essentials 1 (Cisco & Microsoft)',
            'cert7-title': 'Introduction to Cybersecurity (Cisco & Microsoft)',
            'cert8-title': 'Python Essentials 1 (Cisco & OpenEDG Python Institute)',
            'cert9-title': 'Introduction to Cybersecurity',
            'cert10-title': 'Certified in Node.js, Nest.js, PostgreSQL, GraphQL & Security',
            'cert11-title': 'Mastering Kali Linux for Ethical Hackers',
            'cert12-title': 'Flutter Clean Architecture Certification',
            'cert13-title': 'Professional Adobe Photoshop CC Course With Advanced Training',
            'cert14-title': 'ICDL – International Computer Driving Licence',
            'cert15-title': 'HTML Formatting Tags Techniques',
            'cert16-title': 'Soft Skills',
            'cert17-title': 'Web Development Course',

            // Portfolio & Certificate Filters
            'cert-filter-all': 'All',
            'cert-filter-dev': 'Development',
            'cert-filter-cloud-data': 'Cloud & Data',
            'cert-filter-security-it': 'Security & IT',
            'cert-filter-lang-soft': 'Languages & Design',
            'certs-count-label': 'Total Certificates',

            'portfolio-all': 'All Websites',
            'portfolio-apps': 'AI & Web Apps',
            'portfolio-business': 'Business & Stores',
            'portfolio-creative': '3D & Creative UI',
            'portfolio-ui': 'Clones & Auth UI',
            'portfolio-websites': 'Websites',
            'portfolio-designs': 'Designs',
            'portfolio-view-design': 'View Design',
            'projects-count-label': 'Total Projects',
            'projects-clients-label': 'Client Websites',
            'project-search-placeholder': 'Search 86 projects...',
            'portfolio-empty': 'No projects match your current filter or search.',

            // Resume
            'resume-role-title': 'Full-Stack Developer | Frontend Developer | Backend Developer | UI/UX Designer',
            'resume-core-statement': 'Building complete end-to-end web applications from UI/UX design and responsive frontends to RESTful APIs, databases, authentication, testing, and cloud deployment.',
            'resume-client-milestone': '30+ Websites & Web Solutions Delivered for Real Clients',

            'exp-fullstack-date': '2024 - Present',
            'exp-fullstack-title': 'Full-Stack Web Developer & UI/UX Designer',
            'exp-fullstack-company': 'Client Projects & Independent Delivery (Freelancer, Mostaql, Direct Clients)',
            'exp-fullstack-d1': 'Delivered <b>30+ production websites and custom web solutions for real clients</b> across business, e-commerce, healthcare, education, and SaaS domains.',
            'exp-fullstack-d2': 'Designed intuitive UI/UX wireframes and built responsive interfaces with HTML5, CSS3, JavaScript, TypeScript, React, Bootstrap, and Tailwind CSS.',
            'exp-fullstack-d3': 'Engineered backend architectures, RESTful APIs, and authentication & authorization flows using Node.js, Express.js, PHP (Laravel), C#, .NET, and ASP.NET Core.',
            'exp-fullstack-d4': 'Architected and optimized relational databases (MySQL, PostgreSQL, MS SQL Server), managed Git/GitHub workflows, tested APIs via Postman, and handled deployment.',

            'exp-oxford-date': '2025',
            'exp-oxford-title': 'Full-Stack Developer (Collaborative Software Venture)',
            'exp-oxford-company': 'British Software Solutions in partnership with University of Oxford',
            'exp-oxford-d1': 'Built end-to-end application modules spanning frontend components, backend REST APIs, database schemas, and system integration.',
            'exp-oxford-d2': 'Collaborated across engineering reviews, debugging, and production readiness for successful project delivery.',

            'exp-vodafone-date': '2025',
            'exp-vodafone-title': 'Database Development & Web Technologies Contributor',
            'exp-vodafone-company': 'Vodafone Egypt — Appreciation Award Recipient',
            'exp-vodafone-d1': 'Recognized with the Vodafone Egypt Appreciation Award for delivering reliable solutions in database development and modern web design technologies.',

            'exp-softtech-date': 'May 2024 - Nov 2024',
            'exp-softtech-title': 'Frontend & UI/UX Developer (Project-Based)',
            'exp-softtech-company': 'Soft-Tech Company (Remote)',
            'exp-softtech-detail1': 'Translated Figma UI/UX designs into clean, responsive components for the "Investment Portal" web application.',
            'exp-softtech-detail2': 'Developed interactive frontend modules using React and TypeScript integrated with backend RESTful APIs.',

            'exp-training-date': '2025 - 2026',
            'exp-training-title': 'Specialized Full-Stack Engineering Tracks (DEPI & IT GATE Academy)',
            'exp-training-company': 'Digital Egypt Pioneers Program (React) & IT GATE Academy (Laravel & PHP)',
            'exp-training-d1': 'Completed React Frontend Web Development track (Nov 2025 – Jun 2026) building component-driven single-page applications.',
            'exp-training-d2': 'Completed Intensive Laravel Code Camp focused on MVC architecture, authentication, Eloquent ORM, and database optimization.',

            'edu-date': 'Expected 2027',
            'edu-degree': 'Bachelor of Science in Computer Science and Information Technology',
            'edu-uni': 'Modern Academy Maadi (Grade: B+)',

            'resume-certs-title': 'Selected Certifications & Awards',
            'rcert-1': '<b>Full-Stack Developer</b> — British Software Solutions & University of Oxford',
            'rcert-2': '<b>Software Development – React Frontend Web Developer</b> — Digital Egypt Pioneers Program (DEPI)',
            'rcert-3': '<b>CS50x: Introduction to Computer Science</b> — Harvard University',
            'rcert-4': '<b>Programming & Software Development</b> — American Institute of Technology & Software (AIT&S)',
            'rcert-5': '<b>Fundamentals of Programming</b> — University of Cambridge',
            'rcert-6': '<b>Appreciation Award (Database Development & Web Design)</b> — Vodafone Egypt',
            'rcert-7': '<b>Node.js, Nest.js, PostgreSQL, GraphQL & Security</b> — Udemy',
            'rcert-8': '<b>Associate Cloud Engineer & Associate Android Developer</b> — Google',
            'rcert-9': '<b>Querying Data with Transact-SQL</b> — Microsoft',
            'rcert-10': '<b>English Proficiency (CEFR B2)</b> — The American University in Cairo (AUC) & Middle East University',

            'cv-dev-download': 'View My CV',

            // Contact
            'contact-location': 'Location',
            'contact-email': 'Email',
            'contact-phone': 'Phone',
            'contact-whatsapp': 'WhatsApp',
            'form-name': 'Your Name',
            'form-email': 'Your Email',
            'form-message': 'Your Message',
            'form-submit': 'Send Message',
            'form-err-empty': 'Please fill out all fields.',
            'form-redirecting': 'Thank you! Redirecting to WhatsApp...'
        },
        ar: {
            ...projectTitles,
            pageTitle: 'عبدالرحمن حمودة - مطور Full-Stack ومصمم UI/UX',
            myName: 'عبدالرحمن حمودة',
            'nav-home': 'الرئيسية',
            'nav-about': 'عني',
            'nav-skills': 'مهاراتي',
            'nav-certifications': 'الشهادات',
            'nav-portfolio': 'مشاريعي',
            'nav-cvs': 'السيرة الذاتية',
            'nav-contact': 'تواصل',
            'lang-toggle-text': 'EN',
            'home-prefix': '',
            'typing-words': [
                'مطور Full-Stack | واجهات أمامية | خلفية | UI/UX',
                'React · Node.js · PHP (Laravel) · .NET (C#)',
                'واجهات REST APIs · قواعد البيانات · المصادقة · النشر',
                'أكثر من 30 موقعًا وحلًا رقميًا لعملاء حقيقيين'
            ],
            'home-tagline': 'أبني حلول ويب متكاملة من تصميم واجهات وتجربة المستخدم (UI/UX) والواجهات الأمامية إلى الأنظمة الخلفية، واجهات APIs، قواعد البيانات، المصادقة، والنشر.',

            // About Me
            'about-heading': 'نبذة عني',
            'about-subtitle': 'مطور Full-Stack | مطور واجهات أمامية | مطور واجهات خلفية | مصمم UI/UX',
            'about-desc': `
                <p>أنا مطور ويب متكامل (Full-Stack Web Developer) ومصمم واجهات وتجربة مستخدم (UI/UX Designer)، شغوف ببناء تجارب رقمية متكاملة وقابلة للتوسع تركز على المستخدم. أعمل عبر كل من الواجهات الأمامية والأنظمة الخلفية، وأحوّل الأفكار إلى تطبيقات ويب متكاملة بدايةً من التخطيط وتصميم الواجهات وحتى واجهات APIs وقواعد البيانات والمصادقة والنشر وتحسين الأداء.</p>
                <p>تشمل خبرتي بناء واجهات حديثة ومتجاوبة باستخدام HTML5 وCSS3 وJavaScript وTypeScript وReact وBootstrap وTailwind CSS، مع تطوير أنظمة خلفية قوية باستخدام Node.js وExpress.js وPHP وLaravel وC# وتقنيات .NET.</p>
                <p>أمتلك أيضًا خبرة عملية في تصميم وإدارة قواعد البيانات، وبناء واجهات RESTful APIs، وإدارة الإصدارات عبر Git/GitHub، وتقنيات السحابة، وربط الأنظمة، والاختبار وإصلاح الأخطاء، وهندسة البرمجيات. أركز على كتابة كود نظيف قابل للصيانة وتقديم تطبيقات موثوقة بتجربة مستخدم سلسة.</p>
                <p>عملت على مشاريع واقعية وقدّمت <strong>أكثر من 30 موقعًا وحلًا برمجيًا لعملاء حقيقيين</strong>، جامعًا بين التطوير البرمجي المتكامل وتفكير UI/UX لتسليم حلول شاملة من البداية للنهاية.</p>
            `,
            'about-role-label': 'التخصص:',
            'about-role': 'مطور ويب متكامل (Full-Stack) ومصمم UI/UX',
            'about-clients-label': 'مشاريع العملاء:',
            'about-clients': 'أكثر من 30 موقعًا وحلًا رقميًا لعملاء حقيقيين',
            'about-city-label': 'المدينة:',
            'about-city': 'بنها، مصر',
            'about-email-label': 'البريد الإلكتروني:',
            'email-address': 'hamoudaabdo689@gmail.com',
            'about-phone-label': 'الهاتف:',
            'phone-number': '+201201898518',
            'about-military-label': 'الخدمة العسكرية:',
            'military-status': 'معفى',

            // Skills Categories
            'skills-heading': 'مهاراتي',
            'skills-cat-frontend': 'تطوير الواجهات الأمامية',
            'skills-cat-backend': 'تطوير الأنظمة الخلفية',
            'skills-cat-databases': 'قواعد البيانات',
            'skills-cat-devops': 'التطوير والتحكم بالإصدار',
            'skills-cat-cloud': 'الحوسبة السحابية والنشر',
            'skills-cat-design': 'التصميم وتجربة المستخدم',
            'skills-cat-office': 'مجموعة أوفيس',
            'skills-cat-soft': 'المهارات الشخصية',

            // Skill Names
            'skill-html': 'HTML5',
            'skill-css': 'CSS3',
            'skill-js': 'JavaScript',
            'skill-ts': 'TypeScript',
            'skill-react': 'React',
            'skill-bootstrap': 'Bootstrap',
            'skill-tailwind': 'Tailwind CSS',
            'skill-responsive': 'التصميم المتجاوب',
            'skill-uiux': 'تصميم UI/UX',
            'skill-nodejs': 'Node.js',
            'skill-express': 'Express.js',
            'skill-php': 'PHP',
            'skill-laravel': 'Laravel',
            'skill-csharp': 'C#',
            'skill-dotnet': '.NET',
            'skill-aspnet': 'ASP.NET Core',
            'skill-restapi': 'واجهات RESTful APIs',
            'skill-apidev': 'تطوير APIs',
            'skill-auth': 'المصادقة والصلاحيات',
            'skill-efcore': 'Entity Framework Core',
            'skill-mysql': 'MySQL',
            'skill-mssql': 'Microsoft SQL Server',
            'skill-postgresql': 'PostgreSQL',
            'skill-dbdesign': 'تصميم قواعد البيانات',
            'skill-dbmgmt': 'إدارة قواعد البيانات',
            'skill-git': 'Git',
            'skill-github': 'GitHub',
            'skill-ghactions': 'GitHub Actions',
            'skill-apitesting': 'اختبار APIs',
            'skill-postman': 'Postman',
            'skill-azure': 'Microsoft Azure',
            'skill-aws': 'AWS',
            'skill-gcloud': 'Google Cloud',
            'skill-docker': 'Docker',
            'skill-figma': 'Figma',
            'skill-photoshop': 'Adobe Photoshop',
            'skill-canva': 'Canva',
            'skill-graphic': 'التصميم الجرافيكي',
            'skill-word': 'Microsoft Word',
            'skill-excel': 'Microsoft Excel',
            'skill-ppt': 'Microsoft PowerPoint',
            'skill-access': 'Microsoft Access',
            'skill-outlook': 'Microsoft Outlook',
            'skill-onenote': 'Microsoft OneNote',
            'skill-teamlead': 'قيادة الفريق',
            'skill-volunteer': 'العمل التطوعي',
            'skill-communication': 'التواصل',
            'skill-problem': 'حل المشكلات',
            'skill-creativity': 'الإبداع',
            'skill-adaptability': 'القدرة على التكيف',
            'skill-time': 'إدارة الوقت',
            'skill-critical': 'التفكير النقدي',

            // Certifications UI, Organizations, Categories & Titles
            'cert-verify': 'عرض الشهادة',
            'org-oxford-bss': 'British Software Solutions · جامعة أكسفورد',
            'org-depi': 'مبادرة رواد مصر الرقمية (DEPI)',
            'org-harvard': 'جامعة هارفارد (CS50)',
            'org-aits': 'المعهد الأمريكي للتكنولوجيا والبرمجيات (AIT&S)',
            'org-cambridge': 'جامعة كامبريدج',
            'org-vodafone': 'فودافون مصر (Vodafone Egypt)',
            'org-auc': 'الجامعة الأمريكية بالقاهرة (AUC)',
            'org-meu': 'جامعة الشرق الأوسط (MEU)',
            'org-coursera': 'جامعة ميشيغان · Coursera',
            'org-google': 'Google',
            'org-gdg': 'مجموعات مطوري جوجل (GDG)',
            'org-microsoft': 'Microsoft',
            'org-cisco': 'Cisco',
            'org-udemy': 'Udemy',
            'org-icdl': 'ICDL',
            'org-mindluster': 'Mind Luster',

            'cat-fullstack': 'تطوير Full-Stack',
            'cat-frontend-react': 'واجهات أمامية · React',
            'cat-cs': 'علوم الحاسب',
            'cat-software-dev': 'تطوير البرمجيات',
            'cat-programming': 'البرمجة',
            'cat-award-db-web': 'تقدير · قواعد البيانات والويب',
            'cat-english': 'اللغة الإنجليزية (CEFR B2)',
            'cat-python': 'Python',
            'cat-mobile': 'تطوير التطبيقات',
            'cat-it': 'تكنولوجيا المعلومات',
            'cat-marketing': 'التسويق الرقمي',
            'cat-cloud': 'الحوسبة السحابية',
            'cat-webdev': 'تطوير الويب',
            'cat-databases': 'قواعد البيانات وSQL',
            'cat-cybersecurity': 'الأمن السيبراني',
            'cat-backend': 'تطوير خلفي وأمان',
            'cat-design': 'التصميم',
            'cat-frontend': 'الواجهات الأمامية',
            'cat-soft': 'المهارات الشخصية',

            'date-depi': 'نوفمبر 2025 – يونيو 2026',
            'date-harvard': '2023',
            'date-meu': 'نوفمبر 2025',
            'date-2024': '2024',

            'cert-oxford-bss-title': 'مطور Full-Stack — شهادة تقدير وإنجاز',
            'cert-aits-title': 'البرمجة وتطوير البرمجيات (Programming & Software Development)',
            'cert-cambridge-title': 'أساسيات البرمجة (Fundamentals of Programming)',
            'cert-vodafone-title': 'جائزة تقدير فودافون مصر (تطوير قواعد البيانات وتقنيات تصميم الويب)',
            'cert18-title': 'اللغة الإنجليزية (Survival English) — مستوى B2 وفق الإطار الأوروبي CEFR',
            'cert19-title': 'شهادة CS50x في علوم الحاسب (المشاريع العملية والمشروع النهائي)',
            'cert20-title': 'اللغة الإنجليزية مستوى B2',
            'cert21-title': 'تطوير البرمجيات – مطور واجهات أمامية React',
            'cert22-title': 'البرمجة للجميع باستخدام لغة Python',
            'cert1-title': 'مطور أندرويد معتمد (Associate Android Developer)',
            'cert2-title': 'دعم تقنية المعلومات من جوجل (Google IT Support)',
            'cert3-title': 'أساسيات التسويق الرقمي',
            'cert4-title': 'مهندس سحابة معتمد (Associate Cloud Engineer)',
            'cert5-title': 'الاستعلام عن البيانات باستخدام Transact-SQL',
            'cert6-title': 'أساسيات Python 1 (Cisco & Microsoft)',
            'cert7-title': 'مقدمة في الأمن السيبراني (Cisco & Microsoft)',
            'cert8-title': 'أساسيات Python 1 (Cisco & OpenEDG Python Institute)',
            'cert9-title': 'مقدمة في الأمن السيبراني',
            'cert10-title': 'شهادة Node.js وNest.js وPostgreSQL وGraphQL والأمان',
            'cert11-title': 'إتقان Kali Linux للاختبار الأخلاقي',
            'cert12-title': 'شهادة Flutter Clean Architecture',
            'cert13-title': 'دورة Adobe Photoshop CC الاحترافية مع تدريب متقدم',
            'cert14-title': 'الرخصة الدولية لقيادة الحاسب (ICDL)',
            'cert15-title': 'تقنيات تنسيق HTML',
            'cert16-title': 'المهارات الشخصية (Soft Skills)',
            'cert17-title': 'دورة تطوير الويب',

            // Portfolio & Certificate Filters
            'cert-filter-all': 'الكل',
            'cert-filter-dev': 'البرمجة والتطوير',
            'cert-filter-cloud-data': 'السحابة والبيانات',
            'cert-filter-security-it': 'الأمن وتقنية المعلومات',
            'cert-filter-lang-soft': 'اللغات والتصميم',
            'certs-count-label': 'إجمالي الشهادات',

            'portfolio-all': 'كل المواقع',
            'portfolio-apps': 'تطبيقات ويب وAI',
            'portfolio-business': 'أعمال ومتاجر',
            'portfolio-creative': 'تصاميم 3D وإبداعية',
            'portfolio-ui': 'محاكاة وواجهات دخول',
            'portfolio-websites': 'مواقع',
            'portfolio-designs': 'تصميمات',
            'portfolio-view-design': 'عرض التصميم',
            'projects-count-label': 'إجمالي المشاريع',
            'projects-clients-label': 'مشاريع عملاء',
            'project-search-placeholder': 'ابحث في 86 مشروعًا...',
            'portfolio-empty': 'لا توجد مشاريع مطابقة لبحثك أو التصنيف الحالي.',

            // Resume
            'resume-role-title': 'مطور Full-Stack | مطور واجهات أمامية | مطور واجهات خلفية | مصمم UI/UX',
            'resume-core-statement': 'بناء تطبيقات ويب متكاملة من البداية للنهاية، بدءًا من تصميم UI/UX والواجهات الأمامية المتجاوبة وحتى واجهات REST APIs وقواعد البيانات والمصادقة والاختبار والنشر السحابي.',
            'resume-client-milestone': 'أكثر من 30 موقعًا وحلًا رقميًا تم تسليمها لعملاء حقيقيين',

            'exp-fullstack-date': '2024 - الآن',
            'exp-fullstack-title': 'مطور ويب متكامل (Full-Stack) ومصمم UI/UX',
            'exp-fullstack-company': 'مشاريع عملاء وعمل حر (Freelancer، مستقل، وعملاء مباشرين)',
            'exp-fullstack-d1': 'تسليم <b>أكثر من 30 موقعًا وحلًا برمجيًا فعليًا لعملاء حقيقيين</b> في مجالات الأعمال والتجارة الإلكترونية والعيادات والتعليم ومنصات الويب.',
            'exp-fullstack-d2': 'تصميم واجهات وتجربة مستخدم (UI/UX) وتطوير واجهات متجاوبة باستخدام HTML5 وCSS3 وJavaScript وTypeScript وReact وBootstrap وTailwind CSS.',
            'exp-fullstack-d3': 'تطوير الأنظمة الخلفية وواجهات RESTful APIs وأنظمة المصادقة والصلاحيات باستخدام Node.js وExpress.js وPHP (Laravel) وC# و.NET وASP.NET Core.',
            'exp-fullstack-d4': 'تصميم وتحسين قواعد البيانات (MySQL وPostgreSQL وMS SQL Server)، وإدارة الإصدارات عبر Git/GitHub، واختبار APIs عبر Postman، والنشر الفعلي.',

            'exp-oxford-date': '2025',
            'exp-oxford-title': 'مطور Full-Stack (مشروع برمجي مشترك)',
            'exp-oxford-company': 'British Software Solutions بالشراكة مع جامعة أكسفورد',
            'exp-oxford-d1': 'بناء وحدات تطبيق متكاملة شملت الواجهات الأمامية وواجهات REST APIs الخلفية ومخططات قواعد البيانات وربط الأنظمة.',
            'exp-oxford-d2': 'المشاركة في مراجعات الكود والاختبار ومعالجة الأخطاء حتى جاهزية المشروع للإطلاق.',

            'exp-vodafone-date': '2025',
            'exp-vodafone-title': 'مساهم في تطوير قواعد البيانات وتقنيات الويب',
            'exp-vodafone-company': 'فودافون مصر — حاصل على جائزة التقدير',
            'exp-vodafone-d1': 'حاصل على جائزة تقدير فودافون مصر لتقديم حلول متميزة في تطوير قواعد البيانات وتقنيات تصميم الويب الحديثة.',

            'exp-softtech-date': 'مايو 2024 - نوفمبر 2024',
            'exp-softtech-title': 'مطور واجهات أمامية ومصمم UI/UX (بنظام المشروع)',
            'exp-softtech-company': 'شركة Soft-Tech (عن بُعد)',
            'exp-softtech-detail1': 'تحويل تصميمات Figma UI/UX إلى مكونات ويب نظيفة ومتجاوبة لمنصة "بوابة الاستثمار".',
            'exp-softtech-detail2': 'تطوير واجهات تفاعلية باستخدام React وTypeScript مع الربط الكامل مع واجهات RESTful APIs الخلفية.',

            'exp-training-date': '2025 - 2026',
            'exp-training-title': 'مسارات هندسة Full-Stack متخصصة (DEPI وIT GATE Academy)',
            'exp-training-company': 'مبادرة رواد مصر الرقمية (React) وأكاديمية IT GATE (Laravel & PHP)',
            'exp-training-d1': 'إتمام مسار تطوير واجهات React (نوفمبر 2025 – يونيو 2026) وبناء تطبيقات ويب حديثة قائمة على المكونات.',
            'exp-training-d2': 'إتمام معسكر Laravel المكثف للتركيز على معمارية MVC والمصادقة وEloquent ORM وتحسين قواعد البيانات.',

            'edu-date': 'التخرج المتوقع: 2027',
            'edu-degree': 'بكالوريوس علوم الحاسب وتكنولوجيا المعلومات',
            'edu-uni': 'الأكاديمية الحديثة بالمعادي (التقدير: جيد جداً B+)',

            'resume-certs-title': 'أبرز الشهادات والتكريمات',
            'rcert-1': '<b>مطور Full-Stack</b> — British Software Solutions وجامعة أكسفورد',
            'rcert-2': '<b>تطوير البرمجيات – مطور React Frontend</b> — مبادرة رواد مصر الرقمية (DEPI)',
            'rcert-3': '<b>CS50x: مقدمة في علوم الحاسب</b> — جامعة هارفارد',
            'rcert-4': '<b>البرمجة وتطوير البرمجيات</b> — المعهد الأمريكي للتكنولوجيا والبرمجيات (AIT&S)',
            'rcert-5': '<b>أساسيات البرمجة</b> — جامعة كامبريدج',
            'rcert-6': '<b>جائزة التقدير (تطوير قواعد البيانات وتصميم الويب)</b> — فودافون مصر',
            'rcert-7': '<b>Node.js وNest.js وPostgreSQL وGraphQL والأمان</b> — Udemy',
            'rcert-8': '<b>Associate Cloud Engineer وAssociate Android Developer</b> — Google',
            'rcert-9': '<b>الاستعلام عن البيانات باستخدام Transact-SQL</b> — Microsoft',
            'rcert-10': '<b>إتقان اللغة الإنجليزية (CEFR B2)</b> — الجامعة الأمريكية بالقاهرة (AUC) وجامعة الشرق الأوسط',

            'cv-dev-download': 'مشاهدة السيرة الذاتية',

            // Contact
            'contact-location': 'الموقع',
            'contact-email': 'البريد الإلكتروني',
            'contact-phone': 'الهاتف',
            'contact-whatsapp': 'واتساب',
            'form-name': 'اسمك',
            'form-email': 'بريدك الإلكتروني',
            'form-message': 'رسالتك',
            'form-submit': 'إرسال الرسالة',
            'form-err-empty': 'يرجى ملء جميع الحقول.',
            'form-redirecting': 'شكرًا لك! جاري التحويل إلى واتساب...'
        }
    };

    // --- PROJECT GROUPING HELPER (Keeps all 86 projects cleanly categorized) ---
    const projectGroupSets = {
        apps: new Set([
            'p1-title', 'p3-title', 'p4-title', 'p5-title', 'p24-title', 'p25-title',
            'p27-title', 'p38-title', 'p39-title', 'p40-title', 'p41-title', 'p42-title',
            'p51-title', 'p52-title', 'p53-title', 'p54-title', 'p55-title', 'p56-title',
            'p57-title', 'p58-title', 'p59-title', 'p60-title', 'p61-title', 'p62-title',
            'p63-title', 'p64-title', 'p65-title'
        ]),
        creative: new Set([
            'p9-title', 'p29-title', 'p30-title', 'p31-title', 'p32-title', 'p33-title',
            'p34-title', 'p35-title', 'p36-title', 'p37-title', 'p66-title', 'p67-title',
            'p68-title', 'p69-title', 'p70-title', 'p71-title', 'p72-title', 'p80-title',
            'p82-title', 'p85-title', 'p86-title'
        ]),
        ui: new Set([
            'p47-title', 'p50-title', 'p73-title', 'p74-title', 'p75-title', 'p76-title',
            'p77-title', 'p78-title'
        ])
    };

    const getProjectGroup = (titleKey) => {
        if (projectGroupSets.apps.has(titleKey)) return 'apps';
        if (projectGroupSets.creative.has(titleKey)) return 'creative';
        if (projectGroupSets.ui.has(titleKey)) return 'ui';
        return 'business';
    };

    // --- GLOBAL STATE ---
    const state = {
        language: localStorage.getItem('language') || 'en',
        theme: localStorage.getItem('theme') || 'dark',
        activeSection: localStorage.getItem('activeSection') || 'home',
        certFilter: 'all',
        portfolioFilter: 'all',
        portfolioSearch: '',
        typing: { words: [], wordIndex: 0, charIndex: 0, isDeleting: false, timerId: null },
        viewerOpen: false,
        gallery: {
            images: [],
            currentIndex: 0
        }
    };

    // --- SCROLL ANIMATION OBSERVER ---
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.08 });

    // --- VIEW-ONLY PROTECTED CERTIFICATE VIEWER ---
    // NOTE: Frontend protections prevent direct downloading, right-clicking, dragging,
    // and casual saving from the UI. Client-side code cannot 100% prevent OS-level
    // screenshots or screen capture tools.
    const openCertificateViewer = (certId) => {
        const cert = certifications.find(item => item.id === certId);
        if (!cert || !viewerModal || !certViewerImage) return;

        state.viewerOpen = true;
        viewerModal.style.display = 'flex';
        certViewerLoader.style.display = 'block';
        certViewerImage.classList.remove('is-loaded');

        const lang = state.language;
        certViewerImage.alt = translations[lang]?.[cert.titleKey] || 'Certificate';

        certViewerImage.onload = () => {
            certViewerLoader.style.display = 'none';
            certViewerImage.classList.add('is-loaded');
        };

        certViewerImage.onerror = () => {
            certViewerLoader.style.display = 'none';
        };

        // Load original full-resolution certificate asset without compression or transform
        certViewerImage.src = cert.image;
    };

    const closeCertificateViewer = () => {
        if (!viewerModal || !certViewerImage) return;
        state.viewerOpen = false;
        viewerModal.style.display = 'none';
        certViewerLoader.style.display = 'none';
        certViewerImage.classList.remove('is-loaded');
        certViewerImage.src = '';
    };

    // Block contextmenu, drag, selection, copy, and pinch/ctrl-wheel zoom inside certificate viewer
    const blockProtectedEvent = (e) => {
        e.preventDefault();
        return false;
    };

    if (viewerModal) {
        viewerModal.addEventListener('contextmenu', blockProtectedEvent);
        viewerModal.addEventListener('dragstart', blockProtectedEvent);
        viewerModal.addEventListener('selectstart', blockProtectedEvent);
        viewerModal.addEventListener('copy', blockProtectedEvent);
        viewerModal.addEventListener('wheel', (e) => {
            if (e.ctrlKey) e.preventDefault();
        }, { passive: false });
        viewerModal.addEventListener('gesturestart', blockProtectedEvent);
        viewerModal.addEventListener('gesturechange', blockProtectedEvent);
    }

    // --- IMAGE GALLERY FUNCTIONS ---
    const showImageInGallery = (index) => {
        if (!state.gallery.images || state.gallery.images.length === 0) return;

        galleryImage.classList.add('fade-out');

        setTimeout(() => {
            state.gallery.currentIndex = index;
            galleryImage.src = state.gallery.images[index];

            galleryImage.onload = () => {
                galleryImage.classList.remove('fade-out');
            };

            galleryCounter.textContent = `${index + 1} / ${state.gallery.images.length}`;
            galleryPrevBtn.style.display = index === 0 ? 'none' : 'flex';
            galleryNextBtn.style.display = index === state.gallery.images.length - 1 ? 'none' : 'flex';
        }, 400);
    };

    const openImageGallery = (images) => {
        if (!images || images.length === 0) return;

        state.gallery.images = images;
        imageGalleryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        showImageInGallery(0);
    };

    const closeImageGallery = () => {
        imageGalleryModal.style.display = 'none';
        state.gallery.images = [];
        state.gallery.currentIndex = 0;
        galleryImage.src = '';
        document.body.style.overflow = '';
    };

    // --- CORE RENDERING ---
    function applyTheme(theme) {
        state.theme = theme;
        localStorage.setItem('theme', theme);
        htmlElement.classList.toggle('dark', theme === 'dark');
    }

    function populateSkills() {
        if (!skillsContainer) return;
        const lang = state.language;
        skillsContainer.innerHTML = '';

        skillsData.forEach(group => {
            const groupEl = document.createElement('div');
            groupEl.className = 'scroll-animation visible';

            const cardsHtml = group.items.map(skill => {
                const label = translations[lang]?.[skill.key] || skill.key;
                const visualHtml = skill.iconUrl
                    ? `<img src="${skill.iconUrl}" alt="${label}" class="skill-logo${skill.invert ? ' skill-logo-invert' : ''}" loading="lazy" draggable="false">`
                    : `<i class="${skill.faIcon}" aria-hidden="true"></i>`;

                return `
                    <div class="skill-card">
                        <div class="skill-logo-wrap">${visualHtml}</div>
                        <h4 data-key="${skill.key}">${label}</h4>
                    </div>
                `;
            }).join('');

            groupEl.innerHTML = `
                <h3 class="category-title" data-key="${group.categoryKey}">${translations[lang]?.[group.categoryKey] || group.categoryKey}</h3>
                <div class="skills-grid">${cardsHtml}</div>
            `;

            skillsContainer.appendChild(groupEl);
        });
    }

    function populateCertifications(filter = state.certFilter) {
        if (!certGrid) return;
        state.certFilter = filter;
        certGrid.innerHTML = '';
        const lang = state.language;

        const filteredCerts = filter === 'all'
            ? certifications
            : certifications.filter(c => c.filterGroup === filter);

        if (certsCountNumber) {
            certsCountNumber.textContent = filteredCerts.length;
        }

        filteredCerts.forEach(cert => {
            const title = translations[lang]?.[cert.titleKey] || cert.titleKey;
            const org = translations[lang]?.[cert.organizationKey] || '';
            const category = translations[lang]?.[cert.categoryKey] || '';
            const dateText = cert.dateKey ? (translations[lang]?.[cert.dateKey] || '') : '';
            const verifyLabel = translations[lang]?.['cert-verify'] || 'View Certificate';

            const logoList = cert.logos || [{ src: cert.logo, alt: org }];
            const logosHtml = logoList.map(item => `
                <div class="cert-org-logo-wrap${item.wide ? ' is-wide' : ''}">
                    <img src="${item.src}" alt="${item.alt || org}" class="cert-org-logo" loading="lazy" draggable="false" onerror="this.parentElement.style.display='none'">
                </div>
            `).join('');

            const card = document.createElement('div');
            card.className = 'cert-card';

            // Note: No direct image URL or <a> href is exposed on the card trigger;
            // only data-cert-id is stored and resolved internally on click.
            card.innerHTML = `
                <div class="cert-card-preview" data-cert-id="${cert.id}" role="button" tabindex="0" aria-label="${title}">
                    <img src="${cert.thumbnail}" alt="${title}" loading="lazy" draggable="false" />
                    <div class="cert-preview-shield" aria-hidden="true"></div>
                </div>
                <div class="cert-card-header">
                    <div class="cert-org-logos">${logosHtml}</div>
                    <div class="cert-org-meta">
                        <span class="issuer" data-key="${cert.organizationKey}">${org}</span>
                        <div class="cert-meta-row">
                            <span class="cert-category-badge" data-key="${cert.categoryKey}">${category}</span>
                            ${dateText ? `<span class="cert-date-meta" data-key="${cert.dateKey}">${dateText}</span>` : ''}
                        </div>
                    </div>
                </div>
                <div class="cert-card-body">
                    <h4 data-key="${cert.titleKey}">${title}</h4>
                </div>
                <div class="cert-card-footer">
                    <button type="button" class="view-cert-btn" data-cert-id="${cert.id}">
                        <i class="fas fa-eye" aria-hidden="true"></i>
                        <span data-key="cert-verify">${verifyLabel}</span>
                    </button>
                </div>
            `;

            certGrid.appendChild(card);
        });
    }

    function populatePortfolio(filter = state.portfolioFilter, searchQuery = state.portfolioSearch) {
        if (!portfolioGrid) return;
        state.portfolioFilter = filter;
        state.portfolioSearch = searchQuery;

        portfolioGrid.innerHTML = '';

        const currentLang = state.language;
        const normalizedQuery = searchQuery.trim().toLowerCase();

        const filteredData = portfolioData.filter(item => {
            const matchesGroup = filter === 'all' || filter === 'websites'
                ? true
                : getProjectGroup(item.titleKey) === filter;
            if (!matchesGroup) return false;
            if (!normalizedQuery) return true;
            const title = (translations[currentLang]?.[item.titleKey] || translations.en[item.titleKey] || '').toLowerCase();
            return title.includes(normalizedQuery);
        });

        if (projectsCountNumber) {
            projectsCountNumber.textContent = filteredData.length;
        }

        if (portfolioEmptyMsg) {
            portfolioEmptyMsg.style.display = filteredData.length === 0 ? 'block' : 'none';
        }

        filteredData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            const title = translations[currentLang]?.[item.titleKey] || translations.en[item.titleKey] || '';
            let linksHtml = '';

            if (item.category === 'websites') {
                linksHtml = `
                    <h4 data-key="${item.titleKey}">${title}</h4>
                    <div class="overlay-links">
                        <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i class="fas fa-link"></i></a>
                        <a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"><i class="fab fa-github"></i></a>
                    </div>`;
            } else if (item.category === 'designs') {
                linksHtml = `
                    <div class="overlay-links">
                        <button class="view-design-btn" data-title-key="${item.titleKey}" aria-label="${translations[currentLang]['portfolio-view-design']}">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>`;
            }

            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/400x250/111113/C9A23F?text=Image+Not+Found';">
                <div class="portfolio-overlay">
                    ${linksHtml}
                </div>`;
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    function startTypingAnimation() {
        if (state.typing.timerId) {
            clearTimeout(state.typing.timerId);
            state.typing.timerId = null;
        }
        typeAnimation();
    }

    function typeAnimation() {
        if (!typingTextElement || !state.typing.words || state.typing.words.length === 0) return;
        const { words, wordIndex, isDeleting } = state.typing;
        const charIndex = state.typing.charIndex;
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 45 : 75;

        typingTextElement.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            state.typing.timerId = setTimeout(() => {
                state.typing.isDeleting = true;
                typeAnimation();
            }, 2200);
            return;
        } else if (isDeleting && charIndex === 0) {
            state.typing.isDeleting = false;
            state.typing.wordIndex = (wordIndex + 1) % words.length;
            state.typing.timerId = setTimeout(typeAnimation, 400);
            return;
        }

        state.typing.charIndex += isDeleting ? -1 : 1;
        state.typing.timerId = setTimeout(typeAnimation, typeSpeed);
    }

    function updateContent(lang) {
        state.language = lang;
        localStorage.setItem('language', lang);
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        getAllElems('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = translations[lang]?.[key];
            if (translation !== undefined && key !== 'typing-words') {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        populateSkills();
        populateCertifications(state.certFilter);
        populatePortfolio(state.portfolioFilter, state.portfolioSearch);

        const typingSource = translations[lang]['typing-words'];
        state.typing.words = Array.isArray(typingSource) ? typingSource : String(typingSource).split(',');
        state.typing.wordIndex = 0;
        state.typing.charIndex = 0;
        state.typing.isDeleting = false;
        startTypingAnimation();
    }

    function setSidebarOpen(isOpen) {
        sidebar.classList.toggle('is-open', isOpen);
        if (sidebarBackdrop) {
            sidebarBackdrop.classList.toggle('is-open', isOpen);
        }
        mobileMenuToggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    }

    function setActiveSection(sectionId, fromClick = false) {
        state.activeSection = sectionId;
        localStorage.setItem('activeSection', sectionId);
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === sectionId));
        sections.forEach(sec => sec.classList.toggle('active', sec.id === sectionId));
        if (fromClick && window.innerWidth <= 1024) {
            setSidebarOpen(false);
        }
    }

    // --- EVENT LISTENERS ---
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
        initialize();
    });

    langToggle.addEventListener('click', () => {
        const newLang = state.language === 'en' ? 'ar' : 'en';
        updateContent(newLang);
    });

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSection(button.dataset.section, true);
        });
    });

    mobileMenuToggle.addEventListener('click', () => {
        setSidebarOpen(!sidebar.classList.contains('is-open'));
    });

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => setSidebarOpen(false));
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('[name="name"]').value.trim();
            const email = contactForm.querySelector('[name="email"]').value.trim();
            const message = contactForm.querySelector('[name="message"]').value.trim();
            const formStatus = getElem('#form-status');
            const lang = state.language;

            if (!name || !email || !message) {
                formStatus.textContent = translations[lang]['form-err-empty'];
                formStatus.style.color = '#F7D060';
                setTimeout(() => { formStatus.textContent = ''; }, 3000);
                return;
            }

            const yourWhatsAppNumber = '201201898518';
            const whatsappMessage = `Hello Abdelrahman,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

            formStatus.textContent = translations[lang]['form-redirecting'];
            formStatus.style.color = 'var(--gold-light)';
            setTimeout(() => {
                formStatus.textContent = '';
                contactForm.reset();
            }, 4000);
        });
    }

    if (certFilters) {
        certFilters.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                certFilters.querySelector('.active')?.classList.remove('active');
                e.target.classList.add('active');
                populateCertifications(e.target.dataset.certFilter || 'all');
            }
        });
    }

    if (portfolioFilters) {
        portfolioFilters.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                portfolioFilters.querySelector('.active')?.classList.remove('active');
                e.target.classList.add('active');
                populatePortfolio(e.target.dataset.filter || 'all', state.portfolioSearch);
            }
        });
    }

    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (projectSearchClear) {
                projectSearchClear.style.display = val.length > 0 ? 'flex' : 'none';
            }
            populatePortfolio(state.portfolioFilter, val);
        });
    }

    if (projectSearchClear && projectSearchInput) {
        projectSearchClear.addEventListener('click', () => {
            projectSearchInput.value = '';
            projectSearchClear.style.display = 'none';
            populatePortfolio(state.portfolioFilter, '');
            projectSearchInput.focus();
        });
    }

    if (certGrid) {
        certGrid.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-cert-id]');
            if (trigger) {
                e.preventDefault();
                openCertificateViewer(trigger.dataset.certId);
            }
        });

        certGrid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const preview = e.target.closest('.cert-card-preview[data-cert-id]');
                if (preview) {
                    e.preventDefault();
                    openCertificateViewer(preview.dataset.certId);
                }
            }
        });

        // Prevent casual right-click/drag saving on certificate card previews
        certGrid.addEventListener('contextmenu', (e) => {
            if (e.target.closest('.cert-card-preview')) {
                e.preventDefault();
            }
        });
        certGrid.addEventListener('dragstart', (e) => {
            if (e.target.closest('.cert-card-preview')) {
                e.preventDefault();
            }
        });
    }

    if (portfolioGrid) {
        portfolioGrid.addEventListener('click', (e) => {
            const viewButton = e.target.closest('.view-design-btn');
            if (viewButton) {
                e.preventDefault();
                const titleKey = viewButton.dataset.titleKey;
                const item = portfolioData.find(p => p.titleKey === titleKey);
                if (item && item.images && item.images.length > 0) {
                    openImageGallery(item.images);
                }
            }
        });
    }

    // Protected Certificate Viewer close handlers
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeCertificateViewer);
    }
    if (viewerModal) {
        viewerModal.addEventListener('click', (e) => {
            if (e.target === viewerModal || e.target === getElem('#cert-viewer-stage')) {
                closeCertificateViewer();
            }
        });
    }

    // Image gallery controls
    if (galleryPrevBtn) {
        galleryPrevBtn.addEventListener('click', () => {
            if (state.gallery.currentIndex > 0) {
                showImageInGallery(state.gallery.currentIndex - 1);
            }
        });
    }

    if (galleryNextBtn) {
        galleryNextBtn.addEventListener('click', () => {
            if (state.gallery.currentIndex < state.gallery.images.length - 1) {
                showImageInGallery(state.gallery.currentIndex + 1);
            }
        });
    }

    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', closeImageGallery);
    }
    if (imageGalleryModal) {
        imageGalleryModal.addEventListener('click', (e) => {
            if (e.target === imageGalleryModal) {
                closeImageGallery();
            }
        });
    }

    // Keyboard navigation & viewer save/print shortcut protection
    document.addEventListener('keydown', (e) => {
        if (state.viewerOpen) {
            if (e.key === 'Escape') {
                closeCertificateViewer();
                return;
            }
            const keyLower = e.key.toLowerCase();
            if ((e.ctrlKey || e.metaKey) && (keyLower === 's' || keyLower === 'p' || keyLower === 'u')) {
                e.preventDefault();
                return;
            }
        }

        if (imageGalleryModal && imageGalleryModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft' || (htmlElement.dir === 'rtl' && e.key === 'ArrowRight')) {
                galleryPrevBtn.click();
            } else if (e.key === 'ArrowRight' || (htmlElement.dir === 'rtl' && e.key === 'ArrowLeft')) {
                galleryNextBtn.click();
            } else if (e.key === 'Escape') {
                closeGalleryBtn.click();
            }
        }
    });

    getAllElems('.scroll-animation').forEach(el => scrollObserver.observe(el));

    // --- INITIALIZATION ---
    function initialize() {
        applyTheme(state.theme);
        updateContent(state.language);
        setActiveSection(state.activeSection);
    }
});
