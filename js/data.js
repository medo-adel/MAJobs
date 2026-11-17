/**
 * MAJobs - Global Data & Configurations
 * Founder: Mohamed Adel - Software Engineer
 * Phone / WhatsApp: 01027932658 (+201027932658)
 */

const SITE_CONFIG = {
    brandName: "MAJobs",
    founderName: "Mohamed Adel",
    founderRole: "Software Engineer & Tech Lead",
    phone: "01027932658",
    phoneInternational: "+201027932658",
    email: "contact@majobs.com",
    location: "Cairo, Egypt / Serving MENA & Worldwide",
    whatsappUrl: function(message = "") {
        const text = encodeURIComponent(message || "مرحباً يا بشمهندس محمد، أود الاستفسار عن خدمات MAJobs البرمجية والتقنية.");
        return `https://wa.me/201027932658?text=${text}`;
    },
    whatsappUrlEn: function(message = "") {
        const text = encodeURIComponent(message || "Hello Eng. Mohamed Adel, I would like to inquire about MAJobs software and digital services.");
        return `https://wa.me/201027932658?text=${text}`;
    }
};

const SERVICES_DATA = [
    {
        id: "web-dev",
        category: "web",
        icon: "fa-code",
        titleAr: "تصميم وبرمجة المواقع المخصصة",
        titleEn: "Custom Web Development",
        descAr: "تطوير مواقع وتطبيقات ويب سريعة وآمنة ومصممة خصيصاً لتناسب احتياجات نشاطك التجاري بأحدث التقنيات.",
        descEn: "Fast, secure, and custom-built web applications and corporate websites engineered with cutting-edge tech stacks.",
        featuresAr: [
            "تصميم متجاوب بالكامل 100% مع جميع الشاشات",
            "سرعة تحميل فائقة وتوافق تام مع معايير Google Core Web Vitals",
            "لوحة تحكم مرنة وسهلة لإدارة المحتوى",
            "أعلى معايير الحماية والأمان ضد الثغرات"
        ],
        featuresEn: [
            "100% Responsive on all mobile and desktop screens",
            "Lightning-fast load speed optimized for Core Web Vitals",
            "Intuitive, flexible content management dashboard",
            "Robust security architecture and SSL protection"
        ],
        techs: ["React", "Vue.js", "Node.js", "Python / Django", "PHP / Laravel", "Next.js"]
    },
    {
        id: "mobile-apps",
        category: "mobile",
        icon: "fa-mobile-screen-button",
        titleAr: "تطوير تطبيقات الهواتف الذكية",
        titleEn: "Mobile App Development",
        descAr: "بناء تطبيقات iOS و Android احترافية بأداء سلس وتجربة مستخدم استثنائية لربطك بعملائك على مدار الساعة.",
        descEn: "Building high-performance native and cross-platform iOS & Android mobile apps with exceptional user experience.",
        featuresAr: [
            "تطوير بتطبيقات Flutter & React Native الهجينة أو Native",
            "إشعارات فورية متقدمة (Push Notifications)",
            "ربط أنظمة التتبع، الخرائط، والدفع الإلكتروني المباشر",
            "نشر وتأهيل التطبيقات على Google Play و Apple App Store"
        ],
        featuresEn: [
            "Cross-platform with Flutter & React Native or Native solutions",
            "Advanced real-time push notifications",
            "Integration with GPS maps, live tracking & payment gateways",
            "App Store & Google Play submission and approval management"
        ],
        techs: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"]
    },
    {
        id: "ecommerce",
        category: "ecommerce",
        icon: "fa-cart-shopping",
        titleAr: "إنشاء وإدارة المتاجر الإلكترونية",
        titleEn: "E-Commerce Store Solutions",
        descAr: "متاجر إلكترونية متكاملة على منصات سلة، زد، شوبيفاي، أو برمجة مخصصة تزيد من مبيعاتك وتحول الزوار إلى عملاء.",
        descEn: "Conversion-optimized online stores on Salla, Zid, Shopify, WooCommerce, or custom-coded e-commerce platforms.",
        featuresAr: [
            "إعداد متاجر سلة (Salla) وزد (Zid) باحترافية للخليج ومصر",
            "تطوير متاجر Shopify و WooCommerce بتصاميم مميزة",
            "ربط بوابات الدفع (Paymob, Fawry, Tabby, Tamara, Stripe)",
            "ربط شركات الشحن والتوصيل الآلي وإدارة المخزون"
        ],
        featuresEn: [
            "Expert setup for Salla & Zid stores tailored for Egypt & GCC",
            "Custom Shopify & WooCommerce stores built for conversions",
            "Payment gateway integration (Paymob, Fawry, Tabby, Tamara, Stripe)",
            "Automated shipping and live inventory management sync"
        ],
        techs: ["Shopify", "Salla", "Zid", "WooCommerce", "Magento", "Paymob"]
    },
    {
        id: "ui-ux",
        category: "design",
        icon: "fa-pen-ruler",
        titleAr: "تصميم واجهات وتجربة المستخدم (UI/UX)",
        titleEn: "UI/UX Design & Prototyping",
        descAr: "تصاميم عصرية وجذابة مبنية على دراسة سلوك المستخدم لضمان سهولة الاستخدام وأعلى معدلات تحويل.",
        descEn: "Modern, engaging designs crafted through rigorous user research to ensure maximum usability and high conversion rates.",
        featuresAr: [
            "دراسة رحلة المستخدم (User Journey) والخرائط التفاعلية",
            "تصميم نماذج أولية تفاعلية على Figma واختبارها",
            "بناء Design System متكامل وموحد للهوية الرقمية",
            "تحسين معدل التحويل (CRO) وتسهيل مسار الشراء"
        ],
        featuresEn: [
            "User journey mapping and detailed wireframing",
            "Interactive high-fidelity prototypes designed in Figma",
            "Unified digital Design System & brand style guide",
            "Conversion Rate Optimization (CRO) focused design"
        ],
        techs: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "User Research"]
    },
    {
        id: "seo-analytics",
        category: "marketing",
        icon: "fa-chart-line",
        titleAr: "تحسين محركات البحث والتحليلات (SEO)",
        titleEn: "SEO & Web Analytics (GA4 / GTM)",
        descAr: "تصدر نتائج محركات البحث الأولى في جوجل، مع إعداد احترافي للتتبع والتحليلات لاتخاذ قرارات تسويقية دقيقة.",
        descEn: "Rank at the top of Google search results with advanced technical SEO and comprehensive GA4/GTM tracking setup.",
        featuresAr: [
            "تحسين السيو التقني (Technical SEO) وسرعة الأرشفة",
            "استهداف الكلمات المفتاحية الأكثر ربحية لبزنسك",
            "إعداد Google Analytics 4 (GA4) و Google Tag Manager (GTM)",
            "حل مشكلات Google Merchant Center وربط الكتالوج"
        ],
        featuresEn: [
            "Technical SEO audits, schema markup & crawl budget optimization",
            "High-intent keyword research and competitor gap analysis",
            "Full GA4 & Google Tag Manager (GTM) event tracking setup",
            "Google Merchant Center setup and feed troubleshooting"
        ],
        techs: ["Google Analytics 4", "Google Tag Manager", "Search Console", "SEMrush", "Ahrefs"]
    },
    {
        id: "digital-ads",
        category: "marketing",
        icon: "fa-bullhorn",
        titleAr: "إدارة الحملات الإعلانية والتسويق",
        titleEn: "Digital Marketing & Performance Ads",
        descAr: "إدارة حملات إعلانية مدفوعة احترافية على Google Ads ومنصات التواصل الاجتماعي لتحقيق أعلى عائد على الإنفاق (ROAS).",
        descEn: "Data-driven paid ad campaigns across Google Ads and social media platforms to maximize your Return on Ad Spend (ROAS).",
        featuresAr: [
            "إدارة إعلانات البحث والشبكة الإعلانية على Google Ads",
            "حملات مبيعات موجهة على Meta (Facebook & Instagram) و TikTok",
            "إعادة الاستهداف الذكي للعملاء المحتملين (Retargeting)",
            "تقارير أداء دورية شفافة توضح التكلفة والعائد بدقة"
        ],
        featuresEn: [
            "Targeted Google Search, Shopping & Performance Max campaigns",
            "High-converting Meta (Facebook & Instagram) and TikTok Ads",
            "Smart dynamic retargeting to recover lost leads & carts",
            "Transparent ROI & KPI tracking with live dashboards"
        ],
        techs: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "Snapchat Ads", "Conversion API"]
    },
    {
        id: "cloud-devops",
        category: "devops",
        icon: "fa-cloud-arrow-up",
        titleAr: "السيرفرات والحلول السحابية و DevOps",
        titleEn: "Cloud Architecture & DevOps",
        descAr: "تهيئة وإدارة السيرفرات السحابية، وضمان استقرار موقعك وعمله بنسبة 99.9% تحت أشد ضغوط الزوار.",
        descEn: "Cloud infrastructure setup, automated CI/CD pipelines, and high-availability server management with 99.9% uptime.",
        featuresAr: [
            "إدارة السيرفرات على AWS, Google Cloud, DigitalOcean, Hetzner",
            "إعداد خطوط النشر الآلي المستمر (CI/CD Pipelines)",
            "تأمين قواعد البيانات والنسخ الاحتياطي التلقائي اليومي",
            "توزيع الأحمال وحماية من هجمات حجب الخدمة (Cloudflare DDoS)"
        ],
        featuresEn: [
            "Cloud management on AWS, GCP, DigitalOcean & Hetzner",
            "Automated CI/CD pipelines for zero-downtime deployments",
            "Database clustering and automated daily off-site backups",
            "Load balancing and Cloudflare enterprise DDoS protection"
        ],
        techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Linux", "Cloudflare", "Nginx"]
    },
    {
        id: "custom-apis",
        category: "web",
        icon: "fa-network-wired",
        titleAr: "تطوير الأنظمة البرمجية والربط بالـ APIs",
        titleEn: "Custom Software & API Integrations",
        descAr: "بناء أنظمة برمجية متخصصة (ERP / CRM) وربط الأنظمة المختلفة بسلاسة عبر واجهات برمجية متقدمة.",
        descEn: "Tailored enterprise software systems (ERP / CRM) and seamless custom API integrations connecting all your workflows.",
        featuresAr: [
            "ربط بوابات الدفع الإلكتروني والمحافظ الرقمية",
            "ربط أنظمة الفاتورة الإلكترونية والضرائب المعتمدة",
            "تطوير RESTful APIs و GraphQL عالية الكفاءة",
            "دمج أنظمة المحاسبة، CRM، والشحن في منصة موحدة"
        ],
        featuresEn: [
            "Direct payment gateway and digital wallet integrations",
            "Official E-Invoicing and tax authority system integrations",
            "High-speed RESTful & GraphQL API development",
            "Unified synchronization across CRM, ERP, and logistics"
        ],
        techs: ["REST API", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Microservices"]
    }
];

const PORTFOLIO_DATA = [
    {
        id: 1,
        titleAr: "منصة تجارة إلكترونية ذكية - FashionHub",
        titleEn: "Smart E-Commerce Platform - FashionHub",
        category: "ecommerce",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        descAr: "متجر ملابس إلكتروني متكامل يدعم الدفع والتقسيط عبر تابي وتمارا، وتوصيل لحظي مع أكثر من 50,000 عملية بيع.",
        descEn: "A high-conversion fashion store featuring Tabby/Tamara installments and automated fulfillment with 50,000+ orders.",
        tags: ["Next.js", "Node.js", "Paymob", "Salla API"],
        metrics: "+180% زيادة في المبيعات / Sales Increase"
    },
    {
        id: 2,
        titleAr: "تطبيق حجوزات وخدمات طبية - MedCare App",
        titleEn: "Healthcare & Telemedicine App - MedCare",
        category: "mobile",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        descAr: "تطبيق موبايل للأطباء والمرضى يوفر حجوزات فورية، استشارات فيديو عبر الإنترنت، وسجل طبي مشفر بالكامل.",
        descEn: "Cross-platform mobile app enabling instant appointments, secure video consultations, and encrypted medical records.",
        tags: ["Flutter", "Firebase", "WebRTC", "Stripe"],
        metrics: "4.9 تقييم على المتاجر / App Store Rating"
    },
    {
        id: 3,
        titleAr: "منصة إدارة عقارات وسياحة - EstatePro",
        titleEn: "Real Estate & Booking Portal - EstatePro",
        category: "web",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        descAr: "بوابة عقارية متقدمة للبحث عن العقارات وحجز المعاينات مع جولات افتراضية 3D ولوحة تحكم شاملة للوسطاء.",
        descEn: "Advanced real estate listing platform with 3D virtual tours, geolocation search, and broker management suite.",
        tags: ["React", "Laravel", "PostgreSQL", "Google Maps"],
        metrics: "+350K زيارة شهرية / Monthly Visitors"
    },
    {
        id: 4,
        titleAr: "نظام ERP سحابي متكامل لإدارة الشركات",
        titleEn: "Cloud Enterprise ERP System",
        category: "web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        descAr: "نظام إدارة موارد المؤسسات للتحكم بالمخازن والمبيعات والحسابات وربط الفاتورة الإلكترونية المصرية.",
        descEn: "All-in-one ERP system covering inventory, sales, accounting, and official Egyptian E-Invoicing compliance.",
        tags: ["Python", "FastAPI", "Vue.js", "Docker"],
        metrics: "99.99% وقت استقرار / System Uptime"
    },
    {
        id: 5,
        titleAr: "حملات ونظام سيو لشركة تقنية كبرى",
        titleEn: "SEO & Growth Engine for Tech Brand",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
        descAr: "خطة سيو وتتبع متكاملة ضاعفت الزيارات الطبيعية من محركات البحث وخفضت تكلفة اكتساب العميل بنسبة 45%.",
        descEn: "Technical SEO overhaul and GA4 tracking setup that skyrocketed organic reach and slashed customer acquisition cost by 45%.",
        tags: ["SEO", "GA4", "GTM", "Content Strategy"],
        metrics: "+320% نمو زوار البحث / Organic Growth"
    },
    {
        id: 6,
        titleAr: "تصميم واجهة وتطبيق لوجستي - FleetFast",
        titleEn: "Logistics UI/UX & Driver App - FleetFast",
        category: "design",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        descAr: "تصميم تجربة مستخدم سلسة للسائقين لإدارة خطوط السير وتوصيل الشحنات بضغطة زر مع تتبع مباشر.",
        descEn: "Intuitive driver UX and dispatch dashboard featuring live route optimization, proof of delivery, and real-time tracking.",
        tags: ["Figma", "UI/UX", "Mobile Design", "Design System"],
        metrics: "98% رضا المستخدمين / User Satisfaction"
    }
];

const TESTIMONIALS_DATA = [
    {
        nameAr: "م. طارق العمري",
        nameEn: "Eng. Tarek Al-Omari",
        roleAr: "رئيس مجلس إدارة - شركة الدقة الرقمية (الرياض)",
        roleEn: "CEO - Precision Digital (Riyadh)",
        commentAr: "العمل مع البشمهندس محمد عادل وفريق MAJobs نقل موقعنا ومتجرنا لمستوى عالمي. دقة في المواعيد، احترافية برمجية نادرة، ودعم مستمر حتى بعد التسليم.",
        commentEn: "Working with Eng. Mohamed Adel and MAJobs transformed our web portal into a world-class platform. Remarkable code quality, strict adherence to deadlines, and superb ongoing support.",
        rating: 5
    },
    {
        nameAr: "د. هبة الشافعي",
        nameEn: "Dr. Heba El-Shafie",
        roleAr: "مؤسسة منصة تكنو كلينيك (القاهرة)",
        roleEn: "Founder - TechnoClinic (Cairo)",
        commentAr: "نفذوا لنا تطبيق موبايل ولوحة تحكم معقدة بكل سلاسة وبدون أي أخطاء. ما يميزهم أنهم يفكرون معك كشركاء نجاح وليس فقط كمنفذين كود.",
        commentEn: "They built our mobile app and complex management dashboard seamlessly with zero glitches. What truly stands out is that they think with you as genuine business partners.",
        rating: 5
    },
    {
        nameAr: "أحمد عبد العزيز",
        nameEn: "Ahmed Abdelaziz",
        roleAr: "مدير التسويق - براند كوزمو (دبي)",
        roleEn: "Marketing Director - Cosmo Brand (Dubai)",
        commentAr: "بفضل التعديلات التقنية وتحسين سرعة المتجر وحملات السيو التي قام بها البشمهندس محمد، قفزت مبيعاتنا خلال 3 أشهر لأكثر من الضعف. أنصح بشدة بالتعامل معهم.",
        commentEn: "Thanks to the performance optimizations, store speed enhancements, and SEO strategy led by Eng. Mohamed, our sales more than doubled in 3 months. Highly recommended!",
        rating: 5
    }
];

const STATS_DATA = [
    { number: "150+", labelAr: "مشروع برمجياً ناجحاً", labelEn: "Successful Projects" },
    { number: "99.8%", labelAr: "نسبة رضا العملاء", labelEn: "Client Satisfaction" },
    { number: "7+", labelAr: "سنوات خبرة برمجية", labelEn: "Years Tech Experience" },
    { number: "24/7", labelAr: "دعم فني واستشارات", labelEn: "Technical Support" }
];
