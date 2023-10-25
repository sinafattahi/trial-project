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
    isAsset : boolean,
    issuingNav: number,
    fundTypeCode : 1 | 2 ,
    fundTypeTitle: string,  
    annualEfficiency : number
}

export interface Dictionary<T> {
    [Key: string]: T;
  }