import React from "react"

import {
  useFirstPageCheck,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router"
import { PanelHeaderBack } from "@vkontakte/vkui"

type BasePanelBackButtonProps = Omit<
  React.ComponentPropsWithRef<typeof PanelHeaderBack>,
  "children"
>

interface PanelBackButtonProps extends BasePanelBackButtonProps {
  /** Предыдущий путь */
  previousPath: string
}

export const PanelBackButton = ({
  previousPath,
  ...props
}: PanelBackButtonProps): React.ReactElement => {
  const isFirstPage = useFirstPageCheck()
  const navigator = useRouteNavigator()

  const handleClick = () => {
    if (isFirstPage) {
      navigator.push(previousPath)
    } else {
      navigator.back()
    }
  }

  return <PanelHeaderBack onClick={handleClick} {...props} />
}
