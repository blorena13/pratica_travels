import connection from "../database/database.js";
import * as passenger from "../service/passengers.service.js";

export async function passengersTravels(req, res){
    try{
        const {page} = req.query;
        const pageNumber = parseInt(page, 10);

        if(isNaN(pageNumber) || pageNumber <= 0){
            return res.status(400).send("Invalid page value");
        }

        const infoPassengers = await passenger.passengerService({pageNumber});
        if(infoPassengers.length === 0){
            return res.status(404).send("No passengers found");
        }

        res.status(200).send(infoPassengers.rows);

    } catch(err){
        res.status(500).send(err.message);
    }
}