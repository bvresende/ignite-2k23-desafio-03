import { type PetsRepository } from '@/repositories/pets-repository'
import { type Pet } from '@prisma/client'

interface CreatePetUseCaseRequest {
  name: string
  breed: string
  age: number
  orgId: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor (private readonly petsRepository: PetsRepository) {}

  async execute ({ name, breed, age, orgId }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({ name, breed, age, orgId })

    return {
      pet
    }
  }
}
