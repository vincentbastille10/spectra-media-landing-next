export default function JsonLd(){
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Spectra Media",
    "url": "https://spectramedia.ai",
    "logo": "https://spectramedia.ai/og-image.png",
    "sameAs": [
      "https://spectramedia.gumroad.com/",
      "https://bettybotdelph.onrender.com/",
      "https://www.linkedin.com/in/vincent-letort/"
    ],
    "founder": { "@type": "Person", "name": "Vincent Letort" }
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(org)}} />
  );
}
