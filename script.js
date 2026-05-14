const products = [
  {
    name: "Bresse Bleu",
    price: "190 ₪",
    image: "assets/products/bresse-bleu.jpg",
    style: "Creamy blue cheese",
    tags: ["soft", "blue", "french"],
  },
  {
    name: "Isigny Ste Mère Brie Fermier",
    price: "180 ₪",
    image: "assets/products/isigny-ste-mere-brie-fermier.jpg",
    style: "Farmhouse brie",
    tags: ["soft", "french"],
  },
  {
    name: "Papillon Roquefort",
    price: "290 ₪",
    image: "assets/products/papillon-roquefort.jpg",
    style: "Roquefort blue",
    tags: ["blue", "french", "sheep"],
  },
  {
    name: "Gorgonzola Piccante",
    price: "185 ₪",
    image: "assets/products/gorgonzola-piccante.jpg",
    style: "Sharp Italian blue",
    tags: ["blue", "italian"],
  },
  {
    name: "Brie Truffe",
    price: "260 ₪",
    image: "assets/products/brie-truffe.jpg",
    style: "Truffle brie",
    tags: ["soft", "truffle", "french"],
  },
  {
    name: "Raclette Suisse",
    price: "230 ₪",
    image: "assets/products/raclette-suisse.jpg",
    style: "Swiss melting cheese",
    tags: ["alpine", "swiss"],
  },
  {
    name: "Fromager d'Affinois Le Fondant",
    price: "230 ₪",
    image: "assets/products/fromager-daffinois-le-fondant.jpg",
    style: "Silky soft cheese",
    tags: ["soft", "french"],
  },
  {
    name: "Roquefort",
    price: "290 ₪",
    image: "assets/products/roquefort.jpg",
    style: "Classic blue cheese",
    tags: ["blue", "french", "sheep"],
  },
  {
    name: "Maasdam",
    price: "170 ₪",
    image: "assets/products/maasdam.jpg",
    style: "Sweet nutty slices",
    tags: ["dutch", "alpine"],
  },
  {
    name: "Brie Rustik",
    price: "180 ₪",
    image: "assets/products/brie-rustik.jpg",
    style: "Rustic brie",
    tags: ["soft", "french"],
  },
  {
    name: "Tomme de Normandie",
    price: "190 ₪",
    image: "assets/products/tomme-de-normandie.jpg",
    style: "French tomme",
    tags: ["french", "aged"],
  },
  {
    name: "Comté",
    price: "300 ₪",
    image: "assets/products/comte.jpg",
    style: "Aged alpine cheese",
    tags: ["alpine", "french", "aged"],
  },
  {
    name: "Prima Donna Maturo",
    price: "180 ₪",
    image: "assets/products/prima-donna-maturo.jpg",
    style: "Aged Dutch cheese",
    tags: ["dutch", "aged"],
  },
  {
    name: "Prima Donna Forte",
    price: "180 ₪",
    image: "assets/products/prima-donna-forte.jpg",
    style: "Intense Dutch cheese",
    tags: ["dutch", "aged"],
  },
  {
    name: "Rotterdam Truffle",
    price: "250 ₪",
    image: "assets/products/rotterdam-truffle.jpg",
    style: "Truffle Dutch cheese",
    tags: ["dutch", "truffle"],
  },
  {
    name: "Gruyère",
    price: "280 ₪",
    image: "assets/products/gruyere.jpg",
    style: "Swiss alpine cheese",
    tags: ["alpine", "swiss", "aged"],
  },
  {
    name: "Siciliana with Pepper",
    price: "210 ₪",
    image: "assets/products/siciliana-with-pepper.jpg",
    style: "Pepper flavored cheese",
    tags: ["flavored"],
  },
  {
    name: "Manchego",
    price: "220 ₪",
    image: "assets/products/manchego.jpg",
    style: "Spanish sheep cheese",
    tags: ["goat-sheep", "sheep", "aged"],
  },
  {
    name: "Soignon Goat Log",
    price: "190 ₪",
    image: "assets/products/soignon-goat-log.jpg",
    style: "Goat cheese log",
    tags: ["goat-sheep", "goat", "french"],
  },
  {
    name: "Reblochon",
    price: "290 ₪",
    image: "assets/products/reblochon.jpg",
    style: "Soft washed-rind cheese",
    tags: ["soft", "alpine", "french"],
  },
  {
    name: "Sheep Camembert with Mustard",
    price: "30 ₪",
    unit: "piece",
    image: "assets/products/sheep-camembert-with-mustard.jpg",
    style: "Sheep camembert",
    tags: ["soft", "goat-sheep", "sheep", "flavored"],
  },
  {
    name: "Tabor",
    price: "30 ₪",
    unit: "piece",
    image: "assets/products/tabor.jpg",
    style: "Small-format cheese",
    tags: ["goat-sheep", "local"],
  },
  {
    name: "Mini Goat Cheese",
    price: null,
    image: "assets/products/mini-goat-cheese.jpg",
    style: "Mini goat cheese",
    tags: ["goat-sheep", "goat", "soft"],
  },
  {
    name: "Israeli Truffle Camembert",
    price: "260 ₪",
    image: "assets/products/israeli-truffle-camembert.jpg",
    style: "Local truffle camembert",
    tags: ["soft", "truffle", "local"],
  },
  {
    name: "Rotterdam Goat",
    price: "190 ₪",
    image: "assets/products/rotterdam-goat.jpg",
    style: "Dutch goat cheese",
    tags: ["dutch", "goat-sheep", "goat"],
  },
  {
    name: "Nanny's English Cheddar",
    price: "150 ₪",
    image: "assets/products/nannys-english-cheddar.jpg",
    style: "English cheddar",
    tags: ["aged"],
  },
  {
    name: "Goat Camembert",
    price: "280 ₪",
    image: "assets/products/goat-camembert.jpg",
    style: "Goat camembert",
    tags: ["soft", "goat-sheep", "goat"],
  },
  {
    name: "Tomme au Poivre",
    price: "170 ₪",
    image: "assets/products/tomme-au-poivre.jpg",
    style: "Pepper tomme",
    tags: ["flavored", "aged"],
  },
  {
    name: "Valençay",
    price: "210 ₪",
    image: "assets/products/valencay.jpg",
    style: "French goat cheese",
    tags: ["goat-sheep", "goat", "french"],
  },
  {
    name: "Corsica",
    price: "210 ₪",
    image: "assets/products/corsica.jpg",
    style: "Specialty cheese",
    tags: ["goat-sheep", "aged"],
  },
  {
    name: "Edam",
    price: "190 ₪",
    image: "assets/products/edam.jpg",
    style: "Dutch table cheese",
    tags: ["dutch"],
  },
  {
    name: "Gouda",
    price: "140 ₪",
    image: "assets/products/gouda.jpg",
    style: "Dutch classic",
    tags: ["dutch"],
  },
  {
    name: "Goat Gouda",
    price: "160 ₪",
    image: "assets/products/goat-gouda.jpg",
    style: "Goat milk Gouda",
    tags: ["dutch", "goat-sheep", "goat"],
  },
  {
    name: "Gouda with Cumin",
    price: "150 ₪",
    image: "assets/products/gouda-with-cumin.jpg",
    style: "Cumin flavored Gouda",
    tags: ["dutch", "flavored"],
  },
  {
    name: "Gouda with Truffle",
    price: "240 ₪",
    image: "assets/products/gouda-with-truffle.jpg",
    style: "Truffle Gouda",
    tags: ["dutch", "truffle"],
  },
  {
    name: "Rotterdam Classic",
    price: "170 ₪",
    image: "assets/products/rotterdam-classic.jpg",
    style: "Classic Dutch cheese",
    tags: ["dutch"],
  },
  {
    name: "Mozzarella",
    price: "19 ₪",
    image: "assets/products/mozzarella.jpg",
    style: "Fresh mozzarella",
    tags: ["fresh", "italian"],
  },
  {
    name: "Mozzarella Mini",
    price: "24 ₪",
    image: "assets/products/mozzarella-mini.jpg",
    style: "Mini fresh mozzarella",
    tags: ["fresh", "italian"],
  },
  {
    name: "Burrata boxed",
    price: "35 ₪",
    image: "assets/products/burrata-boxed.jpg",
    style: "Boxed burrata",
    tags: ["fresh", "italian"],
  },
  {
    name: "Burrata farm/local",
    price: "35 ₪",
    image: "assets/products/burrata-farm-local.jpg",
    style: "Local farm burrata",
    tags: ["fresh", "local"],
  },
  {
    name: "Mascarpone",
    price: "35 ₪",
    image: "assets/products/mascarpone.jpg",
    style: "Fresh cream cheese",
    tags: ["fresh", "italian"],
  },
  {
    name: "Emmental grated",
    price: "22 ₪",
    image: "assets/products/emmental-grated.jpg",
    style: "Grated Emmental",
    tags: ["alpine", "swiss"],
  },
];

const interfaceText = {
  he: {
    lang: "he",
    dir: "rtl",
    title: "Bernard La Fromagerie | קטלוג גבינות",
    description: "קטלוג הגבינות של Bernard La Fromagerie עם גבינות צרפתיות, שווייצריות, הולנדיות, איטלקיות ומקומיות.",
    brandAria: "דף הבית של Bernard La Fromagerie",
    languageSelector: "בחירת שפה",
    navContact: "יצירת קשר",
    heroEyebrow: "דלפק גבינות מתמחה",
    heroCopy: "מבחר גבינות איכות מצרפת, הולנד, שווייץ, איטליה וישראל, לצד אפשרויות טריות לאירוח, מתנות וארוחות בבית.",
    primaryActions: "פעולות עיקריות",
    viewCatalog: "לצפייה בקטלוג",
    orderWhatsapp: "הזמנה ב-WhatsApp",
    catalogSummary: "מבט מהיר על המבחר",
    summaryItems: "גבינות במבחר",
    summaryPrice: "טווח מחירים",
    summaryCountries: "שפות באתר",
    catalogEyebrow: "קטלוג",
    catalogTitle: "הגבינות בחנות",
    catalogCopy: "מצאו גבינות לפי שם, סגנון או משפחה. המחירים מוצגים בשקלים ועשויים להשתנות לפי זמינות ומשקל.",
    catalogControls: "פקדי קטלוג",
    searchLabel: "חיפוש גבינה",
    searchPlaceholder: "חיפוש לפי שם, סגנון או תגית",
    filterByStyle: "סינון לפי סגנון",
    emptyState: "אין גבינות שמתאימות לחיפוש הזה.",
    hostingEyebrow: "אירוח",
    hostingTitle: "בנו פלטת גבינות לפי הרגע",
    hostingDinnerTitle: "לארוחות ערב",
    hostingDinnerCopy: "שלבו גבינה רכה אחת, גבינה קשה מיושנת אחת, גבינה כחולה אחת ואפשרות טרייה אחת לפלטה מאוזנת.",
    hostingGiftTitle: "למתנות",
    hostingGiftCopy: "בחרו שמות פרימיום כמו Comté, Brie Truffe, Roquefort, Gruyère או Gouda עם כמהין למבחר מיוחד וקומפקטי.",
    hostingEverydayTitle: "ליומיום",
    hostingEverydayCopy: "שמרו Gouda, Maasdam, Mozzarella, Burrata או Emmental מגוררת לכריכים, סלטים, פסטה וצלחות מהירות.",
    contactEyebrow: "ביקור והזמנות",
    contactTitle: "שריינו את הגבינות לפני ההגעה",
    contactCopy: "להזמנות ושמירת גבינות, שלחו הודעה ב-WhatsApp לפני ההגעה.",
    websiteLabel: "אתר",
    footerNote: "גבינות איכות לאירוח, מתנות ויום-יום",
    productTags: "תגיות מוצר",
    askInShop: "לשאול בחנות",
    piece: "יחידה",
    count: (shown, total) => `${shown} מתוך ${total} גבינות מוצגות`,
    filters: {
      all: "הכול",
      soft: "רכות",
      blue: "כחולות",
      "goat-sheep": "עזים וצאן",
      alpine: "אלפיניות",
      dutch: "הולנדיות",
      fresh: "טריות",
      truffle: "כמהין",
    },
    tags: {
      aged: "מיושנת",
      alpine: "אלפינית",
      blue: "כחולה",
      dutch: "הולנדית",
      flavored: "מתובלת",
      french: "צרפתית",
      fresh: "טרייה",
      goat: "עיזים",
      "goat-sheep": "עזים וצאן",
      italian: "איטלקית",
      local: "מקומית",
      sheep: "כבשים",
      soft: "רכה",
      swiss: "שווייצרית",
      truffle: "כמהין",
    },
    styles: {
      "Creamy blue cheese": "גבינה כחולה קרמית",
      "Farmhouse brie": "ברי כפרי",
      "Roquefort blue": "רוקפור כחולה",
      "Sharp Italian blue": "גבינה כחולה איטלקית פיקנטית",
      "Truffle brie": "ברי עם כמהין",
      "Swiss melting cheese": "גבינה שווייצרית להתכה",
      "Silky soft cheese": "גבינה רכה ומשיית",
      "Classic blue cheese": "גבינה כחולה קלאסית",
      "Sweet nutty slices": "גבינה אגוזית מתקתקה",
      "Rustic brie": "ברי כפרית",
      "French tomme": "טום צרפתית",
      "Aged alpine cheese": "גבינה אלפינית מיושנת",
      "Aged Dutch cheese": "גבינה הולנדית מיושנת",
      "Intense Dutch cheese": "גבינה הולנדית עשירה",
      "Truffle Dutch cheese": "גבינה הולנדית עם כמהין",
      "Swiss alpine cheese": "גבינה אלפינית שווייצרית",
      "Pepper flavored cheese": "גבינה עם פלפל",
      "Spanish sheep cheese": "גבינת כבשים ספרדית",
      "Goat cheese log": "גליל גבינת עיזים",
      "Soft washed-rind cheese": "גבינה רכה עם קליפה שטופה",
      "Sheep camembert": "קממבר כבשים",
      "Small-format cheese": "גבינה קטנה",
      "Mini goat cheese": "גבינת עיזים מיני",
      "Local truffle camembert": "קממבר ישראלי עם כמהין",
      "Dutch goat cheese": "גבינת עיזים הולנדית",
      "English cheddar": "צ'דר אנגלי",
      "Goat camembert": "קממבר עיזים",
      "Pepper tomme": "טום עם פלפל",
      "French goat cheese": "גבינת עיזים צרפתית",
      "Specialty cheese": "גבינה מיוחדת",
      "Dutch table cheese": "גבינה הולנדית לשולחן",
      "Dutch classic": "קלאסיקה הולנדית",
      "Goat milk Gouda": "גאודה מחלב עיזים",
      "Cumin flavored Gouda": "גאודה עם כמון",
      "Truffle Gouda": "גאודה עם כמהין",
      "Classic Dutch cheese": "גבינה הולנדית קלאסית",
      "Fresh mozzarella": "מוצרלה טרייה",
      "Mini fresh mozzarella": "מיני מוצרלה טרייה",
      "Boxed burrata": "בוראטה באריזה",
      "Local farm burrata": "בוראטה מקומית מהמשק",
      "Fresh cream cheese": "גבינה שמנת טרייה",
      "Grated Emmental": "אמנטל מגוררת",
    },
  },
  en: {
    lang: "en",
    dir: "ltr",
    title: "Bernard La Fromagerie | Cheese Catalog",
    description: "Bernard La Fromagerie cheese catalog with French, Swiss, Dutch, Italian and local specialties.",
    brandAria: "Bernard La Fromagerie home",
    languageSelector: "Language selector",
    navContact: "Contact",
    heroEyebrow: "Specialty cheese counter",
    heroCopy: "A curated selection of fine cheeses from France, the Netherlands, Switzerland, Italy and Israel, with fresh choices for hosting, gifts and everyday meals.",
    primaryActions: "Primary actions",
    viewCatalog: "View catalog",
    orderWhatsapp: "Order by WhatsApp",
    catalogSummary: "Selection at a glance",
    summaryItems: "cheeses available",
    summaryPrice: "price range",
    summaryCountries: "site languages",
    catalogEyebrow: "Catalog",
    catalogTitle: "Cheeses in the shop",
    catalogCopy: "Find cheeses by name, style or family. Prices are shown in shekels and may vary by availability and weight.",
    catalogControls: "Catalog controls",
    searchLabel: "Search cheese",
    searchPlaceholder: "Search by name, style or tag",
    filterByStyle: "Filter by style",
    emptyState: "No cheeses match this search.",
    hostingEyebrow: "Hosting",
    hostingTitle: "Build a cheese board around the moment",
    hostingDinnerTitle: "For dinners",
    hostingDinnerCopy: "Combine one soft cheese, one aged hard cheese, one blue cheese and one fresh option for a balanced board.",
    hostingGiftTitle: "For gifts",
    hostingGiftCopy: "Choose premium names like Comté, Brie Truffe, Roquefort, Gruyère or a truffle Gouda for a compact specialty selection.",
    hostingEverydayTitle: "For everyday",
    hostingEverydayCopy: "Keep Gouda, Maasdam, Mozzarella, Burrata or Emmental grated ready for sandwiches, salads, pasta and quick plates.",
    contactEyebrow: "Visit and orders",
    contactTitle: "Reserve your cheeses before you arrive",
    contactCopy: "For orders and cheese reservations, send a WhatsApp message before you arrive.",
    websiteLabel: "Website",
    footerNote: "Fine cheeses for hosting, gifts and everyday meals",
    productTags: "Product tags",
    askInShop: "Ask in shop",
    piece: "piece",
    count: (shown, total) => `${shown} of ${total} cheeses shown`,
    filters: {
      all: "All",
      soft: "Soft",
      blue: "Blue",
      "goat-sheep": "Goat & sheep",
      alpine: "Alpine",
      dutch: "Dutch",
      fresh: "Fresh",
      truffle: "Truffle",
    },
    tags: {
      aged: "Aged",
      alpine: "Alpine",
      blue: "Blue",
      dutch: "Dutch",
      flavored: "Flavored",
      french: "French",
      fresh: "Fresh",
      goat: "Goat",
      "goat-sheep": "Goat & sheep",
      italian: "Italian",
      local: "Local",
      sheep: "Sheep",
      soft: "Soft",
      swiss: "Swiss",
      truffle: "Truffle",
    },
    styles: {},
  },
  fr: {
    lang: "fr",
    dir: "ltr",
    title: "Bernard La Fromagerie | Catalogue de fromages",
    description: "Catalogue de fromages de Bernard La Fromagerie avec des spécialités françaises, suisses, hollandaises, italiennes et locales.",
    brandAria: "Accueil Bernard La Fromagerie",
    languageSelector: "Sélecteur de langue",
    navContact: "Contact",
    heroEyebrow: "Comptoir de fromages de spécialité",
    heroCopy: "Une sélection de fromages de qualité de France, des Pays-Bas, de Suisse, d'Italie et d'Israël, avec des options fraîches pour recevoir, offrir et cuisiner.",
    primaryActions: "Actions principales",
    viewCatalog: "Voir le catalogue",
    orderWhatsapp: "Commander sur WhatsApp",
    catalogSummary: "La sélection en bref",
    summaryItems: "fromages disponibles",
    summaryPrice: "fourchette de prix",
    summaryCountries: "langues du site",
    catalogEyebrow: "Catalogue",
    catalogTitle: "Les fromages en boutique",
    catalogCopy: "Trouvez les fromages par nom, style ou famille. Les prix sont indiqués en shekels et peuvent varier selon la disponibilité et le poids.",
    catalogControls: "Contrôles du catalogue",
    searchLabel: "Rechercher un fromage",
    searchPlaceholder: "Recherche par nom, style ou étiquette",
    filterByStyle: "Filtrer par style",
    emptyState: "Aucun fromage ne correspond à cette recherche.",
    hostingEyebrow: "Réception",
    hostingTitle: "Composez un plateau de fromages selon l'occasion",
    hostingDinnerTitle: "Pour les dîners",
    hostingDinnerCopy: "Associez un fromage à pâte molle, un fromage dur affiné, un bleu et une option fraîche pour un plateau équilibré.",
    hostingGiftTitle: "Pour les cadeaux",
    hostingGiftCopy: "Choisissez des références premium comme Comté, Brie Truffe, Roquefort, Gruyère ou une Gouda à la truffe pour une sélection spéciale et compacte.",
    hostingEverydayTitle: "Pour le quotidien",
    hostingEverydayCopy: "Gardez Gouda, Maasdam, Mozzarella, Burrata ou Emmental râpé pour les sandwichs, salades, pâtes et assiettes rapides.",
    contactEyebrow: "Visite et commandes",
    contactTitle: "Réservez vos fromages avant votre arrivée",
    contactCopy: "Pour commander ou réserver des fromages, envoyez un message WhatsApp avant votre arrivée.",
    websiteLabel: "Site web",
    footerNote: "Fromages de qualité pour recevoir, offrir et savourer au quotidien",
    productTags: "Étiquettes produit",
    askInShop: "Demander en boutique",
    piece: "pièce",
    count: (shown, total) => `${shown} fromages sur ${total} affichés`,
    filters: {
      all: "Tous",
      soft: "Pâtes molles",
      blue: "Bleus",
      "goat-sheep": "Chèvre et brebis",
      alpine: "Alpins",
      dutch: "Hollandais",
      fresh: "Frais",
      truffle: "Truffe",
    },
    tags: {
      aged: "Affiné",
      alpine: "Alpin",
      blue: "Bleu",
      dutch: "Hollandais",
      flavored: "Aromatisé",
      french: "Français",
      fresh: "Frais",
      goat: "Chèvre",
      "goat-sheep": "Chèvre et brebis",
      italian: "Italien",
      local: "Local",
      sheep: "Brebis",
      soft: "Pâte molle",
      swiss: "Suisse",
      truffle: "Truffe",
    },
    styles: {
      "Creamy blue cheese": "Fromage bleu crémeux",
      "Farmhouse brie": "Brie fermier",
      "Roquefort blue": "Roquefort bleu",
      "Sharp Italian blue": "Bleu italien corsé",
      "Truffle brie": "Brie à la truffe",
      "Swiss melting cheese": "Fromage suisse à fondre",
      "Silky soft cheese": "Fromage doux et fondant",
      "Classic blue cheese": "Fromage bleu classique",
      "Sweet nutty slices": "Fromage doux aux notes de noisette",
      "Rustic brie": "Brie rustique",
      "French tomme": "Tomme française",
      "Aged alpine cheese": "Fromage alpin affiné",
      "Aged Dutch cheese": "Fromage hollandais affiné",
      "Intense Dutch cheese": "Fromage hollandais intense",
      "Truffle Dutch cheese": "Fromage hollandais à la truffe",
      "Swiss alpine cheese": "Fromage alpin suisse",
      "Pepper flavored cheese": "Fromage au poivre",
      "Spanish sheep cheese": "Fromage de brebis espagnol",
      "Goat cheese log": "Bûche de chèvre",
      "Soft washed-rind cheese": "Fromage à pâte molle et croûte lavée",
      "Sheep camembert": "Camembert de brebis",
      "Small-format cheese": "Petit fromage",
      "Mini goat cheese": "Mini fromage de chèvre",
      "Local truffle camembert": "Camembert local à la truffe",
      "Dutch goat cheese": "Fromage de chèvre hollandais",
      "English cheddar": "Cheddar anglais",
      "Goat camembert": "Camembert de chèvre",
      "Pepper tomme": "Tomme au poivre",
      "French goat cheese": "Fromage de chèvre français",
      "Specialty cheese": "Fromage de spécialité",
      "Dutch table cheese": "Fromage hollandais de table",
      "Dutch classic": "Classique hollandais",
      "Goat milk Gouda": "Gouda au lait de chèvre",
      "Cumin flavored Gouda": "Gouda au cumin",
      "Truffle Gouda": "Gouda à la truffe",
      "Classic Dutch cheese": "Fromage hollandais classique",
      "Fresh mozzarella": "Mozzarella fraîche",
      "Mini fresh mozzarella": "Mini mozzarella fraîche",
      "Boxed burrata": "Burrata en boîte",
      "Local farm burrata": "Burrata fermière locale",
      "Fresh cream cheese": "Fromage frais crémeux",
      "Grated Emmental": "Emmental râpé",
    },
  },
  ru: {
    lang: "ru",
    dir: "ltr",
    title: "Bernard La Fromagerie | Каталог сыров",
    description: "Каталог сыров Bernard La Fromagerie: французские, швейцарские, голландские, итальянские и местные сыры.",
    brandAria: "Главная страница Bernard La Fromagerie",
    languageSelector: "Выбор языка",
    navContact: "Контакты",
    heroEyebrow: "Специализированная сырная витрина",
    heroCopy: "Подборка качественных сыров из Франции, Нидерландов, Швейцарии, Италии и Израиля, а также свежие варианты для гостей, подарков и домашней кухни.",
    primaryActions: "Основные действия",
    viewCatalog: "Смотреть каталог",
    orderWhatsapp: "Заказать в WhatsApp",
    catalogSummary: "Коротко о выборе",
    summaryItems: "сыров в наличии",
    summaryPrice: "диапазон цен",
    summaryCountries: "языка сайта",
    catalogEyebrow: "Каталог",
    catalogTitle: "Сыры в магазине",
    catalogCopy: "Ищите сыры по названию, стилю или категории. Цены указаны в шекелях и могут меняться в зависимости от наличия и веса.",
    catalogControls: "Управление каталогом",
    searchLabel: "Поиск сыра",
    searchPlaceholder: "Поиск по названию, стилю или тегу",
    filterByStyle: "Фильтр по стилю",
    emptyState: "По этому поиску сыры не найдены.",
    hostingEyebrow: "Для гостей",
    hostingTitle: "Соберите сырную тарелку под нужный момент",
    hostingDinnerTitle: "Для ужинов",
    hostingDinnerCopy: "Сочетайте один мягкий сыр, один выдержанный твердый сыр, один голубой сыр и один свежий вариант для сбалансированной тарелки.",
    hostingGiftTitle: "Для подарков",
    hostingGiftCopy: "Выберите премиальные позиции вроде Comté, Brie Truffe, Roquefort, Gruyère или трюфельной Gouda для компактной специальной подборки.",
    hostingEverydayTitle: "На каждый день",
    hostingEverydayCopy: "Держите Gouda, Maasdam, Mozzarella, Burrata или тертый Emmental для сэндвичей, салатов, пасты и быстрых тарелок.",
    contactEyebrow: "Визит и заказы",
    contactTitle: "Зарезервируйте сыры до приезда",
    contactCopy: "Для заказа или резервирования сыров отправьте сообщение в WhatsApp перед приездом.",
    websiteLabel: "Сайт",
    footerNote: "Качественные сыры для гостей, подарков и каждый день",
    productTags: "Теги продукта",
    askInShop: "Уточнить в магазине",
    piece: "шт.",
    count: (shown, total) => `Показано ${shown} из ${total} сыров`,
    filters: {
      all: "Все",
      soft: "Мягкие",
      blue: "Голубые",
      "goat-sheep": "Козьи и овечьи",
      alpine: "Альпийские",
      dutch: "Голландские",
      fresh: "Свежие",
      truffle: "Трюфель",
    },
    tags: {
      aged: "Выдержанный",
      alpine: "Альпийский",
      blue: "Голубой",
      dutch: "Голландский",
      flavored: "С добавками",
      french: "Французский",
      fresh: "Свежий",
      goat: "Козий",
      "goat-sheep": "Козий и овечий",
      italian: "Итальянский",
      local: "Местный",
      sheep: "Овечий",
      soft: "Мягкий",
      swiss: "Швейцарский",
      truffle: "Трюфель",
    },
    styles: {
      "Creamy blue cheese": "Кремовый голубой сыр",
      "Farmhouse brie": "Фермерский бри",
      "Roquefort blue": "Рокфор с голубой плесенью",
      "Sharp Italian blue": "Пикантный итальянский голубой сыр",
      "Truffle brie": "Бри с трюфелем",
      "Swiss melting cheese": "Швейцарский сыр для плавления",
      "Silky soft cheese": "Нежный мягкий сыр",
      "Classic blue cheese": "Классический голубой сыр",
      "Sweet nutty slices": "Сладковатый ореховый сыр",
      "Rustic brie": "Деревенский бри",
      "French tomme": "Французский том",
      "Aged alpine cheese": "Выдержанный альпийский сыр",
      "Aged Dutch cheese": "Выдержанный голландский сыр",
      "Intense Dutch cheese": "Насыщенный голландский сыр",
      "Truffle Dutch cheese": "Голландский сыр с трюфелем",
      "Swiss alpine cheese": "Швейцарский альпийский сыр",
      "Pepper flavored cheese": "Сыр с перцем",
      "Spanish sheep cheese": "Испанский овечий сыр",
      "Goat cheese log": "Рулет из козьего сыра",
      "Soft washed-rind cheese": "Мягкий сыр с мытой коркой",
      "Sheep camembert": "Овечий камамбер",
      "Small-format cheese": "Небольшой сыр",
      "Mini goat cheese": "Мини-козий сыр",
      "Local truffle camembert": "Местный камамбер с трюфелем",
      "Dutch goat cheese": "Голландский козий сыр",
      "English cheddar": "Английский чеддер",
      "Goat camembert": "Козий камамбер",
      "Pepper tomme": "Том с перцем",
      "French goat cheese": "Французский козий сыр",
      "Specialty cheese": "Особый сыр",
      "Dutch table cheese": "Голландский столовый сыр",
      "Dutch classic": "Голландская классика",
      "Goat milk Gouda": "Гауда из козьего молока",
      "Cumin flavored Gouda": "Гауда с тмином",
      "Truffle Gouda": "Гауда с трюфелем",
      "Classic Dutch cheese": "Классический голландский сыр",
      "Fresh mozzarella": "Свежая моцарелла",
      "Mini fresh mozzarella": "Мини-моцарелла",
      "Boxed burrata": "Буррата в упаковке",
      "Local farm burrata": "Местная фермерская буррата",
      "Fresh cream cheese": "Свежий сливочный сыр",
      "Grated Emmental": "Тертый эмменталь",
    },
  },
};

interfaceText.en.styles = Object.fromEntries(products.map((product) => [product.style, product.style]));

const grid = document.querySelector("#product-grid");
const count = document.querySelector("#catalog-count");
const empty = document.querySelector("#empty-state");
const search = document.querySelector("#catalog-search");
const filterGroup = document.querySelector("#filter-group");
const languageButtons = document.querySelectorAll(".language-button");

let activeFilter = "all";
let currentLanguage = "he";

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentText() {
  return interfaceText[currentLanguage];
}

function translateStyle(style) {
  return currentText().styles[style] || style;
}

function translateTag(tag) {
  return currentText().tags[tag] || tag;
}

function formatPrice(product) {
  if (!product.price) return currentText().askInShop;
  if (product.unit === "piece") return `${product.price} / ${currentText().piece}`;
  return product.price;
}

function applyStaticTranslations() {
  const text = currentText();
  document.documentElement.lang = text.lang;
  document.documentElement.dir = text.dir;
  document.title = text.title;
  document.querySelector('meta[name="description"]').setAttribute("content", text.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAria]);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", text[element.dataset.i18nPlaceholder]);
  });

  filterGroup.querySelectorAll("[data-filter]").forEach((button) => {
    button.textContent = text.filters[button.dataset.filter];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function productMatches(product, query) {
  if (!query) return true;
  const text = currentText();
  const haystack = [
    product.name,
    formatPrice(product),
    product.style,
    translateStyle(product.style),
    ...product.tags.map((tag) => translateTag(tag)),
    ...product.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function productInFilter(product) {
  return activeFilter === "all" || product.tags.includes(activeFilter);
}

function renderProducts() {
  const text = currentText();
  const query = search.value.trim().toLowerCase();
  const filtered = products.filter((product) => productInFilter(product) && productMatches(product, query));

  grid.innerHTML = filtered
    .map((product) => {
      const name = escapeHTML(product.name);
      const media = `<img src="${escapeHTML(product.image)}" alt="${name}" loading="lazy">`;

      const tags = product.tags
        .slice(0, 3)
        .map((tag) => `<span class="tag">${escapeHTML(translateTag(tag))}</span>`)
        .join("");

      return `
        <article class="product-card">
          <div class="product-media">
            ${media}
          </div>
          <div class="product-body">
            <div class="product-topline">
              <h3>${name}</h3>
              <span class="price">${escapeHTML(formatPrice(product))}</span>
            </div>
            <p class="product-style">${escapeHTML(translateStyle(product.style))}</p>
            <div class="tag-list" aria-label="${escapeHTML(text.productTags)}">${tags}</div>
          </div>
        </article>
      `;
    })
    .join("");

  count.textContent = text.count(filtered.length, products.length);
  empty.hidden = filtered.length > 0;
}

function setLanguage(language) {
  currentLanguage = language;
  applyStaticTranslations();
  renderProducts();
}

search.addEventListener("input", renderProducts);

filterGroup.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  filterGroup.querySelectorAll(".filter-button").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  renderProducts();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage("he");
