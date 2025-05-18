import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
  const serviceAccountBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;

  if (!serviceAccountBase64) {
    throw new Error('Service account env var not set');
  }

  const serviceAccount = JSON.parse(
    Buffer.from(serviceAccountBase64, 'base64').toString('utf-8')
  );

  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export async function GET(request: NextRequest) {
  try {
    const toolsCollection = db.collection('tools');
    const snapshot = await toolsCollection.get();
    const tools: any[] = [];

    snapshot.forEach((doc) => {
      tools.push({ id: doc.id, ...doc.data() });
    });

    return NextResponse.json(tools);
  } catch (error) {
    console.error('Error fetching tools from Firestore:', error);
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 });
  }
}
