import ClubRepository from "../../repositories/clubs/clubRepository";
import ClubModel from "../../models/clubs/ClubModel";
import { CreateClubDto } from "../../dto/create-club.dto";

export default class ClubService {
    private clubRepository: ClubRepository;

    constructor(){
        this.clubRepository = new ClubRepository(ClubModel);
    }

    async getAllClubs(){
        return await this.clubRepository.getAll();
    }

    async getClubById(id: number){
        return await this.clubRepository.getById(id);
    }

    async createClub(club: any){
        //Todo: tenemos que enviar el usuario que crea el club
        //TODO: adaptar el DTO
        //TODO: hacer validador
        console.log(club);
        return await this.clubRepository.create(club);
    }

    // async updateClub(id: number, club: any){
    //     return await this.clubRepository.update(id, club);
    // }

    // async deleteClub(id: number){
    //     return await this.clubRepository.delete(id);
    // }
}