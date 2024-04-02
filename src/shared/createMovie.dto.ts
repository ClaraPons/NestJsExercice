import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty({description:'This is the id',})
    movie_id?: number;
    @ApiProperty({description: 'This is the movie name',})
    movie_name: string;
    @ApiProperty({description: 'This is the movie length',})
    movie_length: number;
    @ApiProperty({description: 'This is the movie lang',})
    movie_lang: string;
    @ApiProperty({description: 'This is the age certificate',})
    age_certificate: string;
    @ApiProperty({description: 'This is the release date',})
    release_date: Date;
    @ApiProperty({description: 'This is update date',})
    director_id: number;
    @ApiProperty({description: 'This is the first name director',})
    first_name_director: string;
    @ApiProperty({description: 'This is the last name director',})
    last_name_director: string;
}