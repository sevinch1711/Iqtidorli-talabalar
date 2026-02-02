
/**
 * Strapi API utilitasi
 */

const getEnv = (key: string): string => {
  const viteKey = `VITE_${key}`;
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      if (import.meta.env[viteKey]) return import.meta.env[viteKey];
      // @ts-ignore
      if (import.meta.env[key]) return import.meta.env[key];
    }
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env) {
      // @ts-ignore
      return process.env[viteKey] || process.env[key] || '';
    }
  } catch (e) {}
  return '';
};

const rawUrl = getEnv('STRAPI_URL') || 'http://localhost:1337';
const STRAPI_URL = rawUrl.endsWith('/') ? rawUrl.slice(0, -1) : rawUrl;
const STRAPI_TOKEN = getEnv('STRAPI_API_TOKEN');

export const getStrapiURL = (path = '') => {
  return `${STRAPI_URL}${path}`;
};

export const flattenStrapiResponse = (data: any): any => {
  if (!data) return null;
  if (Array.isArray(data)) return data.map(item => flattenStrapiResponse(item));
  
  let flattened = data.attributes ? { id: data.id, ...data.attributes } : data;
  
  for (const key in flattened) {
    if (typeof flattened[key] === 'object' && flattened[key] !== null) {
      if (flattened[key].data !== undefined) {
        flattened[key] = flattenStrapiResponse(flattened[key].data);
      }
    }
  }
  return flattened;
};

export const blocksToText = (blocks: any): string => {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block: any) => 
      block.children ? block.children.map((child: any) => child.text).join("") : ""
    )
    .join("\n");
};

/**
 * Fetch funksiyasi - Render serveri uyg'onishi uchun maxsus timeout va retry bilan
 */
export const fetchFromStrapi = async (path: string, options = {}, retries = 3) => {
  // Agar URL localhost bo'lsa va biz production-da bo'lsak, so'rov yubormaymiz
  if (STRAPI_URL.includes('localhost') && window.location.hostname !== 'localhost') {
    console.warn("Strapi URL hali sozlanmagan (Localhost ko'rinmoqda).");
    return null;
  }

  const requestUrl = getStrapiURL(`/api${path}`);
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { 'Authorization': `Bearer ${STRAPI_TOKEN}` } : {}),
    },
  };

  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 soniya kutish

      const response = await fetch(requestUrl, { 
        ...defaultOptions, 
        ...options,
        signal: controller.signal 
      });
      
      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
        return flattenStrapiResponse(json.data);
      }
      
      // Render serveri uyg'onayotgan bo'lishi mumkin (503/504/502)
      if ([502, 503, 504].includes(response.status)) {
        console.log(`Server uyg'onmoqda (Urinish: ${i + 1})...`);
        await new Promise(res => setTimeout(res, 3000)); // 3 soniya kutib qayta urinish
        continue;
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.warn("Strapi so'rovi timeout bo'ldi (Server juda sekin).");
      }
      if (i === retries - 1) break;
      await new Promise(res => setTimeout(res, 2000));
    }
  }
  return null;
};

export const getStrapiMedia = (media: any) => {
  if (!media) return null;
  const url = typeof media === 'string' ? media : (media.url || media.attributes?.url);
  if (!url) return null;
  
  // To'liq URL bo'lsa qaytaramiz, aks holda domenni qo'shamiz
  if (url.startsWith('http')) return url;
  return getStrapiURL(url);
};
