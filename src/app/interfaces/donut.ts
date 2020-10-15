export interface DonutResponse {
    count: number;
    results:Donut[];
}


export interface Donut{
        id: number;
        ref: string;
        name: string;
}