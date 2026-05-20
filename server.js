import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: { level: 'info' } });

// Register the static file server to serve compiled Vite frontend assets
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'dist'),
  prefix: '/',
  wildcard: true
});

// Single Page Application (SPA) routing fallback
// Ensures React Router works correctly on arbitrary sub-routes like /signals or /marketplace
fastify.setNotFoundHandler((request, reply) => {
  const accept = request.headers.accept || '';
  // Avoid rendering HTML fallback for missing files/assets/API calls
  if (!accept.includes('html')) {
    return reply.code(404).send({ error: 'Asset node not found' });
  }
  return reply.sendFile('index.html');
});

// Initialize entry point
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const start = async () => {
  try {
    await fastify.listen({ port: Number(PORT), host: HOST });
    console.log(`Node Fastify server actively listening on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
