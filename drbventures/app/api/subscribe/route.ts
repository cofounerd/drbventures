import { NextResponse } from 'next/server';

type SubscribePayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  source?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as SubscribePayload;
  const email = body.email?.trim();
  const firstName = body.firstName?.trim();
  const lastName = body.lastName?.trim();
  const address = body.address?.trim();
  const city = body.city?.trim();
  const state = body.state?.trim();
  const zipCode = body.zipCode?.trim();
  const phone = body.phone?.trim();
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

  const subscribe = async (fields: Record<string, string>) => {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        first_name: firstName,
        fields
      })
    });

    const data = (await response.json()) as { message?: string };

    return { response, data };
  };

  const fullFields = Object.entries({
    source,
    last_name: lastName,
    address,
    city,
    state,
    zip_code: zipCode,
    phone
  }).reduce<Record<string, string>>((accumulator, [key, value]) => {
    if (value) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});

  let { response, data } = await subscribe(fullFields);

  if (!response.ok && Object.keys(fullFields).length > 1) {
    ({ response, data } = await subscribe({ source }));
  }

  if (!response.ok) {
    return NextResponse.json(
      { message: data.message || 'ConvertKit rejected the submission.' },
      { status: response.status }
    );
  }

  return NextResponse.json({
    message: source === 'order-book' ? 'Order details received. Opening purchase details.' : 'Check your inbox to confirm your subscription.'
  });
}
