import React from 'react'

import TagsButton from './tagsButton'
import rightBoxStyles from './rightContentBox.module.scss'

const RightContentBox = props => {
  console.log('props from RightContentBox', props)
  const onTagClick = tag => {
    console.log('tag is', tag)
    props.onFilterSelect(tag)
  }
  return (
    <div className={`${rightBoxStyles[`${props.pageName}`]} ${rightBoxStyles.rightBox}`}>
      <TagsButton onFilterSelect={onTagClick} />
    </div>
  )
}

export default RightContentBox
