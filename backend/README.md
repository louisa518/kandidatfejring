# RSVP backend

Denne lille backend modtager RSVP-svar fra din frontend og sender dem videre til GitHub Actions via `repository_dispatch`.

## Installation

1. Gå til `backend`-mappen:
   ```bash
   cd backend
   ```

2. Installer afhængigheder:
   ```bash
   npm install
   ```

3. Opret en `.env`-fil med dine GitHub-indstillinger:
   ```env
   GITHUB_TOKEN=din_personlige_access_token
   GITHUB_REPOSITORY=louisa518/kandidatfejring
   ```

4. Start serveren:
   ```bash
   npm start
   ```

Serveren kører som standard på `http://localhost:3000`.

## Brug

Frontend skal sende `POST` til `/api/rsvp` med JSON-body:

```json
{
  "name": "Anders",
  "answer": "Ja"
}
```

## Deployment

Du kan hoste denne backend på en platform som Vercel, Render eller Railway. Sørg for at sætte `GITHUB_TOKEN` som en hemmelig miljøvariabel.

Hvis du bruger Vercel, kan du sætte `RESPONSE_ENDPOINT` i `rsvp.html` til din deployment-URL, fx:

```js
const RESPONSE_ENDPOINT = 'https://dit-projekt.vercel.app/api/rsvp';
```
