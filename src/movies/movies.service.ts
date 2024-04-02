import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MoviesDto } from 'src/shared/movies.dto';

const prisma = new PrismaClient();

@Injectable()
export class MoviesService {

    async getMovieByName(movie_name : string): Promise<MoviesDto> {
        const movie =  prisma.movie.findFirst({
            where:{
                movie_name: movie_name,
            }
        })

        return movie
    }

    async getMovies(): Promise<MoviesDto[]> {
        return prisma.movie.findMany();
    }

    async getMovieById(id : number): Promise<MoviesDto> {
        return prisma.movie.findUnique({
            where: {
                movie_id: id
            }
        }) 
    }
  
    async createMovie(director_id : number, moviesDto : MoviesDto) : Promise<MoviesDto>{
        return await prisma.movie.create({
            data: {
                movie_name: moviesDto.movie_name, 
                movie_length: moviesDto.movie_length, 
                movie_lang: moviesDto.movie_lang, 
                age_certificate: moviesDto.age_certificate, 
                release_date: moviesDto.release_date, 
                director_id: director_id
            }
        })
    }

    async updateMovie(id: number, moviesDto : MoviesDto) : Promise<MoviesDto>{
        return await prisma.movie.update({
            where: {
                movie_id: id
            },
            data: {
                movie_name: moviesDto.movie_name, 
                movie_length: moviesDto.movie_length, 
                movie_lang: moviesDto.movie_lang, 
                age_certificate: moviesDto.age_certificate, 
                release_date: moviesDto.release_date, 
            }
        })
    }
}
