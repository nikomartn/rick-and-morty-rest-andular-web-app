export interface PersonModel {
    id: number,
    name: string,
    status: "Alive" | "Dead" | "Unknown",
    species: string,
    type:string,
    gender:string,
    origin:{
        name:string,
        url:string,
    },
    location:{
        name:string,
        url:string,
    },
    image:string,
    episode:string[],
    url:string,
    created:string,
}