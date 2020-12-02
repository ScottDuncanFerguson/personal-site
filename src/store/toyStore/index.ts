import { makeAutoObservable, observable, runInAction } from 'mobx'
import { TablePaginationConfig } from 'antd/lib/table'

import request from '@utils/request'

export class ToyStore {
    constructor() {
        makeAutoObservable(this, { toys: observable.ref })
    }
    /**
     * 加载用户列表时的loading
     *
     * @memberof ToyStore
     */
    getToysloading = false
    /**
     * 用户列表
     *
     * @type {IToyStore.IToy[]}
     * @memberof ToyStore
     */
    toys: IToyStore.IToy[] = []
    /**
     * table pageIndex
     *
     * @memberof ToyStore
     */
    pageIndex = 1
    /**
     * table pageSize
     *
     * @memberof ToyStore
     */
    pageSize = 30
    /**
     * toys total
     *
     * @memberof ToyStore
     */
    total = 0

    /**
     * 加载用户列表
     *
     * @memberof ToyStore
     */
    getToys = async () => {
        this.getToysloading = true
        try {
            /* const { data } = await request.get('toy', {
                params: { pageIndex: this.pageIndex, pageSize: this.pageSize }
			}) */
            const data = {
                toys: [
                    {
                        _id: '1',
                        img: 'https://picsum.photos/id/1005/200',
                        name: 'Bob',
                        color: 'red',
                        size: 200
                    },
                    {
                        _id: '2',
                        img: 'https://picsum.photos/id/1009/200',
                        name: 'Bill',
                        color: 'blue',
                        size: 200
                    },
                    {
                        _id: '3',
                        img: 'https://picsum.photos/id/1010/200',
                        name: 'Sammi',
                        color: 'green',
                        size: 200
                    },
                    {
                        _id: '4',
                        img: 'https://picsum.photos/id/1011/200',
                        name: 'Smyth',
                        color: 'lightgreen',
                        size: 200
                    },
                    {
                        _id: '5',
                        img: 'https://picsum.photos/id/1020/200',
                        name: 'Bullet',
                        color: 'gray',
                        size: 200
                    },
                    {
                        _id: '6',
                        img: 'https://picsum.photos/id/1024/200',
                        name: 'Klaxon',
                        color: 'pink',
                        size: 200
                    },
                    {
                        _id: '7',
                        img: 'https://picsum.photos/id/1069/200',
                        name: 'Braytex',
                        color: 'pink',
                        size: 200
                    },
                    {
                        _id: '8',
                        img: 'https://picsum.photos/id/1003/200',
                        name: 'Shmoogle',
                        color: 'pink',
                        size: 200
                    },
                    {
                        _id: '9',
                        img: 'https://picsum.photos/id/1035/200',
                        name: 'Pepper',
                        color: 'pink',
                        size: 200
                    },
                    {
                        _id: '10',
                        img: 'https://picsum.photos/id/1062/200',
                        name: 'Tim',
                        color: 'pink',
                        size: 200
                    }
                ],
                total: 10
            }
            runInAction(() => {
                this.toys = data.toys
                this.total = data.total
            })
        } finally {
            runInAction(() => {
                this.getToysloading = false
            })
        }
    }

    createToy = async (toy: IToyStore.IToy) => {
        await request.post('toy/create', toy)
    }

    modifyToy = async (toy: IToyStore.IToy) => {
        await request.post('toy/modify', toy)
    }

    deleteToy = async (_id: string) => {
        await request.post('toy/delete', { _id })
        this.getToys()
    }

    changePageIndex = (pageIndex: number) => {
        this.pageIndex = pageIndex
        this.getToys()
    }

    changePageSize = (pageSize: number) => {
        this.pageSize = pageSize
        this.getToys()
    }

    handleTableChange = ({ current, pageSize }: TablePaginationConfig) => {
        if (current !== this.pageIndex) {
            this.changePageIndex(current)
        }
        if (pageSize !== this.pageSize) {
            this.changePageSize(pageSize)
        }
    }
}

export default new ToyStore()
