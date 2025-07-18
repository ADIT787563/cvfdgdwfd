import { Helmet } from "react-helmet-async";

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: string;
  structuredData?: any;
}

export default function AdvancedSEO({
  title = "FreshcoMushroom - #1 Premium Fresh Mushrooms & Organic Seeds | Top Rated Mushroom Farm in Uttar Pradesh India",
  description = "🍄 Buy premium fresh button mushrooms, organic mushroom seeds & natural compost directly from Uttar Pradesh's #1 rated mushroom farm. 20+ years experience, 30k+ happy customers, same-day delivery. Best prices guaranteed! Order now for farm-fresh quality.",
  keywords = [
    "fresh mushrooms Uttar Pradesh India",
    "button mushroom farm delivery",
    "organic mushroom seeds buy online",
    "mushroom home delivery India",
    "premium mushrooms best price",
    "mushroom farming Uttar Pradesh", 
    "organic compost fertilizer",
    "farm fresh mushrooms near me",
    "mushroom cultivation supplies",
    "Uttar Pradesh organic farm",
    "fresh produce home delivery",
    "white button mushroom varieties",
    "sustainable mushroom farming",
    "healthy vegetables nutrition",
    "mushroom seeds germination",
    "agricultural products online",
    "natural compost organic farming",
    "mushroom business supplies",
    "fresh food delivery service",
    "farm to table mushrooms"
  ],
  url = "https://freshco-mushroom.replit.app",
  image = "https://freshco-mushroom.replit.app/og-image.jpg",
  type = "website",
  structuredData
}: AdvancedSEOProps) {
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FreshcoMushroom",
    "description": "Premium fresh mushroom farm specializing in button mushrooms, organic seeds, and natural compost",
    "url": "https://freshcomushroom.com",
    "email": "anshkumar590423@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Agriculture University",
      "addressLocality": "Kanpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "208002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.4499",
      "longitude": "80.3319"
    },
    "openingHours": [
      "Mo-Sa 08:00-18:00",
      "Su 09:00-17:00"
    ],
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh"
    },
    "founder": {
      "@type": "Person",
      "name": "Ansh Kumar",
      "email": "anshkumar590423@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/freshcomushroom",
      "https://www.instagram.com/freshcomushroom"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FreshcoMushroom Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Button Mushrooms",
            "description": "Premium quality fresh button mushrooms grown organically"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Mushroom Seeds",
            "description": "High-quality organic mushroom cultivation seeds"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Organic Compost",
            "description": "Natural organic compost for healthy plant growth"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "30000",
      "bestRating": "5"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Enhanced Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="FreshcoMushroom - Ramdas Verma, Basant Lal" />
      <meta name="publisher" content="FreshcoMushroom" />
      <meta name="copyright" content="2020 FreshcoMushroom. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="application-name" content="FreshcoMushroom" />
      
      {/* Business Contact Information */}
      <meta name="contact" content="anshkumar590423@gmail.com" />
      <meta name="reply-to" content="anshkumar590423@gmail.com" />
      <meta name="owner" content="FreshcoMushroom - Premium Mushroom Farm" />
      <meta name="url" content={url} />
      <meta name="identifier-URL" content={url} />
      <meta name="category" content="Agriculture, Organic Farming, Fresh Produce, Mushroom Cultivation" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Enhanced Geographic Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Kanpur, Uttar Pradesh, India" />
      <meta name="geo.position" content="26.4499,80.3319" />
      <meta name="ICBM" content="26.4499,80.3319" />
      <meta name="DC.title" content={title} />
      
      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="FreshcoMushroom - Premium Fresh Mushrooms from Uttar Pradesh" />
      <meta property="og:site_name" content="FreshcoMushroom" />
      <meta property="og:locale" content="en_IN" />
      <meta property="business:contact_data:street_address" content="Near Agriculture University" />
      <meta property="business:contact_data:locality" content="Kanpur" />
      <meta property="business:contact_data:region" content="Uttar Pradesh" />
      <meta property="business:contact_data:postal_code" content="208002" />
      <meta property="business:contact_data:country_name" content="India" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="FreshcoMushroom - Premium Fresh Mushrooms from Uttar Pradesh" />
      <meta name="twitter:creator" content="@freshcomushroom" />
      <meta name="twitter:site" content="@freshcomushroom" />
      
      {/* Advanced SEO Tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="application-name" content="FreshcoMushroom" />
      <meta name="apple-mobile-web-app-title" content="FreshcoMushroom" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FreshcoMushroom",
          "url": "https://freshcomushroom.com",
          "logo": "https://freshcomushroom.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "kn"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vishwanath Layout, near Water Tank",
            "addressLocality": "Ramnagar",
            "addressRegion": "Karnataka",
            "postalCode": "562159",
            "addressCountry": "IN"
          }
        })}
      </script>
      
      {/* Product Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Fresh Button Mushrooms",
          "image": [
            "https://freshcomushroom.com/products/button-mushrooms-1.jpg",
            "https://freshcomushroom.com/products/button-mushrooms-2.jpg"
          ],
          "description": "Premium quality fresh button mushrooms grown organically in Karnataka. Perfect for cooking, rich in nutrients and flavor.",
          "brand": {
            "@type": "Brand",
            "name": "FreshcoMushroom"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://freshcomushroom.com/products",
            "priceCurrency": "INR",
            "price": "80",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "FreshcoMushroom"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1250"
          }
        })}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://freshcomushroom.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Products",
              "item": "https://freshcomushroom.com/products"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "About",
              "item": "https://freshcomushroom.com/about"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}