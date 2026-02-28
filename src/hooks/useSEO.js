import { useEffect } from 'react';

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}='${key}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const useSEO = ({ title, description, url, image }) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
  }, [title, description, url, image]);
};
