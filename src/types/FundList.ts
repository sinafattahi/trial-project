export interface CardDataMode{
    id: number,
    name : string,
    revenue : number,
    isAsset : boolean,
    buyPrice: number,
    salePrice: number,
    outBoxText: string,
    outBoxTagColor : "blue" | "purple",
    propertyValue?: number,
    profit ?: number,
    profitPercentage ?: number
}