import { User } from "../../users/user/user.model";

export interface Game {
    id: number
    name: string
    description: string
    insertDate:string
    tradeDate:string
    users: User[]
}
/*
{
"id": 1,
"name": "Naruto",
"description": "Melhor jogo do ano",
"platform": "Ps4",
"insertDate": null,
"tradeDate": null,
"isAvailable": null,
"users": null
}

*/