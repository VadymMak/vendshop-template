import type { SiteLanguage } from './types';

export const UI_TRANSLATIONS: Record<SiteLanguage, {
  nav: { services: string; pricing: string; gallery: string; reviews: string; contact: string; book: string };
  hero: { cta1: string; cta2: string };
  stats: { years: string; clients: string; rating: string; guarantee: string };
  services: { title: string; subtitle: string };
  pricing: { title: string; subtitle: string; popular: string; book: string };
  gallery: { title: string; subtitle: string };
  reviews: { title: string; subtitle: string };
  whyUs: { title: string; subtitle: string };
  booking: { title: string; subtitle: string; name: string; phone: string; service: string; date: string; submit: string; success: string };
  contact: { title: string; address: string; phone: string; email: string; hours: string };
  footer: { rights: string; poweredBy: string };
  chat: { greeting: string; fallback: string };
  faq: { title: string };
}> = {
  sk: {
    nav: { services: 'Služby', pricing: 'Cenník', gallery: 'Galéria', reviews: 'Recenzie', contact: 'Kontakt', book: 'Objednať' },
    hero: { cta1: 'Rezervovať termín', cta2: 'Naše služby' },
    stats: { years: 'Rokov skúseností', clients: 'Spokojných klientov', rating: 'Hodnotenie', guarantee: 'Záruka' },
    services: { title: 'Naše služby', subtitle: 'Profesionálne služby, ktorým môžete dôverovať.' },
    pricing: { title: 'Cenník', subtitle: 'Transparentné ceny bez skrytých poplatkov.', popular: 'Najpopulárnejší', book: 'Objednať' },
    gallery: { title: 'Galéria', subtitle: 'Pozrite si naše práce.' },
    reviews: { title: 'Recenzie', subtitle: 'Čo hovoria naši klienti.' },
    whyUs: { title: 'Prečo my', subtitle: 'Profesionálny prístup ku každému klientovi.' },
    booking: { title: 'Rezervácia', subtitle: 'Objednajte sa online.', name: 'Meno', phone: 'Telefón', service: 'Služba', date: 'Dátum', submit: 'Odoslať', success: 'Ďakujeme! Ozveme sa vám.' },
    contact: { title: 'Kontakt', address: 'Adresa', phone: 'Telefón', email: 'E-mail', hours: 'Otváracie hodiny' },
    footer: { rights: 'Všetky práva vyhradené.', poweredBy: 'Vytvorené cez' },
    chat: { greeting: 'Dobrý deň! Ako vám môžem pomôcť?', fallback: 'Ďakujeme za správu. Ozveme sa vám čo najskôr.' },
    faq: { title: 'Časté otázky' },
  },
  ru: {
    nav: { services: 'Услуги', pricing: 'Цены', gallery: 'Галерея', reviews: 'Отзывы', contact: 'Контакт', book: 'Записаться' },
    hero: { cta1: 'Записаться', cta2: 'Наши услуги' },
    stats: { years: 'Лет опыта', clients: 'Довольных клиентов', rating: 'Рейтинг', guarantee: 'Гарантия' },
    services: { title: 'Наши услуги', subtitle: 'Профессиональные услуги, которым можно доверять.' },
    pricing: { title: 'Цены', subtitle: 'Прозрачные цены без скрытых платежей.', popular: 'Популярный', book: 'Записаться' },
    gallery: { title: 'Галерея', subtitle: 'Посмотрите наши работы.' },
    reviews: { title: 'Отзывы', subtitle: 'Что говорят наши клиенты.' },
    whyUs: { title: 'Почему мы', subtitle: 'Профессиональный подход к каждому клиенту.' },
    booking: { title: 'Запись', subtitle: 'Запишитесь онлайн.', name: 'Имя', phone: 'Телефон', service: 'Услуга', date: 'Дата', submit: 'Отправить', success: 'Спасибо! Мы свяжемся с вами.' },
    contact: { title: 'Контакты', address: 'Адрес', phone: 'Телефон', email: 'E-mail', hours: 'Режим работы' },
    footer: { rights: 'Все права защищены.', poweredBy: 'Создано с помощью' },
    chat: { greeting: 'Здравствуйте! Чем могу помочь?', fallback: 'Спасибо за сообщение. Мы свяжемся с вами.' },
    faq: { title: 'Частые вопросы' },
  },
  en: {
    nav: { services: 'Services', pricing: 'Pricing', gallery: 'Gallery', reviews: 'Reviews', contact: 'Contact', book: 'Book Now' },
    hero: { cta1: 'Book Now', cta2: 'Our Services' },
    stats: { years: 'Years of experience', clients: 'Happy clients', rating: 'Rating', guarantee: 'Guarantee' },
    services: { title: 'Our Services', subtitle: 'Professional services you can trust.' },
    pricing: { title: 'Pricing', subtitle: 'Transparent pricing with no hidden fees.', popular: 'Most Popular', book: 'Book Now' },
    gallery: { title: 'Gallery', subtitle: 'See our work.' },
    reviews: { title: 'Reviews', subtitle: 'What our clients say.' },
    whyUs: { title: 'Why Us', subtitle: 'Professional approach to every client.' },
    booking: { title: 'Booking', subtitle: 'Book online.', name: 'Name', phone: 'Phone', service: 'Service', date: 'Date', submit: 'Submit', success: 'Thank you! We will contact you soon.' },
    contact: { title: 'Contact', address: 'Address', phone: 'Phone', email: 'Email', hours: 'Working hours' },
    footer: { rights: 'All rights reserved.', poweredBy: 'Powered by' },
    chat: { greeting: 'Hello! How can I help you?', fallback: 'Thank you for your message. We will get back to you soon.' },
    faq: { title: 'FAQ' },
  },
  de: {
    nav: { services: 'Leistungen', pricing: 'Preise', gallery: 'Galerie', reviews: 'Bewertungen', contact: 'Kontakt', book: 'Termin buchen' },
    hero: { cta1: 'Termin buchen', cta2: 'Unsere Leistungen' },
    stats: { years: 'Jahre Erfahrung', clients: 'Zufriedene Kunden', rating: 'Bewertung', guarantee: 'Garantie' },
    services: { title: 'Unsere Leistungen', subtitle: 'Professionelle Dienstleistungen, denen Sie vertrauen können.' },
    pricing: { title: 'Preise', subtitle: 'Transparente Preise ohne versteckte Gebühren.', popular: 'Am beliebtesten', book: 'Buchen' },
    gallery: { title: 'Galerie', subtitle: 'Sehen Sie unsere Arbeiten.' },
    reviews: { title: 'Bewertungen', subtitle: 'Was unsere Kunden sagen.' },
    whyUs: { title: 'Warum wir', subtitle: 'Professioneller Ansatz für jeden Kunden.' },
    booking: { title: 'Buchung', subtitle: 'Online buchen.', name: 'Name', phone: 'Telefon', service: 'Leistung', date: 'Datum', submit: 'Absenden', success: 'Vielen Dank! Wir melden uns bei Ihnen.' },
    contact: { title: 'Kontakt', address: 'Adresse', phone: 'Telefon', email: 'E-Mail', hours: 'Öffnungszeiten' },
    footer: { rights: 'Alle Rechte vorbehalten.', poweredBy: 'Erstellt mit' },
    chat: { greeting: 'Hallo! Wie kann ich Ihnen helfen?', fallback: 'Danke für Ihre Nachricht. Wir melden uns bei Ihnen.' },
    faq: { title: 'Häufige Fragen' },
  },
  cs: {
    nav: { services: 'Služby', pricing: 'Ceník', gallery: 'Galerie', reviews: 'Recenze', contact: 'Kontakt', book: 'Objednat' },
    hero: { cta1: 'Objednat termín', cta2: 'Naše služby' },
    stats: { years: 'Let zkušeností', clients: 'Spokojených klientů', rating: 'Hodnocení', guarantee: 'Záruka' },
    services: { title: 'Naše služby', subtitle: 'Profesionální služby, kterým můžete důvěřovat.' },
    pricing: { title: 'Ceník', subtitle: 'Transparentní ceny bez skrytých poplatků.', popular: 'Nejpopulárnější', book: 'Objednat' },
    gallery: { title: 'Galerie', subtitle: 'Podívejte se na naši práci.' },
    reviews: { title: 'Recenze', subtitle: 'Co říkají naši klienti.' },
    whyUs: { title: 'Proč my', subtitle: 'Profesionální přístup ke každému klientovi.' },
    booking: { title: 'Rezervace', subtitle: 'Objednejte se online.', name: 'Jméno', phone: 'Telefon', service: 'Služba', date: 'Datum', submit: 'Odeslat', success: 'Děkujeme! Ozveme se vám.' },
    contact: { title: 'Kontakt', address: 'Adresa', phone: 'Telefon', email: 'E-mail', hours: 'Otevírací doba' },
    footer: { rights: 'Všechna práva vyhrazena.', poweredBy: 'Vytvořeno pomocí' },
    chat: { greeting: 'Dobrý den! Jak vám mohu pomoci?', fallback: 'Děkuji za zprávu. Ozveme se vám co nejdříve.' },
    faq: { title: 'Časté dotazy' },
  },
  uk: {
    nav: { services: 'Послуги', pricing: 'Ціни', gallery: 'Галерея', reviews: 'Відгуки', contact: 'Контакти', book: 'Записатися' },
    hero: { cta1: 'Записатися', cta2: 'Наші послуги' },
    stats: { years: 'Років досвіду', clients: 'Задоволених клієнтів', rating: 'Рейтинг', guarantee: 'Гарантія' },
    services: { title: 'Наші послуги', subtitle: 'Професійні послуги, яким можна довіряти.' },
    pricing: { title: 'Ціни', subtitle: 'Прозорі ціни без прихованих платежів.', popular: 'Найпопулярніший', book: 'Записатися' },
    gallery: { title: 'Галерея', subtitle: 'Подивіться наші роботи.' },
    reviews: { title: 'Відгуки', subtitle: 'Що кажуть наші клієнти.' },
    whyUs: { title: 'Чому ми', subtitle: 'Професійний підхід до кожного клієнта.' },
    booking: { title: 'Запис', subtitle: 'Запишіться онлайн.', name: "Ім'я", phone: 'Телефон', service: 'Послуга', date: 'Дата', submit: 'Відправити', success: "Дякуємо! Ми зв'яжемося з вами." },
    contact: { title: 'Контакти', address: 'Адреса', phone: 'Телефон', email: 'E-mail', hours: 'Графік роботи' },
    footer: { rights: 'Всі права захищені.', poweredBy: 'Створено за допомогою' },
    chat: { greeting: 'Вітаю! Чим можу допомогти?', fallback: "Дякую за повідомлення. Ми зв'яжемося з вами." },
    faq: { title: 'Часті питання' },
  },
};
