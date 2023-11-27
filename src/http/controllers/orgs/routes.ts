import { type FastifyInstance } from 'fastify'
import { create } from './create'
import { authenticate } from './authenticate'

export async function orgsRoutes (app: FastifyInstance): Promise<any> {
  app.post('/orgs', create)
  app.post('/authenticate', authenticate)
}
