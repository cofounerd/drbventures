'use client';

import Image from 'next/image';
import { type FormEvent, useEffect, useState } from 'react';

const buyNowLink = 'https://shop.ingramspark.com/b/084?params=IeEVe6YMZEur45jiDrmlfWr8ASYvWTeXtiotHuE2TKt';
const bookCoverImage =
  'https://image-hub-cloud.lightningsource.com/2011-04-01/Images/front_cover/x200/sku/195971970X.jpg?viewkey=22c8cf30e29d2c48d36eb216f312767f3bdf7a7cefb4e63340c8109885f4c580';
const states = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' }
] as const;

const cityOptionsByState: Record<string, string[]> = {
  AL: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile'],
  AK: ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla'],
  AZ: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'],
  AR: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Jonesboro'],
  CA: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco'],
  CO: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
  CT: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford'],
  DE: ['Wilmington', 'Dover', 'Newark', 'Middletown'],
  FL: ['Jacksonville', 'Miami', 'Tampa', 'Orlando'],
  GA: ['Atlanta', 'Augusta', 'Savannah', 'Columbus'],
  HI: ['Honolulu', 'Hilo', 'Kailua', 'Pearl City'],
  ID: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls'],
  IL: ['Chicago', 'Aurora', 'Naperville', 'Springfield'],
  IN: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
  IA: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'],
  KS: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka'],
  KY: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
  LA: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
  ME: ['Portland', 'Lewiston', 'Bangor', 'South Portland'],
  MD: ['Baltimore', 'Annapolis', 'Frederick', 'Rockville'],
  MA: ['Boston', 'Worcester', 'Springfield', 'Cambridge'],
  MI: ['Detroit', 'Grand Rapids', 'Warren', 'Lansing'],
  MN: ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth'],
  MS: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg'],
  MO: ['Kansas City', 'Saint Louis', 'Springfield', 'Columbia'],
  MT: ['Billings', 'Missoula', 'Great Falls', 'Bozeman'],
  NE: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
  NV: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
  NH: ['Manchester', 'Nashua', 'Concord', 'Dover'],
  NJ: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
  NM: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe'],
  NY: ['New York City', 'Buffalo', 'Rochester', 'Albany'],
  NC: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
  ND: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot'],
  OH: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
  OK: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow'],
  OR: ['Portland', 'Eugene', 'Salem', 'Gresham'],
  PA: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Harrisburg'],
  RI: ['Providence', 'Warwick', 'Cranston', 'Pawtucket'],
  SC: ['Charleston', 'Columbia', 'North Charleston', 'Greenville'],
  SD: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
  TN: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
  TX: ['Houston', 'Dallas', 'Austin', 'San Antonio'],
  UT: ['Salt Lake City', 'West Valley City', 'Provo', 'Ogden'],
  VT: ['Burlington', 'South Burlington', 'Rutland', 'Montpelier'],
  VA: ['Virginia Beach', 'Richmond', 'Norfolk', 'Alexandria'],
  WA: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
  WV: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg'],
  WI: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
  WY: ['Cheyenne', 'Casper', 'Laramie', 'Gillette'],
  DC: ['Washington']
};

const inputClass =
  'w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-charcoal/42 focus:border-teal focus:ring-2 focus:ring-teal/15';
const selectClass = `${inputClass} appearance-none`;

export function OrderBookForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cityOptions = selectedState ? [...(cityOptionsByState[selectedState] ?? []), 'Other'] : [];

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">First name</span>
            <input className={inputClass} name="firstName" autoComplete="given-name" required placeholder="First name" />
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">Last name</span>
            <input className={inputClass} name="lastName" autoComplete="family-name" required placeholder="Last name" />
          </label>
        </div>

        <label>
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">Address</span>
          <input className={inputClass} name="address" autoComplete="address-line1" required placeholder="Street address" />
        </label>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.7fr)]">
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">City</span>
            <select
              className={selectClass}
              name="city"
              autoComplete="address-level2"
              required
              value={selectedCity}
              onChange={(event) => setSelectedCity(event.target.value)}
              disabled={!selectedState}
            >
              <option value="">{selectedState ? 'Select city' : 'Select state first'}</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">State</span>
            <select
              className={selectClass}
              name="state"
              autoComplete="address-level1"
              required
              value={selectedState}
              onChange={(event) => {
                setSelectedState(event.target.value);
                setSelectedCity('');
              }}
            >
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">Zip code</span>
            <input className={inputClass} name="zipCode" autoComplete="postal-code" required placeholder="Zip code" />
          </label>
        </div>

        {selectedCity === 'Other' ? (
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">Custom city</span>
            <input className={inputClass} name="customCity" autoComplete="address-level2" required placeholder="Enter your city" />
          </label>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">Phone</span>
            <input className={inputClass} name="phone" autoComplete="tel" type="tel" required placeholder="Phone number" />
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70">Email</span>
            <input className={inputClass} name="email" autoComplete="email" type="email" required placeholder="you@example.com" />
          </label>
        </div>

        <button type="submit" className="mt-2 bg-teal px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-ink">
          Order
        </button>
      </form>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8" role="dialog" aria-modal="true" aria-labelledby="payment-title">
          <div className="max-h-full w-full max-w-5xl overflow-y-auto bg-white p-5 shadow-glow sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <h3 id="payment-title" className="font-display text-4xl leading-tight text-ink">
                  Complete Your Order
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-charcoal">
                  Your order details are ready. Use the purchase link below to complete checkout for <span className="italic">Choosing Joy</span>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/20 text-ink transition hover:bg-ink hover:text-white"
                aria-label="Close payment modal"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <section className="mx-auto mt-6 max-w-xl border border-ink/10 bg-[#fbfaf8] p-4 sm:p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="w-full shrink-0 sm:w-32">
                  <Image
                    src={bookCoverImage}
                    alt="Choosing Joy book cover"
                    width={200}
                    height={300}
                    className="h-auto w-full border border-ink/10 object-cover shadow-sm"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Book Order</p>
                  <h4 className="mt-2 text-left text-lg font-bold leading-6 text-ink sm:text-xl">
                    CHOOSING JOY: How to Navigate Pain, Get Unstuck, and Reclaim Your Life
                  </h4>
                  <p className="mt-2 text-left text-sm italic leading-6 text-charcoal">BUTLER, DUANE R.</p>
                  <a
                    href={buyNowLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-bold text-ink transition hover:bg-teal hover:text-white"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-charcoal">
                The order button opens the official purchase page in a new tab so you can finish checkout and submit payment there.
              </p>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
