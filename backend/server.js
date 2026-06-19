import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY || 'louisa518/kandidatfejring';
const GITHUB_OWNER = process.env.GITHUB_OWNER || GITHUB_REPOSITORY.split('/')[0];
const GITHUB_REPO = process.env.GITHUB_REPO || GITHUB_REPOSITORY.split('/')[1];
const EVENT_TYPE = process.env.GITHUB_EVENT_TYPE || 'rsvp-update';

if (!GITHUB_TOKEN) {
  console.error('Manglende GITHUB_TOKEN. Angiv et token i miljøvariablen GITHUB_TOKEN.');
  process.exit(1);
}

app.post('/api/rsvp', async (req, res) => {
  const { name, answer } = req.body;

  if (!name || !answer) {
    return res.status(400).json({ error: 'Navn og svar skal angives.' });
  }

  const payload = {
    event_type: EVENT_TYPE,
    client_payload: { name, answer },
  };

  try {
    const githubResponse = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!githubResponse.ok) {
      const errorText = await githubResponse.text();
      return res.status(500).json({ error: 'GitHub dispatch mislykkedes', details: errorText });
    }

    return res.status(200).json({ message: 'Response dispatched to GitHub Actions.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Serverfejl ved sending til GitHub.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`RSVP backend kører på http://localhost:${port}`);
});
