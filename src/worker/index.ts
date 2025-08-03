import { Hono } from "hono";

// Define environment interface
type Env = object

const app = new Hono<{ Bindings: Env }>();

// Add a simple route for testing
app.get('/', (c) => {
  return c.text('Super Metro API is running!');
});

export default app;
