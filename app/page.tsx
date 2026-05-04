import Image from 'next/image';
import { NewsletterForm } from '@/components/newsletter-form';
import { OrderBookForm } from '@/components/order-book-form';
import { getLandingPageContent } from '@/lib/sanity';

export const revalidate = 60;

const heroPosterImage = '/assets/choosing-joy-hero.jpg';
const heroImage = '/assets/image.png';
const collageImage = '/assets/image (1).png';
const portraitImage = '/assets/image (2).png';
const logoImage = '/assets/logo.png';

const milestones = [
  { label: 'Writing', status: 'Complete', active: true },
  { label: 'Editing', status: 'In progress', active: true },
  { label: 'Design', status: 'In progress', active: true },
  { label: 'Publishing', status: 'Coming soon', active: true },
  { label: 'Launch', status: 'Coming soon', active: true }
];

const quotes = [
  {
    text: 'This is the kind of book people need in their hardest seasons.',
    name: 'Alicia B.'
  },
  {
    text: 'A voice of truth, hope, and practical healing.',
    name: 'Dionne P.'
  },
  {
    text: 'It meets you where you are and shows you the way forward.',
    name: 'Jermaine H.'
  }
];

const faqs = [
  ['What is Choosing Joy about?', 'A practical, faith-centered path through pain, discouragement, and transition toward purpose, courage, and peace.'],
  ['Who is this book for?', 'Readers who feel stuck, leaders helping people heal, and anyone ready to rebuild after a difficult season.'],
  ['Is this a faith-based book?', 'Yes. The message is rooted in Christian hope while remaining direct, human, and useful for everyday life.'],
  ['When will the book be available?', 'The book is coming soon. Join the launch list to receive the first release updates.'],
  ['How can I stay updated?', 'Join the list for book news, launch details, and movement updates from DRB Ventures.']
];

export default async function HomePage() {
  const content = await getLandingPageContent();

  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/92 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <nav aria-label="Primary left" className="hidden items-center gap-9 text-sm font-medium text-ink/80 md:flex">
            <a href="#books" className="transition hover:text-teal">
              Books
            </a>
            <a href="#about" className="transition hover:text-teal">
              About
            </a>
          </nav>

          <a href="#top" className="justify-self-start md:justify-self-center" aria-label="DRB Ventures home">
            <Image src={logoImage} alt="DRB Ventures logo" width={86} height={86} className="h-14 w-14 object-contain md:h-16 md:w-16" priority />
          </a>

          <nav aria-label="Primary right" className="hidden items-center justify-end gap-9 text-sm font-medium text-ink/80 md:flex">
            <a href="#movement" className="transition hover:text-teal">
              Movement
            </a>
            <a href="#updates" className="transition hover:text-teal">
              Updates
            </a>
            <a href="#order" className="transition hover:text-teal">
              Order
            </a>
            <a href="#contact" className="transition hover:text-teal">
              Contact
            </a>
          </nav>

          <a
            href="#updates"
            className="col-start-3 justify-self-end border border-teal px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-teal transition hover:bg-teal hover:text-white md:hidden"
          >
            Updates
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.96)_48%,rgba(245,241,233,0.92)_100%)]" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-10 sm:px-8 md:grid-cols-[0.86fr_1fr] md:py-14 lg:min-h-[820px] lg:px-10">
          <div className="relative order-2 mx-auto w-full max-w-[29rem] md:order-1 lg:max-w-[34rem]">
            <div className="overflow-hidden border border-ink/10 bg-white shadow-soft">
              <Image
                src={heroPosterImage}
                alt="Choosing Joy by Duane R. Butler"
                width={1280}
                height={2048}
                sizes="(min-width: 1024px) 34rem, (min-width: 768px) 42vw, 88vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          <div className="relative order-1 max-w-2xl py-8 md:order-2">
            <h1 className="sr-only">
              {content.eyebrow}: {content.title}
            </h1>
            <p className="font-display text-5xl font-semibold leading-[1.02] text-teal sm:text-6xl lg:text-7xl">Pain does not get the final word.</p>
            <p className="mt-6 max-w-xl font-display text-3xl leading-tight text-gold sm:text-4xl">A new book and movement from Duane R. Butler.</p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal">{content.intro}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#updates" className="inline-flex justify-center bg-teal px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-ink">
                {content.primaryCtaLabel}
              </a>
              <a
                href="#message"
                className="inline-flex justify-center border border-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-gold transition hover:bg-gold hover:text-ink"
              >
                Read the message
              </a>
            </div>
          </div>
        </div>
        <a
          href="#books"
          aria-label="Scroll to book progress"
          className="absolute bottom-5 left-1/2 hidden h-9 w-9 -translate-x-1/2 items-center justify-center text-teal md:flex"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </section>

      <section id="books" className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[0.68fr_1fr] lg:px-10">
          <div>
            <h2 className="font-display text-5xl leading-tight">Coming Soon</h2>
            <p className="font-display text-3xl leading-tight text-white/92">Pre-launch in progress</p>
            <p className="mt-5 max-w-md text-base leading-7 text-white/82">
              The book is being finished with care and intention. Join the list and be the first to know when it launches.
            </p>
          </div>

          <div className="self-center">
            <div className="grid grid-cols-[1fr_auto] items-center gap-5">
              <div className="h-4 overflow-hidden rounded-sm bg-white/24">
                <div className="h-full w-full rounded-sm bg-gold" />
              </div>
              <p className="font-display text-3xl text-gold">100%</p>
            </div>
            <div className="mt-7 grid grid-cols-5 gap-3">
              {milestones.map((milestone) => (
                <div key={milestone.label} className="relative pt-7 text-center">
                  <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border border-white bg-teal">
                    <span className={`mx-auto mt-[3px] block h-2 w-2 rounded-full ${milestone.active ? 'bg-gold' : 'bg-transparent'}`} />
                  </span>
                  <p className="text-xs font-semibold sm:text-sm">{milestone.label}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.08em] text-white/70 sm:text-xs">{milestone.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="updates" className="relative overflow-hidden border-b border-ink/10 bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image src={heroImage} alt="" fill sizes="50vw" className="object-cover object-bottom opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.62)_42%,rgba(214,163,42,0.58)_100%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_1fr] lg:px-10">
          <div>
            <h2 className="max-w-lg font-display text-5xl leading-[1.03] sm:text-6xl">Launch Updates</h2>
            <div className="mt-6 h-px w-20 bg-gold" />
            <p className="mt-6 max-w-md text-lg leading-8 text-charcoal">
              Receive updates, launch news, and exclusive content as the book moves closer to launch.
            </p>
          </div>

          <div className="self-center border border-ink/10 bg-white/90 p-5 shadow-soft sm:p-7">
            <NewsletterForm source="booksite-updates" />
          </div>
        </div>
      </section>

      <section id="order" className="border-b border-ink/10 bg-[#fbfaf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_1fr] lg:px-10">
          <div>
            <h2 className="max-w-lg font-display text-5xl leading-[1.03] sm:text-6xl">Order Book</h2>
            <div className="mt-6 h-px w-20 bg-gold" />
            <p className="mt-6 max-w-md text-lg leading-8 text-charcoal">
              Reserve your copy of Choosing Joy. Enter your shipping details, then tap Order to scan a payment QR code.
            </p>
          </div>

          <div className="self-center border border-ink/10 bg-white p-5 shadow-soft sm:p-7">
            <OrderBookForm />
          </div>
        </div>
      </section>

      <section id="message" className="bg-white px-5 py-16 text-center sm:px-8 lg:px-10">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">What Readers Are Saying</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-10 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure key={quote.name}>
              <div className="font-display text-6xl leading-none text-gold">“</div>
              <blockquote className="mx-auto max-w-xs font-display text-2xl italic leading-snug text-ink/88">“{quote.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-charcoal">- {quote.name}</figcaption>
            </figure>
          ))}
        </div>
        <a href="#movement" className="mt-10 inline-block border-b border-gold pb-1 font-display text-2xl text-ink transition hover:text-teal">
          Join the movement.
        </a>
      </section>

      <section id="movement" className="bg-teal text-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="relative min-h-56">
            <Image src={portraitImage} alt="Speaking with a microphone" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
          </div>
          <div className="relative min-h-56">
            <Image src={collageImage} alt="Community blessing moment" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-left" />
          </div>
          <div className="relative min-h-56">
            <Image src={collageImage} alt="DRB Ventures community gathering" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-right" />
          </div>
          <div className="relative min-h-56">
            <Image src={heroImage} alt="Choosing Joy writing desk" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-bottom" />
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <h2 className="font-display text-5xl leading-tight text-gold">Join the movement.</h2>
            <p className="mt-2 text-lg text-white/88">Help advance the message of hope, healing, and joy.</p>
          </div>
          <a href="#about" className="inline-flex justify-center border border-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-gold hover:text-ink">
            Learn more
          </a>
        </div>
      </section>

      <section id="about" className="bg-[#fbfaf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.52fr_1fr] lg:px-10">
          <div>
            <h2 className="max-w-xs font-display text-5xl leading-tight">Choosing Joy Means...</h2>
            <div className="mt-6 h-px w-20 bg-gold" />
            <p className="mt-6 max-w-sm text-base leading-7 text-charcoal">
              It is not ignoring what hurts. It is deciding what will lead you forward. This book offers practical steps, honest encouragement,
              and a path toward a life of purpose and peace.
            </p>
            <a href="#message" className="mt-8 inline-flex border border-ink px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-white">
              Read the message
            </a>
          </div>

          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-ink">
                  {question}
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 transition group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_0.7fr_0.7fr_1.2fr] lg:px-10">
          <div>
            <Image src={logoImage} alt="DRB Ventures logo" width={96} height={96} className="h-20 w-20 invert" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/76">Books with purpose. A movement that builds lives.</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Explore</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/78">
              <a href="#books" className="hover:text-white">
                Books
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#movement" className="hover:text-white">
                Movement
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Connect</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/78">
              <a href="#updates" className="hover:text-white">
                Updates
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
              <a href="#updates" className="hover:text-white">
                Join the Launch List
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Stay Connected</h3>
            <p className="mt-5 text-sm text-white/78">Get updates and launch news.</p>
            <a href="#updates" className="mt-5 inline-flex border border-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-gold hover:text-ink">
              Join the Launch List
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/12 px-5 py-5 text-xs text-white/62 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 DRB Ventures. All rights reserved.</p>
          <a href="#contact" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}
