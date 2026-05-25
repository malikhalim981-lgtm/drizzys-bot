# Discord Bot Project
A Discord bot with slash commands and events.

## Setup
1. Create a `.env` file with:
   ```
   TOKEN=your_bot_token
   CLIENT_ID=your_client_id
   GUILD_ID=your_guild_id
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Deploy commands:
   ```bash
   node deploy-commands.js
   ```

4. Start the bot:
   ```bash
   npm start
   ```

## Commands
- `/ping` - Replies with Pong!
- `/hello` - Say hello to the bot
- `/say` - Send a message as the bot
