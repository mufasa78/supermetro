import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Hono();

// Serve static files from the dist/client directory
app.use('/*', serveStatic({
  root: path.join(__dirname, 'dist/client'),
  index: 'index.html'
}));

// API routes
app.get('/api', (c) => {
  return c.text('Super Metro API is running!');
});

// Health check endpoint for Render
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch-all route to serve the React app for client-side routing
app.get('*', serveStatic({
  root: path.join(__dirname, 'dist/client'),
  path: 'index.html'
}));

const port = process.env.PORT || 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: parseInt(port)
});
