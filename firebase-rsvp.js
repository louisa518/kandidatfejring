import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js";

let database = null;

export function getRsvpDatabase() {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase er ikke konfigureret. Udfyld firebase-config.js først.");
  }

  if (!database) {
    const app = initializeApp(firebaseConfig);
    database = getDatabase(app);
  }

  return database;
}

export function listenToRsvps(callback, onError) {
  try {
    const db = getRsvpDatabase();
    const rsvpsRef = ref(db, "rsvps");

    return onValue(
      rsvpsRef,
      snapshot => {
        callback(snapshot.val() || {});
      },
      error => {
        if (onError) onError(error);
      }
    );
  } catch (error) {
    if (onError) onError(error);
    return () => {};
  }
}

export async function saveRsvp(userKey, answer) {
  const db = getRsvpDatabase();
  const userRef = ref(db, `rsvps/${userKey}`);

  await set(userRef, {
    name: userKey,
    answer,
    updatedAt: serverTimestamp()
  });
}
