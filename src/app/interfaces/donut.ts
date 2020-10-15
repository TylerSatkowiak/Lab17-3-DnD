export interface DonutResponse {
    count: number;
    results:Donut[];
}


export interface Donut{
    results:{
        id: number;
        ref: string;
        name: string;
    }
}