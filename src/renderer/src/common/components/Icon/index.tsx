import React from 'react'
import IIcon from './icon'
import list from './svg-list'

const Icon: React.FC<IIcon.props> = ({ name }): JSX.Element => {
  return <>{list[name]}</>
}
export default Icon
