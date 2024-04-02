import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsDto } from 'src/shared/actors.dto';

@Controller('actors')
export class ActorsController {
    constructor(private readonly actorsService : ActorsService) {}

    @Get()
    getActors(): Promise<ActorsDto[]> {
        return this.actorsService.getActors();
    }

    @Get(':id')
    getActorById(@Param('id') id: number): Promise<ActorsDto> {
        return this.actorsService.getActorById(Number(id))
    }

    @Post()
    createActor(@Body() actorsDto : ActorsDto): Promise<ActorsDto>{
        return this.actorsService.createActor(actorsDto);
    }

    @Put(':id')
    updateActor(@Param('id') id : number, @Body() actorsDto : ActorsDto) : Promise<ActorsDto>{
        return this.actorsService.updateActor(Number(id), actorsDto);
    }

}
