import { Router } from "express";
import { getAllClubs, getClubById }  from "../../controllers/clubs/club.controller";
const clubRouter = Router();

clubRouter.get('/:id', getClubById);
clubRouter.get('/', getAllClubs);

export default clubRouter;