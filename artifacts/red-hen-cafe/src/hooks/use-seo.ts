import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, any>;
}

export function useSEO({ title, description, url, image, type = "website", jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    if (url) setMetaTag("property", "og:url", url);
    if (image) setMetaTag("property", "og:image", image);

    if (jsonLd) {
      let script = document.querySelector("script[type='application/ld+json']");
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, url, image, type, jsonLd]);
}
