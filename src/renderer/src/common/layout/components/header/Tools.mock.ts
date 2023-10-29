import IIcon from '../../../components/Icon/icon'

interface tools {
  icon?: keyof IIcon.svgList
  name?: string
}

const HelpTools: tools[] = [
  {
    icon: 'handTool',
  },
  {
    icon: 'moveTool',
  },
  {
    icon: 'rotateTool',
  },
  {
    icon: 'scaleTool',
  },
  {
    icon: 'multiTool',
  },
  {
    icon: 'rectTool',
  },
]

export { HelpTools }
