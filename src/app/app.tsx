import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router"
import {
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
  usePlatform,
} from "@vkontakte/vkui"

import { AgePredictionPage } from "~/pages/age-prediction/index.js"
import { CatFactPage } from "~/pages/cat-fact/index.js"
import { HomePage } from "~/pages/home/index.js"

import { DEFAULT_PANEL, routes } from "./router.js"

export const App = (): React.ReactElement => {
  const { panel: activePanel = DEFAULT_PANEL } = useActiveVkuiLocation()

  const platform = usePlatform()
  const navigator = useRouteNavigator()

  return (
    <SplitLayout
      header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
    >
      <SplitCol autoSpaced>
        <View
          nav={routes.default_root.default_view.home_panel.id}
          activePanel={activePanel}
          onSwipeBack={() => navigator.back()}
        >
          <HomePage nav={routes.default_root.default_view.home_panel.id} />
          <CatFactPage
            nav={routes.default_root.default_view.cat_fact_panel.id}
          />
          <AgePredictionPage
            nav={routes.default_root.default_view.age_prediction_panel.id}
          />
        </View>
      </SplitCol>
    </SplitLayout>
  )
}
