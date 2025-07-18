import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

export default function SEO({
  title = "FreshcoMushroom - Premium Fresh Mushrooms & Seeds | Karnataka Farm",
  description = "Premium fresh button mushrooms, organic seeds, and compost from Karnataka's leading mushroom farm. Email anshkumar590423@gmail.com",
  keywords = "fresh mushrooms, button mushrooms, organic seeds, mushroom farm, Karnataka mushroom supplier",
  canonicalUrl = "https://freshco-mushroom.replit.app",
  structuredData
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}