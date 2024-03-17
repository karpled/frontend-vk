import { forwardRef } from "react"

import { Input, InputProps } from "@vkontakte/vkui"

export const NameInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <Input getRef={ref} {...props} />
  },
)
