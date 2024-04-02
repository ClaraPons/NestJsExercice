import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MoviesRevenuesDto } from 'src/shared/moviesRevenues.dto';

const prisma = new PrismaClient();

@Injectable()
export class MoviesRevenuesService {

    async getMoviesRevenues(): Promise<MoviesRevenuesDto[]> {
        return prisma.moviesRevenues.findMany();
    }

    async getMovieRevenuesById(id : number): Promise<MoviesRevenuesDto> {
        return prisma.moviesRevenues.findUnique({
            where: {
                revenue_id: id
            }
        })
    }

    async createMovieRevenues(movie_id: number, moviesRevenuesDto : MoviesRevenuesDto): Promise<MoviesRevenuesDto>{
        return await prisma.moviesRevenues.create({
            data: {
                revenues_domestic: moviesRevenuesDto.revenues_domestic,
                revenues_international: moviesRevenuesDto.revenues_international,
                movie_id: movie_id
            }
        })
    }

    async updateMovieRevenues(revenue_id: number, moviesRevenuesDto : MoviesRevenuesDto): Promise<MoviesRevenuesDto>{
        return await prisma.moviesRevenues.update({
            where: {
                revenue_id: revenue_id
            },
            data: {
                revenues_domestic: moviesRevenuesDto.revenues_domestic,
                revenues_international: moviesRevenuesDto.revenues_international, 
            }
        })
    }

}
