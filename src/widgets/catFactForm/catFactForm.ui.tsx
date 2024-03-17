import React from "react"

import { Button, FormItem, Group, Textarea } from "@vkontakte/vkui"

import { useFocusOnFetch, useGetCatFact } from "~/entities/cat-fact/index.js"

export const CatFactForm = (): React.ReactElement => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  const { data, isFetching, isError, refetch } = useGetCatFact()
  useFocusOnFetch(inputRef, data)

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    refetch()
  }

  return (
    <Group>
      <form onSubmit={handleClick}>
        <FormItem
          status={isError ? "error" : "default"}
          bottom={isError ? "Не удалось загрузить факт" : undefined}
        >
          <Textarea
            placeholder="Тут появится факт"
            disabled={isFetching || isError}
            value={data}
            getRef={inputRef}
          />
        </FormItem>
        <FormItem>
          <Button loading={isFetching} type="submit" size="l" stretched>
            Получить факт
          </Button>
        </FormItem>
      </form>
    </Group>
  )
}
