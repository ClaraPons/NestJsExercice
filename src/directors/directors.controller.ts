import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorDto } from 'src/shared/directors.dto';

@Controller('directors')
export class DirectorsController {
    constructor(private readonly directorsService : DirectorsService) {}

    // @Get()
    // getDirectorByName(): Promise<any[]> {
    //     return this.directorsService.getDirectorByName();
    // }


    @Get()
    getDirectors(): Promise<DirectorDto[]>{
        return this.directorsService.getDirectors()
    }

    @Get(':id')
    getDirectorById(@Param('id') id : number) : Promise<DirectorDto>{
        return this.directorsService.getDirectorById(Number(id))
    }

    @Post()
    async createDirector(@Body() directorDto : DirectorDto): Promise<DirectorDto>{
        return this.directorsService.createDirector(directorDto)
    }

    @Put(':id')
    async updateDirector(@Param('id') id : number, @Body() directorDto : DirectorDto){
        return this.directorsService.updateDirector(Number(id), directorDto)
    }
}
