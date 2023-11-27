import { makeCreateOrgUseCase } from '@/use-cases/factories/make-create-org-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create (req: FastifyRequest, reply: FastifyReply): Promise<any> {
  const createOrgBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    city: z.string()
  })

  const { name, email, password, phone, city } = createOrgBodySchema.parse(req.body)

  const createOrgUseCase = makeCreateOrgUseCase()

  await createOrgUseCase.execute({ name, email, password, phone, city })

  return await reply.status(201).send()
}
