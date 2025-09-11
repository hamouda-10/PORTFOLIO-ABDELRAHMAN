
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

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
    const contactForm = getElem('#contact-form');
    const certGrid = getElem('.cert-grid');
    const portfolioGrid = getElem('.portfolio-grid');
    const portfolioFilters = getElem('.portfolio-filters');

    // PDF Viewer selectors
    const viewerModal = getElem('#viewer-modal');
    const closeModalBtn = getElem('#modal-closer');
    const pdfViewerContainer = getElem('#pdf-viewer-container');
    const pdfLoader = getElem('#pdf-loader');
    const prevPageBtn = getElem('#prev-page');
    const nextPageBtn = getElem('#next-page');
    const pageNumSpan = getElem('#page-num');
    const pageCountSpan = getElem('#page-count');
    const zoomInBtn = getElem('#zoom-in');
    const zoomOutBtn = getElem('#zoom-out');
    const downloadPdfLink = getElem('#download-pdf');
    const pdfCanvas = getElem('#pdf-canvas');
    const pdfRenderArea = getElem('#pdf-render-area');

    // Image Gallery selectors
    const imageGalleryModal = getElem('#image-gallery-modal');
    const closeGalleryBtn = getElem('#gallery-modal-closer');
    const galleryImage = getElem('#gallery-image');
    const galleryPrevBtn = getElem('#gallery-prev-btn');
    const galleryNextBtn = getElem('#gallery-next-btn');
    const galleryCounter = getElem('#gallery-counter');

    // --- DATA ---
    const certificationsData = [
        { id: 'cert1', titleKey: 'cert1-title', issuer: 'GOOGLE', logo: 'images/Certificates/GOOGLE.png', verifyUrl: './Certificates/GOOGLE1.pdf' },
        { id: 'cert2', titleKey: 'cert2-title', issuer: 'GOOGLE', logo: 'images/Certificates/GOOGLE.png', verifyUrl: './Certificates/GOOGLE2.pdf' },
        { id: 'cert3', titleKey: 'cert3-title', issuer: 'GOOGLE', logo: 'images/Certificates/GOOGLE.png', verifyUrl: './Certificates/GOOGLE3.pdf' },
        { id: 'cert4', titleKey: 'cert4-title', issuer: 'GOOGLE', logo: 'images/Certificates/GOOGLE.png', verifyUrl: './Certificates/GOOGLE4.pdf' },
        { id: 'cert17', titleKey: 'cert17-title', issuer: 'GDG', logo: 'images/Certificates/GDG.png', verifyUrl: './Certificates/GDG.pdf' },
        { id: 'cert5', titleKey: 'cert5-title', issuer: 'MICROSOFT', logo: 'images/Certificates/MICROSOFT.png', verifyUrl: './Certificates/MICROSOFT1.pdf' },
        { id: 'cert6', titleKey: 'cert6-title', issuer: 'MICROSOFT', logo: 'images/Certificates/MICROSOFT.png', verifyUrl: './Certificates/MICROSOFT2.pdf' },
        { id: 'cert7', titleKey: 'cert7-title', issuer: 'MICROSOFT', logo: 'images/Certificates/MICROSOFT.png', verifyUrl: './Certificates/MICROSOFT3.pdf' },
        { id: 'cert8', titleKey: 'cert8-title', issuer: 'CISCO', logo: 'images/Certificates/CISCO.png', verifyUrl: './Certificates/CISCO1.pdf' },
        { id: 'cert9', titleKey: 'cert9-title', issuer: 'CISCO', logo: 'images/Certificates/CISCO.png', verifyUrl: './Certificates/CISCO2.pdf' },
        { id: 'cert10', titleKey: 'cert10-title', issuer: 'UDEMY', logo: 'images/Certificates/UDEMY.png', verifyUrl: './Certificates/UDEMY1.pdf' },
        { id: 'cert11', titleKey: 'cert11-title', issuer: 'UDEMY', logo: 'images/Certificates/UDEMY.png', verifyUrl: './Certificates/UDEMY2.pdf' },
        { id: 'cert12', titleKey: 'cert12-title', issuer: 'UDEMY', logo: 'images/Certificates/UDEMY.png', verifyUrl: './Certificates/UDEMY3.pdf' },
        { id: 'cert13', titleKey: 'cert13-title', issuer: 'UDEMY', logo: 'images/Certificates/UDEMY.png', verifyUrl: './Certificates/UDEMY4.pdf' },
        { id: 'cert14', titleKey: 'cert14-title', issuer: 'ICDL', logo: 'images/Certificates/ICDL.png', verifyUrl: './Certificates/ICDL.pdf' },
        { id: 'cert15', titleKey: 'cert15-title', issuer: 'MINDLUSTER', logo: 'images/Certificates/MINDLUSTER.png', verifyUrl: './Certificates/MINDLUSTER2.pdf' },
        { id: 'cert16', titleKey: 'cert16-title', issuer: 'MINDLUSTER', logo: 'images/Certificates/MINDLUSTER.png', verifyUrl: './Certificates/MINDLUSTER1.pdf' },
    ];

    const portfolioData = [
    { category: 'websites', titleKey: 'p1-title', image: 'images/Websites/PORTFOLIO.png', liveUrl: 'https://hamouda-10.github.io/ORANGE-PORTFOLIO/', repoUrl: 'https://github.com/hamouda-10/ORANGE-PORTFOLIO-' },
    { category: 'websites', titleKey: 'p2-title', image: 'images/Websites/PRO COURSES.png', liveUrl: 'https://hamouda-10.github.io/PRO-COURSES/', repoUrl: 'https://github.com/hamouda-10/PRO-COURSES' },
    { category: 'websites', titleKey: 'p3-title', image: 'images/Websites/AMAZONE CLONE.png', liveUrl: 'https://hamouda-10.github.io/STORE-AMAZON-/', repoUrl: 'https://github.com/hamouda-10/STORE-AMAZON-' },
    { category: 'websites', titleKey: 'p4-title', image: 'images/Websites/HEADPHONE.png', liveUrl: 'https://hamouda-10.github.io/HEADPHONES/', repoUrl: 'https://github.com/hamouda-10/HEADPHONES' },
    { category: 'websites', titleKey: 'p5-title', image: 'images/Websites/YOUTUBE CLONE.png', liveUrl: 'https://hamouda-10.github.io/YOUTUBE-CLONE/', repoUrl: 'https://github.com/hamouda-10/YOUTUBE-CLONE' },
    { category: 'websites', titleKey: 'p6-title', image: 'images/Websites/EDUCATION PLATFORM.png', liveUrl: 'https://hamouda-10.github.io/edu-platform-elshoura/#', repoUrl: 'https://github.com/hamouda-10/edu-platform-elshoura' },
    { category: 'websites', titleKey: 'p30-title', image: 'images/Websites/CV.png', liveUrl: 'https://hamouda-10.github.io/CV-CHECKER/', repoUrl: 'https://github.com/hamouda-10/CV-CHECKER' },
    { category: 'websites', titleKey: 'p7-title', image: 'images/Websites/IMAGES.png', liveUrl: 'https://hamouda-10.github.io/IMAGES/', repoUrl: 'https://github.com/hamouda-10/IMAGES' },
    { category: 'websites', titleKey: 'p8-title', image: 'images/Websites/PLANETS.png', liveUrl: 'https://hamouda-10.github.io/PLANETS/', repoUrl: 'https://github.com/hamouda-10/PLANETS' },
    { category: 'websites', titleKey: 'p9-title', image: 'images/Websites/SPIRO.png', liveUrl: 'https://hamouda-10.github.io/Spiro-Spatnis-Card/', repoUrl: 'https://github.com/hamouda-10/Spiro-Spatnis-Card' },
    { category: 'websites', titleKey: 'p10-title', image: 'images/Websites/CANS.png', liveUrl: 'https://hamouda-10.github.io/CANS/', repoUrl: 'https://github.com/hamouda-10/CANS' },
    { category: 'websites', titleKey: 'p11-title', image: 'images/Websites/COLOR LOGIN.png', liveUrl: 'https://hamouda-10.github.io/BLUR-LOGIN/', repoUrl: 'https://github.com/hamouda-10/BLUR-LOGIN/settings/pages' },
    { category: 'websites', titleKey: 'p12-title', image: 'images/Websites/RED LOGIN.png', liveUrl: 'https://hamouda-10.github.io/RED-LOGIN/', repoUrl: 'https://github.com/hamouda-10/RED-LOGIN' },
    { category: 'websites', titleKey: 'p13-title', image: 'images/Websites/BLACK LOGIN.png', liveUrl: 'https://hamouda-10.github.io/BLACK-LOGIN/', repoUrl: 'https://github.com/hamouda-10/BLACK-LOGIN' },
    { category: 'websites', titleKey: 'p14-title', image: 'images/Websites/MAN LOGIN.png', liveUrl: 'https://hamouda-10.github.io/MAN-LOGIN/', repoUrl: 'https://github.com/hamouda-10/MAN-LOGIN' },
    { category: 'websites', titleKey: 'p15-title', image: 'images/Websites/IOS LOGIN.png', liveUrl: 'https://hamouda-10.github.io/LOGIN-IPHONE/', repoUrl: 'https://github.com/hamouda-10/LOGIN-IPHONE' },
    { category: 'websites', titleKey: 'p16-title', image: 'images/Websites/ZOOM.png', liveUrl: 'https://hamouda-10.github.io/ZOOM-WEBSITE/', repoUrl: 'https://github.com/hamouda-10/ZOOM-WEBSITE' },
    { category: 'websites', titleKey: 'p17-title', image: 'images/Websites/WHITE BOARD.png', liveUrl: 'https://hamouda-10.github.io/White-Board/', repoUrl: 'https://github.com/hamouda-10/White-Board' },
    { category: 'websites', titleKey: 'p18-title', image: 'images/Websites/SOCIAL BUTTONS.png', liveUrl: 'https://hamouda-10.github.io/SOCIAL-ICON-BUTTONS/', repoUrl: 'https://github.com/hamouda-10/SOCIAL-ICON-BUTTONS' },
    { category: 'websites', titleKey: 'p19-title', image: 'images/Websites/GLASSES LIST.png', liveUrl: 'https://hamouda-10.github.io/GLASSES-MENU/', repoUrl: 'https://github.com/hamouda-10/GLASSES-MENU' },
    { category: 'websites', titleKey: 'p20-title', image: 'images/Websites/ANALYSIS.png', liveUrl: 'https://hamouda-10.github.io/ANALYSIS/', repoUrl: 'https://github.com/hamouda-10/ANALYSIS' },
    { category: 'websites', titleKey: 'p21-title', image: 'images/Websites/MOON.png', liveUrl: 'https://hamouda-10.github.io/MOON/', repoUrl: 'https://github.com/hamouda-10/MOON' },
    { category: 'websites', titleKey: 'p22-title', image: 'images/Websites/XO GAME.png', liveUrl: 'https://hamouda-10.github.io/PRO-XO-GAME/', repoUrl: 'https://github.com/hamouda-10/PRO-XO-GAME' },
    { category: 'websites', titleKey: 'p23-title', image: 'images/Websites/COINSHIFT.png', liveUrl: 'https://hamouda-10.github.io/COINSHIFT/', repoUrl: 'https://github.com/hamouda-10/COINSHIFT' },
    { category: 'websites', titleKey: 'p24-title', image: 'images/Websites/FITNESS.png', liveUrl: 'https://hamouda-10.github.io/FITNESS/', repoUrl: 'https://github.com/hamouda-10/FITNESS' },
    { category: 'websites', titleKey: 'p25-title', image: 'images/Websites/MANAGE COINS.png', liveUrl: 'https://hamouda-10.github.io/MANAGE-COINS/', repoUrl: 'https://github.com/hamouda-10/MANAGE-COINS' },
    { category: 'websites', titleKey: 'p26-title', image: 'images/Websites/TIME PRAYER.png', liveUrl: 'https://hamouda-10.github.io/TIME-OF-PRAYER/', repoUrl: 'https://github.com/hamouda-10/TIME-OF-PRAYER' },
    { category: 'websites', titleKey: 'p27-title', image: 'images/Websites/GUESS FOOD.png', liveUrl: 'https://hamouda-10.github.io/GUESS-FOOD/', repoUrl: 'https://github.com/hamouda-10/GUESS-FOOD' },
    { category: 'websites', titleKey: 'p28-title', image: 'images/Websites/TAGWEED.png', liveUrl: 'https://hamouda-10.github.io/TAGWEED/', repoUrl: 'https://github.com/hamouda-10/TAGWEED' },
    { category: 'websites', titleKey: 'p29-title', image: 'images/Websites/IZAA.png', liveUrl: 'https://hamouda-10.github.io/IZAA/', repoUrl: 'https://github.com/hamouda-10/IZAA' },
];

    const translations = {
        en: {
            pageTitle: 'ABDELRAHMAN HAMOUDA - PORTFOLIO', myName: 'ABDELRAHMAN HAMOUDA', 'nav-home': 'Home', 'nav-about': 'About', 'nav-skills': 'Skills', 'nav-certifications': 'Certifications', 'nav-portfolio': 'Projects', 'nav-cvs': 'Resume', 'nav-contact': 'Contact', 'lang-toggle-text': 'AR', 'typing-words': 'Software Engineer | Frontend Developer / UI & UX Designer | Backend (Laravel)',
            'about-heading': 'About Me', 'about-subtitle': 'Software Engineer | Frontend Developer / UI & UX Designer | Backend (Laravel)',
            'about-desc': 'Accomplished Software Engineer and UI/UX Designer specializing in both frontend and backend development. Proficient in creating sophisticated web applications leveraging HTML, CSS, JavaScript, PHP (Laravel), Python, C++, and Java. Adept at translating complex challenges into seamless, intuitive user experiences. Enthusiastic about cybersecurity, performance optimization, and digital design, with hands-on expertise in branding, visual identity, and image editing. Collaborative, fast-learning, and dedicated to delivering innovative, high-quality solutions that Launched innovative functionalities and delivered impactful results.',
            'about-city-label': 'City:', 'about-city': 'Banha , Egypt', 'about-email-label': 'Email:', 'email-address': 'hamoudaabdo689@gmail.com', 'about-phone-label': 'Phone:', 'phone-number': '+201201898518', 'about-military-label': 'Military Service:', 'military-status': 'Exempted',
            'skills-heading': 'My Skills',
            'skills-cat-frontend': 'Frontend Development', 'skills-cat-backend': 'Backend Development','skills-cat-cloud': 'Cloud & Version Control', 'skills-cat-methodology': 'Methodologies & Management', 'skills-cat-design': 'Design', 'skills-cat-office': 'Office Suite', 'skills-cat-soft': 'Soft Skills',
            'skill-html': 'HTML5', 'skill-css': 'CSS3', 'skill-js': 'JavaScript', 'skill-ts': 'TypeScript', 'skill-angular': 'Angular', 'skill-react': 'React', 'skill-bootstrap': 'Bootstrap', 'skill-php': 'PHP', 'skill-laravel': 'Laravel', 'skill-csharp': 'C#', 'skill-oop': 'OOP', 'skill-dotnet': 'ASP.NET MVC & Core', 'skill-sql': 'MS SQL Server', 'skill-efcore': 'Entity Framework', 'skill-api': 'API', 'skill-git': 'Git/GitHub', 'skill-dropbox': 'Dropbox', 'skill-azure': 'Microsoft Azure', 'skill-aws': 'AWS', 'skill-gcloud': 'Google Cloud', 'skill-docker': 'Docker', 'skill-photoshop': 'Adobe Photoshop', 'skill-canva': 'Canva', 'skill-picsart': 'PicsArt', 'skill-word': 'Microsoft Word', 'skill-excel': 'Microsoft Excel', 'skill-ppt': 'Microsoft PowerPoint', 'skill-access': 'Microsoft Access', 'skill-outlook': 'Microsoft Outlook', 'skill-onenote': 'Microsoft OneNote', 'skill-winserv': 'Windows Server', 'skill-domain': 'Domain Controller', 'skill-ccna': 'CCNA/Networking', 'skill-sophos': 'Sophos Firewall', 'skill-cctv': 'CCTV Systems', 'skill-esxi': 'VMware ESXi', 'skill-itil': 'ITIL', 'skill-agile': 'Agile', 'skill-teamlead': 'Team Leadership', 'skill-volunteer': 'Volunteering', 'skill-communication': 'Communication', 'skill-problem': 'Problem Solving', 'skill-creativity': 'Creativity', 'skill-adaptability': 'Adaptability', 'skill-time': 'Time Management', 'skill-critical': 'Critical Thinking',
            'cert-verify': 'View Certificate', 'pdf-page-label': 'Page',
            'cert1-title': 'Associate Android Developer – Google', 'cert2-title': 'Google IT Support – Google | 2024', 'cert3-title': 'Fundamentals of Digital Marketing – Google | 2024', 'cert4-title': 'Associate Cloud Engineer', 'cert5-title': 'Querying Data with Transact-SQL', 'cert6-title': 'Python Essentials 1 – (Cisco & Microsoft)', 'cert7-title': 'Introduction to Cybersecurity (Cisco & Microsoft)', 'cert8-title': 'Python Essentials 1 – Cisco & OpenEDG Python Institute', 'cert9-title': 'Introduction to Cybersecurity - Cisco', 'cert10-title': 'Certified in Node.js, Nest.js, PostgreSQL, GraphQL & Security', 'cert11-title': 'Mastering Kali Linux for Ethical Hackers', 'cert12-title': 'Flutter Clean Architecture Certification', 'cert13-title': 'Professional Adobe Photoshop CC Course With Advanced Training', 'cert14-title': 'ICDL – International Computer Driving Licence', 'cert15-title': 'HTML Formatting Tags Techniques – Mind Luster', 'cert16-title': 'Soft Skills – Mind Luster', 'cert17-title': 'Web Development Course',
            'portfolio-websites': 'Websites', 'portfolio-designs': 'Designs', 'portfolio-view-design': 'View Design',
            'p1-title': 'PORTFOLIO', 'p2-title': 'PRO COURSES', 'p3-title': 'AMAZONE CLONE', 'p4-title': 'HEADPHONES STORE', 'p5-title': 'YOUTUBE CLON', 'p6-title': 'EDUCATION PLATFORM', 'p7-title': 'IMAGES SLIDES', 'p8-title': 'PLANETS WEBSITE', 'p9-title': 'SPIRO SPATIS DESIGN', 'p10-title': 'ANIMATION CANS', 'p11-title': 'COLOR LOGIN', 'p12-title': 'RED LOGIN', 'p13-title': 'BLACK LOGIN', 'p14-title': 'MAN LOGIN', 'p15-title': 'IOS LOGIN', 'p16-title': 'ZOOM WEBSITE PIC', 'p17-title': 'WHITE BOARD', 'p18-title': 'SOCIAL MEDIA BUTTONS', 'p19-title': 'GLASSES LIST', 'p20-title': 'ANALYSIS', 'p21-title': 'MOON ANIMATION', 'p22-title': 'XO GAME', 'p23-title': 'COINSHIFT', 'p24-title': 'FITNESS', 'p25-title': 'MANAGE COINS', 'p26-title': 'TIME OF PRAYER', 'p27-title': 'GUESS FOOD', 'p28-title': 'TAGWEED', 'p29-title': 'IZAA OF QURAAN' ,'p30-title': 'CV CHECKER',
            'exp-eisas-date': 'Mar 2024 - Present', 'exp-eisas-title': 'Frontend Developer', 'exp-eisas-company': 'Frontend Development (HTML, CSS, JavaScript, Bootstrap, React)',
            'exp-gmt-date': 'Jan 2025 - Present', 'exp-gmt-title': 'Web Developer', 'exp-gmt-company': 'Frontend Development (HTML, CSS, JavaScript, Bootstrap, React) | Backend Development (PHP – Laravel, Node.js, MySQL, PostgreSQL) | UI & UX Design (Canva, Adobe Photoshop, Figma) | Database Management & Optimization | Cybersecurity Awareness & Ethical Hacking Basics | Problem-Solving & Algorithmic Thinking',
            'exp-portegy-main-title': 'Career Progression (Part-time)', 'exp-portegy-date': 'Dec 2024 - Present',
            'exp-portegy-admin': '<b>Freelance Web Developer :</b> Worked as a freelancer on platforms like Freelancer, Mostaql, and Matloob .',
            'exp-portegy-dev': '<b>Web Developer:</b> Building internal tools and APIs.',
            'exp-softtech-date': 'Dec 2024 - Nov 2024', 'exp-softtech-title': 'Front-End Developer (Project-based)', 'exp-softtech-company': 'Soft-Tech Company (Remote)', 'exp-softtech-detail1': 'Translated Figma UI/UX designs for the "Investment Portal" project.', 'exp-softtech-detail2': 'Developed the user interface using React and TypeScript.',
            'exp-freelance-title': 'Front-End Developer', 'exp-freelance-company': 'Worked on React And Vanilla Code projects with a focus on responsive UI.',
          
            'exp4-date': 'Jul 2025 - Aug 2025', 'exp4-title': 'Intensive Code Camp (Laravel Framework using PHP Language)', 'exp4-company': 'IT GATE ACADEMY (IGA)',
            'exp5-date': 'Jul 2025 - Aug 2025', 'exp5-title': 'Laravel Framework Summer Trainee',
            'edu-date': 'Graduated: 2027', 'edu-degree': 'Bachelor of Science in Computer Science and Information Technology', 'edu-uni': 'Modern Academy Maadi (Grade : B+)',
          
            'courses-title': 'Key Courses', 'course-android': '<b>Associate Android Developer</b> – Google', 'course-it-support': '<b>IT Support</b> – Google | 2024', 'course-digital-marketing': '<b>Digital Marketing</b> – Google | 2024', 'course-python1': '<b>Python Essentials 1</b> – Cisco & OpenEDG Python Institute', 'course-cyber1': '<b>Cyber Security</b> – Udemy', 'course-cyber2': '<b>Cyber Security 2</b> – Edraak Platform', 'course-employee-cyber': '<b>Employee Cyber Security Awareness</b> – First Line of Defense', 'course-kali': '<b>Mastering Kali Linux for Ethical Hackers</b>', 'course-python-udemy': '<b>Python</b> – Udemy', 'course-java': '<b>Java</b> – Udemy', 'course-cpp': '<b>C++</b> – Udemy', 'course-node': '<b>Certified in Node.js, Nest.js, PostgreSQL, GraphQL & Security</b>', 'course-flutter': '<b>Flutter Clean Architecture Certification</b>', 'course-webdev': '<b>Web Development Course</b>', 'course-html': '<b>HTML</b> – Mind Luster', 'course-ai': '<b>Intro to AI</b> – Edraak Platform', 'course-photoshop': '<b>Professional Adobe Photoshop CC with Advanced Training</b>', 'course-graphic': '<b>Graphic Design</b> – Maaref Academy', 'course-logo': '<b>Logo Design</b> – Maaref Academy', 'course-icdl': '<b>ICDL</b> – Maaref Academy', 'course-english': '<b>English</b> – Maaref Academy', 'course-soft1': '<b>Soft Skills</b> – Mind Luster', 'course-soft2': '<b>Soft Skills 2</b> – Maaref Academy',
            'cv-dev-download': 'Download CV',
            'contact-location': 'Location', 'contact-email': 'Email', 'contact-phone': 'Phone', 'contact-whatsapp': 'WhatsApp',
            'form-name': 'Your Name', 'form-email': 'Your Email', 'form-message': 'Your Message', 'form-submit': 'Send Message',
            'copyright-line1': '© 2025 Copyright Portfolio', 'designed-by-text': 'Developed & Designed by'
        },
     ar: {
    pageTitle: 'عبدالرحمن حمودة - ملف أعمالي',
    myName: 'عبدالرحمن حمودة',
    'nav-home': 'الرئيسية',
    'nav-about': 'عني',
    'nav-skills': 'مهاراتي',
    'nav-certifications': 'الشهادات',
    'nav-portfolio': 'مشاريعي',
    'nav-cvs': 'السيرة الذاتية',
    'nav-contact': 'تواصل',
    'lang-toggle-text': 'EN',
    'typing-words': 'مهندس برمجيات | مطور واجهات أمامية / مصمم واجهة وتجربة مستخدم | تطوير خلفي (لارافيل)',
    'about-heading': 'نبذة عني',
    'about-subtitle': 'مهندس برمجيات | مطور واجهات أمامية / مصمم واجهة وتجربة مستخدم | تطوير خلفي (لارافيل)',
    'about-desc': 'مهندس برمجيات ومصمم واجهة وتجربة مستخدم متخصص في تطوير الواجهات الأمامية والخلفية. ماهر في إنشاء تطبيقات ويب متقدمة باستخدام HTML وCSS وJavaScript وPHP (Laravel) وPython وC++ وJava. قادر على تحويل التحديات المعقدة إلى تجارب مستخدم سلسة وبديهية. شغوف بأمن المعلومات، تحسين الأداء، والتصميم الرقمي، مع خبرة عملية في الهوية البصرية وتحرير الصور. سريع التعلم، متعاون، ومكرس لتقديم حلول مبتكرة وعالية الجودة.',
    'about-city-label': 'المدينة:',
    'about-city': 'بنها، مصر',
    'about-email-label': 'البريد الإلكتروني:',
    'email-address': 'hamoudaabdo689@gmail.com',
    'about-phone-label': 'الهاتف:',
    'phone-number': '+201201898518',
    'about-military-label': 'الخدمة العسكرية:',
    'military-status': 'معفى',
    'skills-heading': 'مهاراتي',
    'skills-cat-frontend': 'تطوير الواجهات الأمامية',
    'skills-cat-backend': 'تطوير الواجهات الخلفية',
    'skills-cat-cloud': 'السحابة والتحكم بالإصدار',
    'skills-cat-methodology': 'المنهجيات والإدارة',
    'skills-cat-design': 'التصميم',
    'skills-cat-office': 'مجموعة أوفيس',
    'skills-cat-soft': 'المهارات الشخصية',
    'skill-html': 'HTML5',
    'skill-css': 'CSS3',
    'skill-js': 'JavaScript',
    'skill-ts': 'TypeScript',
    'skill-angular': 'Angular',
    'skill-react': 'React',
    'skill-bootstrap': 'Bootstrap',
    'skill-php': 'PHP',
    'skill-laravel': 'Laravel',
    'skill-csharp': 'C#',
    'skill-oop': 'برمجة كائنية',
    'skill-dotnet': 'ASP.NET MVC & Core',
    'skill-sql': 'MS SQL Server',
    'skill-efcore': 'Entity Framework',
    'skill-api': 'API',
    'skill-git': 'Git/GitHub',
    'skill-dropbox': 'Dropbox',
    'skill-azure': 'Microsoft Azure',
    'skill-aws': 'AWS',
    'skill-gcloud': 'Google Cloud',
    'skill-docker': 'Docker',
    'skill-photoshop': 'Adobe Photoshop',
    'skill-canva': 'Canva',
    'skill-picsart': 'PicsArt',
    'skill-word': 'Microsoft Word',
    'skill-excel': 'Microsoft Excel',
    'skill-ppt': 'Microsoft PowerPoint',
    'skill-access': 'Microsoft Access',
    'skill-outlook': 'Microsoft Outlook',
    'skill-onenote': 'Microsoft OneNote',
    'skill-winserv': 'Windows Server',
    'skill-domain': 'Domain Controller',
    'skill-ccna': 'CCNA/الشبكات',
    'skill-sophos': 'جدار حماية Sophos',
    'skill-cctv': 'أنظمة كاميرات المراقبة',
    'skill-esxi': 'VMware ESXi',
    'skill-itil': 'ITIL',
    'skill-agile': 'Agile',
    'skill-teamlead': 'قيادة الفريق',
    'skill-volunteer': 'العمل التطوعي',
    'skill-communication': 'التواصل',
    'skill-problem': 'حل المشكلات',
    'skill-creativity': 'الإبداع',
    'skill-adaptability': 'القدرة على التكيف',
    'skill-time': 'إدارة الوقت',
    'skill-critical': 'التفكير النقدي',
    'cert-verify': 'عرض الشهادة',
    'pdf-page-label': 'صفحة',
    'cert1-title': 'مطور أندرويد معتمد – Google',
    'cert2-title': 'دعم تكنولوجيا المعلومات – Google | 2024',
    'cert3-title': 'أساسيات التسويق الرقمي – Google | 2024',
    'cert4-title': 'مهندس سحابة معتمد',
    'cert5-title': 'شهادة Node.js، Nest.js، PostgreSQL، GraphQL والأمان',
    'cert6-title': 'إتقان Kali Linux للهاكر الأخلاقي',
    'cert7-title': 'أساسيات Python 1 – Cisco & OpenEDG Python Institute',
    'cert8-title': 'مقدمة في أمن المعلومات (Cisco & Udemy)',
    'cert9-title': 'شهادة Flutter Clean Architecture',
    'cert10-title': 'دورة تطوير الويب',
    'cert11-title': 'دورة Adobe Photoshop CC متقدمة',
    'cert12-title': 'ICDL – Maaref Academy',
    'cert13-title': 'تقنيات ووسوم HTML – Mind Luster',
    'cert14-title': 'Python – Udemy',
    'cert15-title': 'Java – Udemy',
    'cert16-title': 'C++ – Udemy',
    'cert17-title': 'مقدمة في الذكاء الاصطناعي – Edraak Platform',
    'cert18-title': 'تصميم الجرافيك – Maaref Academy',
    'cert19-title': 'تصميم الشعارات – Maaref Academy',
    'cert20-title': 'اللغة الإنجليزية – Maaref Academy',
    'cert21-title': 'المهارات الشخصية – Mind Luster',
    'cert22-title': 'المهارات الشخصية 2 – Maaref Academy',
    'cert23-title': 'استعلام البيانات باستخدام Transact-SQL',
    'portfolio-websites': 'مواقع',
    'portfolio-designs': 'تصميمات',
    'portfolio-view-design': 'عرض التصميم',
    'p1-title': 'PORTFOLIO',
    'p2-title': 'PRO COURSES',
    'p3-title': 'AMAZONE CLONE',
    'p4-title': 'HEADPHONES STORE',
    'p5-title': 'YOUTUBE CLON',
    'p6-title': 'EDUCATION PLATFORM',
    'p7-title': 'IMAGES SLIDES',
    'p8-title': 'PLANETS WEBSITE',
    'p9-title': 'SPIRO SPATIS DESIGN',
    'p10-title': 'ANIMATION CANS',
    'p11-title': 'COLOR LOGIN',
    'p12-title': 'RED LOGIN',
    'p13-title': 'BLACK LOGIN',
    'p14-title': 'MAN LOGIN',
    'p15-title': 'IOS LOGIN',
    'p16-title': 'ZOOM WEBSITE PIC',
    'p17-title': 'WHITE BOARD',
    'p18-title': 'SOCIAL MEDIA BUTTONS',
    'p19-title': 'GLASSES LIST',
    'p20-title': 'ANALYSIS',
    'p21-title': 'MOON ANIMATION',
    'p22-title': 'XO GAME',
    'p23-title': 'COINSHIFT',
    'p24-title': 'FITNESS',
    'p25-title': 'MANAGE COINS',
    'p26-title': 'TIME OF PRAYER',
    'p27-title': 'GUESS FOOD',
    'p28-title': 'TAGWEED',
    'p29-title': 'IZAA OF QURAAN',
    'exp-eisas-date': 'مايو 2024 - الآن',
    'exp-eisas-title': 'مطور واجهات أمامية',
    'exp-eisas-company': 'تطوير الواجهات الأمامية (HTML, CSS, JavaScript, Bootstrap, React)',
    'exp-gmt-date': 'مايو 2025 - الآن',
    'exp-gmt-title': 'مطور ويب',
    'exp-gmt-company': 'تطوير الواجهات الأمامية (HTML, CSS, JavaScript, Bootstrap, React) | تطوير الخلفية (PHP – Laravel, Node.js, MySQL, PostgreSQL) | تصميم واجهة وتجربة مستخدم (Canva, Adobe Photoshop, Figma) | إدارة وتحسين قواعد البيانات | أساسيات الأمن السيبراني | حل المشكلات والتفكير الخوارزمي',
    'exp-portegy-main-title': 'التدرج الوظيفي  (دوام جزئي)',
    'exp-portegy-date': 'ديسمبر 2024 - الآن',
    'exp-portegy-admin': '<b>مطور ويب مستقل:</b> عملت كمستقل على منصات مثل Freelancer وMostaql وMatloob مع عملاء من الخارج.',
    'exp-portegy-dev': '<b>مطور ويب:</b> بناء أدوات داخلية وواجهات برمجية.',
    'exp-softtech-date': 'مايو 2024 - نوفمبر 2024',
    'exp-softtech-title': 'مطور واجهات أمامية (مشروع)',
    'exp-softtech-company': 'شركة Soft-Tech (عن بعد)',
    'exp-softtech-detail1': 'ترجمة تصميمات Figma UI/UX لمشروع "بوابة الاستثمار".',
    'exp-softtech-detail2': 'تطوير واجهة المستخدم للتطبيق باستخدام React وTypeScript.',
    'exp-freelance-title': 'مطور واجهات أمامية',
    'exp-freelance-company': 'عملت على مشاريع React و Vanilla Code مع التركيز على واجهة مستخدم مستجيبة.',
    'exp4-date': 'يوليو 2025 - أغسطس 2025',
    'exp4-title': 'معسكر تدريب مكثف (Laravel Framework باستخدام PHP)',
    'exp4-company': 'IT GATE ACADEMY (IGA)',
    'exp5-date': 'يوليو 2025 - أغسطس 2025',
    'exp5-title': 'متدرب صيفي Laravel',
    'edu-date': 'تخرج: 2027',
    'edu-degree': 'بكالوريوس علوم الحاسب وتكنولوجيا المعلومات',
    'edu-uni': 'الأكاديمية الحديثة، المعادي (التقدير: جيد جداً)',
    'courses-title': 'دورات تدريبية هامة',
    'course-android': '<b>مطور أندرويد معتمد</b> – Google',
    'course-it-support': '<b>دعم تكنولوجيا المعلومات</b> – Google | 2024',
    'course-digital-marketing': '<b>التسويق الرقمي</b> – Google | 2024',
    'course-python1': '<b>Python Essentials 1</b> – Cisco & OpenEDG Python Institute',
    'course-cyber1': '<b>Cyber Security</b> – Udemy',
    'course-cyber2': '<b>Cyber Security 2</b> – Edraak Platform',
    'course-employee-cyber': '<b>توعية الموظفين في الأمن السيبراني</b> – First Line of Defense',
    'course-kali': '<b>إتقان Kali Linux للهاكر الأخلاقي</b>',
    'course-python-udemy': '<b>Python</b> – Udemy',
    'course-java': '<b>Java</b> – Udemy',
    'course-cpp': '<b>C++</b> – Udemy',
    'course-node': '<b>شهادة Node.js، Nest.js، PostgreSQL، GraphQL & Security</b>',
    'course-flutter': '<b>Flutter Clean Architecture Certification</b>',
    'course-webdev': '<b>دورة تطوير الويب</b>',
    'course-html': '<b>HTML</b> – Mind Luster',
    'course-ai': '<b>مقدمة في الذكاء الاصطناعي</b> – Edraak Platform',
    'course-photoshop': '<b>دورة Adobe Photoshop CC متقدمة</b>',
    'course-graphic': '<b>تصميم الجرافيك</b> – Maaref Academy',
    'course-logo': '<b>تصميم الشعارات</b> – Maaref Academy',
    'course-icdl': '<b>ICDL</b> – Maaref Academy',
    'course-english': '<b>اللغة الإنجليزية</b> – Maaref Academy',
    'course-soft1': '<b>المهارات الشخصية</b> – Mind Luster',
    'course-soft2': '<b>المهارات الشخصية 2</b> – Maaref Academy',
    'cv-dev-download': 'تحميل السيرة الذاتية (للمطور)',
    'contact-location': 'الموقع',
    'contact-email': 'البريد الإلكتروني',
    'contact-phone': 'الهاتف',
    'contact-whatsapp': 'واتساب',
    'form-name': 'اسمك',
    'form-email': 'بريدك الإلكتروني',
    'form-message': 'رسالتك',
    'form-submit': 'إرسال الرسالة',
    'copyright-line1': '© 2025 جميع الحقوق محفوظة',
    'designed-by-text': 'تم التطوير والتصميم بواسطة'
}


    };
    
    // --- GLOBAL STATE ---
    let state = {
        language: localStorage.getItem('language') || 'en',
        theme: localStorage.getItem('theme') || 'dark',
        activeSection: localStorage.getItem('activeSection') || 'home',
        typing: { words: [], wordIndex: 0, charIndex: 0, isDeleting: false, },
        pdf: {
            doc: null,
            pageNum: 1,
            pageIsRendering: false,
            pageNumIsPending: null,
            scale: 1.5,
            url: ''
        },
        gallery: {
            images: [],
            currentIndex: 0
        }
    };


    // --- PDF VIEWER FUNCTIONS ---
    const renderPdfPage = num => {
        state.pdf.pageIsRendering = true;

        state.pdf.doc.getPage(num).then(page => {
            const viewport = page.getViewport({ scale: state.pdf.scale });
            pdfCanvas.height = viewport.height;
            pdfCanvas.width = viewport.width;

            const renderContext = {
                canvasContext: pdfCanvas.getContext('2d'),
                viewport: viewport
            };

            page.render(renderContext).promise.then(() => {
                state.pdf.pageIsRendering = false;
                if (state.pdf.pageNumIsPending !== null) {
                    renderPdfPage(state.pdf.pageNumIsPending);
                    state.pdf.pageNumIsPending = null;
                }
            });
            pageNumSpan.textContent = num;
        });
    };

    const queueRenderPage = num => {
        if (state.pdf.pageIsRendering) {
            state.pdf.pageNumIsPending = num;
        } else {
            renderPdfPage(num);
        }
    };

    const updatePdfControls = () => {
        if (!state.pdf.doc) return;
        pageCountSpan.textContent = state.pdf.doc.numPages;
        prevPageBtn.disabled = state.pdf.pageNum <= 1;
        nextPageBtn.disabled = state.pdf.pageNum >= state.pdf.doc.numPages;
    };

    const loadPdf = url => {
        state.pdf.url = url;
        downloadPdfLink.href = url;

        viewerModal.style.display = 'flex';
        pdfLoader.style.display = 'block';
        pdfCanvas.style.display = 'none';


        if (!pdfRenderArea.contains(pdfCanvas)) {
            pdfRenderArea.innerHTML = '';
            pdfRenderArea.appendChild(pdfCanvas);
        }

        pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
            state.pdf.doc = pdfDoc_;
            state.pdf.pageNum = 1;
            state.pdf.scale = 1.5;

            pdfLoader.style.display = 'none';
            pdfCanvas.style.display = 'block';

            renderPdfPage(state.pdf.pageNum);
            updatePdfControls();
        }).catch(err => {
            console.error(`Error loading PDF: ${err}`);
            pdfLoader.style.display = 'none';
            pdfRenderArea.innerHTML = `<p style="color: var(--gold-light); padding: 2rem; text-align: center;">Failed to load PDF.<br>Please check the file path and try again.</p>`;
        });
    };
    const hidePdfViewer = () => {
        viewerModal.style.display = 'none';
        if (state.pdf.doc) {
            state.pdf.doc.destroy();
            state.pdf.doc = null;
        }
        const context = pdfCanvas.getContext('2d');
        context.clearRect(0, 0, pdfCanvas.width, pdfCanvas.height);
    };

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
        }, 400); // Match CSS transition duration
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

    // --- CORE LOGIC ---
    function applyTheme(theme) {
        state.theme = theme;
        localStorage.setItem('theme', theme);
        htmlElement.classList.toggle('dark', theme === 'dark');
    }

    function populateCertifications() {
        if (!certGrid) return;
        certGrid.innerHTML = '';
        const currentLang = state.language;
        certificationsData.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            // FIXED: Changed <a> to <button> to prevent default download/navigation behavior.
            // This ensures the JS-driven modal is always used.
            card.innerHTML = `
                        <div class="cert-card-header">
                            <img src="${cert.logo}" alt="${cert.issuer} Logo" loading="lazy" onerror="this.style.display='none'">
                            <span class="issuer">${cert.issuer}</span>
                        </div>
                        <div class="cert-card-body">
                            <h4 data-key="${cert.titleKey}">${translations[currentLang][cert.titleKey]}</h4>
                        </div>
                        <div class="cert-card-footer">
                            <button class="view-cert-btn" data-url="${cert.verifyUrl}" data-key="cert-verify">
                                ${translations[currentLang]['cert-verify']}
                            </button>
                        </div>
                    `;
            certGrid.appendChild(card);
        });
    }

    function populatePortfolio(filter = 'websites') {
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = '';
        const currentLang = state.language;
        const filteredData = portfolioData.filter(item => item.category === filter);

        filteredData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            let linksHtml = '';

            if (item.category === 'websites') {

                linksHtml = `
                                        <h4 data-key="${item.titleKey}">${translations[currentLang][item.titleKey]}</h4>
                <div class="overlay-links">
                                <a href="${item.liveUrl}" target="_blank" aria-label="Live Demo"><i class="fas fa-link"></i></a>
                                <a href="${item.repoUrl}" target="_blank" aria-label="GitHub Repository"><i class="fab fa-github"></i></a>
                            </div>`;
            } else if (item.category === 'designs') {
                linksHtml = `<div class="overlay-links">
                                <button class="view-design-btn" data-title-key="${item.titleKey}" aria-label="${translations[currentLang]['portfolio-view-design']}">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>`;
            }

            portfolioItem.innerHTML = `
                    <img src="${item.image}" alt="${translations[currentLang][item.titleKey]}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/400x250/111827/DAA520?text=Image+Not+Found';">
                    <div class="portfolio-overlay">
                        ${linksHtml}
                    </div>`;
            portfolioGrid.appendChild(portfolioItem);
        });
    }


    function updateContent(lang) {
        state.language = lang;
        localStorage.setItem('language', lang);
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        getAllElems('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = translations[lang]?.[key];
            if (translation && key !== 'typing-words') {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        populateCertifications();
        const activeFilter = portfolioFilters?.querySelector('.active')?.dataset.filter || 'websites';
        populatePortfolio(activeFilter);

        state.typing.words = translations[lang]['typing-words'].split(',');
        state.typing.wordIndex = 0;
        state.typing.charIndex = 0;
        state.typing.isDeleting = false;
    }

    function typeAnimation() {
        if (!typingTextElement || !state.typing.words || state.typing.words.length === 0) return;
        const { words, wordIndex, isDeleting } = state.typing;
        let { charIndex } = state.typing;
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 80 : 150;
        
        typingTextElement.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => { state.typing.isDeleting = true; typeAnimation(); }, 2000);
            return;
        } else if (isDeleting && charIndex === 0) {
            state.typing.isDeleting = false;
            state.typing.wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeAnimation, 500);
            return;
        }
        
        state.typing.charIndex += isDeleting ? -1 : 1;
        setTimeout(typeAnimation, typeSpeed);
    }

    function setActiveSection(sectionId, fromClick = false) {
        state.activeSection = sectionId;
        localStorage.setItem('activeSection', sectionId);
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === sectionId));
        sections.forEach(sec => sec.classList.toggle('active', sec.id === sectionId));
        if (fromClick && window.innerWidth <= 1024) {
            sidebar.classList.remove('is-open');
            mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
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
        setTimeout(typeAnimation, 100); 
    });

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSection(button.dataset.section, true);
        });
    });

    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('is-open');
        mobileMenuToggle.querySelector('i').className = sidebar.classList.contains('is-open') ? 'fas fa-times' : 'fas fa-bars';
    });
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const name = contactForm.querySelector('[name="name"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const message = contactForm.querySelector('[name="message"]').value;
        const formStatus = getElem('#form-status');

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = '#F7D060'; 
            setTimeout(() => { formStatus.textContent = ''; }, 3000);
            return;
        }

        const yourWhatsAppNumber = '201275844735';

        const whatsappMessage = `Hello Mohamed,

Name: ${name}
Email: ${email}

Message:
${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        formStatus.textContent = 'Thank you! Redirecting to WhatsApp...';
        formStatus.style.color = 'var(--gold-light)';
        setTimeout(() => {
            formStatus.textContent = '';
            contactForm.reset();
        }, 4000);
    });
}

    if (portfolioFilters) {
        portfolioFilters.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                portfolioFilters.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                populatePortfolio(e.target.dataset.filter);
            }
        });
    }

    if (certGrid) {
        certGrid.addEventListener('click', (e) => {
            const button = e.target.closest('.view-cert-btn');
            if (button) {
                // e.preventDefault() is not strictly needed for a button, but it's good practice
                e.preventDefault();
                loadPdf(button.dataset.url);
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

    // PDF viewer controls
    prevPageBtn.addEventListener('click', () => {
        if (state.pdf.pageNum <= 1) return;
        state.pdf.pageNum--;
        queueRenderPage(state.pdf.pageNum);
        updatePdfControls();
    });

    nextPageBtn.addEventListener('click', () => {
        if (!state.pdf.doc || state.pdf.pageNum >= state.pdf.doc.numPages) return;
        state.pdf.pageNum++;
        queueRenderPage(state.pdf.pageNum);
        updatePdfControls();
    });

    zoomInBtn.addEventListener('click', () => {
        if (state.pdf.scale >= 3.0) return;
        state.pdf.scale += 0.2;
        queueRenderPage(state.pdf.pageNum);
    });

    zoomOutBtn.addEventListener('click', () => {
        if (state.pdf.scale <= 0.6) return;
        state.pdf.scale -= 0.2;
        queueRenderPage(state.pdf.pageNum);
    });

    closeModalBtn.addEventListener('click', hidePdfViewer);
    viewerModal.addEventListener('click', (e) => {
        if (e.target === viewerModal) {
            hidePdfViewer();
        }
    });

    // Image gallery controls
    galleryPrevBtn.addEventListener('click', () => {
        if (state.gallery.currentIndex > 0) {
            showImageInGallery(state.gallery.currentIndex - 1);
        }
    });

    galleryNextBtn.addEventListener('click', () => {
        if (state.gallery.currentIndex < state.gallery.images.length - 1) {
            showImageInGallery(state.gallery.currentIndex + 1);
        }
    });

    closeGalleryBtn.addEventListener('click', closeImageGallery);
    imageGalleryModal.addEventListener('click', (e) => {
        if (e.target === imageGalleryModal) {
            closeImageGallery();
        }
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', (e) => {
        if (imageGalleryModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft' || (htmlElement.dir === 'rtl' && e.key === 'ArrowRight')) {
                galleryPrevBtn.click();
            } else if (e.key === 'ArrowRight' || (htmlElement.dir === 'rtl' && e.key === 'ArrowLeft')) {
                galleryNextBtn.click();
            } else if (e.key === 'Escape') {
                closeGalleryBtn.click();
            }
        }
        if (viewerModal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModalBtn.click();
            }
        }
    });

    // Scroll animation observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    getAllElems('.scroll-animation').forEach(el => scrollObserver.observe(el));
    
    // --- INITIALIZATION ---
    function initialize() {
        applyTheme(state.theme);
        updateContent(state.language);
        setActiveSection(state.activeSection);
        typeAnimation();
    }
});
