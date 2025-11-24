// layout.js - Updated Link for Client Access

const globalConfig = {
    email: "craftmannorman.official@hotmail.com",
    phone: "+66 (0) 2 000 0000",
    socials: [
        { name: "Facebook", url: "#", icon: "fa-facebook-f" },
        { name: "Instagram", url: "#", icon: "fa-instagram" },
        { name: "TikTok", url: "#", icon: "fa-tiktok" },
        { name: "LinkedIn", url: "#", icon: "fa-linkedin-in" }
    ],
    chat: {
        messenger: "https://m.me/yourpage",
        line: "https://line.me/ti/p/~yourid",
        whatsapp: "https://wa.me/6620000000",
        wechat: "#"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    injectLayout();
    injectStyles();
    initGlobalEvents();
    restoreLanguage();
    preventMediaDownload();
    initMagneticButtons(); 
    pageTransitionIn();
});

function injectLayout() {
    const allLayoutHTML = ` 
    <div class="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay" 
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
    </div>

    <div id="trans-curtain-1" class="fixed inset-0 bg-[#1d1d1f] z-[10000] translate-y-full"></div>
    <div id="trans-curtain-2" class="fixed inset-0 bg-[#ab9367] z-[9999] translate-y-full"></div>

    <div id="inquiry-modal" class="fixed inset-0 z-[8000] hidden">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="toggleInquiry()"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[32px] p-8 md:p-12 shadow-2xl scale-95 opacity-0 transition-all duration-500 modal-content">
            <div class="flex justify-between items-center mb-8">
                <div>
                    <span class="text-brand-gold text-[10px] uppercase tracking-widest font-bold block mb-1">Start a Project</span>
                    <h3 class="text-3xl font-serif text-brand-dark">Inquiry</h3>
                </div>
                <button onclick="toggleInquiry()" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form class="space-y-6" onsubmit="event.preventDefault(); alert('Thank you. We will contact you shortly.'); toggleInquiry();">
                <div class="space-y-1">
                    <label class="text-xs uppercase tracking-widest text-gray-500">Name</label>
                    <input type="text" class="w-full border-b border-gray-200 py-2 outline-none focus:border-brand-gold transition font-serif text-xl" placeholder="Your Name" required>
                </div>
                <div class="space-y-1">
                    <label class="text-xs uppercase tracking-widest text-gray-500">Email</label>
                    <input type="email" class="w-full border-b border-gray-200 py-2 outline-none focus:border-brand-gold transition font-serif text-xl" placeholder="email@example.com" required>
                </div>
                <div class="space-y-1">
                    <label class="text-xs uppercase tracking-widest text-gray-500">Interest</label>
                    <select class="w-full border-b border-gray-200 py-2 outline-none focus:border-brand-gold transition font-serif text-xl bg-transparent">
                        <option>Architecture Design</option>
                        <option>Interior & Furniture</option>
                        <option>Turnkey Construction</option>
                    </select>
                </div>
                <button type="submit" class="w-full py-4 bg-brand-dark text-white rounded-full hover:bg-brand-gold transition duration-300 font-bold tracking-widest text-xs uppercase mt-4 magnetic-btn">Send Request</button>
            </form>
        </div>
    </div>

    <nav id="navbar" class="fixed top-2 left-0 w-full z-50 flex justify-center pointer-events-none select-none">
        <div class="pointer-events-auto bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl shadow-black/10 rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-6 md:gap-12 transition-all duration-300 hover:scale-[1.005]">
            
            <button id="lang-btn" onclick="toggleLang()" class="magnetic-btn w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest text-brand-dark bg-brand-bg hover:bg-brand-gold hover:text-white transition duration-300">TH</button>
            
            <a href="index.html" id="site-logo" onclick="navTo(event, 'home', false)" class="text-center group flex flex-col items-center cursor-pointer" translate="no">
                <h1 class="text-xl md:text-2xl text-brand-dark leading-none group-hover:text-brand-gold transition duration-300 whitespace-nowrap" 
                    style="font-family: 'Italiana', serif !important;">
                    CRAFTSMAN
                </h1>
                <span class="text-[8px] uppercase text-brand-dark/50 group-hover:text-brand-gold/80 transition duration-300 whitespace-nowrap tracking-[0.3em]">
                    Norman
                </span>
            </a>

            <div class="flex items-center gap-4">
                <button onclick="toggleMenu()" class="magnetic-btn w-8 h-8 rounded-full flex items-center justify-center text-brand-dark hover:text-brand-gold transition duration-300 group">
                    <div class="space-y-1">
                        <span class="block w-4 h-[1.5px] bg-current rounded-full group-hover:w-5 transition-all"></span>
                        <span class="block w-4 h-[1.5px] bg-current rounded-full group-hover:w-3 ml-auto transition-all"></span>
                    </div>
                </button>
            </div>
        </div>
    </nav>

    <div id="menu-overlay" class="fixed inset-0 bg-[#1d1d1f] z-[60] transform translate-y-[110%] transition-transform duration-1000 cubic-bezier(0.76, 0, 0.24, 1) flex flex-col items-center justify-center overflow-hidden text-white">
        <div class="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        
        <button onclick="toggleMenu()" class="magnetic-btn absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300 z-20">
            <i class="fa-solid fa-xmark text-lg"></i>
        </button>

        <div class="text-center space-y-2 md:space-y-4 relative z-10">
            <a href="#" class="block text-4xl md:text-7xl font-serif text-white/50 hover:text-brand-gold transition duration-300 hover:scale-105 transform origin-center menu-item" onclick="navTo(event, 'home', true)"><span data-i18n="nav_home">Home</span></a>
            <a href="#" class="block text-4xl md:text-7xl font-serif text-white/50 hover:text-brand-gold transition duration-300 hover:scale-105 transform origin-center menu-item" onclick="navTo(event, 'story', true)"><span data-i18n="nav_story">Our Story</span></a>
            <a href="#" class="block text-4xl md:text-7xl font-serif text-white/50 hover:text-brand-gold transition duration-300 hover:scale-105 transform origin-center menu-item" onclick="navTo(event, 'expertise', true)"><span data-i18n="nav_services">Expertise</span></a>
            <a href="#" class="block text-4xl md:text-7xl font-serif text-white/50 hover:text-brand-gold transition duration-300 hover:scale-105 transform origin-center menu-item" onclick="navTo(event, 'works', true)"><span data-i18n="nav_portfolio">Works</span></a>
            <a href="#" class="block text-4xl md:text-7xl font-serif text-white/50 hover:text-brand-gold transition duration-300 hover:scale-105 transform origin-center menu-item" onclick="navTo(event, 'journal', true)"><span data-i18n="journal_title">Journal</span></a>
            <a href="#" class="block text-4xl md:text-7xl font-serif text-white/50 hover:text-brand-gold transition duration-300 hover:scale-105 transform origin-center menu-item" onclick="navTo(event, 'contact', true)"><span data-i18n="nav_contact">Contact</span></a>
        </div>
        
        <div class="absolute bottom-12 flex gap-8 text-xl z-10">
             ${globalConfig.socials.map(s => `<a href="${s.url}" class="text-white/30 hover:text-brand-gold transition magnetic-btn"><i class="fa-brands ${s.icon}"></i></a>`).join('')}
        </div>

        <div class="absolute bottom-8 right-8 z-20 hidden md:block">
            <a href="login.html" class="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-brand-gold transition duration-500 magnetic-btn flex items-center gap-2 group" onclick="navTo(event, 'login')">
                <i class="fa-solid fa-lock text-[8px] group-hover:opacity-100 opacity-50 transition"></i>
                <span data-i18n="nav_client">Client Access</span>
            </a>
        </div>
    </div>

    <div id="chat-container" class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group hover:z-[60] transition-opacity duration-500 ease-out">
        <div id="chat-options" class="flex flex-col gap-3 transition-all duration-500 ease-[0.34, 1.56, 0.64, 1] opacity-0 translate-y-10 scale-75 origin-bottom group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
            <a href="${globalConfig.chat.messenger}" target="_blank" class="w-12 h-12 bg-[#0084FF] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition transform magnetic-btn" title="Messenger"><i class="fa-brands fa-facebook-messenger"></i></a>
            <a href="${globalConfig.chat.line}" target="_blank" class="w-12 h-12 bg-[#06C755] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition transform magnetic-btn" title="Line"><i class="fa-brands fa-line"></i></a>
        </div>
        <button class="magnetic-btn w-14 h-14 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold shadow-xl transition-all duration-300 ease-out transform group-hover:scale-110 relative border border-white/10">
            <i class="fa-solid fa-comments text-xl transition-all duration-300 group-hover:opacity-0 absolute"></i>
            <i class="fa-solid fa-xmark text-xl transition-all duration-300 opacity-0 group-hover:opacity-100 absolute"></i>
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white group-hover:hidden"></span>
        </button>
    </div>

    <footer id="footer" class="relative z-10 px-4 pb-4 pt-12">
        <div class="bg-[#1d1d1f] rounded-[40px] px-8 py-16 md:p-24 shadow-sm overflow-hidden relative">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div class="max-w-[1600px] mx-auto relative z-10">
                <div class="text-center mb-16 border-b border-white/10 pb-16">
                    <h2 class="text-5xl md:text-8xl leading-tight font-serif text-white cursor-default hover:text-brand-gold transition duration-500" data-i18n="footer_tagline">
                        Let's Craft<br>Your Dream
                    </h2>
                    <button onclick="toggleInquiry()" class="mt-8 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-brand-gold hover:border-brand-gold transition duration-300 magnetic-btn">
                        Start a Project
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-20">
                    <div>
                        <span class="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-6 block" data-i18n="label_contact">Contact</span>
                        <a href="mailto:${globalConfig.email}" class="block text-xl font-serif text-white hover:text-brand-gold transition mb-2 break-all">${globalConfig.email}</a>
                        <a href="tel:${globalConfig.phone}" class="block text-lg text-white/60 font-sans hover:text-brand-gold transition">${globalConfig.phone}</a>
                    </div>
                    <div class="md:text-center">
                        <span class="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-6 block" data-i18n="label_studio">Studio</span>
                        <address class="not-italic text-white/60 leading-relaxed text-lg" data-i18n="address">Bangkok, Thailand<br>Open: Mon - Fri, 09:00 - 18:00</address>
                    </div>
                    <div class="md:text-right">
                        <span class="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-6 block" data-i18n="label_follow">Follow Us</span>
                        <div class="flex gap-8 justify-start md:justify-end text-2xl text-white">
                            ${globalConfig.socials.map(s => `<a href="${s.url}" class="hover:text-brand-gold hover:-translate-y-1 transition duration-300"><i class="fa-brands ${s.icon}"></i></a>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40 pt-8 border-t border-white/10">
                    <p>© 2025 CRAFTSMAN NORMAN.</p>
                    <div class="flex gap-8 mt-4 md:mt-0">
                        <a href="privacy.html" class="hover:text-white transition" data-i18n="label_privacy">Privacy</a>
                        <a href="terms.html" class="hover:text-white transition" data-i18n="label_terms">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', allLayoutHTML);
}

function injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        img, video { -webkit-user-drag: none; user-select: none; pointer-events: none; }
        html { scroll-behavior: auto !important; }
        #inquiry-modal.active { display: block; }
        #inquiry-modal.active .modal-content { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        ::selection { background: #ab9367; color: white; }
    `;
    document.head.appendChild(style);
}

function preventMediaDownload() {
    document.addEventListener('contextmenu', event => {
        if (event.target.tagName === 'IMG' || event.target.tagName === 'VIDEO') event.preventDefault();
    });
}

function initGlobalEvents() {
    const cursor = document.getElementById('custom-cursor');
    if(cursor) {
        cursor.style.opacity = '1';
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
        });
        document.querySelectorAll('a, button, .cursor-pointer, .apple-card, .group').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
        
        const magnifyingImages = document.querySelectorAll('.protected-media, .apple-card img'); 
        magnifyingImages.forEach(img => {
            img.addEventListener('mouseenter', () => {
                cursor.classList.add('magnifying');
                cursor.style.backgroundImage = `url('${img.src}')`;
            });
            img.addEventListener('mousemove', (e) => {
                const rect = img.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                cursor.style.backgroundPosition = `${x}% ${y}%`;
            });
            img.addEventListener('mouseleave', () => {
                cursor.classList.remove('magnifying');
                cursor.style.backgroundImage = '';
            });
        });
    }
}

function initMagneticButtons() {
    const magnets = document.querySelectorAll('.magnetic-btn');
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(magnet, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: 'power2.out' });
        });
        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
    });
}

function toggleInquiry() {
    const modal = document.getElementById('inquiry-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('active'), 10);
    } else {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 500);
    }
}

function pageTransitionIn() {
    const c1 = document.getElementById('trans-curtain-1');
    const c2 = document.getElementById('trans-curtain-2');
    gsap.set([c1, c2], { yPercent: 0 });
    const tl = gsap.timeline();
    tl.to(c1, { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.2 })
      .to(c2, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '-=0.6');
}

function navTo(e, type, shouldToggleMenu = false) {
    e.preventDefault();
    if (shouldToggleMenu) toggleMenu();

    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    const mapping = {
        'home':      { id: 'top',              url: 'index.html' },
        'story':     { id: 'milestone',        url: 'story.html' },
        'expertise': { id: 'expertise-section',url: 'expertise.html' },
        'works':     { id: 'works-section',    url: 'portfolio.html' }, 
        'journal':   { id: 'journal-section',  url: 'journal.html' },
        'contact':   { id: 'footer',           url: '#footer' },
        'login':     { url: 'login.html' } // Added this line
    };
    const target = mapping[type];
    if (!target) return;
    if (type === 'contact') {
        const footer = document.querySelector('#footer');
        if (footer) footer.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const c1 = document.getElementById('trans-curtain-1');
    const c2 = document.getElementById('trans-curtain-2');
    gsap.set([c1, c2], { yPercent: 100 });

    const tl = gsap.timeline({
        onComplete: () => {
             if (isIndex && type === 'home') {
                 customScrollToTop();
                 gsap.to(c1, { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.2 });
                 gsap.to(c2, { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.2 });
             } else if (isIndex && target.id && document.getElementById(target.id) && type !== 'story' && type !== 'expertise' && type !== 'works' && type !== 'journal') {
                 const section = document.getElementById(target.id);
                 if (section) section.scrollIntoView({ behavior: 'smooth' });
                 gsap.to([c1,c2], { yPercent: -100, duration: 0.5 });
             } else {
                 window.location.href = target.url;
             }
        }
    });

    tl.to(c1, { yPercent: 0, duration: 0.6, ease: 'power4.inOut' })
      .to(c2, { yPercent: 0, duration: 0.6, ease: 'power4.inOut' }, '-=0.4');
}

function customScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.getElementById('menu-overlay');
    const isClosed = menu.classList.contains('translate-y-[110%]');
    if (isClosed) {
        menu.classList.remove('translate-y-[110%]');
        menu.classList.add('translate-y-0');
        gsap.fromTo('.menu-item', {y: 100, opacity: 0}, {y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out', delay: 0.3});
    } else {
        menu.classList.add('translate-y-[110%]');
        menu.classList.remove('translate-y-0');
    }
}

const translations = {
    en: {
        nav_home: "Home", nav_story: "Our Story", nav_portfolio: "Works", nav_services: "Expertise", nav_contact: "Contact",
        address: "Bangkok, Thailand<br>Open: Mon - Fri, 09:00 - 18:00",
        footer_tagline: "Let's Craft<br>Your Dream",
        label_contact: "Contact", label_studio: "Studio", label_follow: "Follow Us", label_privacy: "Privacy", label_terms: "Terms",
        journal_title: "Journal",
        nav_client: "Client Access"
    },
    th: {
        nav_home: "หน้าหลัก", nav_story: "เรื่องราวของเรา", nav_portfolio: "ผลงาน", nav_services: "บริการ", nav_contact: "ติดต่อ",
        address: "กรุงเทพมหานคร, ประเทศไทย<br>เปิดทำการ: จันทร์ - ศุกร์, 09:00 - 18:00",
        footer_tagline: "มาร่วมสาน<br>ฝันของคุณ",
        label_contact: "ติดต่อเรา", label_studio: "สตูดิโอ", label_follow: "ติดตามเรา", label_privacy: "นโยบายความเป็นส่วนตัว", label_terms: "เงื่อนไขการใช้บริการ",
        journal_title: "บทความ",
        nav_client: "เข้าสู่ระบบลูกค้า"
    }
};

function toggleLang() {
    const currentLang = localStorage.getItem('lang') === 'th' ? 'th' : 'en';
    const nextLang = currentLang === 'en' ? 'th' : 'en';
    applyLanguage(nextLang);
    localStorage.setItem('lang', nextLang);
}

function applyLanguage(lang) {
    const btn = document.getElementById('lang-btn');
    if (!btn) return;
    if (lang === 'th') document.body.classList.add('lang-th');
    else document.body.classList.remove('lang-th');
    btn.innerText = lang === 'th' ? 'EN' : 'TH'; 

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    if (typeof pageTranslations !== 'undefined') {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(pageTranslations[lang] && pageTranslations[lang][key]) {
                el.innerHTML = pageTranslations[lang][key];
            }
        });
    }
}

function restoreLanguage() {
    const saved = localStorage.getItem('lang') || 'en';
    applyLanguage(saved);
}