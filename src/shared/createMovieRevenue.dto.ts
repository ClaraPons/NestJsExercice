import { ApiProperty } from "@nestjs/swagger";

export class CreateMoviesRevenuesDto {
    @ApiProperty({description:'This is the id revenue',})
    revenue_id?: number;
    @ApiProperty({description: 'This is the movie id',})
    movie_id: number;
    @ApiProperty({description: 'This is the revenues domestic',})
    revenues_domestic: number;
    @ApiProperty({description: 'This is the revenues international',})
    revenues_international: number;
    @ApiProperty({description: 'This is the movie name',})
    movie_name: string;
}