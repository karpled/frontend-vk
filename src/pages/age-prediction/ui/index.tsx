import { Group, NavIdProps, Panel, PanelHeader } from "@vkontakte/vkui"

type AgePredictionPageProps = NavIdProps

export const AgePredictionPage = (
  props: AgePredictionPageProps,
): React.ReactElement => {
  return (
    <Panel {...props}>
      <PanelHeader>Угадайка возраста</PanelHeader>
      <Group>Возраст</Group>
    </Panel>
  )
}
