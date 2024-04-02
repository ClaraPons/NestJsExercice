import { ApiProperty } from "@nestjs/swagger";

export class ActorsDto {
    @ApiProperty({description:'This is the id',})
    actor_id: number;
    @ApiProperty({description: 'This is the first name',})
    first_name: string;
    @ApiProperty({description: 'This is the last name',})
    last_name: string;
    @ApiProperty({description: 'This is the gender',})
    gender: string;
    @ApiProperty({description: 'This is the date of birth',})
    date_of_birth: Date;
    @ApiProperty({description: 'This is add date',})
    add_date: Date;
    @ApiProperty({description: 'This is update date',})
    update_date: Date;
}