import { Group, NavIdProps, Panel, PanelHeader } from "@vkontakte/vkui"

import { PanelBackButton } from "~/widgets/panelBackButton/index.js"

type AgePredictionPageProps = NavIdProps

export const AgePredictionPage = (
  props: AgePredictionPageProps,
): React.ReactElement => {
  return (
    <Panel {...props}>
      <PanelHeader before={<PanelBackButton previousPath="/" />}>
        Угадайка возраста
      </PanelHeader>
      <Group>Возраст</Group>
    </Panel>
  )
}
