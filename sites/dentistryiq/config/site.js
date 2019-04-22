const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=80 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dentistry-iq' },
    { provider: 'twitter', href: 'https://twitter.com/dentistryiq' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentistryIQ' },
  ],
  primaryNavItems: [
    { href: '/practice-management', label: 'Practice Management' },
    { href: '/assistants', label: 'Assistants' },
    { href: '/clinical', label: 'Clinical' },
    { href: '/front-office', label: 'Front Office' },
    { href: '/dental-hygiene', label: 'Dental Hygiene' },
    { href: '/industry', label: 'Industry' },
    { href: '/products', label: 'Products' },
    { href: '/continuing-education', label: 'Continuing Education' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-MNNGJ32',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:prps-rbhnq0',
  },
};
