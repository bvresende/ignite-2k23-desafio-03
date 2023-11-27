import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticate (req: FastifyRequest, reply: FastifyReply): Promise<any> {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const { email, password } = authenticateBodySchema.parse(req.body)

  try {
    const authenticateUseCase = makeAuthenticateUseCase()

    const { org } = await authenticateUseCase.execute({ email, password })

    const token = await reply.jwtSign(
      {
        sign: {
          sub: org.id
        }
      })

    return await reply.status(201).send({ token })
  } catch (error) {
    return await reply.status(400).send({ message: error.message })
  }
}
