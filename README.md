# Kandidatfejring RSVP

Dette er en statisk RSVP-side, der kan uploades til GitHub Pages. Svar gemmes live i Firebase Realtime Database.

## Før du uploader

1. Åbn `firebase-config.js`.
2. Gå til Firebase Console → Project settings → Your apps → Web app.
3. Kopiér din Firebase config ind i `firebase-config.js`.
4. `databaseURL` er allerede sat til:

```js
https://kandidatfejring-default-rtdb.europe-west1.firebasedatabase.app
```

Du skal især huske at indsætte `apiKey` og `appId`.

## Firebase rules

Gå til Firebase Console → Realtime Database → Rules.

Indsæt indholdet fra `firebase-rules.json`, og tryk `Publish`.

Reglerne tillader, at siden læser RSVP-svar og kun skriver svar for de inviterede fornavne.

## Upload til GitHub Pages

1. Upload alle filerne i denne mappe til dit GitHub repository.
2. Gå til repository → Settings → Pages.
3. Vælg `Deploy from a branch`.
4. Vælg branch `main` og folder `/root`.
5. Tryk `Save`.

Når GitHub Pages er færdig, får du et link, du kan sende til gæsterne.

## Login

Gæster logger ind med:

- Brugernavn: fornavn med stort begyndelsesbogstav
- Kode: fornavn med stort begyndelsesbogstav efterfulgt af `123`

Eksempel:

- Brugernavn: `Jens`
- Kode: `Jens123`

## Vigtigt

Dette er en enkel løsning til en privat invitation. Login er ikke stærk sikkerhed, fordi siden ligger som statisk kode på GitHub Pages. Det er fint til en lille fejring, men ikke til følsomme oplysninger.
