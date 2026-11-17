/**
 * MAJobs - Bilingual Dictionary (Arabic & English)
 * Software Engineer: Mohamed Adel - 01027932658
 */

const TRANSLATIONS = {
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_services: "خدماتنا البرمجية",
        nav_portfolio: "أعمالنا ومشاريعنا",
        nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        nav_cta: "استشارة مجانية",
        lang_switch: "English",

        // Hero Section
        hero_badge: "شريكك البرمجي والتقني الموثوق",
        hero_title_1: "نبني حلولاً برمجية ذكية",
        hero_title_2: "تنقل أعمالك إلى القمة",
        hero_desc: "نحن في MAJobs بقيادة م. محمد عادل نقدم خدمات متكاملة في تطوير مواقع وتطبيقات الويب، تطبيقات الهواتف الذكية، المتاجر الإلكترونية، وحلول التسويق الرقمي والسيو بأعلى معايير الجودة الهندسية.",
        hero_btn_contact: "تواصل عبر واتساب فوراً",
        hero_btn_services: "استكشف خدماتنا",
        hero_stat_1: "مشاريع تقنية منجزة",
        hero_stat_2: "سنوات خبرة برمجية",
        hero_stat_3: "عملاء وشركاء نجاح",

        // Problem Solver Section (Inspired by ITLista)
        problems_badge: "هل تواجه هذه التحديات في مشروعك؟",
        problems_title: "نحول عقباتك الرقمية إلى نقاط قوة ونمو حقيقي",
        prob_1_title: "موقع بطيء أو تصميم قديم؟",
        prob_1_desc: "الزوار يغادرون قبل رؤية منتجاتك؟ نقوم بإعادة بناء موقعك بأحدث المعايير البرمجية لسرعة فائقة وتصميم يرسخ الثقة.",
        prob_2_title: "متجر إلكتروني بمبيعات ضعيفة؟",
        prob_2_desc: "سلة متروكة ونسب تحويل متدنية؟ نصمم مسار شراء سلس (UX) بدون تعقيد مع ربط فوري لبوابات الدفع والتوصيل.",
        prob_3_title: "ترتيب متراجع في بحث Google؟",
        prob_3_desc: "منافسوك يستحوذون على الزيارات؟ نطبق استراتيجيات سيو تقني ومحتوى مدروس تضمن تصدرك الكلمات الأكثر بحثاً وربحاً.",
        prob_4_title: "تشتت بين المطورين وشركات التسويق؟",
        prob_4_desc: "مع MAJobs، ستحصل على فريق هندسي وتسويقي واحد متناغم يشرف عليه م. محمد عادل لضمان تحقيق أهدافك بدقة.",

        // Services Section
        services_badge: "خدمات متكاملة",
        services_title: "منظومة برمجية ورقمية شاملة لنمو أعمالك",
        services_desc: "نقدم لك كل ما يحتاجه مشروعك من الفكرة وحتى الإطلاق والنمو، دون الحاجة للتعامل مع جهات متعددة.",
        filter_all: "جميع الخدمات",
        filter_web: "تطوير الويب",
        filter_mobile: "تطبيقات الموبايل",
        filter_ecommerce: "المتاجر الإلكترونية",
        filter_marketing: "السيو والتسويق",
        filter_devops: "السحابيات والـ DevOps",
        btn_request_service: "اطلب الخدمة الآن",
        service_features_title: "أهم المخرجات والمميزات:",
        btn_view_all_services: "شاهد كافة التفاصيل والخدمات",

        // Why Us / Advantages
        why_badge: "لماذا تختار MAJobs؟",
        why_title: "معايير هندسية صارمة تضمن نجاح مشروعك",
        why_1_title: "رؤية هندسية احترافية",
        why_1_desc: "يقود العمل م. محمد عادل، لضمان كود نظيف، بنية تحتية قابلة للتوسع (Scalable)، وحلول برمجية تدوم لسنوات.",
        why_2_title: "التزام كامل بالمواعيد",
        why_2_desc: "نضع خطة زمنية واضحة ومراحل تسليم محددة بدقة، مع التزام تام بالموعد النهائي المتفق عليه دون تأخير.",
        why_3_title: "حلول مفصلة لأسواق مصر والخليج",
        why_3_desc: "فهم عميق لمتطلبات بوابات الدفع المحلية (فوري، باي موب، مدى، تابي، تمارا) ومنصات سلة وزد والشحن الإقليمي.",
        why_4_title: "دعم فني وصيانة مستمرة 24/7",
        why_4_desc: "علاقتنا لا تنتهي عند تسليم الكود؛ نرافقك بالمراقبة السيرفرية والتحديثات الأمنية لضمان استقرار مشروعك التام.",

        // Process Section
        process_badge: "منهجية العمل",
        process_title: "كيف ننفذ فكرتك خطوة بخطوة حتى النجاح؟",
        step_1_title: "1. الاكتشاف ودراسة المتطلبات",
        step_1_desc: "جلسة عمل تقنية لفهم أهداف مشروعك، تحديد الجمهور المستهدف، واختيار أفضل بنية برمجية مناسبة للميزانية والهدف.",
        step_2_title: "2. هندسة النظام وتصميم الواجهات (UI/UX)",
        step_2_desc: "تصميم تجربة مستخدم سلسة ونماذج تفاعلية على Figma تضمن موافقتك على كل شاشة وتفصيلة قبل كتابة الكود.",
        step_3_title: "3. التطوير والبرمجة النظيفة (Coding)",
        step_3_desc: "بناء الأكواد بأعلى معايير Clean Code، وضمان الأمان والسرعة وربط الـ APIs وبوابات الدفع المطلوبة.",
        step_4_title: "4. الاختبار الشامل والإطلاق والنمو",
        step_4_desc: "اختبارات دقيقة على كل المتصفحات والأجهزة، ثم نشر الموقع على سيرفرات سحابية سريعة ودعم فني مستمر.",

        // Tech Stack
        tech_badge: "أحدث التقنيات",
        tech_title: "الترسانة التقنية التي نبني بها مشاريعنا",
        tech_desc: "نستخدم فقط التقنيات الحديثة والمستقرة عالمياً التي تضمن أداءً فائقاً وحماية ضد الثغرات.",

        // Portfolio Section
        portfolio_badge: "أحدث مشاريعنا",
        portfolio_title: "قصص نجاح حقيقية نفخر ببنائها",
        portfolio_desc: "نماذج من أعمالنا وتطبيقاتنا التي حققت لعملائنا نمواً ومبيعات ملموسة.",
        btn_view_portfolio: "استعرض كافة الأعمال",
        btn_live_inquiry: "استفسر عن مشروع مماثل",

        // Testimonials
        testimonials_badge: "آراء شركاء النجاح",
        testimonials_title: "ماذا يقول عملاؤنا عن التعاون معنا؟",

        // CTA Banner
        cta_badge: "هل أنت مستعد لنقل فكرتك للواقع؟",
        cta_title: "ابدأ مشروعك البرمجي اليوم مع م. محمد عادل",
        cta_desc: "تواصل معنا مباشرة عبر الواتساب على الرقم 01027932658 للحصول على استشارة فنية مجانية وتقدير دقيق للتكلفة والوقت.",
        cta_whatsapp_btn: "تحدث مع البشمهندس محمد (واتساب)",
        cta_call_btn: "اتصل هاتفياً الآن",

        // Contact Page & Form
        contact_page_badge: "تواصل مباشر",
        contact_page_title: "دعنا نبدأ محادثة حول مشروعك القادم",
        contact_page_desc: "سواء كان لديك فكرة جديدة، أو ترغب في تطوير موقعك الحالي، نحن جاهزون للمساعدة وتقديم الحل الأفضل.",
        contact_info_phone_title: "الهاتف والواتساب المباشر",
        contact_info_phone_val: "01027932658",
        contact_info_email_title: "البريد الإلكتروني",
        contact_info_email_val: "contact@majobs.com",
        contact_info_loc_title: "المقر ونطاق العمل",
        contact_info_loc_val: "القاهرة، جمهورية مصر العربية (ونخدم عملاءنا في كافة دول الخليج والعالم)",
        contact_info_hours_title: "أوقات العمل والدعم",
        contact_info_hours_val: "يومياً من 9:00 صباحاً حتى 10:00 مساءً (والطوارئ السيرفرية 24/7)",

        form_name: "الاسم بالكامل",
        form_name_ph: "اكتب اسمك هنا...",
        form_phone: "رقم الهاتف / الواتساب",
        form_phone_ph: "مثال: 01027932658",
        form_service: "الخدمة المطلوبة",
        form_service_select: "-- اختر الخدمة المطلوبة --",
        form_budget: "الميزانية المتوقعة (اختياري)",
        form_budget_select: "-- اختر النطاق التقريبي --",
        form_message: "تفاصيل فكرة المشروع أو الاستفسار",
        form_message_ph: "اكتب نبذة عن مشروعك، ما الذي تود تحقيقه وما هي الميزات المطلوبة؟",
        form_submit: "إرسال الطلب عبر واتساب فوراً",
        form_success: "شكراً لتواصلك! يتم الآن تحويلك إلى واتساب البشمهندس محمد عادل لمتابعة طلبك فوراً.",

        // About Page
        about_page_badge: "عن MAJobs والمؤسس",
        about_page_title: "الجمع بين الشغف الهندسي والرؤية التجارية الحديثة",
        about_lead: "تأسست MAJobs بقيادة مهندس البرمجيات محمد عادل لتقديم حلول تقنية لا تكتفي بكونها أكواداً تعمل، بل أدوات نمو حقيقية تزيد الأرباح وتصنع الفارق.",
        about_founder_title: "عن المؤسس: م. محمد عادل",
        about_founder_desc: "مهندس برمجيات (Software Engineer) شغوف ببناء الأنظمة المعمارية عالية الكفاءة وتطبيقات الويب والموبايل والمتاجر المتقدمة. يؤمن بأن الموقع أو التطبيق الناجح يبدأ من فهم دقيق لعقلية المستخدم ونموذج العمل التجاري قبل كتابة سطر برمجي واحد.",
        about_values_title: "قيمنا الأساسية",
        about_val_1_title: "الجودة قبل السرعة العشوائية",
        about_val_1_desc: "نكتب كوداً نظيفاً وموثقاً يمكن تطويره لعشرات السنين دون الحاجة لإعادة بنائه من الصفر.",
        about_val_2_title: "الشفافية المطلقة",
        about_val_2_desc: "تسليمات مرحلية مستمرة، تقارير واضحة، ولا وجود لأي تكاليف خفية أو مفاجآت.",
        about_val_3_title: "شراكة نمو حقيقية",
        about_val_3_desc: "نقدم استشارات تسويقية وتقنية صادقة تخدم مصلحة مشروعك وتوفر عليك النفقات غير الضرورية.",

        // Footer
        footer_desc: "MAJobs - شركة رائدة في تطوير وتصميم المواقع والمتاجر والتطبيقات وحلول التسويق الرقمي والسيو بقيادة م. محمد عادل.",
        footer_links_quick: "روابط سريعة",
        footer_links_services: "خدماتنا",
        footer_contact_direct: "تواصل مباشر",
        footer_rights: "جميع الحقوق محفوظة © 2026 MAJobs - برمجة وتطوير م. محمد عادل (هاتف: 01027932658)",
        floating_wa_title: "تواصل معنا مباشرة عبر واتساب"
    },

    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_about: "About Us",
        nav_contact: "Contact",
        nav_cta: "Free Consultation",
        lang_switch: "العربية",

        // Hero Section
        hero_badge: "Your Trusted Software & Tech Partner",
        hero_title_1: "Building Intelligent Software",
        hero_title_2: "Propelling Your Business Forward",
        hero_desc: "At MAJobs, led by Eng. Mohamed Adel, we deliver end-to-end custom web engineering, iOS/Android mobile apps, e-commerce stores, and high-performance SEO & marketing solutions with uncompromising software engineering standards.",
        hero_btn_contact: "Chat on WhatsApp Now",
        hero_btn_services: "Explore Our Services",
        hero_stat_1: "Completed Projects",
        hero_stat_2: "Years Tech Experience",
        hero_stat_3: "Satisfied Clients",

        // Problem Solver Section (Inspired by ITLista)
        problems_badge: "Facing These Challenges in Your Project?",
        problems_title: "We Turn Your Tech Bottlenecks Into High-Growth Engines",
        prob_1_title: "Slow Loading or Outdated Design?",
        prob_1_desc: "Visitors bounce before exploring your offers? We re-engineer your site with cutting-edge tech for sub-second speed and modern aesthetics.",
        prob_2_title: "E-Commerce Store With Low Sales?",
        prob_2_desc: "High cart abandonment and poor conversions? We build frictionless UX with instant checkout and localized payment gateways.",
        prob_3_title: "Lagging Behind on Google Search?",
        prob_3_desc: "Competitors capturing your organic traffic? We execute technical SEO and targeted keyword strategies that secure top search rankings.",
        prob_4_title: "Fragmented Freelancers & Poor Communication?",
        prob_4_desc: "With MAJobs, you get an integrated software and digital team under Eng. Mohamed Adel, ensuring unified execution and accountability.",

        // Services Section
        services_badge: "Full-Stack Capabilities",
        services_title: "Comprehensive Tech & Digital Solutions for Your Growth",
        services_desc: "Everything your business requires from initial blueprint to deployment and scaling, all under one roof.",
        filter_all: "All Services",
        filter_web: "Web Development",
        filter_mobile: "Mobile Apps",
        filter_ecommerce: "E-Commerce",
        filter_marketing: "SEO & Ads",
        filter_devops: "Cloud & DevOps",
        btn_request_service: "Order This Service",
        service_features_title: "Key Deliverables & Highlights:",
        btn_view_all_services: "Explore All Details & Services",

        // Why Us / Advantages
        why_badge: "Why Choose MAJobs?",
        why_title: "Strict Engineering Standards That Guarantee Success",
        why_1_title: "Senior Engineering Leadership",
        why_1_desc: "Guided by Eng. Mohamed Adel to guarantee clean architectures, scalable codebases, and resilient software.",
        why_2_title: "Uncompromising Deadline Commitment",
        why_2_desc: "Transparent roadmaps with structured sprint deliveries. We respect and hit every project milestone on time.",
        why_3_title: "Tailored for Egypt & GCC Markets",
        why_3_desc: "Deep integration expertise with regional gateways (Fawry, Paymob, Mada, Tabby, Tamara) and Salla/Zid ecosystems.",
        why_4_title: "24/7 Dedicated Support & Monitoring",
        why_4_desc: "Our partnership continues post-launch with 24/7 server monitoring, proactive security updates, and performance tuning.",

        // Process Section
        process_badge: "Our Proven Workflow",
        process_title: "How We Turn Your Vision Into a Thriving Product",
        step_1_title: "1. Discovery & Architecture Blueprint",
        step_1_desc: "In-depth technical consultation to clarify requirements, pinpoint target users, and select the optimal tech stack.",
        step_2_title: "2. UI/UX Design & High-Fidelity Prototypes",
        step_2_desc: "Crafting intuitive user journeys and interactive Figma prototypes so you approve every interaction before code is written.",
        step_3_title: "3. Clean Code & Agile Development",
        step_3_desc: "Developing robust backends and reactive frontends adhering to Clean Architecture, robust security, and seamless API integrations.",
        step_4_title: "4. Rigorous QA, Deployment & Scaling",
        step_4_desc: "Cross-device stress testing, automated deployments on secure cloud infrastructure, and 24/7 post-launch maintenance.",

        // Tech Stack
        tech_badge: "Modern Tech Arsenal",
        tech_title: "Technologies We Leverage to Build World-Class Products",
        tech_desc: "We rely on industry-standard, high-performance, and secure frameworks and tools.",

        // Portfolio Section
        portfolio_badge: "Featured Projects",
        portfolio_title: "Real Success Stories We Are Proud to Have Built",
        portfolio_desc: "A showcase of web applications, mobile platforms, and e-commerce stores delivering real ROI.",
        btn_view_portfolio: "View Full Portfolio",
        btn_live_inquiry: "Inquire About a Similar Project",

        // Testimonials
        testimonials_badge: "Client Testimonials",
        testimonials_title: "What Our Partners Say About Working With Us",

        // CTA Banner
        cta_badge: "Ready to Transform Your Digital Presence?",
        cta_title: "Kickstart Your Software Project Today with Eng. Mohamed Adel",
        cta_desc: "Get in touch on WhatsApp at 01027932658 for a free technical consultation and a tailored quotation.",
        cta_whatsapp_btn: "Chat with Eng. Mohamed on WhatsApp",
        cta_call_btn: "Call Direct Phone Line",

        // Contact Page & Form
        contact_page_badge: "Direct Contact",
        contact_page_title: "Let's Start a Conversation About Your Next Project",
        contact_page_desc: "Whether you have a new startup idea or wish to modernize your existing infrastructure, we're ready to engineer the ideal solution.",
        contact_info_phone_title: "Direct Phone & WhatsApp",
        contact_info_phone_val: "01027932658",
        contact_info_email_title: "Official Email",
        contact_info_email_val: "contact@majobs.com",
        contact_info_loc_title: "Headquarters & Service Area",
        contact_info_loc_val: "Cairo, Egypt (Serving clients across Saudi Arabia, UAE, MENA & Worldwide)",
        contact_info_hours_title: "Working Hours",
        contact_info_hours_val: "Daily 9:00 AM - 10:00 PM (24/7 for server emergencies)",

        form_name: "Full Name",
        form_name_ph: "Enter your full name...",
        form_phone: "Phone / WhatsApp Number",
        form_phone_ph: "e.g. 01027932658",
        form_service: "Desired Service",
        form_service_select: "-- Select Desired Service --",
        form_budget: "Estimated Budget (Optional)",
        form_budget_select: "-- Select Budget Range --",
        form_message: "Project Description & Goals",
        form_message_ph: "Tell us about your project, target objectives, and expected timeline...",
        form_submit: "Send Inquiry via WhatsApp Now",
        form_success: "Thank you! Redirecting you now to Eng. Mohamed Adel on WhatsApp to assist you immediately.",

        // About Page
        about_page_badge: "About MAJobs & Founder",
        about_page_title: "Bridging Engineering Precision With Business Growth",
        about_lead: "Founded by Software Engineer Mohamed Adel, MAJobs builds digital solutions that don't just execute code, but act as high-octane growth engines.",
        about_founder_title: "About the Founder: Eng. Mohamed Adel",
        about_founder_desc: "Software Engineer with a deep passion for scalable system architecture, modern web ecosystems, cross-platform mobile apps, and high-conversion e-commerce. Mohamed believes every exceptional digital product starts with deep business empathy before touching a single line of code.",
        about_values_title: "Our Core Principles",
        about_val_1_title: "Quality Over Hurried Code",
        about_val_1_desc: "We engineer modular, self-documenting codebases built to endure years of scaling without rewrites.",
        about_val_2_title: "Radical Transparency",
        about_val_2_desc: "Iterative sprint demos, clear status reports, and absolutely no hidden fees or unexpected delays.",
        about_val_3_title: "True Growth Partnership",
        about_val_3_desc: "We provide honest tech and business consulting to maximize your return while cutting wasteful expenditures.",

        // Footer
        footer_desc: "MAJobs - Premier software engineering, web design, mobile apps, and digital performance agency led by Eng. Mohamed Adel.",
        footer_links_quick: "Quick Links",
        footer_links_services: "Our Services",
        footer_contact_direct: "Direct Contact",
        footer_rights: "All Rights Reserved © 2026 MAJobs - Engineered by Eng. Mohamed Adel (Phone: 01027932658)",
        floating_wa_title: "Chat with us instantly on WhatsApp"
    }
};
