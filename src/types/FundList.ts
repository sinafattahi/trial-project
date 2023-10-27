export enum FundType {
    one = 1,
    two = 2,
    three = 3
  }

  export enum outBoxTagColor {
    blue = "blue",
    purple = "purple",
    red = "red"
  }


export interface CardDataMode{
    id: number,
    name : string,
    revenue : number,
    isAsset : boolean,
    buyPrice: number,
    salePrice: number,
    outBoxText: string,
    outBoxTagColor : outBoxTagColor,
    propertyValue?: number,
    profit ?: number,
    profitPercentage ?: number
}

export interface FundData{
    id: number,
    name : string,
    isAsset : boolean,
    issuingNav : number,
    revokeNav : number,
    fundTypeCode : FundType,
    fundTypeTitle: string,  
    annualEfficiency : number
}

export interface InstrumentData{
  id: number,
  name : string,
  isAsset : boolean,
  issueNav : number,
  revokeNav : number,
  fundTypeCode : FundType,
  fundTypeTitle: string,  
  annualEfficiency : number
}

export interface RoutesArray {
    [linkName : string] : string
}
export interface Dictionary<T> {
    [Key: string]: T
  }




  export interface OutBoxTagProps {
    fundTypeCode: FundType
    fundTypeTitle: string
  }