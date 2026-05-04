'use client';

import Image from 'next/image';
import { type FormEvent, useEffect, useState } from 'react';

const paymentOptions = [
  {
    name: 'Zelle',
    detail: 'DRBUTLERVENTURES@GMAIL.COM',
    image: '/assets/zelle-qr.jpeg',
    alt: 'Zelle QR code for DR Butler Ventures'
  },
  {
    name: 'Cash App',
    detail: '$DRButlerVentures',
    image: '/assets/cashapp-qr.png',
    alt: 'Cash App QR code for Duane Butler'
  }
];

const inputClass =
  'w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-charcoal/42 focus:border-teal focus:ring-2 focus:ring-teal/15';

export function OrderBookForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <textarea className={`${inputClass} min-h-28 resize-y`} name="address" autoComplete="street-address" required placeholder="Shipping address" />
        </label>

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
                  Scan either payment QR code below. After payment, DRB Ventures will use your order details for fulfillment.
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

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {paymentOptions.map((option) => (
                <section key={option.name} className="border border-ink/10 bg-[#fbfaf8] p-4 sm:p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-3xl text-ink">{option.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold">Scan to pay</p>
                  </div>
                  <p className="mt-1 break-words text-sm font-semibold text-charcoal">{option.detail}</p>
                  <div className="mt-4 bg-white p-3">
                    <Image src={option.image} alt={option.alt} width={1139} height={1474} className="h-auto w-full" />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
