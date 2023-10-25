import { CardDataMode } from "types/FundList"
import { Dictionary } from "types/FundList"

export const FUND_LIST_DATA : CardDataMode[] = [
    {
        id: 1,
        name: 'هستی‌بخش آگاه - آکاس',
        revenue : +2.45,
        isAsset : true,
        buyPrice : 343_343,
        salePrice : 343_343,
        outBoxText : "قابل معامله - سهامی",
        outBoxTagColor: "purple",
        propertyValue : 33_343_343,
        profit : 343_343,
        profitPercentage : 12.3
    },
    {
        id: 2,
        name: 'زمرد آگاه',
        revenue : -2.45,
        isAsset : false,
        buyPrice : 343_343,
        salePrice : 343_343,
        outBoxText : "صدور و ابطالی - درامد ثابت",
        outBoxTagColor: "blue"
    }
    
]


export const TYPE_OF_INVEST: Dictionary<string> = {
    1 : "قابل معامله",
    2 : "صدور و ابطال",
}