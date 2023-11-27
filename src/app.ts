import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { orgsRoutes } from './http/controllers/orgs/routes'
import { env } from './env'
import { petsRoutes } from './http/controllers/pets/routes'

export const app = fastify()

void app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m'
  }
})

void app.register(fastifyCookie)

void app.register(orgsRoutes)
void app.register(petsRoutes)
