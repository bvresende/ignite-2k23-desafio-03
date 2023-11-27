import { type OrgsRepository } from '@/repositories/orgs-repository'
import { type Org } from '@prisma/client'
import { compare } from 'bcryptjs'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  org: Org
}

export class AuthenticateUseCase {
  constructor (private readonly orgsRepository: OrgsRepository) {}

  async execute ({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email)

    if (org === null) {
      throw new Error('Invalid Credentials')
    }

    const doesPasswordMatches = await compare(password, org.password_hash)

    if (!doesPasswordMatches) {
      throw new Error('Invalid Credentials')
    }

    return {
      org
    }
  }
}
