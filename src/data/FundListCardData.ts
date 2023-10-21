interface dataMode{
    name : string,
    revenue : number,
    isAsset : boolean,
    buyPrice: number,
    salePrice: number,
    outBoxTag: string,
    outBoxTagColor : string,
    propertyValue?: number,
    profit ?: number,
    profitPercentage ?: number
}

export const FundListCardData : dataMode[] = [
    {
        name: 'هستی‌بخش آگاه - آکاس',
        revenue : +2.45,
        isAsset : true,
        buyPrice : 343_343,
        salePrice : 343_343,
        outBoxTag : "قابل معامله - سهامی",
        outBoxTagColor: "purple-700",
        propertyValue : 33_343_343,
        profit : 343_343,
        profitPercentage : 12.3
    },
    {
        name: 'زمرد آگاه',
        revenue : -2.45,
        isAsset : false,
        buyPrice : 343_343,
        salePrice : 343_343,
        outBoxTag : "صدور و ابطالی - درامد ثابت",
        outBoxTagColor: "blue-700",
    }
    
]

