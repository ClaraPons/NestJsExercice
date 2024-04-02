import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty({description: 'This is the id of the user',})
    id: string ;
    @ApiProperty({description: 'This is the username of the user',})
    username: string;
    @ApiProperty({description: 'This is the password of the user',})
    password: string;
}