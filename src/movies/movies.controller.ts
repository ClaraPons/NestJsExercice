import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesDto } from 'src/shared/movies.dto';
import { CreateMovieDto } from 'src/shared/createMovie.dto';
import { DirectorsService } from 'src/directors/directors.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService : MoviesService, private readonly directorsService : DirectorsService) {}

    @Get()
    getMovies(): Promise<MoviesDto[]>{
        return this.moviesService.getMovies()
    }

    @Get(':id')
    getMovieById(@Param('id') id : number) : Promise<MoviesDto>{
        return this.moviesService.getMovieById(Number(id))
    }

    @Post()
    async createMovie(@Body() createMovie : CreateMovieDto): Promise<MoviesDto>{
        const director = await this.directorsService.getDirectorByName(createMovie.first_name_director, createMovie.last_name_director)
        
        if (!director) {
            throw new Error('Le réalisateur spécifié n\'a pas été trouvé.');
        }

        return await this.moviesService.createMovie(Number(director.director_id), createMovie)
    }

    @Put(':id')
    async updateMovie(@Param('id') id : number, @Body() updateMovie : CreateMovieDto){        
        return this.moviesService.updateMovie(Number(id), updateMovie);
    }

}
