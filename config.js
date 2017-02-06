let locales = [
  'hu-hu',
  'bg-bg',
  'cs-cz',
  'bs-latn-ba',
  'de-de',
  'en-gb',
  'es-es',
  'fr-fr',
  'he-il',
  'it-it',
  'lv-lv',
  'mk-mk',
  'lt-lt',
  'nl-nl',
  'nb-no',
  'pl-pl',
  'pt-pt',
  'ro-ro',
  'ru-ru',
  'sk-sk',
  'sv-se',
  'sr-cyrl-cs',
  'uk-ua',
  'ka-ge'
];

let pages = [
  'foo-bar',
  'baz-qux',
  'itinerary',
  'profile',
  'baggage-fee-calculator',
  'wdc-acceptance',
  'fare-finder'
];

let testUrls = [
  '/',
  '/rtl',
  '/rtl/',
  '/profile',
  '/itinerary',
  '/fare-finder',
  '/hu-hu',
  '/hu-hu/',
  '/he-il/',
  '/hu-hu/profile',
  '/he-il/itinerary',
  '/hu-hu/rtl/',
  '/hu-hu/rtl',
  '/hu-hu/profile_rtl',
  '/hu-hu/itinerary_rtl',
  '/fare-finder/bud/ltn/201611',
  '/fare-finder/bud/ltn/'
];

module.exports = {
  locales,
  localesRex: locales.join('|'),
  pages,
  pagesRex: pages.join('|'),
  testUrls
};
