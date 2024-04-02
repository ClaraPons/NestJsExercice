import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MoviesRevenuesService } from './movies-revenues.service';
import { MoviesRevenuesDto } from 'src/shared/moviesRevenues.dto';
import { MoviesService } from 'src/movies/movies.service';
import { CreateMoviesRevenuesDto } from 'src/shared/createMovieRevenue.dto';

@Controller('movies-revenues')
export class MoviesRevenuesController {
    constructor(private readonly moviesRevenuesService : MoviesRevenuesService, private readonly moviesService : MoviesService) {}

    @Get()
    getMoviesRevenues(): Promise<MoviesRevenuesDto[]> {
        return this.moviesRevenuesService.getMoviesRevenues();
    }

    @Get(':id')
    getMovieRevenuesById(@Param('id') id : number): Promise<MoviesRevenuesDto> {
        return this.moviesRevenuesService.getMovieRevenuesById(Number(id))
    }

    @Post()
    async createMovieRevenues(@Body() createMoviesRevenues : CreateMoviesRevenuesDto): Promise<MoviesRevenuesDto>{
        const movie = await this.moviesService.getMovieByName(createMoviesRevenues.movie_name)

        if (!movie) {
            throw new Error('Le film n\'a pas été trouvé.');
        }

        return await this.moviesRevenuesService.createMovieRevenues(Number(movie.movie_id), createMoviesRevenues)
    }


    @Put(':id')
    async updateMovieRevenues(@Param('id') id : number, @Body() updateMoviesRevenues : CreateMoviesRevenuesDto): Promise<MoviesRevenuesDto>{
        return await this.moviesRevenuesService.updateMovieRevenues(Number(id), updateMoviesRevenues)
    }
}
