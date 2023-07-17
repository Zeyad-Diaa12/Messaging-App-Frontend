import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    dateCreated: string;
    lastActive: string;
    gender: string;
    biography: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}

