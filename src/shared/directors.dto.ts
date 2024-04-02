import { ApiProperty } from "@nestjs/swagger";

export class DirectorDto {
    @ApiProperty({description:'This is the id',})
    director_id: number;
    @ApiProperty({description: 'This is the first name',})
    first_name: string;
    @ApiProperty({description: 'This is the last name',})
    last_name: string;
    @ApiProperty({description: 'This is the date of birth',})
    date_of_birth: Date;
    @ApiProperty({description: 'This is the nationality',})
    nationality: string;
    @ApiProperty({description: 'This is the add date',})
    add_date: Date;
    @ApiProperty({description: 'This is the update date',})
    update_date: Date;
}