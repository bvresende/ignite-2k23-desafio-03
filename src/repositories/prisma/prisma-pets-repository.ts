import { prisma } from '@/lib/prisma'
import { type Pet, type Prisma } from '@prisma/client'
import { type PetsRepository } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async create (data: Prisma.PetCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({ data })

    return pet
  }
}
