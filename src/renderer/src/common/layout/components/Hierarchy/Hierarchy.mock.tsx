import IIcon from '../../../components/Icon/icon'
import { HierarchyTab } from '../Tabs'

interface tab {
  name: string
  icon?: keyof IIcon.svgList
  view: React.ReactNode
}
const Tabs: tab[] = [
  {
    view: <HierarchyTab />,
    icon: 'hierarchy',
    name: 'Hierarchy',
  },
]

export { Tabs }
