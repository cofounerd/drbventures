export type LandingPageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  stats: { label: string; value: string }[];
  benefits: { title: string; description: string }[];
  story: {
    title: string;
    body: string;
  };
  proofPoints: { title: string; description: string }[];
  footerNote: string;
};

export const defaultLandingPageContent: LandingPageContent = {
  eyebrow: 'Choosing Joy',
  title: 'How to Navigate Pain, Get Unstuck, and Reclaim Your Life',
  subtitle: 'A faith-centered book launch page for readers, partners, publishers, and speaking opportunities.',
  intro:
    'Pain is real, but it does not get the final word. Choosing Joy is a book and movement for people ready to heal, rebuild, and move forward with courage.',
  primaryCtaLabel: 'Join the launch list',
  secondaryCtaLabel: 'Explore the message',
  stats: [
    { label: 'Core theme', value: 'Healing with purpose' },
    { label: 'Audience', value: 'Readers, leaders, and seekers' },
    { label: 'Platform', value: 'Sanity + ConvertKit + Vercel' }
  ],
  benefits: [
    {
      title: 'A clear book promise',
      description: 'The page explains what the book is about in a few decisive lines, without losing warmth or credibility.'
    },
    {
      title: 'A launch-ready signup flow',
      description: 'Visitors can join the list from the hero and the lower callout, with ConvertKit handling delivery.'
    },
    {
      title: 'Publisher-friendly positioning',
      description: 'The layout frames the author as a thoughtful voice with a real audience and a clean path to launch.'
    }
  ],
  story: {
    title: 'Why this message matters',
    body:
      'The site is built around the idea that joy is not denial. It is a deliberate response to pain, loss, and transition. The design keeps the message front and center while making the next step obvious: join the list and stay connected.'
  },
  proofPoints: [
    {
      title: 'Credible',
      description: 'Editorial layout, restrained color, and strong typography create the feel of a serious publishing asset.'
    },
    {
      title: 'Human',
      description: 'The portrait and movement collage keep the author visible, personal, and approachable.'
    },
    {
      title: 'Actionable',
      description: 'The signup form is native to the page, simple to use, and easy to connect to ConvertKit.'
    }
  ],
  footerNote: 'Built to deploy on Vercel and to stay flexible as the launch message evolves in Sanity.'
};
