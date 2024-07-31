const translations = {
    en: {
        title: "Buy and Sell Products",
        search: "Search",
        "search-placeholder": "Search for products, services, and more...",
        login: "Login",
        register: "Register",
        "new-ad": "New Ad",
        home: "Home",
        categories: "Categories",
        "featured-ads": "Featured Ads",
        help: "Help",
        contact: "Contact Us",
        "featured-ads-title": "Featured Ads",
        "categories-title": "Categories",
        "new-ad-title": "Add New Ad",
        "product-name": "Product Name:",
        price: "Price:",
        description: "Description:",
        image: "Product Image:",
        submit: "Add Ad",
        footer: "Buy and Sell Products. All rights reserved."
    },
    ar: {
        title: "موقع بيع وشراء المنتجات",
        search: "بحث",
        "search-placeholder": "ابحث عن المنتجات، الخدمات والمزيد...",
        login: "تسجيل الدخول",
        register: "تسجيل",
        "new-ad": "إعلان جديد",
        home: "الرئيسية",
        categories: "الفئات",
        "featured-ads": "الإعلانات المميزة",
        help: "المساعدة",
        contact: "اتصل بنا",
        "featured-ads-title": "إعلانات مميزة",
        "categories-title": "الفئات",
        "new-ad-title": "إضافة إعلان جديد",
        "product-name": "اسم المنتج:",
        price: "السعر:",
        description: "الوصف:",
        image: "صورة المنتج:",
        submit: "إضافة الإعلان",
        footer: "موقع بيع وشراء المنتجات. جميع الحقوق محفوظة."
    },
    fr: {
        title: "Acheter et vendre des produits",
        search: "Recherche",
        "search-placeholder": "Recherchez des produits, services et plus...",
        login: "Connexion",
        register: "Inscription",
        "new-ad": "Nouvelle annonce",
        home: "Accueil",
        categories: "Catégories",
        "featured-ads": "Annonces en vedette",
        help: "Aide",
        contact: "Contactez-nous",
        "featured-ads-title": "Annonces en vedette",
        "categories-title": "Catégories",
        "new-ad-title": "Ajouter une nouvelle annonce",
        "product-name": "Nom du produit:",
        price: "Prix:",
        description: "Description:",
        image: "Image du produit:",
        submit: "Ajouter l'annonce",
        footer: "Acheter et vendre des produits. Tous droits réservés."
    }
};

document.getElementById('language-selector').addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    applyTranslations(selectedLang);
});

function applyTranslations(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = translations[lang][key];
    });
}

// Set default language to Arabic
applyTranslations('ar');