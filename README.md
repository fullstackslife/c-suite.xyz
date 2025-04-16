# C-Suite.xyz Website

## Setup Instructions

1. Copy `config.template.json` to `config.json`:
   ```bash
   cp config.template.json config.json
   ```

2. Update `config.json` with your actual credentials:
   - HubSpot Portal ID
   - HubSpot Form ID
   - Brevo Conversations ID

3. Never commit `config.json` to version control. It's already in `.gitignore`.

4. For GitHub Pages deployment:
   - Push your code to GitHub
   - Enable GitHub Pages in repository settings
   - Set up your custom domain in GitHub Pages settings

## Integration Notes

- HubSpot forms handle all form submissions
- Brevo chat widget provides live chat support
- No backend required - everything works on GitHub Pages
- HubSpot and Brevo can be synced through their respective platforms

## Security Notes

- Keep your API keys and credentials secure
- Use environment variables in production if needed
- Regularly rotate your API keys
- Monitor your API usage for suspicious activity
