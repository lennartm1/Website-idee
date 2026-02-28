export const products = [
  {
    slug: 'blauw',
    name: 'Blauwe Snoepjes',
    shortDescription: 'Friszoet, knapperig, perfect voor onderweg.',
    description:
      'Een knapperige snoepmix met frisse bessensmaak. Ideaal voor onderweg of als vrolijke traktatie.',
    price: 3.49,
    stock: 'Op voorraad',
    ingredients: 'Suiker, glucosestroop, natuurlijk aroma, kleurstof (E133).',
    taste: 'Friszoet',
    weight: '180g',
    allergens: 'Kan sporen van melk en noten bevatten.',
    accentColor: '#2563eb',
    image: '/images/blauw.svg',
  },
  {
    slug: 'groen',
    name: 'Groene Snoepjes',
    shortDescription: 'Zachtzuur met een frisse kick.',
    description:
      'Zachtzure snoepjes met limoen-touch voor liefhebbers van een frisse kick.',
    price: 3.29,
    stock: 'Beperkt op voorraad',
    ingredients: 'Suiker, citroenzuur, aroma, kleurstof (E102, E133).',
    taste: 'Zachtzuur',
    weight: '170g',
    allergens: 'Geproduceerd in een fabriek waar gluten verwerkt worden.',
    accentColor: '#16a34a',
    image: '/images/groen.svg',
  },
  {
    slug: 'rood',
    name: 'Rode Snoepjes',
    shortDescription: 'Klassiek zoet met volle smaak.',
    description:
      'Klassiek zoete aardbeiensnoepjes met volle smaak. Een favoriet voor jong en oud.',
    price: 3.59,
    stock: 'Op voorraad',
    ingredients: 'Suiker, vruchtensapconcentraat, aroma, kleurstof (E129).',
    taste: 'Klassiek zoet',
    weight: '200g',
    allergens: 'Kan sporen van pinda bevatten.',
    accentColor: '#dc2626',
    image: '/images/rood.svg',
  },
];

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug);
