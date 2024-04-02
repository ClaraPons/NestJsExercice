import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DirectorsService } from 'src/directors/directors.service';

@Module({
  providers: [MoviesService, DirectorsService],
  controllers: [MoviesController]
})
export class MoviesModule {}
