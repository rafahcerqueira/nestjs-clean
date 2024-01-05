import { z } from "zod";
import { JwtAuthGuard } from "@/auth/jwt-auth.guards";
import { PrismaService } from "@/prisma/prisma.service";
import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { Controller, Get, Query, UseGuards } from "@nestjs/common";

const pageQueryParamSchema = z
  .string()
  .optional()
  .default("1")
  .transform(Number)
  .pipe(z.number().min(1));

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema);

type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>;

@Controller("questions")
@UseGuards(JwtAuthGuard)
export class FetchQuestionsQuestionController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async handle(@Query("page", queryValidationPipe) page: PageQueryParamSchema) {
    const perPage = 1;

    const questions = await this.prisma.question.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: {
        createdAt: "desc",
      },
    });

    return { questions };
  }
}
