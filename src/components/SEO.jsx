import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";

function SEO({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}) {
  const pageTitle =
    title || siteConfig.defaultTitle;

  const pageDescription =
    description ||
    siteConfig.defaultDescription;

  const canonicalUrl = `${siteConfig.url}${path}`;

  const socialImage =
    image || siteConfig.socialImage;

  const socialImageUrl =
    socialImage.startsWith("http")
      ? socialImage
      : `${siteConfig.url}${socialImage}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {noIndex && (
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      )}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={socialImageUrl}
      />

      <meta
        property="og:site_name"
        content={siteConfig.name}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={socialImageUrl}
      />
    </Helmet>
  );
}

export default SEO;