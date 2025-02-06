import ClubService from "../../services/clubs/club.service";


    //private clubService: ClubService;

    // constructor(){
    //     this.clubService = new ClubService();
    // }

    const clubService = new ClubService();

   export const getAllClubs = async (req: any, res: any) =>{
        try {
            const clubs = await clubService.getAllClubs();
            res.status(200).json(clubs);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: "An unknown error occurred"});
            }
        }
    }

    export const getClubById = async (req: any, res: any)=>{
        try {
            const id = req.params.id;
            const club = await clubService.getClubById(id);
            res.status(200).json(club);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: "An unknown error occurred"});
            }
        }
    }

    // async createClub(req: any, res: any){
    //     try {
    //         const club = req.body;
    //         const newClub = await this.clubService.createClub(club);
    //         res.status(201).json(newClub);
    //     } catch (error) {
    //         res.status(500).json({message: error.message});
    //     }
    // }

    // async updateClub(req: any, res: any){
    //     try {
    //         const id = req.params.id;
    //         const club = req.body;
    //         const updatedClub = await this.clubService.updateClub(id, club);
    //         res.status(200).json(updatedClub);
    //     } catch (error) {
    //         res.status(500).json({message: error.message});
    //     }
    // }

    // async deleteClub(req: any, res: any){
    //     try {
    //         const id = req.params.id;
    //         await this.clubService.deleteClub(id);
    //         res.status(204).json();
    //     } catch (error) {
    //         res.status(500).json({message: error.message});
    //     }
    // }
