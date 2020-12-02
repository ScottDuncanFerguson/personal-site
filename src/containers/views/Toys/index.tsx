import React from 'react'

import styles from './index.scss'
import Header from './Header'
import ToyTable from './ToyTable'
import AutoSizer from '@components/AutoSizer'

export default function Users() {
    return (
        <div className={styles.container}>
            <Header />
            <AutoSizer className={styles.tableBox}>{({ height }) => <ToyTable scrollY={height - 120} />}</AutoSizer>
        </div>
    )
}
