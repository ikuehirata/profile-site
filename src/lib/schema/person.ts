export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ikue Hirata",
  "alternateName": "Ikue",
  "jobTitle": "English→Japanese Videogame Translator / Localization Engineer",
  "description":
    "EN→JA game localization specialist with a strong engineering background. Known for high-throughput delivery enabled by workflow engineering and deep CAT-tool integration. Focused on both AAA and indie titles.",
  "url": "https://ikuehirata.com",
  "image": "https://ikuehirata.com/assets/profile.jpg",
  "worksFor": { "@type": "Organization", "name": "Freelance" },
  "knowsAbout": [
    "game localization",
    "software localization",
    "AAA game production pipelines",
    "indie game localization",
    "memoQ",
    "TMX processing",
    "XLIFF / MQXLIFF",
    "Python automation",
    "localization pipeline engineering",
    "productivity analytics",
    "GitHub-based tooling"
  ],
  "knowsLanguage": [
    { "@type": "Language", "name": "Japanese", "alternateName": "ja", "proficiencyLevel": "Native" },
    { "@type": "Language", "name": "English", "alternateName": "en", "proficiencyLevel": "Fluent" },
    { "@type": "Language", "name": "Italian", "alternateName": "it", "proficiencyLevel": "Basic" }
  ],
  "award": [
    "Credited Translator: Battlefield 6 (2025)",
    "Credited Translator: Anno 117 (2025)",
    "Credited Translator: Europa Universalis V (2025)",
    "Credited Translator: SpongeBob: Tides of Titans (2025)"
  ],
  "sameAs": [
    "https://github.com/ikuehirata",
    "https://www.linkedin.com/in/ikue-h-18933693/",
    "https://www.proz.com/profile/ikuehirata"
  ],
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Country", "name": "Italy" },
    { "@type": "Place", "name": "European Union" }
  ]
} as const;
