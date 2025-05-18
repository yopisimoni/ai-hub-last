import admin from "firebase-admin";
import mockTools from './mockToolsData.js';
// Load the service account key JSON file
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" }; // !! IMPORTANT: Replace with the actual path to your service account key file !!

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const uploadMockData = async () => {
  console.log("Starting mock data upload to Firestore...");

  const toolsCollection = db.collection("tools");

  if (!mockTools || mockTools.length === 0) {
    console.log("No mock tools data found to upload.");
    return;
  }

  try {
    for (const tool of mockTools) {
      // Add a new document with a generated id.
      const docRef = await toolsCollection.add(tool);
      console.log("Document written with ID: ", docRef.id);
    }
    console.log("Mock data upload complete.");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// To run the script, you can call the function:
uploadMockData();