import express from 'express';
import { SubmitFeedbackuseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-reposiroty';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mailer-adapter';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackuseCase(prismaFeedbacksRepository, nodemailerMailAdapter)

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send();
});