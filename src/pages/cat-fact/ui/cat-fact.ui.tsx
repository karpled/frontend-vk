import { NavIdProps, Panel, PanelHeader } from "@vkontakte/vkui"

import { CatFactForm } from "~/widgets/index.js"
import { PanelBackButton } from "~/widgets/panelBackButton/index.js"

type CatFactPageProps = NavIdProps

export const CatFactPage = (props: CatFactPageProps): React.ReactElement => {
  return (
    <Panel {...props}>
      <PanelHeader before={<PanelBackButton previousPath="/" />}>
        Факт о кошках и котах
      </PanelHeader>
      <CatFactForm />
    </Panel>
  )
}
