import { JwtAuthGuard } from "@/auth/jwt-auth.guards";
import { PrismaService } from "@/prisma/prisma.service";
import { Controller, Get, UseGuards } from "@nestjs/common";

@Controller("questions")
@UseGuards(JwtAuthGuard)
export class FetchQuestionsQuestionController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async handle() {
    const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return { questions };
  }
}
