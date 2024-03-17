import React from "react"
import { useForm } from "react-hook-form"

import { useMutation } from "@tanstack/react-query"
import { Banner, Button, FormItem } from "@vkontakte/vkui"
import plural from "plural-ru"

import { getAge } from "~/entities/age-prediction/api/getAge.js"
import { GetAgeRequest } from "~/entities/age-prediction/types.js"
import { NameInput } from "~/entities/age-prediction/ui/index.js"

export const AgePredictionForm = (): React.ReactElement => {
  const [lastSubmitted, setLastSubmitted] = React.useState<GetAgeRequest>({
    name: "",
  })

  const { handleSubmit: handleSubmitWrapper, register } =
    useForm<GetAgeRequest>()

  const { mutate, data, isSuccess, isError } = useMutation({
    mutationKey: ["agePrediction"],
    mutationFn: async (name: string) => await getAge({ name }),
  })

  const handleSubmit = handleSubmitWrapper((data) => {
    // TODO добавить обработку ошибок

    if (data.name !== lastSubmitted.name) {
      mutate(data.name)
      setLastSubmitted(data)
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        status={isError ? "error" : "default"}
        bottom={isError ? "Не удалось загрузить" : undefined}
      >
        <NameInput
          type="text"
          placeholder="Ваше имя"
          {...register("name", { required: true })}
        />
      </FormItem>
      <FormItem>
        <Button type="submit" size="l" stretched>
          Узнать свой возраст
        </Button>
      </FormItem>
      {isSuccess && (
        <FormItem>
          <Banner
            header="Сколько вам лет?"
            text={
              data ?
                plural(data, "%d год", "%d года", "%d лет")
              : "Мы не знаем, сколько вам лет..."
            }
          />
        </FormItem>
      )}
    </form>
  )
}
