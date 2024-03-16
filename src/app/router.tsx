import {
  RoutesConfig,
  createHashRouter,
  createPanel,
  createRoot,
} from "@vkontakte/vk-mini-apps-router"
import { createView } from "@vkontakte/vk-mini-apps-router/dist/page-types/ViewConfig.js"

export const routes = RoutesConfig.create([
  createRoot("default_root", [
    createView("default_view", [
      createPanel("home_panel", "/"),
      createPanel("cat_fact_panel", "/cat-fact"),
      createPanel("age_prediction_panel", "/age-prediction"),
    ]),
  ]),
])

export const router = createHashRouter(routes.getRoutes())

export const DEFAULT_ROOT = routes.default_root.id
export const DEFAULT_VIEW = routes.default_root.default_view.id
export const DEFAULT_PANEL = routes.default_root.default_view.home_panel.id
