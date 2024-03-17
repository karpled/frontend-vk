import { Banner, Div } from "@vkontakte/vkui"
import plural from "plural-ru"

import { GetAgeResponse } from "../agePrediction.types.js"

interface AgeBannerProps extends React.ComponentPropsWithRef<typeof Banner> {
  age: GetAgeResponse["age"]
}

export const AgeBanner = ({ age, ...props }: AgeBannerProps) => {
  const text =
    age ?
      plural(age, "%d год", "%d года", "%d лет")
    : "Мы не знаем, сколько вам лет..."

  return (
    <Div>
      <Banner header="Сколько вам лет?" text={text} {...props} />
    </Div>
  )
}
