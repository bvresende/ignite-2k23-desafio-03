import { type FastifyInstance } from 'fastify'
import { create } from './create'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function petsRoutes (app: FastifyInstance): Promise<any> {
  app.post('/pets', { onRequest: [verifyJWT] }, create)
}
