import { ToyStore as ToyStoreModel } from './index'

export as namespace IToyStore

export interface ToyStore extends ToyStoreModel {}

export interface IToy {
    _id?: string
    img: string
    name: string
    color: string
    size: number
}
