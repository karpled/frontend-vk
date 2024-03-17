import { NavIdProps, Panel, PanelHeader } from "@vkontakte/vkui"

import { AgePredictionForm } from "~/widgets/agePredictionForm/index.js"
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
      <AgePredictionForm />
    </Panel>
  )
}
