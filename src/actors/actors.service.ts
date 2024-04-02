import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ActorsDto } from 'src/shared/actors.dto';

const prisma = new PrismaClient();

@Injectable()
export class ActorsService {
    async getActors(): Promise<ActorsDto[]> {
        return prisma.actor.findMany();
    }

    async getActorById(id : number): Promise<ActorsDto> {
        return prisma.actor.findUnique({
            where: {
                actor_id: id
            }
        }) 
    }

    async createActor(actorsDto: ActorsDto){
        return await prisma.actor.create({
            data: actorsDto
        })
    }

    async updateActor(id: number, actorsDto: ActorsDto){
        return await prisma.actor.update({
            where: {
                actor_id: id
            },
            data: {
                first_name: actorsDto.first_name,
                last_name: actorsDto.last_name,
                gender: actorsDto.gender,
                date_of_birth: actorsDto.date_of_birth,
                add_date: actorsDto.add_date,
                update_date: actorsDto.update_date
            }
        })
    }
}
