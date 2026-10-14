import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";

function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",

    name: siteConfig.name,

    url: siteConfig.url,

    telephone: siteConfig.phone,

    email: siteConfig.email,

    address: {
      "@type": "PostalAddress",
      addressLocality: "Richmond",
      addressRegion: "TX",
      addressCountry: "US",
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name:
        "Richmond and Greater Houston, Texas",
    },

    description:
      siteConfig.defaultDescription,

    serviceType: [
      "Bathroom Remodeling",
      "Kitchen Remodeling",
      "Interior Renovations",
      "Flooring",
      "Painting and Finishes",
      "Plumbing and Electrical Work",
      "Residential Remodeling",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default BusinessSchema;