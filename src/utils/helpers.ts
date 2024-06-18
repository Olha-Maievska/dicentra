import { IFlowerItem } from '@/common/dto/getFlowersDto'

export const shortFileName = (str: string) => {
  const arr = str.split('.')
  const shortFileName = arr[0].length > 25 ? arr[0].slice(0, 25) : arr[0]
  const format = arr[1]
  return `${shortFileName}.${format}`
}

export const currentPrice = (obj: IFlowerItem) => {
  if (!obj.togetherWith) {
    return obj.actionPrice ? obj.actionPrice : obj.price
  } else {
    return obj.price + obj.togetherWith.actionPrice
  }
}
