
import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, cert, getApps, App as FirebaseAdminApp } from 'firebase-admin/app'; // Renamed App to FirebaseAdminApp
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let db: Firestore;
let adminApp: FirebaseAdminApp | undefined;

try {
  if (!getApps().length) {
    const serviceAccountBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    if (!serviceAccountBase64) {
      console.error(
        'CRITICAL_ERROR: GOOGLE_SERVICE_ACCOUNT_BASE64 environment variable is not set. Firebase Admin SDK cannot be initialized.'
      );
      // db will remain undefined, GET request will fail with a specific message.
    } else {
      try {
        const serviceAccountString = Buffer.from(serviceAccountBase64, 'base64').toString('utf-8');
        const serviceAccount = JSON.parse(serviceAccountString);
        adminApp = initializeApp({
          credential: cert(serviceAccount),
        });
        db = getFirestore(adminApp);
        console.log('Firebase Admin SDK initialized successfully and Firestore instance obtained.');
      } catch (e) {
        console.error('CRITICAL_ERROR: Firebase Admin SDK initialization failed. Error details:', e.message, 'Stack:', e.stack);
        // db will remain undefined
      }
    }
  } else {
    // App is already initialized, get the default app and its Firestore instance
    adminApp = getApps()[0];
    db = getFirestore(adminApp);
    console.log('Firebase Admin SDK already initialized. Firestore instance obtained.');
  }
} catch (e) {
    // Catch any unexpected errors during the outer try (e.g. getApps() itself failing)
    console.error('CRITICAL_ERROR: Unexpected error during Firebase Admin SDK setup block. Error:', e.message, 'Stack:', e.stack);
}

export async function GET(request: NextRequest) {
  if (!db) {
    console.error(
      'API_ERROR: Firestore database instance is not available. This is likely due to a Firebase Admin SDK initialization failure. Review server logs for CRITICAL_ERROR messages regarding GOOGLE_SERVICE_ACCOUNT_BASE64 or SDK initialization.'
    );
    return NextResponse.json(
      { error: 'Server configuration error: Failed to connect to the database. Please check server logs for more details.' },
      { status: 500 }
    );
  }

  try {
    const toolsCollection = db.collection('tools');
    const snapshot = await toolsCollection.get();
    const tools: any[] = []; // You might want to define a proper type for tools from Firestore

    snapshot.forEach((doc) => {
      tools.push({ id: doc.id, ...doc.data() });
    });

    return NextResponse.json(tools);
  } catch (error) {
    console.error('API_ERROR: Error fetching tools from Firestore. Error details:', error.message, 'Stack:', error.stack);
    // For production, you might want to return a more generic error message
    // and not expose error.message directly if it could contain sensitive info.
    return NextResponse.json({ error: 'Failed to fetch tools from the database.', details: error.message }, { status: 500 });
  }
}
