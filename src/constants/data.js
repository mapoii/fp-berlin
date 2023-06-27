import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '40.000 IDR',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '59.000 IDR',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '44.000 IDR',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '31.000 IDR',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '26.000 IDR',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '200.000 IDR',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '160.000 IDR',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '100.000 IDR',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '319.999 IDR',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '269.999 IDR',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Airmadidi best wines',
    subtitle: '2023',
  },
  {
    imgUrl: images.award01,
    title: 'Airmadidi best cocktails',
    subtitle: '2023',
  },
  {
    imgUrl: images.award05,
    title: 'Sulut best bar',
    subtitle: '2023',
  },
  {
    imgUrl: images.award03,
    title: 'Airmadidi best Chef',
    subtitle: '2023',
  },
];

export default { wines, cocktails, awards };
