import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { Button, FormItem, Group, Spinner } from "@vkontakte/vkui"

import {
  AgeBanner,
  GetAgeRequest,
  NameInput,
  useGetAgePrediction,
} from "~/entities/age-prediction/index.js"

export const AgePredictionForm = (): React.ReactElement => {
  const [formData, setFormData] = useState<GetAgeRequest>({ name: "" })

  const { data, isFetching, isSuccess, isError } = useGetAgePrediction(formData)
  const { handleSubmit: handleSubmitWrapper, register } =
    useForm<typeof formData>()

  const handleSubmit = handleSubmitWrapper((data) => {
    setFormData(data)
  })

  return (
    <Group>
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

        {isFetching && <Spinner />}
        {!isFetching && isSuccess && <AgeBanner age={data} />}
      </form>
    </Group>
  )
}
