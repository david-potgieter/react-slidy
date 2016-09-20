import React, { PropTypes } from 'react'

import ReactLoryItem from './react-lory-item'

export default function ReactLoryList ({className, classNameItem, currentSlide, infinite, items, lazyLoadConfig}) {
  const { enabledForItems, itemsOnLoad, componentPlaceholder } = lazyLoadConfig
  const hasToLoadItem = (index) => {
    return (!enabledForItems || infinite) ||
           (enabledForItems && index < itemsOnLoad) ||
           (enabledForItems && currentSlide + 1 >= index)
  }

  return (
    <ul className={className}>
      {items.map((item, index) => {
        const itemToRender = hasToLoadItem(index)
                             ? item
                             : <div key={index}>{componentPlaceholder}</div>
        return (<ReactLoryItem
          className={classNameItem}
          item={itemToRender}
          key={index} />
        )
      })}
    </ul>
  )
}

ReactLoryList.propTypes = {
  className: PropTypes.string,
  classNameItem: PropTypes.string,
  currentSlide: PropTypes.number,
  infinite: PropTypes.bool,
  items: PropTypes.array,
  lazyLoadConfig: PropTypes.object
}
