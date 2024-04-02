import { Module } from '@nestjs/common';
import { MoviesRevenuesService } from './movies-revenues.service';
import { MoviesRevenuesController } from './movies-revenues.controller';
import { MoviesService } from 'src/movies/movies.service';

@Module({
  providers: [MoviesRevenuesService, MoviesService],
  controllers: [MoviesRevenuesController]
})
export class MoviesRevenuesModule {}
