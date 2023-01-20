import { router, publicProcedure } from '../server/trpc';
import { z } from 'zod'
import { Note } from '../enums/note.enum';
import { SectionTitle } from '../enums/section-title.enum';

export const songRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.song.findMany();
  }),

  getByUser: publicProcedure
    .input(z.string())
    .mutation(({ ctx, input }) => {
      return ctx.prisma.song.findMany({
        where: {
          createdBy: input
        }
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().max(40),
        key: z.nativeEnum(Note),
        bpm: z.number().min(20).max(280),
        sections: z.array(z.object({
          title: z.nativeEnum(SectionTitle),
          lyrics: z.string().max(1000),
          chords: z.array(z.object({
            chord: z.string().max(10),
            minor: z.boolean(),
            dominant: z.boolean(),
          }))
        })),
        createdBy: z.string().max(40),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.song.create({
        data: {
          title: input.title,
          key: input.key,
          bpm: input.bpm,
          sections: input.sections.map(section => ({
            title: SectionTitle[section.title],
            lyrics: section.lyrics,
            chords: section.chords.map(chord => ({
              chord: chord.chord,
              minor: chord.minor,
              dominant: chord.dominant,
            }))
          })),
          createdBy: input.createdBy,
        }
      });
    }),
});