import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ActorsController } from './actors/actors.controller';
import { ActorsModule } from './actors/actors.module';
import { ActorsService } from './actors/actors.service';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { DirectorsModule } from './directors/directors.module';
import { DirectorsController } from './directors/directors.controller';
import { DirectorsService } from './directors/directors.service';
import { MoviesRevenuesModule } from './movies-revenues/movies-revenues.module';

@Module({
  imports: [AuthModule, ActorsModule, MoviesModule, DirectorsModule, MoviesRevenuesModule],
  controllers: [AppController, ActorsController, MoviesController, DirectorsController],
  providers: [AppService, ActorsService, MoviesService, DirectorsService],
})
export class AppModule {}
