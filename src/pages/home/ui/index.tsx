import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import {
  CellButton,
  Group,
  Header,
  NavIdProps,
  Panel,
  PanelHeader,
} from "@vkontakte/vkui"

import { routes } from "~/app/router.js"

const CAT_FACT_PANEL = routes.default_root.default_view.cat_fact_panel.path
const AGE_PREDICTION_PANEL =
  routes.default_root.default_view.age_prediction_panel.path

type HomePageProps = NavIdProps

export const HomePage = (props: HomePageProps): React.ReactElement => {
  const navigator = useRouteNavigator()

  return (
    <Panel {...props}>
      <PanelHeader>Домашняя страница</PanelHeader>
      <Group header={<Header mode="secondary">Сервисы</Header>}>
        <CellButton onClick={() => navigator.push(CAT_FACT_PANEL)}>
          Котофакт
        </CellButton>
        <CellButton onClick={() => navigator.push(AGE_PREDICTION_PANEL)}>
          Предсказание возраста
        </CellButton>
      </Group>
    </Panel>
  )
}
