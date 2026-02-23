import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
};

export function SEO({ title, description, image, canonical, jsonLd }: Props) {
  const siteTitle = "Mia Brigaderia";
  const fullTitle = title ? `${title} · ${siteTitle}` : siteTitle;
  const desc =
    description ||
    "Doces artesanais com amor. Brigadeiros gourmet, brownies e delícias da Mia Brigaderia.";

  return (
    <Helmet>
      {fullTitle && <title>{fullTitle}</title>}
      {desc && <meta name="description" content={desc} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
