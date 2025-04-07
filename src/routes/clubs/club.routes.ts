import { Router } from "express";
import { createClub, getAllClubs, getClubById }  from "../../controllers/clubs/club.controller";
const clubRouter = Router();

clubRouter.get('/:id', getClubById);
clubRouter.get('/', getAllClubs);

clubRouter.post('/',createClub)

export default clubRouter;