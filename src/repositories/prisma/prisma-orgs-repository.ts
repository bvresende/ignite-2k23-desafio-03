import { prisma } from '@/lib/prisma'
import { type Org, type Prisma } from '@prisma/client'
import { type OrgsRepository } from '../orgs-repository'

export class PrismaOrgsRepository implements OrgsRepository {
  async create (data: Prisma.OrgCreateInput): Promise<Org> {
    const org = await prisma.org.create({ data })

    return org
  }

  async findByEmail (email: string): Promise<Org | null> {
    const user = await prisma.org.findUnique({
      where: {
        email
      }
    })

    return user
  }
}
