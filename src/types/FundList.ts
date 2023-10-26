export enum FundType {
    one = 1,
    two = 2
  }

  export enum outBoxTagColor {
    blue = "blue",
    purple = "purple"
  }


export interface CardDataMode{
    id: number,
    name : string,
    revenue : number,
    isAsset : boolean,
    buyPrice: number,
    salePrice: number,
    outBoxText: string,
    outBoxTagColor : outBoxTagColor.blue | outBoxTagColor.purple,
    propertyValue?: number,
    profit ?: number,
    profitPercentage ?: number
}

export interface FundData{
    id: number,
    name : string,
    isAsset : boolean,
    issuingNav: number,
    fundTypeCode : FundType.one | FundType.two ,
    fundTypeTitle: string,  
    annualEfficiency : number
}

export interface RoutesArray {
    [linkName : string] : string
}
export interface Dictionary<T> {
    [Key: string]: T;
  }




  export interface OutBoxTagProps {
    fundTypeCode: FundType.one | FundType.two;
    fundTypeTitle: string;
  }