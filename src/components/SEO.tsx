import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  title = 'ETSAATOURS - Tours de Autor en Ecuador',
  description = 'Descubre Ecuador con nuestros tours de autor exclusivos. Experiencias luxury en Amazonía, Andes, Costa y Galápagos.',
  image = 'https://www.etsaatours.com/assets/etsaa.png',
  url = 'https://www.etsaatours.com/',
  type = 'website'
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector(isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'tours Ecuador, tours de lujo Ecuador, amazonia tours, galapagos tours, luxury tours');

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, image, url, type]);

  return null;
}

// Helper to track conversions (descomenta cuando tengas los IDs)
// Ejemplo de uso:
// import { trackConversion } from '../components/SEO';
// trackConversion('AW-CONVERSION_ID', 100);
export function trackConversion(conversionId: string, value?: number) {
  // Google Ads conversion - Descomenta cuando tengas G-XXXXXXXXXX
  /*
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD'
    });
  }
  */

  // Facebook Pixel - Descomenta cuando tengas el Pixel ID
  /*
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: conversionId,
      value: value,
      currency: 'USD'
    });
  }
  */
  
  console.log('Conversion tracked:', conversionId, value);
}

// Helper to track page view
export function trackPageView(url: string) {
  // Google Analytics 4 - Descomenta cuando tengas G-XXXXXXXXXX
  /*
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'TU_ID_GA4', {
      page_path: url
    });
  }
  */

  // Facebook Pixel - Descomenta cuando tengas el Pixel ID
  /*
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
  */
}
