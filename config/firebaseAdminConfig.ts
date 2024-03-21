
// src/config/firebaseAdminConfig.js
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config();

if (!process.env.FIREBASE_PRIVATE_KEY) {
    throw new Error('FIREBASE_PRIVATE_KEY is not defined');
  }
  
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
// Export auth and db for use in other files
export const auth = admin.auth();
export const db = admin.firestore();