import { Game } from "../games/game/game.model";

export interface Category {
    id: number
    name: string
    games: Game[]
}