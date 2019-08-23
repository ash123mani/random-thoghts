import React from 'react'
import { Link } from 'gatsby'

import tagsButtonStyle from './tagsButton.module.scss'
import jsLogo from '../../static/js.svg'
import reactLogo from '../../static/react.svg'
import reduxLogo from '../../static/redux.svg'
import htmlLogo from '../../static/html5.svg'
import economicsLogo from '../../static/economics.svg'
import ideasLogo from '../../static/idea.svg'

const tags = [
  { topicName: 'JS', logoUrl: jsLogo },
  { topicName: 'React', logoUrl: reactLogo },
  { topicName: 'Redux', logoUrl: reduxLogo },
  { topicName: 'HTML & CSS', logoUrl: htmlLogo },
  { topicName: 'Economics', logoUrl: economicsLogo },
  { topicName: 'Ideas', logoUrl: ideasLogo }
]

const TagsButton = props => {

  const renderLink = (tagDetail, index) => {
    return (
      <li key={index}>
        <img src={tagDetail.logoUrl} alt={tagDetail.topicName} />
        <Link
          to="/blog"
          className={tagsButtonStyle.navItem}
          activeClassName={tagsButtonStyle.activeNavItem}
          id={tagDetail.topicName}
        >
          {tagDetail.topicName}
        </Link>
      </li>
    )
  }

  return (
    <div>
      <nav>
        <ul
          className={`${tagsButtonStyle.navLists} ${
            tagsButtonStyle[`${props.class}`]
            }`}
        >
          {tags.map((tag, index) => {
            return renderLink(tag, index)
          })}
        </ul>
      </nav>
    </div>
  )
}

export default TagsButton
