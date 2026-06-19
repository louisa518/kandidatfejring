// Firebase-konfiguration
// Gå til Firebase Console → Project settings → Your apps → Web app
// Kopiér værdierne ind her.

export const firebaseConfig = {
  apiKey: "INDSAET_DIN_API_KEY_HER",
  authDomain: "kandidatfejring.firebaseapp.com",
  databaseURL: "https://kandidatfejring-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kandidatfejring",
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
