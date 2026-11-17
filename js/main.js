/**
 * MAJobs - Main Interactive Script
 * Founder: Mohamed Adel (Software Engineer)
 * Phone: 01027932658
 */

// Current Language State (Default: Arabic)
let currentLang = localStorage.getItem("majobs_lang") || "ar";

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initNavbar();
    initFloatingWhatsApp();
    initDynamicContent();
    initContactForms();
    initScrollAnimations();
});

/* ========================================================
   1. LANGUAGE SWITCHER & LOCALIZATION
   ======================================================== */
function initLanguage() {
    applyLanguage(currentLang);

    // Language switcher buttons
    const langBtns = document.querySelectorAll(".lang-toggle-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            currentLang = currentLang === "ar" ? "en" : "ar";
            localStorage.setItem("majobs_lang", currentLang);
            applyLanguage(currentLang);
            // Re-render any dynamic content with current language
            initDynamicContent();
        });
    });
}

function applyLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ar;

    // Update text content of data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    // Update page title if key present
    const titleEl = document.querySelector("title[data-i18n-title]");
    if (titleEl) {
        const key = titleEl.getAttribute("data-i18n-title");
        if (dict[key]) {
            document.title = `${dict[key]} | MAJobs - Mohamed Adel`;
        }
    }

    // Update toggle button text
    document.querySelectorAll(".lang-toggle-text").forEach(el => {
        el.textContent = lang === "ar" ? "English" : "العربية";
    });

    // Update floating WhatsApp tooltip
    const waTooltip = document.querySelector(".floating-wa-tooltip");
    if (waTooltip && dict["floating_wa_title"]) {
        waTooltip.textContent = dict["floating_wa_title"];
    }
}

/* ========================================================
   2. NAVBAR & MOBILE DRAWER
   ======================================================== */
function initNavbar() {
    const navbar = document.querySelector(".site-navbar");
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navOverlay = document.querySelector(".nav-overlay");

    // Scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }
    });

    // Mobile toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("active");
            navMenu.classList.toggle("open");
            navOverlay?.classList.toggle("active");
            document.body.classList.toggle("no-scroll");
        });

        navOverlay?.addEventListener("click", () => {
            mobileToggle.classList.remove("active");
            navMenu.classList.remove("open");
            navOverlay.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });

        // Close on nav link click
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                mobileToggle.classList.remove("active");
                navMenu.classList.remove("open");
                navOverlay?.classList.remove("active");
                document.body.classList.remove("no-scroll");
            });
        });
    }

    // Active page link detection
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/* ========================================================
   3. FLOATING WHATSAPP BUTTON (01027932658)
   ======================================================== */
function initFloatingWhatsApp() {
    if (document.querySelector(".floating-wa-container")) return;

    const container = document.createElement("div");
    container.className = "floating-wa-container";
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;

    container.innerHTML = `
        <a href="${SITE_CONFIG.whatsappUrl()}" target="_blank" rel="noopener noreferrer" class="floating-wa-btn" aria-label="WhatsApp Chat">
            <span class="wa-ping-circle"></span>
            <i class="fa-brands fa-whatsapp"></i>
            <span class="floating-wa-tooltip">${dict.floating_wa_title}</span>
        </a>
    `;

    document.body.appendChild(container);
}

/* ========================================================
   4. DYNAMIC CONTENT RENDERING (SERVICES, PORTFOLIO, STATS)
   ======================================================== */
function initDynamicContent() {
    renderHomeServices();
    renderAllServices();
    renderPortfolio();
    renderTestimonials();
    renderStats();
}

// Render Featured Services on Home Page
function renderHomeServices() {
    const container = document.getElementById("home-services-grid");
    if (!container) return;

    const isAr = currentLang === "ar";
    const dict = TRANSLATIONS[currentLang];
    const featured = SERVICES_DATA.slice(0, 6);

    container.innerHTML = featured.map(service => {
        const title = isAr ? service.titleAr : service.titleEn;
        const desc = isAr ? service.descAr : service.descEn;
        const features = isAr ? service.featuresAr : service.featuresEn;
        const waMsg = isAr
            ? `مرحباً م. محمد عادل، أود الاستفسار وطلب خدمة: ${service.titleAr}`
            : `Hello Eng. Mohamed Adel, I would like to inquire about the service: ${service.titleEn}`;

        return `
            <div class="service-card" data-category="${service.category}">
                <div class="service-icon-box">
                    <i class="fa-solid ${service.icon}"></i>
                </div>
                <h3 class="service-title">${title}</h3>
                <p class="service-desc">${desc}</p>
                
                <div class="service-highlights">
                    <div class="highlights-title">${dict.service_features_title}</div>
                    <ul>
                        ${features.slice(0, 3).map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join("")}
                    </ul>
                </div>

                <div class="service-tech-tags">
                    ${service.techs.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>

                <div class="service-card-action">
                    <a href="${SITE_CONFIG.whatsappUrl(waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>${dict.btn_request_service}</span>
                    </a>
                </div>
            </div>
        `;
    }).join("");
}

// Render Full Services Catalogue on Services Page
function renderAllServices() {
    const container = document.getElementById("full-services-grid");
    if (!container) return;

    const isAr = currentLang === "ar";
    const dict = TRANSLATIONS[currentLang];

    const render = (category = "all") => {
        const filtered = category === "all"
            ? SERVICES_DATA
            : SERVICES_DATA.filter(s => s.category === category);

        container.innerHTML = filtered.map(service => {
            const title = isAr ? service.titleAr : service.titleEn;
            const desc = isAr ? service.descAr : service.descEn;
            const features = isAr ? service.featuresAr : service.featuresEn;
            const waMsg = isAr
                ? `مرحباً م. محمد، أود طلب تفاصيل وتسعير خدمة: ${service.titleAr}`
                : `Hello Eng. Mohamed, I would like pricing & details for: ${service.titleEn}`;

            return `
                <div class="service-card detailed-card" data-category="${service.category}">
                    <div class="card-top">
                        <div class="service-icon-box">
                            <i class="fa-solid ${service.icon}"></i>
                        </div>
                        <span class="category-badge">${service.category.toUpperCase()}</span>
                    </div>

                    <h3 class="service-title">${title}</h3>
                    <p class="service-desc">${desc}</p>

                    <div class="service-highlights">
                        <div class="highlights-title">${dict.service_features_title}</div>
                        <ul>
                            ${features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
                        </ul>
                    </div>

                    <div class="service-tech-tags">
                        ${service.techs.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                    </div>

                    <div class="service-card-action">
                        <a href="${SITE_CONFIG.whatsappUrl(waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">
                            <i class="fa-brands fa-whatsapp"></i>
                            <span>${dict.btn_request_service}</span>
                        </a>
                    </div>
                </div>
            `;
        }).join("");
    };

    render("all");

    // Filter Buttons
    const filterBtns = document.querySelectorAll(".services-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            render(btn.getAttribute("data-filter"));
        });
    });
}

// Render Portfolio on Portfolio / Home Page
function renderPortfolio() {
    const container = document.getElementById("portfolio-grid");
    if (!container) return;

    const isAr = currentLang === "ar";
    const dict = TRANSLATIONS[currentLang];
    const isHome = container.getAttribute("data-limit") === "true";
    const items = isHome ? PORTFOLIO_DATA.slice(0, 3) : PORTFOLIO_DATA;

    const render = (category = "all") => {
        const filtered = category === "all"
            ? items
            : items.filter(p => p.category === category);

        container.innerHTML = filtered.map(item => {
            const title = isAr ? item.titleAr : item.titleEn;
            const desc = isAr ? item.descAr : item.descEn;
            const waMsg = isAr
                ? `مرحباً م. محمد عادل، شاهدت مشروع (${item.titleAr}) على موقع MAJobs وأريد تنفيذ مشروع مشابه.`
                : `Hello Eng. Mohamed, I saw the project (${item.titleEn}) on MAJobs and would like a similar solution.`;

            return `
                <div class="portfolio-card" data-category="${item.category}">
                    <div class="portfolio-thumb">
                        <img src="${item.image}" alt="${title}" loading="lazy">
                        <div class="portfolio-overlay">
                            <span class="portfolio-metric">${item.metrics}</span>
                        </div>
                    </div>
                    <div class="portfolio-body">
                        <div class="portfolio-tags">
                            ${item.tags.map(t => `<span class="portfolio-tag">${t}</span>`).join("")}
                        </div>
                        <h3 class="portfolio-title">${title}</h3>
                        <p class="portfolio-desc">${desc}</p>
                        
                        <div class="portfolio-action">
                            <a href="${SITE_CONFIG.whatsappUrl(waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                                <i class="fa-brands fa-whatsapp"></i>
                                <span>${dict.btn_live_inquiry}</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    };

    render("all");

    // Portfolio Filter Buttons
    const filterBtns = document.querySelectorAll(".portfolio-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            render(btn.getAttribute("data-filter"));
        });
    });
}

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById("testimonials-grid");
    if (!container) return;

    const isAr = currentLang === "ar";

    container.innerHTML = TESTIMONIALS_DATA.map(test => {
        const name = isAr ? test.nameAr : test.nameEn;
        const role = isAr ? test.roleAr : test.roleEn;
        const comment = isAr ? test.commentAr : test.commentEn;

        return `
            <div class="testimonial-card">
                <div class="testimonial-stars">
                    ${Array(test.rating).fill('<i class="fa-solid fa-star"></i>').join("")}
                </div>
                <p class="testimonial-text">"${comment}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div>
                        <h4 class="author-name">${name}</h4>
                        <span class="author-role">${role}</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Render Stats
function renderStats() {
    const container = document.getElementById("stats-grid");
    if (!container) return;

    const isAr = currentLang === "ar";
    container.innerHTML = STATS_DATA.map(st => `
        <div class="stat-card">
            <div class="stat-number">${st.number}</div>
            <div class="stat-label">${isAr ? st.labelAr : st.labelEn}</div>
        </div>
    `).join("");
}

/* ========================================================
   5. CONTACT FORM & WHATSAPP DISPATCH (01027932658)
   ======================================================== */
function initContactForms() {
    const contactForm = document.getElementById("main-contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("cf-name")?.value.trim() || "";
        const phone = document.getElementById("cf-phone")?.value.trim() || "";
        const service = document.getElementById("cf-service")?.value || "";
        const budget = document.getElementById("cf-budget")?.value || "";
        const message = document.getElementById("cf-message")?.value.trim() || "";

        if (!name || !phone || !message) {
            alert(currentLang === "ar" ? "يرجى ملء كافة الحقول الأساسية (الاسم، الهاتف، والرسالة)." : "Please fill in all required fields (Name, Phone, and Message).");
            return;
        }

        // Construct formatted WhatsApp message
        let waText = "";
        if (currentLang === "ar") {
            waText = `*طلب مشروع / استشارة جديدة من موقع MAJobs* 🚀\n\n` +
                     `👤 *الاسم:* ${name}\n` +
                     `📱 *رقم العميل:* ${phone}\n` +
                     `🛠️ *الخدمة المطلوبة:* ${service || 'استشارة عامة'}\n` +
                     (budget ? `💰 *الميزانية التقريبية:* ${budget}\n` : '') +
                     `📝 *تفاصيل المشروع:*\n${message}\n\n` +
                     `_تم الإرسال عبر الموقع الإلكتروني MAJobs - م. محمد عادل_`;
        } else {
            waText = `*New Project Inquiry from MAJobs Website* 🚀\n\n` +
                     `👤 *Name:* ${name}\n` +
                     `📱 *Client Phone:* ${phone}\n` +
                     `🛠️ *Requested Service:* ${service || 'General Consultation'}\n` +
                     (budget ? `💰 *Estimated Budget:* ${budget}\n` : '') +
                     `📝 *Project Details:*\n${message}\n\n` +
                     `_Sent via MAJobs Website - Eng. Mohamed Adel_`;
        }

        // Show feedback alert toast
        const feedbackEl = document.getElementById("form-feedback");
        if (feedbackEl) {
            feedbackEl.classList.remove("hidden");
            feedbackEl.textContent = TRANSLATIONS[currentLang].form_success;
        }

        // Dispatch to WhatsApp 01027932658
        const url = `https://wa.me/201027932658?text=${encodeURIComponent(waText)}`;
        setTimeout(() => {
            window.open(url, "_blank");
        }, 600);
    });
}

/* ========================================================
   6. SCROLL ANIMATIONS
   ======================================================== */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el);
    });
}
