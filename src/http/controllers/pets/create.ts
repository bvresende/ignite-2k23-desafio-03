import { makeCreatePetUseCase } from '@/use-cases/factories/make-create-pet-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create (req: FastifyRequest, reply: FastifyReply): Promise<any> {
  const createPetBodySchema = z.object({
    name: z.string(),
    breed: z.string(),
    age: z.number(),
    orgId: z.string()
  })

  const { name, breed, age, orgId } = createPetBodySchema.parse(req.body)

  const createPetUseCase = makeCreatePetUseCase()

  await createPetUseCase.execute({ name, breed, age, orgId })

  return await reply.status(201).send()
}
