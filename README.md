# Kandidatfejring RSVP

Dette er en statisk RSVP-side til GitHub Pages. Svar gemmes live i Firebase Realtime Database.

## Vigtigt

`responses.json` bruges ikke længere. Live-svar hentes fra Firebase.

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

## Tjek at live virker

Når Louisa svarer `Nej`, skal Firebase se cirka sådan ud:

```json
{
  "rsvps": {
    "Louisa": {
      "answer": "Nej",
      "name": "Louisa",
      "updatedAt": 123456789
    }
  }
}
```

Hvis svaret ikke står under `rsvps/Louisa`, er det kun gemt lokalt i browseren og ikke live.

Hvis `guest-list.html` ikke viser kortet `Mangler svar` og teksten `Live status`, er det den gamle fil, der stadig er uploadet eller cachet.

## Upload til GitHub Pages

1. Upload alle filerne i denne mappe til dit GitHub repository.
2. Gå til repository → Settings → Pages.
3. Vælg `Deploy from a branch`.
4. Vælg branch `main` og folder `/root`.
5. Tryk `Save`.

Når GitHub Pages er færdig, får du et link, du kan sende til gæsterne.
