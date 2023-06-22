import * as passengerServ from "../repositories/passengers.repository.js"

export async function passengerService({pageNumber}){
    const page_size = 25;
    const page_limit = 100;

    const offset = (pageNumber - 1 * page_size);
    const limit = Math.min(page_size, page_limit);

    return passengerServ.getPassengers({limit, offset});
}