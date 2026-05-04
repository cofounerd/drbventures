import { createClient } from '@sanity/client';
import { defaultLandingPageContent, type LandingPageContent } from '@/lib/site-content';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

const hasSanityConfig = Boolean(projectId);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: projectId as string,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

const landingPageQuery = `*[_type == "landingPage"][0]{
  eyebrow,
  title,
  subtitle,
  intro,
  primaryCtaLabel,
  secondaryCtaLabel,
  stats,
  benefits,
  story,
  proofPoints,
  footerNote
}`;

export async function getLandingPageContent(): Promise<LandingPageContent> {
  if (!sanityClient) {
    return defaultLandingPageContent;
  }

  try {
    const content = await sanityClient.fetch<Partial<LandingPageContent> | null>(landingPageQuery);

    if (!content) {
      return defaultLandingPageContent;
    }

    return {
      ...defaultLandingPageContent,
      ...content,
      stats: content.stats?.length ? content.stats : defaultLandingPageContent.stats,
      benefits: content.benefits?.length ? content.benefits : defaultLandingPageContent.benefits,
      story: content.story
        ? {
            ...defaultLandingPageContent.story,
            ...content.story
          }
        : defaultLandingPageContent.story,
      proofPoints: content.proofPoints?.length ? content.proofPoints : defaultLandingPageContent.proofPoints
    };
  } catch {
    return defaultLandingPageContent;
  }
}
