'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

type NewsletterFormProps = {
  source: string;
};

export function NewsletterForm({ source }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          firstName,
          source
        })
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to submit the form.');
      }

      setStatus('success');
      setMessage(payload.message || 'You are on the list.');
      setEmail('');
      setFirstName('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-charcoal/70">First name</span>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            name="firstName"
            autoComplete="given-name"
            className="w-full rounded-2xl border border-sand bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-gold/20"
            placeholder="Alex"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-charcoal/70">Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full rounded-2xl border border-sand bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-gold/20"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Joining...' : 'Join the launch list'}
      </button>

      <p className={`min-h-[1.5rem] text-sm ${status === 'error' ? 'text-red-700' : 'text-ink/70'}`}>{message}</p>
    </form>
  );
}
