import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DirectorDto } from 'src/shared/directors.dto';

const prisma = new PrismaClient();

@Injectable()
export class DirectorsService {
    
    async getDirectorByName(first_name : string, last_name: string): Promise<DirectorDto> {
        const director =  prisma.director.findFirst({
            where:{
                first_name: first_name, 
                last_name: last_name
            }
        })

        return director
    }

    async getDirectors(): Promise<DirectorDto[]> {
        return prisma.director.findMany();
    }

    async getDirectorById(id : number): Promise<DirectorDto> {
        return prisma.director.findUnique({
            where: {
                director_id: id
            }
        })
    }

    async createDirector(directorDto : DirectorDto): Promise<DirectorDto>{
        return prisma.director.create({
            data: directorDto
        })
    }

    async updateDirector(id: number, directorDto : DirectorDto){
        return prisma.director.update({
            where: {
                director_id: id
            },
            data: directorDto
        })
    }


}
