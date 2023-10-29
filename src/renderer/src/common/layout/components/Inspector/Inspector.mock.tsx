import IIcon from '../../../components/Icon/icon'
import { InspectorTab } from '../Tabs'

interface tab {
  name: string
  view: React.ReactNode
  icon?: keyof IIcon.svgList
}

const Tabs: tab[] = [
  {
    view: <InspectorTab />,
    icon: 'scene',
    name: 'Inspector',
  },
]

export { Tabs }
