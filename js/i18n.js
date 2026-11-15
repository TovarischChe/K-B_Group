
const DEFAULT_LANG = 'de';
const SUPPORTED_LANGS = ['de', 'en', 'uk', 'ru'];

const TRANSLATIONS = {

    'meta.index.title': {
        de: 'K&B Design Group | Korpusmöbel nach Maß in Grafing bei München',
        en: 'K&B Design Group | Bespoke cabinet furniture in Grafing bei München',
        uk: 'K&B Design Group | Корпусні меблі на замовлення в Grafing bei München',
        ru: 'K&B Design Group | Корпусная мебель на заказ в Grafing bei München'
    },
    'meta.index.desc': {
        de: 'Designer-Korpusmöbel nach Maß: Küchen, Schränke, Ankleiden, Möbel für Zuhause und Unternehmen. Grafing bei München.',
        en: 'Bespoke designer cabinet furniture: kitchens, wardrobes, walk-in closets, furniture for home and business. Grafing bei München.',
        uk: 'Дизайнерські корпусні меблі на замовлення: кухні, шафи, гардеробні, меблі для дому та бізнесу. Grafing bei München.',
        ru: 'Дизайнерская корпусная мебель на заказ: кухни, шкафы, гардеробные, мебель для дома и бизнеса. Grafing bei München.'
    },
    'meta.projects.title': {
        de: 'Projekte | K&B Design Group',
        en: 'Projects | K&B Design Group',
        uk: 'Проєкти | K&B Design Group',
        ru: 'Проекты | K&B Design Group'
    },
    'meta.projects.desc': {
        de: 'Portfolio: Küchen, Schränke und Ankleiden, Wohn- und Büromöbel.',
        en: 'Portfolio: kitchens, wardrobes and walk-in closets, home and business furniture.',
        uk: 'Портфоліо: кухні, шафи та гардеробні, меблі для дому та бізнесу.',
        ru: 'Портфолио: кухни, шкафы и гардеробные, мебель для дома и бизнеса.'
    },
    'meta.about.title': {
        de: 'Über uns | K&B Design Group',
        en: 'About us | K&B Design Group',
        uk: 'Про студію | K&B Design Group',
        ru: 'О студии | K&B Design Group'
    },
    'meta.about.desc': {
        de: 'Über das Studio: Laser-Aufmaß, 3D-Planung, eigene Werkstatt und Garantien.',
        en: 'About the studio: laser measurement, 3D design, our own workshop and guarantees.',
        uk: 'Про студію: лазерний замір, 3D-проєктування, власний цех і гарантії.',
        ru: 'О студии: лазерный замер, 3D-проектирование, собственный цех и гарантии.'
    },
    'meta.services.title': {
        de: 'Leistungen | K&B Design Group',
        en: 'Services | K&B Design Group',
        uk: 'Послуги | K&B Design Group',
        ru: 'Услуги | K&B Design Group'
    },
    'meta.services.desc': {
        de: 'Küchen, Schränke und Ankleiden, Wohn- und Büromöbel nach individuellem Entwurf.',
        en: 'Kitchens, wardrobes and walk-in closets, home and business furniture to individual designs.',
        uk: 'Кухні, шафи та гардеробні, меблі для дому та бізнесу за індивідуальним проєктом.',
        ru: 'Кухни, шкафы и гардеробные, мебель для дома и бизнеса по индивидуальному проекту.'
    },
    'meta.process.title': {
        de: 'Ablauf | K&B Design Group',
        en: 'Our process | K&B Design Group',
        uk: 'Процес роботи | K&B Design Group',
        ru: 'Процесс работы | K&B Design Group'
    },
    'meta.process.desc': {
        de: 'Arbeitsschritte: Anfrage, Aufmaß, Planung, Fertigung, Montage.',
        en: 'Project stages: request, measurement, design, manufacturing, installation.',
        uk: 'Етапи роботи: заявка, замір, проєкт, виробництво, монтаж.',
        ru: 'Этапы работы: заявка, замер, проект, производство, монтаж.'
    },
    'meta.contacts.title': {
        de: 'Kontakt | K&B Design Group',
        en: 'Contacts | K&B Design Group',
        uk: 'Контакти | K&B Design Group',
        ru: 'Контакты | K&B Design Group'
    },
    'meta.contacts.desc': {
        de: 'Adresse, Telefon und Messenger von K&B Design Group in Grafing bei München.',
        en: 'Address, phone and messengers of K&B Design Group in Grafing bei München.',
        uk: 'Адреса, телефон і месенджери K&B Design Group у Grafing bei München.',
        ru: 'Адрес, телефон и мессенджеры K&B Design Group в Grafing bei München.'
    },

    /* ---------- Меню ---------- */
    'nav.home':     { de: 'Startseite', en: 'Home',        uk: 'Головна',        ru: 'Главная' },
    'nav.projects': { de: 'Projekte',   en: 'Projects',    uk: 'Проєкти',        ru: 'Проекты' },
    'nav.about':    { de: 'Über uns',   en: 'About us',    uk: 'Про студію',     ru: 'О студии' },
    'nav.services': { de: 'Leistungen', en: 'Services',    uk: 'Послуги',        ru: 'Услуги' },
    'nav.process':  { de: 'Ablauf',     en: 'Our process', uk: 'Процес роботи',  ru: 'Процесс работы' },
    'nav.contacts': { de: 'Kontakt',    en: 'Contacts',    uk: 'Контакти',       ru: 'Контакты' },

    /* ---------- Подписи для кнопок-иконок (для экранных дикторов) ---------- */
    'aria.menu':      { de: 'Menü',             en: 'Menu',            uk: 'Меню',          ru: 'Меню' },
    'aria.search':    { de: 'Suche',            en: 'Search',          uk: 'Пошук',         ru: 'Поиск' },
    'aria.profile':   { de: 'Profil',           en: 'Profile',         uk: 'Профіль',       ru: 'Профиль' },
    'aria.favorites': { de: 'Merkliste',        en: 'Favourites',      uk: 'Обране',        ru: 'Избранное' },
    'aria.cart':      { de: 'Warenkorb',        en: 'Cart',            uk: 'Кошик',         ru: 'Корзина' },
    'aria.lang':      { de: 'Sprache wählen',   en: 'Choose language', uk: 'Обрати мову',   ru: 'Выбрать язык' },
    'aria.close':     { de: 'Schließen',        en: 'Close',           uk: 'Закрити',       ru: 'Закрыть' },
    'aria.prev':      { de: 'Zurück',           en: 'Previous',        uk: 'Назад',         ru: 'Назад' },
    'aria.next':      { de: 'Weiter',           en: 'Next',            uk: 'Вперед',        ru: 'Вперёд' },
    'aria.homeLogo':  { de: 'Zur Startseite',   en: 'To home page',    uk: 'На головну',    ru: 'На главную' },

    'footer.rights': {
        de: 'Alle Rechte vorbehalten.',
        en: 'All rights reserved.',
        uk: 'Усі права захищені.',
        ru: 'Все права защищены.'
    },
    'footer.values': {
        de: 'Individualität • Präzision • Qualität',
        en: 'Individuality • Precision • Quality',
        uk: 'Індивідуальність • Точність • Якість',
        ru: 'Индивидуальность • Точность • Качество'
    },

    'cta.consult': {
        de: 'Beratung anfordern ↗',
        en: 'Get a consultation ↗',
        uk: 'Отримати консультацію ↗',
        ru: 'Получить консультацию ↗'
    },
    'modal.title': {
        de: 'Beratung anfordern',
        en: 'Get a consultation',
        uk: 'Отримати консультацію',
        ru: 'Получить консультацию'
    },
    'modal.text': {
        de: 'Hinterlassen Sie Ihre Kontaktdaten – wir rufen Sie innerhalb von 15 Minuten zurück.',
        en: 'Leave your contact details and we will call you back within 15 minutes.',
        uk: 'Залиште контакти — передзвонимо протягом 15 хвилин.',
        ru: 'Оставьте контакты — перезвоним в течение 15 минут.'
    },
    'form.name':    { de: 'Ihr Name', en: 'Your name', uk: "Ваше ім'я", ru: 'Ваше имя' },
    'form.phone':   { de: 'Telefon',  en: 'Phone',     uk: 'Телефон',   ru: 'Телефон' },
    'form.message': {
        de: 'Was möchten Sie bestellen?',
        en: 'What would you like to order?',
        uk: 'Що бажаєте замовити?',
        ru: 'Что хотите заказать?'
    },
    'form.comment': { de: 'Kommentar', en: 'Comment', uk: 'Коментар', ru: 'Комментарий' },
    'form.category': {
        de: 'Was soll gefertigt werden?',
        en: 'What should we make?',
        uk: 'Що потрібно виготовити?',
        ru: 'Что нужно изготовить?'
    },
    'form.optKitchen':  { de: 'Küche', en: 'Kitchen', uk: 'Кухня', ru: 'Кухня' },
    'form.optWardrobe': {
        de: 'Schrank / Ankleide',
        en: 'Wardrobe / walk-in closet',
        uk: 'Шафа / гардеробна',
        ru: 'Шкаф / гардеробная'
    },
    'form.submit': { de: 'Anfrage senden', en: 'Send request', uk: 'Надіслати заявку', ru: 'Отправить заявку' },
    'form.success': {
        de: 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.',
        en: 'Thank you! We will contact you shortly.',
        uk: "Дякуємо! Ми скоро зв'яжемося з вами.",
        ru: 'Спасибо! Мы скоро свяжемся с вами.'
    },
    'form.agree': {
        de: 'Mit dem Absenden stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten zu.',
        en: 'By clicking the button, you agree to the processing of your personal data.',
        uk: 'Натискаючи кнопку, ви погоджуєтеся на обробку персональних даних.',
        ru: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных.'
    },

    'brand.tagline': {
        de: 'Korpusmöbel, speziell für Sie gefertigt',
        en: 'Cabinet furniture made especially for you',
        uk: 'Корпусні меблі, створені спеціально для вас',
        ru: 'Корпусная мебель, созданная специально для вас'
    },
    'brand.taglineSmall': {
        de: 'Individuelles Design, hochwertige Materialien und präzise Ausführung – abgestimmt auf Ihren Raum.',
        en: 'Individual design, quality materials and precise workmanship tailored to your space.',
        uk: 'Індивідуальний дизайн, якісні матеріали та точне виконання під особливості вашого простору.',
        ru: 'Индивидуальный дизайн, качественные материалы и точное исполнение под особенности вашего пространства.'
    },
    'hero.l1': {
        de: 'Designer-Korpusmöbel nach Maß',
        en: 'Bespoke designer cabinet furniture',
        uk: 'Дизайнерські корпусні меблі на замовлення',
        ru: 'Дизайнерская корпусная мебель на заказ'
    },
    'hero.l2': {
        de: 'Wir fertigen Möbel nach individuellem Entwurf –<br>von der Idee und dem Design bis zur Produktion und Montage.',
        en: 'We create furniture to individual designs —<br>from idea and design to production and installation.',
        uk: 'Створюємо меблі за індивідуальним проєктом<br>від ідеї та дизайну до виробництва й встановлення.',
        ru: 'Создаём мебель по индивидуальному проекту<br>от идеи и дизайна до производства и установки.'
    },
    'hero.l3': {
        de: 'Individualität. Präzision. Qualität.',
        en: 'Individuality. Precision. Quality.',
        uk: 'Індивідуальність. Точність. Якість.',
        ru: 'Индивидуальность. Точность. Качество.'
    },
    'hero.catalog': {
        de: 'Katalog<br>ansehen',
        en: 'View<br>catalogue',
        uk: 'Дивитися<br>каталог',
        ru: 'Смотреть<br>каталог'
    },
    'hero.catalogAlt': {
        de: 'Beispiel für ein Interieur',
        en: 'Interior example',
        uk: "Приклад інтер'єру",
        ru: 'Пример интерьера'
    },

    'cat.label': { de: 'Kategorien', en: 'Categories', uk: 'Категорії', ru: 'Категории' },
    'cat.slogan': {
        de: 'Planen · Fertigen · Montieren &nbsp;/&nbsp; Individuelle Lösungen',
        en: 'Design · Manufacture · Install &nbsp;/&nbsp; Custom solutions',
        uk: 'Проєктуємо · виготовляємо · встановлюємо &nbsp;/&nbsp; індивідуальні рішення',
        ru: 'Проектируем · изготавливаем · устанавливаем &nbsp;/&nbsp; индивидуальные решения'
    },
    'cat.kitchens': { de: 'Küchen', en: 'Kitchens', uk: 'Кухні', ru: 'Кухни' },
    'cat.wardrobes': {
        de: 'Schränke & Ankleiden',
        en: 'Wardrobes & walk-in closets',
        uk: 'Шафи та гардеробні',
        ru: 'Шкафы и гардеробные'
    },
    'cat.home':     { de: 'Wohnmöbel', en: 'Home furniture', uk: 'Меблі для дому', ru: 'Мебель для дома' },
    'cat.business': {
        de: 'Büro- & Geschäftsmöbel',
        en: 'Business furniture',
        uk: 'Меблі для бізнесу',
        ru: 'Мебель для бизнеса'
    },
    'cat.designKitchens': { de: 'Designerküchen', en: 'Signature kitchens', uk: 'Авторські кухні', ru: 'Авторские кухни' },
    'cat.closetSystems': {
        de: 'Ankleidesysteme',
        en: 'Walk-in closet systems',
        uk: 'Гардеробні системи',
        ru: 'Гардеробные системы'
    },

    'steps.title': { de: 'Arbeitsschritte', en: 'How we work', uk: 'Етапи роботи', ru: 'Этапы работы' },
    'step1.title': { de: 'Anfrage', en: 'Request', uk: 'Заявка', ru: 'Заявка' },
    'step1.text': {
        de: 'Senden Sie eine Anfrage über die Website oder rufen Sie uns an.<br>Wir rufen innerhalb von 15 Minuten zurück, um Ihr Anliegen zu besprechen.',
        en: 'Leave a request on the website or give us a call.<br>We will call you back within 15 minutes to discuss your project.',
        uk: 'Залиште заявку на сайті або зателефонуйте нам.<br>Ми передзвонимо протягом 15 хвилин, щоб обговорити завдання.',
        ru: 'Оставьте заявку на сайте или позвоните нам.<br>Мы перезвоним в течение 15 минут, чтобы обсудить задачу.'
    },
    'step1.more': {
        de: 'Wir klären, welche Möbel Sie benötigen, ungefähre Maße, Termine und Budget. Gerne können Sie direkt Fotos des Raums oder eine Skizze schicken.',
        en: "We'll clarify what furniture you need, approximate dimensions, timing and budget. Feel free to send photos of the room or a sketch right away.",
        uk: 'Уточнимо, які меблі потрібні, орієнтовні розміри, терміни та бюджет. Можна одразу надіслати фото приміщення або ескіз.',
        ru: 'Уточним, какая мебель нужна, примерные размеры, сроки и бюджет. Можно сразу прислать фото помещения или эскиз.'
    },
    'step2.title': {
        de: 'Beratung & Aufmaß',
        en: 'Consultation & measurement',
        uk: 'Консультація та замір',
        ru: 'Консультация и замер'
    },
    'step2.text': {
        de: 'Wir kommen zu einem für Sie passenden Termin. Wir messen per Laser<br>und schlagen erste Entwürfe für die Raumaufteilung vor.',
        en: 'We visit at a time that suits you. We take laser measurements<br>and suggest the first layout sketches.',
        uk: 'Виїжджаємо у зручний для вас час. Робимо лазерний замір<br>і пропонуємо перші ескізи планування.',
        ru: 'Выезжаем в удобное для вас время. Делаем лазерный замер<br>и предлагаем первые наброски планировки.'
    },
    'step2.more': {
        de: 'Der Designer zeigt Ihnen Muster von Materialien, Fronten und Beschlägen direkt vor Ort.',
        en: 'The designer will show you samples of materials, fronts and fittings right on site.',
        uk: "Дизайнер покаже зразки матеріалів, фасадів і фурнітури прямо на об'єкті.",
        ru: 'Дизайнер покажет образцы материалов, фасадов и фурнитуры прямо на объекте.'
    },
    'step3.title': { de: 'Planung', en: 'Design', uk: 'Проєктування', ru: 'Проектирование' },
    'step3.text': {
        de: 'Wir erstellen ein detailliertes 3D-Projekt und Möbelzeichnungen unter Berücksichtigung<br>all Ihrer Wünsche und der Besonderheiten des Raums.',
        en: 'We develop a detailed 3D project and furniture drawings that take into account<br>all your wishes and the features of the room.',
        uk: 'Розробимо детальний 3D-проєкт і креслення меблів з урахуванням<br>усіх ваших побажань та особливостей приміщення.',
        ru: 'Разработаем детальный 3D-проект и чертежи мебели с учетом<br>всех ваших пожеланий и особенностей помещения.'
    },
    'step3.more': {
        de: 'Sie erhalten eine Visualisierung und einen genauen Kostenvoranschlag. Der Preis wird im Vertrag festgeschrieben.',
        en: 'You receive a visualisation and an exact quote. The price is fixed in the contract.',
        uk: 'Ви отримуєте візуалізацію та точний кошторис. Вартість фіксується в договорі.',
        ru: 'Вы получаете визуализацию и точную смету. Стоимость фиксируется в договоре.'
    },
    'step4.title': { de: 'Fertigung', en: 'Manufacturing', uk: 'Виготовлення', ru: 'Изготовление' },
    'step4.text': {
        de: 'Wir fertigen die Teile auf unseren eigenen Maschinen.<br>Auf Wunsch erhalten Sie Fotoberichte über den Fortschritt.',
        en: 'We manufacture the parts on our own equipment.<br>You receive photo reports on the process (optional).',
        uk: 'Запускаємо деталі у виробництво на власному обладнанні.<br>Ви отримуєте фотозвіт про процес (за бажанням).',
        ru: 'Запускаем детали в производство на своем оборудовании.<br>Вы получаете фотоотчет о процессе (опционально).'
    },
    'step4.more': {
        de: 'Die Qualitätskontrolle erfolgt in jeder Phase der Produktion.',
        en: 'Quality control is carried out at every stage of production.',
        uk: 'Контроль якості здійснюється на кожному етапі виробництва.',
        ru: 'Контроль качества осуществляется на каждом этапе производства.'
    },
    'step5.title': {
        de: 'Lieferung & Montage',
        en: 'Delivery & installation',
        uk: 'Доставка та встановлення',
        ru: 'Доставка и установка'
    },
    'step5.text': {
        de: 'Wir liefern und montieren am vereinbarten Tag. Wir entsorgen den Bauschutt<br>und führen die Endabnahme nach Checkliste durch.',
        en: 'We deliver and install on the agreed day. We remove construction debris<br>and carry out the final acceptance using a checklist.',
        uk: 'Привозимо та монтуємо в узгоджений день. Прибираємо будівельне<br>сміття і проводимо фінальне приймання за чек-листом.',
        ru: 'Привозим и монтируем в согласованный день. Убираем строительный<br>мусор и проводим финальную приемку по чек-листу.'
    },
    'step5.more': {
        de: 'Nach der Montage – Garantieservice und Justierung der Beschläge.',
        en: 'After installation — warranty service and adjustment of fittings.',
        uk: 'Після встановлення — гарантійне обслуговування та регулювання фурнітури.',
        ru: 'После установки — гарантийное обслуживание и регулировка фурнитуры.'
    },

    'contacts.title': {
        de: 'Kontakt & Adresse',
        en: 'Contacts & address',
        uk: 'Контакти та наша адреса',
        ru: 'Контакты и наш адрес'
    },
    'contacts.addressLabel': {
        de: 'Adresse & Standort',
        en: 'Address & location',
        uk: 'Адреса та локація',
        ru: 'Адрес и локация'
    },
    'contacts.region': {
        de: 'Bayern, Deutschland (Grafing)',
        en: 'Bavaria, Germany (Grafing)',
        uk: 'Баварія, Німеччина (Grafing)',
        ru: 'Бавария, Германия (Grafing)'
    },
    'contacts.phoneLabel': { de: 'Telefon', en: 'Phone', uk: 'Телефон', ru: 'Телефон' },
    'contacts.hours': {
        de: 'Mo – Fr: 09:00 – 18:00',
        en: 'Mon – Fri: 09:00 – 18:00',
        uk: 'Пн — Пт: 09:00 – 18:00',
        ru: 'Пн — Пт: 09:00 – 18:00'
    },
    'contacts.emailLabel':  { de: 'E-Mail', en: 'Email', uk: 'Електронна пошта', ru: 'Электронная почта' },
    'contacts.socialLabel': { de: 'Soziale Netzwerke', en: 'Social media', uk: 'Соціальні мережі', ru: 'Социальные сети' },
    'contacts.map': {
        de: 'Karte: Grafing bei München',
        en: 'Map: Grafing bei München',
        uk: 'Карта: Grafing bei München',
        ru: 'Карта: Grafing bei München'
    },
    'contacts.messengers': {
        de: 'Messenger & soziale Netzwerke',
        en: 'Messengers & social media',
        uk: 'Месенджери та соціальні мережі',
        ru: 'Мессенджеры и социальные сети'
    },
    'contacts.messengersText': {
        de: 'Kontaktieren Sie uns auf dem für Sie bequemsten Weg für eine schnelle Projektkalkulation.',
        en: 'Contact us in whatever way suits you for a quick project estimate.',
        uk: "Зв'яжіться з нами зручним способом для швидкого розрахунку проєкту.",
        ru: 'Свяжитесь с нами удобным способом для быстрого расчёта проекта.'
    },
    'contacts.writeUs': { de: 'Schreiben Sie uns', en: 'Write to us', uk: 'Напишіть нам', ru: 'Напишите нам' },
    'contacts.writeUsText': {
        de: 'Beschreiben Sie Ihre Aufgabe – wir erstellen eine vorläufige Kalkulation.',
        en: "Describe your task and we'll prepare a preliminary estimate.",
        uk: 'Опишіть завдання — підготуємо попередній розрахунок.',
        ru: 'Опишите задачу — подготовим предварительный расчёт.'
    },

    'about.heroLead': {
        de: 'Wir planen, fertigen und montieren Korpusmöbel nach individuellen Maßen.',
        en: 'We design, manufacture and install cabinet furniture to individual dimensions.',
        uk: 'Проєктуємо, виготовляємо та встановлюємо корпусні меблі за індивідуальними розмірами.',
        ru: 'Проектируем, изготавливаем и устанавливаем корпусную мебель по индивидуальным размерам.'
    },
    'about.title': {
        de: 'Individuelle Lösungen für Ihren Raum',
        en: 'Custom solutions for your space',
        uk: 'Індивідуальні рішення для вашого простору',
        ru: 'Индивидуальные решения для вашего пространства'
    },
    'feat1.title': { de: 'Laser-Aufmaß', en: 'Laser measurement', uk: 'Лазерний замір', ru: 'Лазерный замер' },
    'feat1.text': {
        de: 'Exakte Erfassung der Geometrie und Besonderheiten des Raums.',
        en: "Precise account of the room's geometry and features.",
        uk: 'Точний облік геометрії та особливостей приміщення.',
        ru: 'Точный учёт геометрии и особенностей помещения.'
    },
    'feat2.title': { de: '3D&#8209;Planung', en: '3D design', uk: '3D&#8209;проєктування', ru: '3D&#8209;проектирование' },
    'feat2.text': {
        de: 'Vollständige Visualisierung und genauer Kostenvoranschlag vor Arbeitsbeginn.',
        en: 'Full visualisation and an exact estimate before work begins.',
        uk: 'Повна візуалізація та точний кошторис до початку робіт.',
        ru: 'Полная визуализация и точная смета до начала работ.'
    },
    'feat3.title': { de: 'Eigene Werkstatt', en: 'Own workshop', uk: 'Власний цех', ru: 'Собственный цех' },
    'feat3.text': {
        de: 'Fertigung auf modernen automatisierten Maschinen.',
        en: 'Manufactured on modern automated equipment.',
        uk: 'Виготовлення на сучасному автоматизованому обладнанні.',
        ru: 'Изготовление на современном автоматизированном оборудовании.'
    },
    'about.bar1': {
        de: 'Reaktion auf Ihre Anfrage innerhalb von 15 Minuten',
        en: 'Response to your request within 15 minutes',
        uk: 'Відповідь на заявку протягом 15 хвилин',
        ru: 'Отклик на заявку в течение 15 минут'
    },
    'about.bar2': {
        de: 'Garantierte Termintreue',
        en: 'Guaranteed deadlines',
        uk: 'Гарантія дотримання термінів',
        ru: 'Гарантия соблюдения сроков'
    },
    'about.whoEyebrow': { de: 'Wer wir sind', en: 'Who we are', uk: 'Хто ми', ru: 'Кто мы' },
    'about.whoTitle': {
        de: 'Möbel, die für Sie entstehen',
        en: 'Furniture created for you',
        uk: 'Меблі, що створюються під вас',
        ru: 'Мебель, которая создаётся под вас'
    },
    'about.whoText1': {
        de: 'Wir sind K&amp;B Design Group – ein Studio für Korpusmöbel in Grafing bei München. Wir arbeiten mit Privatkunden, Innenarchitekten und Unternehmen.',
        en: 'We are K&amp;B Design Group, a cabinet furniture studio in Grafing bei München. We work with private clients, interior designers and businesses.',
        uk: "Ми — K&amp;B Design Group, студія корпусних меблів у Grafing bei München. Працюємо з приватними клієнтами, дизайнерами інтер'єру та бізнесом.",
        ru: 'Мы — K&amp;B Design Group, студия корпусной мебели в Grafing bei München. Работаем с частными клиентами, дизайнерами интерьера и бизнесом.'
    },
    'about.whoText2': {
        de: 'Jedes Projekt beginnt mit dem Aufmaß und endet mit einer sauberen Montage. Sie haben in allen Phasen einen festen Ansprechpartner – vom ersten Entwurf bis zur Abnahme nach Checkliste.',
        en: 'Every project starts with measurement and ends with a clean installation. You deal with one manager at every stage — from the first sketch to acceptance by checklist.',
        uk: 'Кожен проєкт починається із заміру й закінчується чистим монтажем. Ви спілкуєтеся з одним менеджером на всіх етапах — від першого ескізу до приймання за чек-листом.',
        ru: 'Каждый проект начинается с замера и заканчивается чистым монтажом. Вы общаетесь с одним менеджером на всех этапах — от первого эскиза до приёмки по чек-листу.'
    },
    'guar.eyebrow': { de: 'Warum wir', en: 'Why us', uk: 'Чому ми', ru: 'Почему мы' },
    'guar.title': {
        de: 'Unsere wichtigsten Garantien',
        en: 'Our key guarantees',
        uk: 'Наші ключові гарантії',
        ru: 'Наши ключевые гарантии'
    },
    'guar1.title': {
        de: 'Transparente Kalkulation',
        en: 'Transparent estimate',
        uk: 'Прозорий кошторис',
        ru: 'Прозрачная смета'
    },
    'guar1.text': {
        de: 'Wir legen den Preis im Vertrag fest. Keine versteckten Zusatzkosten.',
        en: 'We fix the price in the contract. No hidden extra charges.',
        uk: 'Фіксуємо вартість у договорі. Жодних прихованих доплат.',
        ru: 'Фиксируем стоимость в договоре. Никаких скрытых доплат.'
    },
    'guar2.num': { de: '15 Minuten', en: '15 minutes', uk: '15 хвилин', ru: '15 минут' },
    'guar2.title': { de: 'Schnelle Rückmeldung', en: 'Fast response', uk: "Швидкий зв'язок", ru: 'Быстрая связь' },
    'guar2.text': {
        de: 'Zügige Projektkalkulation und Rückmeldung ohne Verzögerung.',
        en: 'Prompt project estimate and feedback without delay.',
        uk: "Оперативний розрахунок проєкту та зворотний зв'язок без затримок.",
        ru: 'Оперативный расчёт проекта и обратная связь без задержек.'
    },
    'guar3.title': { de: 'Saubere Montage', en: 'Clean installation', uk: 'Чистий монтаж', ru: 'Чистый монтаж' },
    'guar3.text': {
        de: 'Wir entfernen den Bauschutt nach der Montage Ihrer Möbel.',
        en: 'We remove construction debris after installing your furniture.',
        uk: 'Прибираємо будівельне сміття після встановлення ваших меблів.',
        ru: 'Убираем строительный мусор после установки вашей мебели.'
    },
    'guar.bar1': {
        de: 'Bereit für Projekte jeder Komplexität',
        en: 'Ready to deliver projects of any complexity',
        uk: 'Готові реалізувати проєкт будь-якої складності',
        ru: 'Готовы реализовать проект любой сложности'
    },
    'guar.bar2': {
        de: 'Individueller Ansatz',
        en: 'Individual approach',
        uk: 'Індивідуальний підхід',
        ru: 'Индивидуальный подход'
    },

    'services.heroLead': {
        de: 'Planen · Fertigen · Montieren. Individuelle Lösungen für Zuhause und Unternehmen.',
        en: 'Design · manufacture · install. Custom solutions for home and business.',
        uk: 'Проєктуємо · виготовляємо · встановлюємо. Індивідуальні рішення для дому та бізнесу.',
        ru: 'Проектируем · изготавливаем · устанавливаем. Индивидуальные решения для дома и бизнеса.'
    },
    'kit.eyebrow': { de: 'Design & Funktion', en: 'Design & function', uk: 'Дизайн і функціонал', ru: 'Дизайн и функционал' },
    'kit.title': {
        de: 'Exklusive Designerküchen',
        en: 'Signature kitchen sets',
        uk: 'Авторські кухонні гарнітури',
        ru: 'Авторские кухонные гарнитуры'
    },
    'kit.text': {
        de: 'Wir planen Koch- und Wohnbereiche mit Blick auf jeden Zentimeter. Wir kombinieren Texturen aus Naturholz, Stein und matten Fronten.',
        en: 'We design cooking and living areas making use of every centimetre. We combine textures of natural wood, stone and matt fronts.',
        uk: 'Проєктуємо зони готування та відпочинку з урахуванням кожного сантиметра. Поєднуємо текстури натурального дерева, каменю та матового фасаду.',
        ru: 'Проектируем зоны готовки и отдыха с учётом каждого сантиметра. Сочетаем текстуры натурального дерева, камня и матового фасада.'
    },
    'kit.li1': {
        de: 'Premium-Beschläge mit Soft-Close',
        en: 'Premium fittings with soft-close',
        uk: 'Фурнітура преміум-класу з доводчиками',
        ru: 'Фурнитура премиум-класса с доводчиками'
    },
    'kit.li2': {
        de: 'Integrierte versteckte LED-Beleuchtung',
        en: 'Built-in concealed LED lighting',
        uk: 'Вбудоване приховане світлодіодне підсвічування',
        ru: 'Встроенная скрытая светодиодная подсветка'
    },
    'kit.li3': {
        de: 'Feuchtigkeits- und stoßfeste Oberflächen',
        en: 'Moisture- and impact-resistant surfaces',
        uk: 'Вологостійкі та ударостійкі поверхні',
        ru: 'Влагостойкие и ударопрочные поверхности'
    },
    'kit.btn': { de: 'Küche kalkulieren ↗', en: 'Get a kitchen quote ↗', uk: 'Розрахувати кухню ↗', ru: 'Рассчитать кухню ↗' },
    'ward.eyebrow': { de: 'Intelligenter Stauraum', en: 'Smart storage', uk: 'Розумне зберігання', ru: 'Умное хранение' },
    'ward.title': {
        de: 'Schränke & Ankleidesysteme',
        en: 'Wardrobes & walk-in closet systems',
        uk: 'Шафи та гардеробні системи',
        ru: 'Шкафы и гардеробные системы'
    },
    'ward.text': {
        de: 'Wir organisieren den Raum für perfekte Ordnung. Raumhohe Einbauten sorgen für eine monolithische und stilvolle Optik.',
        en: 'We organise space for perfect order. Floor-to-ceiling built-in units create a seamless, stylish look.',
        uk: 'Організуємо простір для бездоганного порядку. Вбудовані конструкції під стелю створюють монолітний і стильний вигляд.',
        ru: 'Организуем пространство для безупречного порядка. Встроенные конструкции под потолок создают монолитный и стильный вид.'
    },
    'ward.li1': {
        de: 'Individuelle Ausstattung mit Böden und Fächern',
        en: 'Custom shelf and section layout',
        uk: 'Індивідуальне наповнення полиць і секцій',
        ru: 'Индивидуальное наполнение полок и секций'
    },
    'ward.li2': {
        de: 'Fronten aus getöntem Glas und Lack',
        en: 'Tinted glass and lacquered fronts',
        uk: 'Фасади з тонованого скла та емалі',
        ru: 'Фасады из тонированного стекла и эмали'
    },
    'ward.li3': {
        de: 'Geräuschlose Schiebemechanismen',
        en: 'Silent sliding mechanisms',
        uk: 'Безшумні розсувні механізми',
        ru: 'Бесшумные раздвижные механизмы'
    },
    'ward.btn': { de: 'Schrank kalkulieren ↗', en: 'Get a wardrobe quote ↗', uk: 'Розрахувати шафу ↗', ru: 'Рассчитать шкаф ↗' },
    'home.eyebrow': {
        de: 'Wohn- & Schlafzimmer',
        en: 'Living room & bedroom',
        uk: 'Вітальня та спальня',
        ru: 'Гостиная и спальня'
    },
    'home.text': {
        de: 'TV-Wände, Regale, Kommoden, Garderoben und Kinderzimmer. Wir wählen Materialien und Farben passend zum Stil Ihres Interieurs.',
        en: "TV walls, shelving, chests of drawers, hallways and children's rooms. We select materials and colours to match your interior style.",
        uk: "ТВ-зони, стелажі, комоди, передпокої та дитячі. Підбираємо матеріали й кольори під загальний стиль інтер'єру.",
        ru: 'ТВ-зоны, стеллажи, комоды, прихожие и детские. Подбираем материалы и цвета под общий стиль интерьера.'
    },
    'home.li1': {
        de: 'Einbaunischen und versteckter Stauraum',
        en: 'Built-in niches and hidden storage',
        uk: 'Вбудовані ніші та приховані системи зберігання',
        ru: 'Встроенные ниши и скрытые системы хранения'
    },
    'home.li2': {
        de: 'Kombination aus Furnier, Spanplatte und Lack',
        en: 'Combination of veneer, laminated board and lacquer',
        uk: 'Поєднання шпону, ЛДСП та емалі',
        ru: 'Комбинация шпона, ЛДСП и эмали'
    },
    'home.li3': {
        de: 'Durchdachte Beleuchtung und Kabelkanäle',
        en: 'Well-planned lighting and cable channels',
        uk: 'Продумане підсвічування та кабель-канали',
        ru: 'Продуманная подсветка и кабель-каналы'
    },
    'home.btn': { de: 'Projekt besprechen ↗', en: 'Discuss a project ↗', uk: 'Обговорити проєкт ↗', ru: 'Обсудить проект ↗' },
    'biz.eyebrow': { de: 'Büros & Gewerbe', en: 'Offices & retail', uk: 'Офіси та комерція', ru: 'Офисы и коммерция' },
    'biz.text': {
        de: 'Chefzimmer, Besprechungsräume, Empfangstheken, Ladeneinrichtung. Wir halten Termine ein und arbeiten auf Vertragsbasis.',
        en: 'Executive offices, meeting rooms, reception desks, retail fixtures. We meet deadlines and work under contract.',
        uk: 'Кабінети керівників, переговорні, ресепшн, торгове обладнання. Дотримуємося термінів і працюємо за договором.',
        ru: 'Кабинеты руководителей, переговорные, ресепшен, торговое оборудование. Соблюдаем сроки и работаем по договору.'
    },
    'biz.li1': {
        de: 'Verschleißfeste Oberflächen für intensive Nutzung',
        en: 'Hard-wearing surfaces for intensive use',
        uk: 'Зносостійкі покриття для інтенсивного використання',
        ru: 'Износостойкие покрытия для интенсивного использования'
    },
    'biz.li2': {
        de: 'Einheitlicher Stil für das gesamte Büro',
        en: 'Consistent style for the whole office',
        uk: 'Єдиний стиль для всього офісу',
        ru: 'Единый стиль для всего офиса'
    },
    'biz.li3': {
        de: 'Montage außerhalb der Arbeitszeiten',
        en: 'Installation outside working hours',
        uk: 'Монтаж у неробочий час',
        ru: 'Монтаж в нерабочее время'
    },
    'biz.btn': { de: 'Kalkulation anfragen ↗', en: 'Request a quote ↗', uk: 'Запросити розрахунок ↗', ru: 'Запросить расчёт ↗' },

    'process.heroLead': {
        de: 'Fünf klare Schritte vom Anruf bis zu den fertigen Möbeln.',
        en: 'Five clear steps from the first call to finished furniture.',
        uk: "П'ять зрозумілих кроків від дзвінка до готових меблів.",
        ru: 'Пять понятных шагов от звонка до готовой мебели.'
    },
    'process.eyebrow': { de: 'Reihenfolge', en: 'Sequence', uk: 'Послідовність', ru: 'Последовательность' },
    'process.title': {
        de: 'Arbeitsschritte am Projekt',
        en: 'Project stages',
        uk: 'Етапи роботи над проєктом',
        ru: 'Этапы работы над проектом'
    },
    'pc1.text': {
        de: 'Anruf oder Anfrage. Beratung innerhalb von 15 Minuten.',
        en: 'Call or request. Consultation within 15 minutes.',
        uk: 'Дзвінок або заявка. Консультація за 15 хвилин.',
        ru: 'Звонок или заявка. Консультация за 15 минут.'
    },
    'pc2.title': { de: 'Aufmaß', en: 'Measurement', uk: 'Замір', ru: 'Замер' },
    'pc2.text': {
        de: 'Besuch vor Ort und Laser-Aufmaß.',
        en: 'On-site visit and laser measurements.',
        uk: "Виїзд на об'єкт і лазерні обміри.",
        ru: 'Выезд на объект и лазерные обмеры.'
    },
    'pc3.title': { de: 'Projekt', en: 'Project', uk: 'Проєкт', ru: 'Проект' },
    'pc3.text': {
        de: '3D-Visualisierung, Zeichnungen und genauer Kostenvoranschlag.',
        en: '3D visualisation, drawings and an exact estimate.',
        uk: '3D-візуалізація, креслення та точний кошторис.',
        ru: '3D-визуализация, чертежи и точная смета.'
    },
    'pc4.title': { de: 'Produktion', en: 'Production', uk: 'Виробництво', ru: 'Производство' },
    'pc4.text': {
        de: 'Fertigung in einer bewährten Fabrik mit Fotoberichten.',
        en: 'Manufacturing at a trusted factory with photo reports.',
        uk: 'Виготовлення на перевіреній фабриці з фотозвітами.',
        ru: 'Изготовление на проверенной фабрике с фотоотчетами.'
    },
    'pc5.title': { de: 'Montage', en: 'Installation', uk: 'Монтаж', ru: 'Монтаж' },
    'pc5.text': {
        de: 'Saubere Montage und Abnahme nach Checkliste.',
        en: 'Clean assembly and acceptance by checklist.',
        uk: 'Чисте складання та приймання за чек-листом.',
        ru: 'Чистая сборка и приёмка по чек-листу.'
    },
    'process.note': {
        de: 'Die Qualitätskontrolle erfolgt in jeder Phase der Produktion und Montage.',
        en: 'Quality control is carried out at every stage of production and assembly.',
        uk: 'Контроль якості здійснюється на кожному етапі виробництва та складання.',
        ru: 'Контроль качества осуществляется на каждом этапе производства и сборки.'
    },
    'process.detailsTitle': {
        de: 'Die Schritte im Detail',
        en: 'The stages in detail',
        uk: 'Детальніше про етапи',
        ru: 'Подробнее об этапах'
    },

    'projects.title': { de: 'Unsere Projekte', en: 'Our projects', uk: 'Наші проєкти', ru: 'Наши проекты' },
    'projects.heroLead': {
        de: 'Realisierte Arbeiten: Küchen, Ankleiden, Wohn- und Büromöbel.',
        en: 'Completed work: kitchens, walk-in closets, home and office furniture.',
        uk: 'Реалізовані роботи: кухні, гардеробні, меблі для дому та офісу.',
        ru: 'Реализованные работы: кухни, гардеробные, мебель для дома и офиса.'
    },
    'filter.all': { de: 'Alle', en: 'All', uk: 'Усі', ru: 'Все' },
    'proj1': { de: 'Küche mit Steininsel', en: 'Kitchen with a stone island', uk: "Кухня з кам'яним островом", ru: 'Кухня с каменным островом' },
    'proj2': { de: 'Olivgrüne Küche mit Marmor', en: 'Olive kitchen with marble', uk: 'Оливкова кухня з мармуром', ru: 'Оливковая кухня с мрамором' },
    'proj3': { de: 'Ankleide mit Glasfronten', en: 'Walk-in closet with glass fronts', uk: 'Гардеробна зі склом', ru: 'Гардеробная со стеклом' },
    'proj4': { de: 'Schrank mit Arbeitsplatz', en: 'Wardrobe with a workspace', uk: 'Шафа з робочою зоною', ru: 'Шкаф с рабочей зоной' },
    'proj5': { de: 'TV-Wand im Wohnzimmer', en: 'Living room TV wall', uk: 'ТВ-зона у вітальні', ru: 'ТВ-зона в гостиной' },
    'proj6': { de: 'Wohnküche', en: 'Open-plan kitchen and living room', uk: 'Кухня-вітальня', ru: 'Кухня-гостиная' },
    'proj7': { de: 'Chefbüro', en: 'Executive office', uk: 'Кабінет керівника', ru: 'Кабинет руководителя' },
    'projects.cta': {
        de: 'Sie möchten ein ähnliches Projekt? Wir kalkulieren die Kosten kostenlos',
        en: "Want a similar project? We'll estimate the cost for free",
        uk: 'Хочете такий самий проєкт? Розрахуємо вартість безкоштовно',
        ru: 'Хотите такой же проект? Рассчитаем стоимость бесплатно'
    }
};

function getSavedLang() {
    try {
        const saved = localStorage.getItem('lang');
        if (SUPPORTED_LANGS.includes(saved)) return saved;
    } catch (e) { /* localStorage может быть недоступен */ }
    return DEFAULT_LANG;
}

function t(key, lang) {
    const entry = TRANSLATIONS[key];
    if (!entry) {
        console.warn('Нет перевода для ключа:', key);
        return null;
    }
    return entry[lang] ?? entry[DEFAULT_LANG];
}

function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = t(el.dataset.i18n, lang);
        if (value === null) return;
        if (el.tagName === 'TITLE') el.textContent = value.replace(/&amp;/g, '&');
        else el.innerHTML = value;
    });

    const attrMap = {
        'i18nPlaceholder': 'placeholder',
        'i18nAlt': 'alt',
        'i18nAria': 'aria-label',
        'i18nTitle': 'title',
        'i18nContent': 'content'
    };
    Object.entries(attrMap).forEach(([dataKey, attr]) => {
        const selector = '[data-' + dataKey.replace(/[A-Z]/g, m => '-' + m.toLowerCase()) + ']';
        document.querySelectorAll(selector).forEach(el => {
            const value = t(el.dataset[dataKey], lang);
            if (value !== null) el.setAttribute(attr, value.replace(/<br>/g, ' ').replace(/&amp;/g, '&'));
        });
    });

    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    try { localStorage.setItem('lang', lang); } catch (e) { /* ничего */ }
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-switch [data-lang]');
    if (btn) applyLanguage(btn.dataset.lang);
});

applyLanguage(getSavedLang());
