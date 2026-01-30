
/**
 * Strapi API utilitasi
 * Vercel'dagi Environment Variables orqali xavfsiz ulanishni ta'minlaydi.
 */

// Vercel yoki mahalliy muhitdagi o'zgaruvchilar
// Vite brauzerda process.env ni shim qilmasligi mumkin, shuning uchun himoya kerak.
const getEnv = (key: string): string => {
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      // @ts-ignore
      return process.env[key] as string;
    }
    // @ts-ignore
    if (import.meta.env && import.meta.env[`VITE_${key}`]) {
      // @ts-ignore
      return import.meta.env[`VITE_${key}`] as string;
    }
  } catch (e) {}
  return '';
};

const STRAPI_URL = getEnv('STRAPI_URL') || 'http://localhost:1337';
const STRAPI_TOKEN = getEnv('STRAPI_API_TOKEN');

export const getStrapiURL = (path = '') => {
  return `${STRAPI_URL}${path}`;
};

export const fetchFromStrapi = async (path: string, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { 'Authorization': `Bearer ${STRAPI_TOKEN}` } : {}),
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const requestUrl = getStrapiURL(`/api${path}`);
  try {
    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Strapi Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Strapi fetch error:", error);
    throw error;
  }
};

/**
 * Rasmlar URL manzilini to'g'rilash.
 * Strapi v4/v5 formatini qo'llab-quvvatlaydi.
 */
export const getStrapiMedia = (mediaData: any) => {
  if (!mediaData || !mediaData.data) return null;
  
  // Multiple images holati uchun birinchisini oladi
  const attributes = Array.isArray(mediaData.data) 
    ? mediaData.data[0]?.attributes 
    : mediaData.data.attributes;
    
  if (!attributes || !attributes.url) return null;
  
  const url = attributes.url;
  return url.startsWith('/') ? getStrapiURL(url) : url;
};
