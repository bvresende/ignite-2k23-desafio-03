import { type Prisma, type Pet } from '@prisma/client'

export interface PetsRepository {
  create: (data: Prisma.PetCreateInput) => Promise<Pet>
}
