// Firebase-konfiguration
// Find den i Firebase Console → Project settings → Your apps → Web app.
// Erstat især apiKey, messagingSenderId og appId med dine rigtige værdier.

export const firebaseConfig = {
  apiKey: "INDSAET_DIN_API_KEY_HER",
  authDomain: "kandidatfejring.firebaseapp.com",
  databaseURL: "https://kandidatfejring-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kandidatfejring",
  storageBucket: "kandidatfejring.appspot.com",
  messagingSenderId: "INDSAET_DIN_MESSAGING_SENDER_ID_HER",
  appId: "INDSAET_DIN_APP_ID_HER"
};

export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("INDSAET") &&
    firebaseConfig.appId &&
    !firebaseConfig.appId.includes("INDSAET") &&
    firebaseConfig.databaseURL
  );
}
