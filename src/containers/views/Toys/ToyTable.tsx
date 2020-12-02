import React from 'react'
import { observer } from 'mobx-react'

import styles from './index.scss'
import { useOnMount } from '@utils/hooks'
import useRootStore from '@store/useRootStore'
import { AutoSizer, CellMeasurer, CellMeasurerCache, Masonry, Size, WindowScroller } from 'react-virtualized'
import { createCellPositioner, MasonryCellProps, Positioner } from 'react-virtualized/dist/es/Masonry'

interface IProps {
    scrollY: number
}

const columnWidth = 200
const gutterSize = 10
const overscanByPixels = 0
const windowScrollerEnabled = false

function ToyTable({ scrollY }: IProps) {
    const { toyStore } = useRootStore()

    const masonryRef = React.useRef<Masonry>(null)
    let columnCount = 0
    const measureCache = new CellMeasurerCache({
        defaultHeight: 250,
        defaultWidth: 200,
        fixedWidth: true
    })
    const cellPositioner: Positioner | undefined = createCellPositioner({
        cellMeasurerCache: measureCache,
        columnCount: columnCount,
        columnWidth,
        spacer: gutterSize
    })

    useOnMount(toyStore.getToys)

    function calculateColumnCount(width) {
        columnCount = Math.floor(width / (columnWidth + gutterSize))
    }

    function cellRenderer({ index, key, parent, style }: MasonryCellProps) {
        const { toys } = toyStore

        if (index >= toys.length) {
            return undefined
        }

        const datum = toys[index]

        return (
            <CellMeasurer cache={measureCache} index={index} key={key} parent={parent}>
                <div
                    className={styles.container + '0'} //fix
                    style={{
                        ...style,
                        width: columnWidth
                    }}
                >
                    <div
                        style={{
                            backgroundColor: datum.color,
                            backgroundImage: `url(${datum.img})`,
                            borderRadius: '0.5rem',
                            height: datum.size,
                            marginBottom: '0.5rem',
                            width: '100%',
                            fontSize: 20,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {index}
                    </div>
                    {datum.name}
                </div>
            </CellMeasurer>
        )
    }

    function renderMasonry({ width, height }: Size) {
        calculateColumnCount(width)
        resetCellPositioner()

        return (
            <Masonry
                autoHeight={windowScrollerEnabled}
                cellCount={10}
                cellMeasurerCache={measureCache}
                cellPositioner={cellPositioner}
                cellRenderer={cellRenderer}
                height={height}
                overscanByPixels={overscanByPixels}
                ref={masonryRef}
                width={width}
            />
        )
    }

    function resetCellPositioner() {
        cellPositioner.reset({
            columnCount: columnCount,
            columnWidth,
            spacer: gutterSize
        })
    }

    function onResize({ width }) {
        calculateColumnCount(width)
        resetCellPositioner()
        masonryRef.current.recomputeCellPositions()
    }

    function renderAutoSizer({ height, scrollTop }) {
        return (
            <AutoSizer height={height} onResize={onResize} overscanByPixels={overscanByPixels} scrollTop={scrollTop}>
                {renderMasonry}
            </AutoSizer>
        )
    }

    return (
        <React.Fragment>
            <WindowScroller overscanByPixels={overscanByPixels}>{renderAutoSizer}</WindowScroller>
        </React.Fragment>
    )
}

export default observer(ToyTable)
