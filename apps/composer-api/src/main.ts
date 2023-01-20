import * as express from 'express';
import * as path from 'path';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './app/server/context';
import { songRouter } from './app/routers/song';
import { router } from './app/server/trpc';

const app = express();

export const appRouter = router({
  song: songRouter
});

export type AppRouter = typeof appRouter;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
