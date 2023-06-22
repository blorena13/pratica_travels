import connection from "../database/database.js";

export function getPassengers(limit, offset){
    return connection.query(
        `
        SELECT p."fullName", COUNT(p) AS "viagens" FROM passengers AS p
        JOIN passengers_travels ON passenger_travels."passengerId" = p.id
        JOIN travels ON travels.id = passenger_travels."travelId"
        WHERE p."fullName" like '%Brooke%'
        GROUP BY p."fullName"
        ORDER BY "viagens" DESC
        LIMIT $1 OFFSET $2;
        `, [limit, offset]
    )
}

export {
    getPassengers,
}