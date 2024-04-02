import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AuthDto } from 'src/shared/auth.dto';
const uuidv4 = require("uuid")
const prisma = new PrismaClient();

@Injectable()
export class AuthService {
    getAuth(): string {
        return `Test Get Auth`;
    }
 
    getAuthById(id: string): string {
        return `Test Get Auth By Id ${id}`
    }
    
    async getHello (): Promise<any> {
        return await prisma.actor.findMany();
    }
    
    async create(authDto: AuthDto) {
        authDto.id = uuidv4.v4();
        console.log('Test Auth created');
        return authDto; 
    }

    async update(id: string, authDto: AuthDto){
        authDto.id = id;
        console.log(`Test Auth updated ${id}`);
        return authDto;
    }

    async delete(id : string) {
        return `Test Delete Auth ${id}`;
    }

}
