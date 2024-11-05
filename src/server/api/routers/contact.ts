import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const contactRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.contact.create({
        data: {
          name: input.name,
          email: input.email,
          message: input.message,
        },
      });
    }),
});
