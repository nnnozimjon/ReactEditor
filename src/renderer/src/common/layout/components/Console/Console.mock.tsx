import IIcon from '../../../components/Icon/icon'
import { ConsoleTab, ProjectTab } from '../Tabs'

interface tab {
  name: string
  view: JSX.Element
  icon?: keyof IIcon.svgList
}
const Tabs: tab[] = [
  {
    view: <ProjectTab />,
    icon: 'folder',
    name: 'Project',
  },
  {
    view: <ConsoleTab />,
    icon: 'console',
    name: 'Console',
  },
]

export { Tabs }
