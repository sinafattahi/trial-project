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

export interface RealData{
    id: number,
    name : string,
    companyName : string,
    minBuyOrderFund: number,
    minSellOrderFund: number,
    fundTypeCode : 1 | 2 | 3,
    fundTypeTitle: string,  
    annualEfficiency : number
}