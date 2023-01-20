import { initTRPC } from '@trpc/server';
import { songRouter } from '../routers/song';
import { Context } from './context';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const appRouter = router({
  song: songRouter
});

export type AppRouter = typeof appRouter;