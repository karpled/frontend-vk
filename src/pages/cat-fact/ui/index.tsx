import { Group, NavIdProps, Panel, PanelHeader } from "@vkontakte/vkui"

type CatFactPageProps = NavIdProps

export const CatFactPage = (props: CatFactPageProps): React.ReactElement => {
  return (
    <Panel {...props}>
      <PanelHeader>Факт о кошках и котах</PanelHeader>
      <Group>Факт</Group>
    </Panel>
  )
}
