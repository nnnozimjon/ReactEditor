import IIcon from '../../../components/Icon/icon'
import { SceneTab, CodeTab } from '../Tabs'

interface tab {
  name: string
  view: React.ReactNode
  icon?: keyof IIcon.svgList
}
const Tabs: tab[] = [
  {
    view: <SceneTab />,
    icon: 'scene',
    name: 'Scene',
  },
  {
    view: <CodeTab />,
    icon: 'code',
    name: 'Code',
  },
]

export { Tabs }
