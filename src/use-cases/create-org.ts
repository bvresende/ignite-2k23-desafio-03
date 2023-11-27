import { type OrgsRepository } from '@/repositories/orgs-repository'
import { type Org } from '@prisma/client'
import { hash } from 'bcryptjs'

interface CreateOrgUseCaseRequest {
  name: string
  email: string
  password: string
  phone: string
  city: string
}

interface CreateOrgUseCaseResponse {
  org: Org
}

export class CreateOrgUseCase {
  constructor (private readonly orgsRepository: OrgsRepository) {}

  async execute ({ name, email, password, phone, city }: CreateOrgUseCaseRequest): Promise<CreateOrgUseCaseResponse> {
    const orgWithSameEmail = await this.orgsRepository.findByEmail(email)

    if (orgWithSameEmail != null) {
      throw new Error('Org Already Exists')
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const password_hash = await hash(password, 6)

    const org = await this.orgsRepository.create({ name, email, password_hash, phone, city })

    return {
      org
    }
  }
}
