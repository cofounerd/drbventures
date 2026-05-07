import { NextResponse } from 'next/server';

type SubscribePayload = {
  email?: string;
  firstName?: string;
  source?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as SubscribePayload;
  const email = body.email?.trim();
  const firstName = body.firstName?.trim();
  const source = body.source?.trim() || 'homepage';

  if (!email) {
    return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
  }

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    return NextResponse.json({
      message: 'ConvertKit is not configured yet, but the form submission path is working.'
    });
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      api_key: apiKey,
      email,
      first_name: firstName,
      fields: {
        source
      }
    })
  });

  const data = (await response.json()) as { message?: string };

  if (!response.ok) {
    return NextResponse.json(
      { message: data.message || 'ConvertKit rejected the submission.' },
      { status: response.status }
    );
  }

  return NextResponse.json({
    message: 'Check your inbox to confirm your subscription.'
  });
}
